import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// Transporter configuration (supports Gmail directly or custom SMTP)
const createTransporter = () => {
  if (process.env.SMTP_USER && process.env.SMTP_PASS) {
    const isGmail =
      process.env.SMTP_SERVICE === 'gmail' ||
      process.env.SMTP_HOST?.includes('gmail') ||
      process.env.SMTP_USER?.includes('@gmail.com');

    if (isGmail) {
      return nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS, // Google 16-character App Password
        },
      });
    }

    if (process.env.SMTP_HOST) {
      return nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT) || 587,
        secure: Number(process.env.SMTP_PORT) === 465,
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      });
    }
  }
  return null;
};

// Contact inquiry endpoint
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, company, inquiryType, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        error: 'Name, email, and message are required fields.',
      });
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        error: 'Please provide a valid email address.',
      });
    }

    const recipient = process.env.CONTACT_RECEIVER_EMAIL || 'info@blackgateitsolutions.co.in';
    const transporter = createTransporter();

    if (transporter) {
      await transporter.sendMail({
        from: `"${name}" <${process.env.SMTP_USER}>`,
        replyTo: email,
        to: recipient,
        subject: `New Inquiry from ${name} [${inquiryType || 'General'}]`,
        text: `Name: ${name}\nEmail: ${email}\nCompany: ${company || 'N/A'}\nInquiry Type: ${inquiryType || 'General'}\n\nMessage:\n${message}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px;">
            <h2 style="color: #06b6d4; margin-bottom: 16px;">New Website Inquiry - Blackgate</h2>
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
              <tr>
                <td style="padding: 8px 0; color: #64748b; width: 140px;"><strong>Name:</strong></td>
                <td style="padding: 8px 0; color: #1e293b;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #64748b;"><strong>Email:</strong></td>
                <td style="padding: 8px 0; color: #1e293b;"><a href="mailto:${email}" style="color: #06b6d4;">${email}</a></td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #64748b;"><strong>Company:</strong></td>
                <td style="padding: 8px 0; color: #1e293b;">${company || 'Not provided'}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #64748b;"><strong>Inquiry Type:</strong></td>
                <td style="padding: 8px 0; color: #1e293b;">${inquiryType || 'General Inquiry'}</td>
              </tr>
            </table>
            <div style="padding: 16px; background-color: #f8fafc; border-radius: 6px; border-left: 4px solid #06b6d4;">
              <h4 style="margin: 0 0 8px 0; color: #0f172a;">Message:</h4>
              <p style="margin: 0; color: #334155; white-space: pre-wrap; line-height: 1.5;">${message}</p>
            </div>
            <p style="font-size: 12px; color: #94a3b8; margin-top: 24px;">Sent from Blackgate Website Contact Form</p>
          </div>
        `,
      });

      console.log(`[Contact Form] Email successfully dispatched to ${recipient} for ${email}`);
    } else {
      console.log('--- [Contact Form Submission (SMTP not yet configured)] ---');
      console.log({
        timestamp: new Date().toISOString(),
        name,
        email,
        company: company || 'N/A',
        inquiryType: inquiryType || 'General',
        message,
        intendedRecipient: recipient,
      });
      console.log('To send live emails, configure SMTP_HOST, SMTP_PORT, SMTP_USER, and SMTP_PASS in .env');
    }

    return res.status(200).json({
      success: true,
      message: 'Inquiry received successfully.',
    });
  } catch (error) {
    console.error('[Contact Form Error]:', error);
    return res.status(500).json({
      success: false,
      error: 'An internal server error occurred while processing your request.',
    });
  }
});

// Serve frontend build in production
const distPath = path.join(__dirname, 'dist');
app.use(express.static(distPath));

app.use((req, res, next) => {
  if (req.method === 'GET' && !req.path.startsWith('/api')) {
    return res.sendFile(path.join(distPath, 'index.html'));
  }
  next();
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
