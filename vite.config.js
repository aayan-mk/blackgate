import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import {
  insertPollResponse,
  getAllPollResponses,
  deletePollResponse,
  generateCsv,
} from './db.js';

dotenv.config();

function contactApiPlugin() {
  return {
    name: 'contact-api-plugin',
    configureServer(server) {
      // Poll API middleware
      server.middlewares.use('/api/poll', async (req, res, next) => {
        const url = new URL(req.url, 'http://localhost');
        const pathname = url.pathname;
        const adminKey = process.env.ADMIN_KEY || 'blackgate-admin-2026';
        const providedKey = req.headers['x-admin-key'] || url.searchParams.get('adminKey');

        // Export CSV
        if (req.method === 'GET' && pathname === '/export-csv') {
          if (providedKey !== adminKey) {
            res.statusCode = 401;
            res.setHeader('Content-Type', 'application/json');
            return res.end(JSON.stringify({ success: false, error: 'Unauthorized' }));
          }
          try {
            const rows = await getAllPollResponses();
            const csv = generateCsv(rows);
            const dateStr = new Date().toISOString().slice(0, 10);
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/csv');
            res.setHeader(
              'Content-Disposition',
              `attachment; filename="blackgate-poll-responses-${dateStr}.csv"`
            );
            return res.end(csv);
          } catch (e) {
            res.statusCode = 500;
            return res.end(JSON.stringify({ success: false, error: e.message }));
          }
        }

        // List responses
        if (req.method === 'GET' && (pathname === '/responses' || pathname === '/responses/')) {
          if (providedKey !== adminKey) {
            res.statusCode = 401;
            res.setHeader('Content-Type', 'application/json');
            return res.end(JSON.stringify({ success: false, error: 'Unauthorized' }));
          }
          try {
            const rows = await getAllPollResponses();
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            return res.end(JSON.stringify({ success: true, count: rows.length, responses: rows }));
          } catch (e) {
            res.statusCode = 500;
            return res.end(JSON.stringify({ success: false, error: e.message }));
          }
        }

        // Handle POST body
        if (req.method === 'POST') {
          let body = '';
          req.on('data', (chunk) => {
            body += chunk;
          });
          req.on('end', async () => {
            try {
              const data = JSON.parse(body || '{}');

              // Verify key
              if (pathname === '/verify') {
                if (data.key === adminKey) {
                  res.statusCode = 200;
                  res.setHeader('Content-Type', 'application/json');
                  return res.end(JSON.stringify({ success: true }));
                }
                res.statusCode = 401;
                res.setHeader('Content-Type', 'application/json');
                return res.end(JSON.stringify({ success: false, error: 'Invalid admin key' }));
              }

              // Submit response
              if (pathname === '/submit' || pathname === '/submit/') {
                const { name, phone, email, interest, message } = data;
                if (!name || !phone || !email || !interest) {
                  res.statusCode = 400;
                  res.setHeader('Content-Type', 'application/json');
                  return res.end(
                    JSON.stringify({
                      success: false,
                      error: 'Name, phone, email, and option (Development, VAPT, Both) are required.',
                    })
                  );
                }

                const result = await insertPollResponse({
                  name: name.trim(),
                  phone: phone.trim(),
                  email: email.trim(),
                  interest,
                  message: message ? message.trim() : '',
                });

                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                return res.end(
                  JSON.stringify({
                    success: true,
                    message: 'Response recorded successfully.',
                    id: result.id,
                  })
                );
              }
            } catch (err) {
              res.statusCode = 500;
              res.setHeader('Content-Type', 'application/json');
              return res.end(JSON.stringify({ success: false, error: err.message }));
            }
          });
          return;
        }

        next();
      });

      server.middlewares.use('/api/contact', async (req, res, next) => {
        if (req.method !== 'POST') return next();

        let body = '';
        req.on('data', (chunk) => {
          body += chunk;
        });

        req.on('end', async () => {
          try {
            const data = JSON.parse(body || '{}');
            const { name, email, company, inquiryType, message } = data;

            if (!name || !email || !message) {
              res.statusCode = 400;
              res.setHeader('Content-Type', 'application/json');
              return res.end(
                JSON.stringify({
                  success: false,
                  error: 'Name, email, and message are required fields.',
                })
              );
            }

            const recipient =
              process.env.CONTACT_RECEIVER_EMAIL || 'info@blackgateitsolutions.co.in';

            if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
              console.error('[Dev Server Error]: SMTP credentials not configured in .env');
              res.statusCode = 500;
              res.setHeader('Content-Type', 'application/json');
              return res.end(
                JSON.stringify({
                  success: false,
                  error:
                    'Email service is not configured. Please set SMTP_USER and SMTP_PASS (Gmail App Password) in your .env file.',
                })
              );
            }

            const isGmail =
              process.env.SMTP_SERVICE === 'gmail' ||
              process.env.SMTP_HOST?.includes('gmail') ||
              process.env.SMTP_USER?.includes('@gmail.com');

            const cleanPass = (process.env.SMTP_PASS || '').replace(/\s+/g, '');

            const transporter = isGmail
              ? nodemailer.createTransport({
                  service: 'gmail',
                  auth: {
                    user: process.env.SMTP_USER,
                    pass: cleanPass,
                  },
                })
              : nodemailer.createTransport({
                  host: process.env.SMTP_HOST,
                  port: Number(process.env.SMTP_PORT) || 587,
                  secure: Number(process.env.SMTP_PORT) === 465,
                  auth: {
                    user: process.env.SMTP_USER,
                    pass: cleanPass,
                  },
                });

            await transporter.sendMail({
              from: `"${name}" <${process.env.SMTP_USER}>`,
              replyTo: email,
              to: recipient,
              subject: `New Inquiry from ${name} [${inquiryType || 'General'}]`,
              text: `Name: ${name}\nEmail: ${email}\nCompany: ${company || 'N/A'}\nInquiry Type: ${inquiryType || 'General'}\n\nMessage:\n${message}`,
            });
            console.log(`[Dev Server] Sent email to ${recipient}`);

            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.end(
              JSON.stringify({
                success: true,
                message: 'Inquiry received successfully.',
              })
            );
          } catch (err) {
            console.error('[Dev Server Contact Error]:', err);
            res.statusCode = 500;
            res.setHeader('Content-Type', 'application/json');
            res.end(
              JSON.stringify({
                success: false,
                error: err.message || 'Failed to process inquiry.',
              })
            );
          }
        });
      });
    },
  };
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), contactApiPlugin()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
