import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

function contactApiPlugin() {
  return {
    name: 'contact-api-plugin',
    configureServer(server) {
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
