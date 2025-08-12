
# Web3D Secure Complete

Project ini adalah aplikasi web untuk menampilkan model 3D dengan login, customisasi warna/gambar, dan export JPEG/PNG.

## Fitur
- Login & register (Firebase Auth)
- Model 3D dimuat dari Firebase Storage via Signed URL
- Customisasi warna dan tekstur
- Export JPEG/PNG dengan watermark
- Serverless API di Vercel untuk generate signed URL

## Setup
1. Buat project Firebase
2. Aktifkan Auth (Email/Google)
3. Aktifkan Storage dan upload `samples/default-model.glb` ke `models/default-model.glb`
4. Buat Service Account → download JSON → simpan ke Vercel env var `FIREBASE_SERVICE_ACCOUNT`
5. Set env vars di Vercel: `VITE_FIREBASE_API_KEY`, `VITE_FIREBASE_AUTH_DOMAIN`, `VITE_FIREBASE_PROJECT_ID`, `VITE_FIREBASE_STORAGE_BUCKET`
6. Deploy ke Vercel

## Development
```bash
npm install
npm run dev
```

## Build
```bash
npm run build
```
