# ⚡ BS2 - Backend Services System

> Framework sistematis dan cepat berbasis [Hono](https://hono.dev/) untuk membangun aplikasi web modern.

## ✨ Fitur Utama

- 🧩 Modular & ringan
- ⚡️ Built on [Hono.js](https://hono.dev/) — super-fast web framework
- 🔀 Routing eksplisit dan sistematis
- 🧠 Middleware support 
- 📦 Mudah di-deploy ke berbagai platform (Vercel, Deno Deploy, Bun, Node.js)

---

## ✏️ Penulisan dan Syntaki
### Penamaan file
```bash
products.ts ❌
products.controller.ts ✅
```


---

## 📦 Instalasi
Instal melalui github
```bash
git clone https://github.com/username/nama-framework.git
```
masuk ke folder dan install
```bash
cd nama-framework
bun install
```

---

## 🚦Contoh Routing

```js
services.get('/welcome', getController);
```

---

## 🔧 Konfigurasi

``` .env
APP_HOST=
APP_NAME=
APP_ENV=DEV

API_KEY=
API_MAINPATH=

# DATABASE
DB_SUPABASE_API_URL=
DB_SUPABASE_API_KEY=
DB_NAME=

# DEVELOPMENT CONFIGURATIONS
APP_PORT=
```

---

## Menjalankan BS2

```bash
bun run dev
```