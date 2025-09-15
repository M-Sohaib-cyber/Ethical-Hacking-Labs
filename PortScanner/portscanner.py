import socket
import threading

print_lock = threading.Lock()

def scan_port(target, port):
    try:
        sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
        sock.settimeout(0.5)
        result = sock.connect_ex((target, port))
        with print_lock:
            if result == 0:
                print(f"[+] Port {port:<5} OPEN")
            else:
                print(f"[-] Port {port:<5} CLOSED")
        sock.close()
    except:
        pass

def main():
    print("\n=== 🔍 Python Port Scanner ===\n")
    target = input("Enter target IP or hostname: ")
    start_port = int(input("Enter start port: "))
    end_port = int(input("Enter end port: "))

    print(f"\nScanning {target} from port {start_port} to {end_port}...\n")

    threads = []
    for port in range(start_port, end_port + 1):
        thread = threading.Thread(target=scan_port, args=(target, port))
        threads.append(thread)
        thread.start()

    for thread in threads:
        thread.join()

    print("\n✅ Scan complete!\n")

if __name__ == "__main__":
    main()
