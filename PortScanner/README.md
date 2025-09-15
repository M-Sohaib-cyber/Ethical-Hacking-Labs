# 🔍 Python Port Scanner

A simple **multithreaded port scanner** built in Python.  
Scans a target host for open ports and reports results quickly.  

---

## 🚀 Features
- ⚡ **Fast scanning** using multithreading  
- 🎯 Specify target + custom port range  
- ✅ Shows both **open** and **closed** ports  
- 🖥️ Works as a Python script or as a standalone Windows **.exe** (via PyInstaller)  

---

## 🛠️ Tools & Libraries
- [Python 3.12](https://www.python.org/) – main programming language  
- [socket](https://docs.python.org/3/library/socket.html) – networking module  
- [threading](https://docs.python.org/3/library/threading.html) – multithreaded scanning  
- [PyInstaller](https://pyinstaller.org/) – packaged into a Windows `.exe`  

---

## 📂 Project Structure
```
PortScanner/
├─ portscanner.py # Main script
├─ dist/ # Generated folder with the .exe
│ └─ portscanner.exe
└─ README.md # Project documentation
```

---

## ⚙️ Setup & Usage

### 1) Run with Python
Make sure Python 3 is installed:  
```bash
python --version
```
Run the scanner:
```bash
python portscanner.py
```
Then enter target and port range when prompted:
```bash
Enter target IP or hostname: 127.0.0.1
Enter start port: 20
Enter end port: 100
```
Example output:

```bash
=== 🔍 Python Port Scanner ===

Scanning 127.0.0.1 from port 20 to 100...

[-] Port 21    CLOSED
[+] Port 22    OPEN
[-] Port 23    CLOSED
...

✅ Scan complete!
```

### 2) Run as EXE (Windows)
If you don’t want to install Python, you can run the pre-built .exe version:

### Build yourself with PyInstaller:

python -m PyInstaller --onefile portscanner.py
The .exe will appear in the dist/ folder.

Or, download from the GitHub Release (if published).

Then just double-click portscanner.exe.

## 🔒 Security Notes
⚠️ Use this tool only on machines you own or have explicit permission to test.

Unauthorized port scanning may violate laws or terms of service.

Intended strictly for educational and ethical hacking labs.

## 📖 Lessons Learned
Built a practical security tool with Python.

Learned how to use sockets and threading for networking tasks.

Packaged Python code into a portable .exe using PyInstaller.

Reinforced ethical hacking practices.

## 👨‍💻 Author: Mohammad Sohaib
📌 BSc (Hons) Networks and Cyber Security student

