---
title: Lembar Rekam JSON-LD untuk Website Berita
status: siap-rekam
topik: JSON-LD dan Schema.org
format: on-camera + screen-share
---

# Lembar Rekam — JSON-LD untuk Website Berita

## Hook (kata-per-kata)
“Aku kira Google cukup dikasih judul, tanggal, sama nama penulis. Ternyata dia juga perlu dijelasin: ini berita, ini penulisnya, dan ini penerbitnya.”

## Slide 1 — Pembuka
- Lagi mengerjakan website berita Wartamerdeka.
- Butuh cara supaya mesin pencari memahami struktur artikel.
- Yang dipakai: JSON-LD dengan kosakata Schema.org.

## Slide 2 — Masalah
- HTML menampilkan teks untuk pembaca.
- Mesin belum tentu tahu peran setiap teks.
- Contoh: nama bisa berarti penulis, penerbit, atau kategori.

## Slide 3 — Bedakan istilah
- **Schema.org**: kumpulan istilah atau kosakata untuk menjelaskan data.
- **JSON-LD**: format untuk menuliskan data tersebut.
- Meta tag: informasi dasar halaman.
- Open Graph: tampilan tautan saat dibagikan.
- Jangan klaim schema otomatis menaikkan ranking atau menjamin rich result.

## Slide 4 — Alur data
- Data artikel sudah ada di database.
- Ambil melalui model dan relasi Laravel.
- Susun menjadi array PHP.
- Ubah array menjadi JSON-LD di bagian `head`.
- Tidak mengetik ulang judul, tanggal, gambar, atau penulis.

## Slide 5 — NewsArticle
- `@type` menjelaskan bahwa halaman ini artikel berita.
- Isi properti utama: headline, description, image, dan datePublished.
- Tanggal memakai format ISO 8601.
- Array PHP lebih mudah dibaca dan dirawat.

## Slide 6 — Penulis
- Penulis ditandai sebagai `Person`.
- Nama dan URL profil diambil dari relasi database.
- Kalau penulisnya lebih dari satu, petakan semuanya.
- Hindari daftar penulis statis di template.

## Slide 7 — Breadcrumb
- Breadcrumb menjelaskan posisi artikel dalam struktur situs.
- Urutan: beranda, kategori, lalu artikel.
- Breadcrumb visual dan JSON-LD harus konsisten.

## Slide 8 — Keamanan output
- JSON-LD tetap berada di dalam elemen `script`.
- Data dari editor tidak boleh dimasukkan mentah.
- Gunakan serialisasi JSON dan escaping yang tepat.
- `JSON_HEX_TAG` membantu mengamankan karakter `<` dan `>` pada konteks ini.

## Slide 9 — Pengujian
- Masukkan judul berisi payload penutup `script`.
- Render halaman seperti yang diterima browser.
- Pastikan payload tidak muncul sebagai script baru.
- Tes hasil HTML, bukan hanya bentuk array PHP.

## Slide 10 — Ringkasan
- Pilih tipe schema sesuai isi halaman.
- Gunakan satu sumber data.
- Pakai URL lengkap dan tanggal yang benar.
- Hubungkan artikel, penulis, dan penerbit.
- Escape output dan uji HTML akhirnya.

## Setelah JSON-LD dan schema, bahas apa?

Urutan lanjutan yang paling nyambung:

1. **Validasi structured data**
   - Cek sintaks dan properti yang hilang.
   - Bedakan data valid dengan data yang memenuhi syarat rich result.

2. **Canonical URL**
   - Menentukan URL utama ketika konten bisa diakses lewat beberapa alamat.
   - Pastikan canonical sama dengan URL artikel yang dipakai di schema.

3. **Sitemap XML**
   - Membantu mesin pencari menemukan artikel.
   - Bahas kapan artikel masuk sitemap dan bagaimana menangani tanggal pembaruan.

4. **Robots.txt dan meta robots**
   - Bedakan crawling dan indexing.
   - Hindari salah blokir halaman artikel atau aset penting.

5. **Open Graph dan Twitter Card**
   - Mengatur judul, ringkasan, dan gambar saat artikel dibagikan.
   - Bandingkan langsung dengan fungsi JSON-LD.

6. **Google Search Console**
   - Periksa indexing, URL inspection, sitemap, dan laporan structured data.
   - Jangan menjanjikan perubahan ranking.

## CTA (kata-per-kata)
“Bagian technical SEO apa yang paling bikin kalian bingung: schema, sitemap, robots, atau canonical?”
