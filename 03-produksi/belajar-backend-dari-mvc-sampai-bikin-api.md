---
title: Belajar Backend dari Bingung MVC sampai Bisa Bikin API
tags:
  - produksi
  - backend
  - laravel
status: belum-siap-rekam
---

# Belajar Backend dari Bingung MVC sampai Bisa Bikin API

## Section 1 — Hook

> "Dulu aku kira bikin backend itu tinggal bikin route, controller, terus sambungin database. Ternyata yang bikin pusing justru sebelum ngoding: datanya mau dibentuk kayak gimana, gais?"

- Pengakuan: sudah mencoba beberapa framework, tetapi kebingungan utamanya bukan sintaks.
- Masalah sebenarnya: menerjemahkan requirement proyek menjadi data yang bisa dipakai sistem.
- Janji video: berbagi urutan belajar backend berdasarkan perjalanan sendiri, bukan mengaku sebagai ahli.

## Section 2 — Pertama Kenal Backend lewat MVC

- Pertama belajar pola MVC menggunakan CodeIgniter dan Laravel.
- Awalnya melihat banyak folder dan belum memahami hubungan tiap bagian.
- Sederhanakan MVC dari pengalaman sendiri:
  - Model mengurus data.
  - View menampilkan hasil.
  - Controller menerima dan mengarahkan proses.
- Titik mulai paham: mengikuti satu alur request, bukan menghafal semua folder.
- Alur dasar:
  - Request masuk.
  - Route menentukan tujuan.
  - Controller menjalankan proses.
  - Model berhubungan dengan data.
  - Aplikasi mengirim response.

## Section 3 — Framework Berganti, Alurnya Tetap Mirip

- Backend yang paling sering dibuat menggunakan Laravel.
- Pernah memakai NestJS untuk seleksi magang.
- API pertama dibuat menggunakan Express, React, Node.js, dan MySQL.
- Jangan menyebutnya MERN karena `M` pada MERN adalah MongoDB.
- Refleksi: nama folder dan cara penulisan bisa berbeda, tetapi backend tetap menerima request, mengolah data, lalu mengirim response.
- Pesan untuk pemula: jangan langsung berpindah-pindah framework sebelum memahami alurnya.

## Section 4 —kẹ — Bagian Tersulit Bukan Framework

- Kebingungan terbesar: mendefinisikan data dari requirement klien atau proyek.
- Requirement biasanya masih berbentuk kebutuhan manusia.
- Backend membutuhkan bentuk yang lebih jelas:
  - Data apa yang harus disimpan?
  - Field apa yang diperlukan?
  - Tipe datanya apa?
  - Data mana yang saling berhubungan?
  - Apa yang dikirim lewat request?
  - Response apa yang diterima pengguna?
- Tekankan: kalau definisi datanya belum jelas, pindah framework tidak otomatis menyelesaikan masalah.

## Section 5 — Contoh dari Proyek Nyata

- Jangan tampilkan repository, nama proyek, kode asli, atau data proyek.
- Ceritakan pengalamannya secara umum tanpa mengungkap detail proyek.
- Gunakan contoh baru dan sederhana berupa data artikel yang dibuat khusus untuk menjelaskan konsep.
- Tunjukkan proses mengubah requirement menjadi:
  - Entitas `Article`.
  - Field sederhana seperti `title`, `content`, dan `is_published`.
  - Endpoint yang dibutuhkan.
- Contoh konkret dari pengalaman membuat data artikel:
  - Awalnya mendefinisikan artikel dari data yang terlihat jelas seperti judul dan isi.
  - Setelah requirement berkembang, ternyata artikel juga membutuhkan status publikasi.
  - Tambahkan field boolean `is_published` untuk membedakan artikel yang masih disiapkan dan yang sudah boleh tampil.
  - Perubahan satu field ikut memengaruhi migration, model, validasi request, endpoint, dan query daftar artikel.
- Refleksi: kesulitannya bukan sekadar menambah `is_published`, tetapi menyadari kebutuhan itu sebelum struktur data terlanjur dipakai di banyak bagian.

> [!warning] BELUM ADA BAHAN
> Repo yang aman ditampilkan belum dipilih. Gunakan ilustrasi struktur data sederhana jika kode proyek tidak boleh diperlihatkan.

## Section 6 — Urutan Belajar Backend untuk Pemula

- Mulai dari cara kerja HTTP sederhana:
  - Request.
  - Method: GET, POST, PUT/PATCH, DELETE.
  - Status code.
  - Response JSON.
- Pelajari satu alur MVC menggunakan satu framework.
- Belajar database dasar:
  - Tabel.
  - Field dan tipe data.
  - Primary key dan foreign key.
  - Relasi sederhana.
- Ambil requirement kecil, lalu definisikan datanya sebelum menulis kode.
- Buat satu CRUD API sederhana.
- Tambahkan validasi agar data yang masuk tidak sembarangan.
- Uji endpoint menggunakan alat yang sudah tersedia di perangkat.
- Autentikasi dan deployment dipelajari setelah alur dasarnya benar-benar dipahami.

## Section 7 — Jangan Kejar Semua Framework

- Tidak perlu belajar CodeIgniter, Laravel, Express, dan NestJS sekaligus.
- Pilih satu framework untuk memahami alur sampai bisa membuat CRUD API.
- Laravel cocok dijadikan contoh utama karena paling sering dipakai creator.
- Framework lain dipakai sebagai pembanding bahwa konsep dasarnya tetap terbawa.
- Sindiran ke diri sendiri: ganti framework bisa terasa seperti belajar, padahal kadang cuma pindah tempat bingung.

## Section 8 — Kapan Bisa Dibilang Siap Bikin API?

- Bukan ketika hafal semua fitur framework.
- Sudah bisa menjelaskan alur request sampai response.
- Bisa menerjemahkan requirement sederhana menjadi struktur data.
- Bisa membuat endpoint CRUD.
- Bisa memvalidasi input dan menangani error dasar.
- Bisa menguji hasil API.
- Masih melihat dokumentasi itu wajar; siap bukan berarti hafal semuanya ya, gais.

## Section 9 — Penutup

- Perjalanan belajar dimulai dari MVC di CodeIgniter dan Laravel.
- Lalu mencoba API dengan Express–Node.js–MySQL dan NestJS untuk seleksi magang.
- Insight utama: framework membantu menulis backend, tetapi fondasinya adalah memahami alur dan data.
- Arah untuk pemula: satu framework, satu requirement kecil, satu API yang selesai.

## CTA

> "Kalau kalian lagi belajar backend, bagian yang paling bikin bingung itu alur MVC, database, atau bikin API-nya, gais?"

## Catatan shooting dan editing

- Rekam satu section per klip.
- Talking head untuk cerita dan refleksi.
- Screen recording hanya untuk satu alur request serta contoh proyek yang sudah diizinkan.
- Teks layar: `request → route → controller → data → response`.
- Tidak perlu membuat proyek baru khusus untuk video.
