import sqlite3 from 'sqlite3';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const dataDir = path.join(__dirname, 'data');
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}

const dbPath = path.join(dataDir, 'poll.sqlite');
const db = new sqlite3.Database(dbPath);

// Initialize table
db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS poll_responses (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      phone TEXT NOT NULL,
      email TEXT NOT NULL,
      interest TEXT NOT NULL,
      college TEXT,
      portfolio TEXT,
      message TEXT,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `);

  // Safely ensure new columns exist for existing databases
  db.run(`ALTER TABLE poll_responses ADD COLUMN college TEXT`, () => {});
  db.run(`ALTER TABLE poll_responses ADD COLUMN portfolio TEXT`, () => {});
});

export const insertPollResponse = ({
  name,
  phone,
  email,
  interest,
  college = '',
  portfolio = '',
  message = '',
}) => {
  return new Promise((resolve, reject) => {
    const stmt = db.prepare(`
      INSERT INTO poll_responses (name, phone, email, interest, college, portfolio, message)
      VALUES (?, ?, ?, ?, ?, ?, ?)
    `);

    stmt.run([name, phone, email, interest, college, portfolio, message], function (err) {
      if (err) return reject(err);
      resolve({ id: this.lastID });
    });
    stmt.finalize();
  });
};

export const getAllPollResponses = () => {
  return new Promise((resolve, reject) => {
    db.all(
      `SELECT * FROM poll_responses ORDER BY created_at DESC, id DESC`,
      [],
      (err, rows) => {
        if (err) return reject(err);
        resolve(rows || []);
      }
    );
  });
};

export const deletePollResponse = (id) => {
  return new Promise((resolve, reject) => {
    db.run(`DELETE FROM poll_responses WHERE id = ?`, [id], function (err) {
      if (err) return reject(err);
      resolve({ changes: this.changes });
    });
  });
};

export const generateCsv = (rows) => {
  const headers = [
    'ID',
    'Name',
    'Phone',
    'Email',
    'Internship Track',
    'College / Education',
    'Portfolio / GitHub / Resume',
    'Notes / Experience',
    'Application Date (UTC)',
  ];

  const escapeCell = (str) => {
    if (str === null || str === undefined) return '""';
    const clean = String(str).replace(/"/g, '""');
    return `"${clean}"`;
  };

  const lines = [
    headers.join(','),
    ...rows.map((r) =>
      [
        r.id,
        escapeCell(r.name),
        escapeCell(r.phone),
        escapeCell(r.email),
        escapeCell(r.interest),
        escapeCell(r.college || ''),
        escapeCell(r.portfolio || ''),
        escapeCell(r.message || ''),
        escapeCell(r.created_at),
      ].join(',')
    ),
  ];

  return lines.join('\r\n');
};

export default {
  insertPollResponse,
  getAllPollResponses,
  deletePollResponse,
  generateCsv,
};
