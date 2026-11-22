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

            if (process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS) {
              const transporter = nodemailer.createTransport({
                host: process.env.SMTP_HOST,
                port: Number(process.env.SMTP_PORT) || 587,
                secure: Number(process.env.SMTP_PORT) === 465,
                auth: {
                  user: process.env.SMTP_USER,
                  pass: process.env.SMTP_PASS,
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
            } else {
              console.log('--- [Dev Server: Inquiry Received] ---');
              console.log({
                timestamp: new Date().toISOString(),
                name,
                email,
                company: company || 'N/A',
                inquiryType: inquiryType || 'General',
                message,
                destination: recipient,
              });
            }

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
                error: 'Failed to process inquiry.',
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
