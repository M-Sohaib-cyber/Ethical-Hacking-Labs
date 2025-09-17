# 🔐 Password Strength Checker

A simple web app that checks the **strength of a password** and verifies if it has been exposed in data breaches using the [Have I Been Pwned](https://haveibeenpwned.com/API/v3#PwnedPasswords) API.  

---

## 🚀 Features
- ✅ Password strength scoring (length, character variety, entropy)
- ⚡ Uses the **k-anonymity model** with SHA-1 for secure breach checking
- 📊 Provides actionable feedback and advice
- 🖥️ Local web UI — runs on `http://localhost:3000`

---

## 🛠️ Tech Stack
- [Node.js](https://nodejs.org/) + [Express.js](https://expressjs.com/)
- [node-fetch@2](https://www.npmjs.com/package/node-fetch) for API requests
- [crypto](https://nodejs.org/api/crypto.html) (built-in, for SHA-1 hashing)
- HTML + Vanilla JS frontend

---


## 📂 Project Structure
```
Password-Checker/
├─ server.js # Backend logic (API + HIBP integration)
├─ public/
│ └─ index.html # Frontend UI
├─ package.json # Dependencies
├─ package-lock.json
└─ README.md # Project documentation
```

---

## ⚙️ Setup & Usage

### 1) Install dependencies
```bash
npm install
```

### 2) Start the server
```bash
node server.js
```

The server will start on:
```arduino
http://localhost:3000
```

### 3) Test in your browser

Open the page and enter a test password. Example results:
```vbnet
Score: 35/100
Pwned count: 13452
Advice:
- This password was found 13452 times in breaches — stop using it.
- Use a longer passphrase (3+ words) with mixed characters and symbols.
```

---

## 🔒 Security Notes

⚠️ Never use real account passwords when testing.
This tool is for educational and ethical hacking practice only.

The HIBP API is queried using k-anonymity: full passwords are never sent.

Still, avoid testing actual production credentials.

---

## 📖 Lessons Learned

Implemented password scoring based on strength rules

Integrated with an external API securely

Learned about k-anonymity and SHA-1 range search

Built a local web tool for ethical hacking labs

---

## 👨‍💻 Author: Mohammad Sohaib
📌 BSc (Hons) Networks and Cyber Security student
