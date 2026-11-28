import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import {
  insertPollResponse,
  getAllPollResponses,
  deletePollResponse,
  generateCsv,
} from './db.js';

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

    const cleanPass = (process.env.SMTP_PASS || '').replace(/\s+/g, '');

    if (isGmail) {
      return nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.SMTP_USER,
          pass: cleanPass, // Google 16-character App Password (spaces stripped)
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
          pass: cleanPass,
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

    if (!transporter) {
      console.error('[Contact Form Error]: SMTP credentials not configured.');
      return res.status(500).json({
        success: false,
        error: 'Email service is not configured. Please set SMTP_USER and SMTP_PASS (Gmail App Password) in your .env file.',
      });
    }

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

    return res.status(200).json({
      success: true,
      message: 'Inquiry received successfully.',
    });
  } catch (error) {
    console.error('[Contact Form Error]:', error);
    return res.status(500).json({
      success: false,
      error: error.message || 'An internal error occurred while dispatching your email.',
    });
  }
});

// Middleware to verify admin key for poll dashboard
const verifyAdmin = (req, res, next) => {
  const adminKey = process.env.ADMIN_KEY || 'blackgate-admin-2026';
  const providedKey = req.headers['x-admin-key'] || req.query.adminKey;
  if (!providedKey || providedKey !== adminKey) {
    return res.status(401).json({ success: false, error: 'Unauthorized: Invalid Admin Key' });
  }
  next();
};

// Poll / Internship submission endpoint
app.post('/api/poll/submit', async (req, res) => {
  try {
    const { name, phone, email, interest, college, portfolio, message } = req.body;

    if (!name || !phone || !email || !interest) {
      return res.status(400).json({
        success: false,
        error: 'Name, phone number, email, and internship track (Development, VAPT, or Both) are required.',
      });
    }

    const validInterests = ['Development', 'VAPT', 'Both'];
    if (!validInterests.includes(interest)) {
      return res.status(400).json({
        success: false,
        error: 'Track must be one of: Development, VAPT, Both',
      });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        error: 'Please provide a valid email address.',
      });
    }

    const { id } = await insertPollResponse({
      name: name.trim(),
      phone: phone.trim(),
      email: email.trim(),
      interest,
      college: college ? college.trim() : '',
      portfolio: portfolio ? portfolio.trim() : '',
      message: message ? message.trim() : '',
    });

    console.log(`[Internship Poll] New candidate: ${name} (${email}) for: ${interest}`);

    // Optional email dispatch to info@blackgateitsolutions.co.in
    try {
      const transporter = createTransporter();
      if (transporter) {
        const recipient = process.env.CONTACT_RECEIVER_EMAIL || 'info@blackgateitsolutions.co.in';
        await transporter.sendMail({
          from: `"Blackgate Internship" <${process.env.SMTP_USER}>`,
          replyTo: email,
          to: recipient,
          subject: `New Internship Application: ${name} [${interest} Track]`,
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px;">
              <h2 style="color: #06b6d4; margin-bottom: 16px;">New Internship Application Received</h2>
              <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
                <tr>
                  <td style="padding: 8px 0; color: #64748b; width: 140px;"><strong>Candidate Name:</strong></td>
                  <td style="padding: 8px 0; color: #1e293b;">${name}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; color: #64748b;"><strong>Phone:</strong></td>
                  <td style="padding: 8px 0; color: #1e293b;"><a href="tel:${phone}" style="color: #06b6d4;">${phone}</a></td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; color: #64748b;"><strong>Email:</strong></td>
                  <td style="padding: 8px 0; color: #1e293b;"><a href="mailto:${email}" style="color: #06b6d4;">${email}</a></td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; color: #64748b;"><strong>Selected Track:</strong></td>
                  <td style="padding: 8px 0; color: #0891b2; font-weight: bold; font-size: 16px;">${interest}</td>
                </tr>
                ${college ? `
                <tr>
                  <td style="padding: 8px 0; color: #64748b;"><strong>College / Degree:</strong></td>
                  <td style="padding: 8px 0; color: #1e293b;">${college}</td>
                </tr>
                ` : ''}
                ${portfolio ? `
                <tr>
                  <td style="padding: 8px 0; color: #64748b;"><strong>GitHub / Resume:</strong></td>
                  <td style="padding: 8px 0; color: #1e293b;"><a href="${portfolio}" target="_blank" style="color: #06b6d4;">${portfolio}</a></td>
                </tr>
                ` : ''}
              </table>
              ${message ? `
                <div style="padding: 14px; background-color: #f8fafc; border-radius: 6px; border-left: 4px solid #06b6d4;">
                  <h4 style="margin: 0 0 6px 0; color: #0f172a;">Notes / Experience:</h4>
                  <p style="margin: 0; color: #334155; white-space: pre-wrap;">${message}</p>
                </div>
              ` : ''}
              <p style="font-size: 12px; color: #94a3b8; margin-top: 24px;">Blackgate Internship Portal • Applicant ID #${id}</p>
            </div>
          `,
        });
      }
    } catch (mailErr) {
      console.warn('[Poll Mail Notification Warning]:', mailErr.message);
    }

    return res.status(200).json({
      success: true,
      message: 'Thank you! Your internship application has been submitted.',
      id,
    });
  } catch (error) {
    console.error('[Poll Submit Error]:', error);
    return res.status(500).json({
      success: false,
      error: 'Failed to record application. Please try again.',
    });
  }
});

// Admin verify key endpoint
app.post('/api/poll/verify', (req, res) => {
  const adminKey = process.env.ADMIN_KEY || 'blackgate-admin-2026';
  const { key } = req.body || {};
  if (key === adminKey) {
    return res.json({ success: true, message: 'Authenticated' });
  }
  return res.status(401).json({ success: false, error: 'Invalid admin key' });
});

// Admin list poll responses endpoint
app.get('/api/poll/responses', verifyAdmin, async (req, res) => {
  try {
    const rows = await getAllPollResponses();
    return res.json({ success: true, count: rows.length, responses: rows });
  } catch (error) {
    console.error('[Poll Fetch Error]:', error);
    return res.status(500).json({ success: false, error: 'Failed to fetch responses' });
  }
});

// Admin export CSV endpoint
app.get('/api/poll/export-csv', verifyAdmin, async (req, res) => {
  try {
    const rows = await getAllPollResponses();
    const csvContent = generateCsv(rows);
    const dateStr = new Date().toISOString().slice(0, 10);
    res.setHeader('Content-Type', 'text/csv');
    res.setHeader(
      'Content-Disposition',
      `attachment; filename="blackgate-poll-responses-${dateStr}.csv"`
    );
    return res.send(csvContent);
  } catch (error) {
    console.error('[Poll Export Error]:', error);
    return res.status(500).json({ success: false, error: 'Failed to export CSV' });
  }
});

// Admin delete response endpoint
app.delete('/api/poll/response/:id', verifyAdmin, async (req, res) => {
  try {
    const { id } = req.params;
    await deletePollResponse(id);
    return res.json({ success: true, message: 'Response deleted' });
  } catch (error) {
    console.error('[Poll Delete Error]:', error);
    return res.status(500).json({ success: false, error: 'Failed to delete response' });
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
