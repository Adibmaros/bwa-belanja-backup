# Supabase Keep-Alive Solutions

Repositori ini berisi beberapa solusi untuk mencegah Supabase database auto-pause pada free tier.

## 🚨 Masalah

Supabase free tier akan otomatis mem-pause database setelah 1 minggu tidak ada aktivitas, yang menyebabkan aplikasi tidak dapat mengakses database.

## ✅ Solusi yang Diimplementasi

### 1. API Endpoint Keep-Alive

- **File**: `/src/app/api/keep-alive/route.js`
- **Fungsi**: Endpoint yang melakukan query sederhana ke database
- **URL**: `https://your-domain.com/api/keep-alive`

### 2. Vercel Cron Job

- **File**: `vercel.json`
- **Fungsi**: Otomatis memanggil endpoint keep-alive setiap 6 jam
- **Catatan**: Hanya bekerja di Vercel Pro plan

### 3. Client-Side Keep-Alive

- **File**: `/src/components/KeepAlive.jsx`
- **Fungsi**: Component React yang melakukan ping dari browser setiap 4 jam
- **Keuntungan**: Bekerja di semua hosting platform

### 4. Manual Keep-Alive Utility

- **File**: `/src/lib/supabase-keepalive.js`
- **Fungsi**: Utility class untuk kontrol manual keep-alive

### 5. Testing Script

- **File**: `/scripts/test-keepalive.js`
- **Fungsi**: Script untuk testing koneksi Supabase secara manual

## 🔧 Cara Penggunaan

### Opsi 1: Otomatis (Recommended)

Solusi ini sudah terintegrasi di `layout.jsx` dan akan berjalan otomatis:

```bash
npm run build
npm start
```

### Opsi 2: Manual Testing

```bash
# Test koneksi Supabase
npm run keepalive

# Test endpoint keep-alive (server harus running)
npm run keepalive:test
```

### Opsi 3: Custom Configuration

Tambahkan ke `.env.local`:

```env
ENABLE_SUPABASE_KEEPALIVE=true
KEEPALIVE_INTERVAL_HOURS=4
KEEPALIVE_TABLE_NAME=users
```

## ⚙️ Konfigurasi

### Ganti Nama Tabel

Update nama tabel di file-file berikut sesuai dengan tabel yang ada di database Anda:

- `/src/app/api/keep-alive/route.js` (line 11)
- `/src/lib/supabase-keepalive.js` (line 18)
- `/src/lib/supabase.js` (line 11)

### Atur Interval

Default interval adalah 4 jam. Ubah di:

- `/src/components/KeepAlive.jsx` (line 24)
- `/src/lib/supabase-keepalive.js` (line 40)

## 📊 Monitoring

### Check Status

```bash
# Cek status via curl
curl https://your-domain.com/api/keep-alive

# Response example:
{
  "status": "success",
  "message": "Database connection active",
  "timestamp": "2024-12-30T10:00:00.000Z"
}
```

### Logs

- Client-side logs: Browser Console
- Server-side logs: Vercel Functions atau hosting logs

## 🎯 Rekomendasi

1. **Untuk Production**: Gunakan kombinasi Vercel Cron + Client-side keep-alive
2. **Untuk Development**: Gunakan manual testing script
3. **Untuk Monitoring**: Setup alerts pada endpoint keep-alive

## ⚠️ Catatan Penting

- Keep-alive hanya berjalan di production mode
- Pastikan tabel yang digunakan untuk ping sudah ada
- Monitor usage Supabase untuk menghindari rate limiting
- Pertimbangkan upgrade ke Supabase Pro jika aplikasi sering digunakan

## 🔗 Resources

- [Supabase Pricing](https://supabase.com/pricing)
- [Vercel Cron Jobs](https://vercel.com/docs/cron-jobs)
- [Next.js API Routes](https://nextjs.org/docs/api-routes/introduction)
