---
title: Lembar Rekam Sitemap, RSS Feed, dan Robots
status: terjadwal
jadwal: 2026-09-07
topik: Technical SEO
format: on-camera + HTML slides, one take
proyek: kikuk.me
---

# Lembar Rekam — Sitemap, RSS Feed, dan Robots

## Hook (kata-per-kata)
“Aku kira sitemap, RSS feed, dan robots.txt itu tiga file SEO yang tugasnya kurang lebih sama. Ternyata yang satu kasih peta, yang satu kasih kabar terbaru, dan yang satu jadi satpam.”

## Slide 1 — Pembuka
- Lanjutan pembahasan JSON-LD.
- Studi kasus dari implementasi nyata di kikuk.me.
- Fokus pada fungsi, bukan tutorial mengetik kode.

## Slide 2 — Bedakan tugasnya
- Sitemap: daftar URL yang ingin dikenalkan kepada mesin pencari.
- RSS feed: aliran konten terbaru untuk pembaca dan aplikasi feed.
- Robots.txt: aturan akses crawler.
- Ketiganya bukan tombol otomatis naik peringkat.

## Slide 3 — Analogi sederhana
- Sitemap adalah peta gedung.
- RSS feed adalah papan pengumuman terbaru.
- Robots.txt adalah satpam yang mengatur area yang boleh dirayapi.
- JSON-LD sebelumnya adalah kartu identitas isi ruangan.

## Slide 4 — Sitemap kikuk.me
- Dibuat melalui Metadata API Next.js.
- Mengambil proyek, posting terbit, tutorial terbit, dan chapter terbit dari database.
- Halaman statis dan dinamis dikumpulkan menjadi satu daftar URL.
- Bisa dibuka melalui `https://kikuk.me/sitemap.xml`.

## Slide 5 — Jangan bocorkan draft
- Post dan tutorial hanya masuk jika `isPublished` bernilai benar.
- Chapter juga diperiksa status terbitnya.
- URL admin dan draft tidak perlu muncul di sitemap.
- Sitemap membantu penemuan URL, bukan menjamin indexing.

## Slide 6 — RSS feed kikuk.me
- Feed berisi posting dan tutorial yang sudah terbit.
- Konten diurutkan dari tanggal terbaru.
- Data utamanya: judul, URL, ringkasan, tanggal, dan kategori.
- RSS dapat dibuka melalui `https://kikuk.me/feed.xml`.

## Slide 7 — RSS bukan sitemap
- Sitemap ditujukan terutama untuk crawler mesin pencari.
- RSS ditujukan untuk distribusi pembaruan konten.
- RSS bisa dibaca aplikasi feed atau layanan lain.
- Di kikuk.me juga tersedia Atom dan JSON Feed.

## Slide 8 — Robots.txt kikuk.me
- Semua crawler diizinkan mengakses area publik.
- `/admin/`, `/login/`, dan `/dashboard/` tidak diizinkan dirayapi.
- Robots.txt juga menunjukkan lokasi sitemap.
- Bisa dibuka melalui `https://kikuk.me/robots.txt`.

## Slide 9 — Kesalahan konsep penting
- `Disallow` mengatur crawling, bukan jaminan menghapus halaman dari indeks.
- Halaman privat tetap harus dilindungi autentikasi.
- Jangan memblokir halaman atau aset publik tanpa alasan.
- Jangan memasukkan URL privat atau draft ke sitemap dan feed.

## Slide 10 — Alur besarnya
- Robots.txt memberi aturan dan menunjukkan sitemap.
- Sitemap membantu crawler menemukan URL.
- RSS menyebarkan konten terbaru.
- JSON-LD membantu mesin memahami isi setiap halaman.
- Semua mengambil data publik dari sumber yang sama.

## CTA (kata-per-kata)
“Dari tiga ini, yang selama ini paling kalian salah pahami: sitemap, RSS feed, atau robots.txt?”

## Cara rekam
- Buka Google Slides dalam mode presentasi.
- Kamera tetap aktif di sudut layar jika aplikasi rekam mendukung.
- Jelaskan poin dengan bahasa sendiri; jangan membaca slide kata-per-kata.
- Rekam one take dan hanya ulang jika ada kesalahan teknis besar.
