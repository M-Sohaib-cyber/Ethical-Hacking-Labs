// server.js
const express = require('express');
const fetch = require('node-fetch'); // node-fetch@2
const crypto = require('crypto');
const path = require('path');

const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

async function checkPwned(password) {
  const sha1 = crypto.createHash('sha1').update(password).digest('hex').toUpperCase();
  const prefix = sha1.slice(0, 5);
  const suffix = sha1.slice(5);
  const res = await fetch(`https://api.pwnedpasswords.com/range/${prefix}`);
  if (!res.ok) throw new Error('HIBP API error');
  const body = await res.text();
  const lines = body.split('\n');
  for (const line of lines) {
    const [hashSuffix, count] = line.split(':');
    if (hashSuffix && hashSuffix.trim() === suffix) return parseInt((count||'0').replace('\r','').trim(), 10);
  }
  return 0;
}

function scorePassword(pw) {
  let score = 0;
  if (pw.length >= 8) score += 20;
  if (pw.length >= 12) score += 20;
  if (/[a-z]/.test(pw)) score += 15;
  if (/[A-Z]/.test(pw)) score += 15;
  if (/[0-9]/.test(pw)) score += 15;
  if (/[^A-Za-z0-9]/.test(pw)) score += 15;
  if (/^(?:\d+|[a-zA-Z]+)$/.test(pw)) score = Math.min(score, 25);
  return Math.min(score, 100);
}

app.post('/api/check', async (req, res) => {
  try {
    const { password } = req.body || {};
    if (!password) return res.status(400).json({ error: 'password required' });

    const pwnedCount = await checkPwned(password);
    const score = scorePassword(password);
    const advice = [];
    if (pwnedCount > 0) advice.push(`This password was found ${pwnedCount} times in breaches — stop using it.`);
    if (score < 50) advice.push('Use a longer passphrase (3+ words) with mixed characters and symbols.');
    if (score >= 50 && pwnedCount === 0) advice.push('Reasonable strength — consider a password manager.');

    res.json({ score, pwnedCount, advice });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'server error' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
