# 👻 GhostRoute

> Bypass website censorship like a ghost — silently, effectively, and without leaving a trace.

**GhostRoute** is a command-line tool that helps you bypass blocked websites using:
- 🔁 **DNS-over-HTTPS (DoH)**
- 🧅 **Tor**
- 🌍 **HTTP/SOCKS Proxies**

---

## ⚙️ Installation

```bash
git clone https://github.com/yatataknemogy/ghost-route.git
cd ghost-route
npm install
```

---

## 🚀 Usage

```bash
npx tsx src/index.ts <url> [options]
```

### 🔍 Examples

```bash
npx tsx src/index.ts https://rutracker.org --doh
npx tsx src/index.ts https://libgen.is --tor
npx tsx src/index.ts https://example.com --proxy=http://1.2.3.4:8080
```

---

## 🧰 Options

| Flag         | Description                                            |
|--------------|--------------------------------------------------------|
| `--doh`      | Use DNS-over-HTTPS (Cloudflare)                        |
| `--tor`      | Route traffic through Tor (`socks5h://127.0.0.1:9050`) |
| `--proxy`    | Use a custom HTTP/SOCKS proxy                          |

---

## 📦 Requirements

- Node.js ≥ 18
- For `--tor`: you must have Tor running (Tor Browser or daemon)

---

## 🧑‍💻 Author

Made with ❤️ by [yatataknemogy](https://github.com/yatataknemogy)

---

## 📄 License

[MIT](LICENSE)
