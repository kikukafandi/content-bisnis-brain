---
title: AI Menghapus Semua Data Project-ku
status: siap-rekam
format:
  - long-form
  - shorts
tags:
  - produksi
  - ai
  - coding
  - laravel
---

# AI Menghapus Semua Data Project-ku

## Pilihan judul

1. **Aku Kasih AI Akses Terminal, Semua Datanya Hilang**
2. **AI Menghapus Semua Data Project-ku**
3. **Kesalahan Vibe Coding yang Bikin Dataku Hilang**

## Thumbnail

Teks: **SEMUA DATA HILANG**

Visual: ekspresi bingung, potongan terminal `migrate:fresh`, dan tabel database kosong. Jangan tampilkan data atau identitas project asli.

# Skrip video panjang

Estimasi durasi: 5–7 menit.

## 1. Hook

> "Bulan lalu, aku kasih AI akses ke terminal biar proses ngoding-ku lebih cepat."
>
> "Terus AI-nya menjalankan satu perintah ini."

[Tampilkan di layar: `php artisan migrate:fresh`]

> "Nggak lama setelah itu, semua data development di project-ku hilang."
>
> "Semuanya."

[Jeda]

> "Untungnya ini bukan database production. Tapi buat mengembalikan datanya, aku tetap menghabiskan waktu beberapa jam."

## 2. Kenapa aku memberi AI akses terminal

> "Waktu itu aku lagi mengerjakan platform semacam e-commerce. Backend-nya pakai Laravel, database-nya MySQL."
>
> "Fiturnya sudah lumayan banyak. Ada data pengguna, produk, transaksi, sampai integrasi payment gateway. Jadi logic-nya juga mulai saling terhubung."

> "Aku pakai AI buat bantu ngoding. Awalnya enak banget. Aku tinggal kasih task, terus AI membaca project-nya, mengubah kode, dan menjalankan perintah dari terminal."
>
> "Hal-hal yang biasanya kukerjakan satu-satu jadi jauh lebih cepat."

> "Nah, karena beberapa kali hasilnya aman, aku mulai terlalu percaya."
>
> "Aku kasih akses terminal dan membiarkan AI menjalankan perintah yang menurutnya perlu. Waktu itu aku lagi menikmati vibe coding: kasih instruksi, lihat AI bekerja, terus berharap hidup jadi lebih mudah."

> "Dan hidup memang jadi lebih mudah."
>
> "Sampai database-ku dikosongkan."

## 3. Saat datanya tiba-tiba hilang

> "Awalnya aku nggak langsung sadar. Aku buka aplikasinya, terus data yang sebelumnya ada kok nggak muncul."
>
> "Aku cek satu halaman, kosong. Pindah ke halaman lain, kosong juga."

> "Aku sempat mikir, ini query-nya rusak? Koneksi database-nya salah? Atau jangan-jangan aplikasinya lagi pakai database lain?"

> "Terus aku cek apa saja yang tadi dijalankan AI di terminal."
>
> "Dan ketemulah satu perintah ini: `php artisan migrate:fresh`."

[Tampilkan perintah dengan penekanan pada kata `fresh`]

> "Kalau kalian belum pernah pakai Laravel, perintah ini bukan cuma memperbarui struktur database."
>
> "`migrate:fresh` menghapus semua tabel, lalu menjalankan seluruh migration dari awal."
>
> "Struktur tabelnya balik. Isinya nggak."

> "Jadi secara teknis, perintahnya berhasil. Migration-nya sukses. Database-ku juga sukses kembali ke masa ketika belum punya kenangan apa-apa."

## 4. Kenapa dampaknya tetap merepotkan

> "Sekali lagi, ini terjadi di environment development, bukan production. Nggak ada data pengguna asli yang hilang."
>
> "Kalau sampai kena production, ceritanya jelas jauh lebih serius."

> "Tapi bukan berarti data development nggak penting. Di situ sudah ada data pengguna, produk, transaksi, dan data lain yang kupakai buat mengetes alur aplikasi. Beberapa datanya juga saling berhubungan."

> "Akhirnya aku harus menjalankan seeder dan import ulang data. Setelah itu masih harus mengecek relasinya sudah benar atau belum, terus memastikan fitur yang lagi kukerjakan bisa dites lagi."

> "Totalnya habis beberapa jam."
>
> "AI sempat menghemat waktuku pas menulis kode. Terus dia mengambil waktunya lagi. Biar seimbang, mungkin."

## 5. Siapa yang salah?

> "Pas kejadian, paling gampang memang bilang, ‘AI-nya ngawur.’"
>
> "Dan iya, AI menjalankan perintah yang berisiko."

> "Tapi kalau dipikir lagi, aku juga yang kasih akses terminal. Aku yang nggak memeriksa perintahnya."
>
> "Aku memperlakukan AI kayak autopilot, padahal aku sendiri nggak memastikan project-ku lagi dibawa ke mana."

> "Perintah dari AI sering kelihatan meyakinkan. Tulisannya rapi, prosesnya cepat, dan kalau beberapa task sebelumnya berhasil, kita jadi makin percaya."
>
> "Kepercayaan naik. Waspadanya malah turun."

> "AI bisa menjalankan `migrate:fresh` dalam beberapa detik. Tapi AI nggak ikut menanggung akibatnya."
>
> "Yang menghabiskan beberapa jam buat mengembalikan data tetap aku."

## 6. Yang berubah setelah kejadian

> "Sampai sekarang aku masih pakai AI buat ngoding. Kejadian ini nggak bikin aku berhenti, karena memang banyak bagian yang sangat terbantu."
>
> "Tapi sekarang ada dua hal yang aku ubah."

> "Pertama, aku baca dulu perintah yang mau dijalankan. Apalagi kalau berhubungan dengan database, migration, file, atau apa pun yang bisa menghapus sesuatu."

[Teks layar: `fresh`, `reset`, `drop`, `truncate`]

> "Kalau ada kata seperti `fresh`, `reset`, `drop`, atau `truncate`, aku nggak langsung iyakan. Aku cari tahu dulu perintah itu bakal menghapus apa."

> "Kedua, aku menyiapkan backup database sebelum melakukan perubahan yang berisiko."
>
> "Backup memang terasa nggak penting selama semuanya masih aman. Begitu data hilang, tiba-tiba dia jadi anggota tim paling berguna."

> "Dan ini nggak cuma berlaku buat AI agent yang punya akses terminal. Kalau kita menyalin perintah dari chatbot, terus menjalankannya sendiri tanpa dibaca, risikonya sama saja."
>
> "Jarinya memang punya kita. Tapi keputusannya kita serahkan mentah-mentah ke AI."

## 7. Penutup

> "Kalau kalian pakai AI buat ngoding, pakai aja. Aku juga masih pakai."
>
> "Tapi jangan dijadikan autopilot. Tetap cek apa yang sedang diubah, baca perintah sebelum dijalankan, dan siapkan backup buat data yang nggak mau kalian buat ulang."

> "Karena perintahnya mungkin selesai dalam beberapa detik."
>
> "Beresin akibatnya belum tentu."

## CTA

> "Kalian pernah mengiyakan perintah dari AI tanpa benar-benar tahu efeknya? Ceritain. Biar aku tahu yang pernah nyungsep bukan aku doang."

# Skrip Shorts

Estimasi durasi: 45–60 detik.

> "Jangan kasih AI akses terminal kalau kalian nggak mau semua data project kalian hilang."

> "Karena bulan lalu, itu yang terjadi ke aku."

> "Waktu itu aku lagi bikin platform semacam e-commerce pakai Laravel dan MySQL. Biar lebih cepat, aku membiarkan AI menjalankan perintah terminal sendiri."

> "Terus AI-nya menjalankan ini: `php artisan migrate:fresh`."

> "Perintah itu menghapus semua tabel, lalu menjalankan migration dari awal. Jadi struktur database-ku balik, tapi seluruh data development-nya hilang."

> "Awalnya aku bingung kenapa semua halaman kosong. Setelah cek terminal, baru ketemu penyebabnya."

> "Untungnya bukan production. Tapi aku tetap butuh beberapa jam buat seeding, import ulang data, dan memastikan semuanya bisa dites lagi."

> "Aku masih pakai AI buat ngoding. Bedanya, sekarang setiap perintah aku baca dulu dan database aku backup sebelum melakukan perubahan yang berisiko."

> "Karena yang menjalankan perintah mungkin AI. Tapi yang kehilangan waktu tetap kita."

## Teks layar Shorts

- `AI diberi akses terminal`
- `php artisan migrate:fresh`
- `Semua data development hilang`
- `Cek perintah + backup`
- `AI bukan autopilot`

# Catatan cara baca

- Jangan berusaha membaca setiap kata dengan sempurna. Kalau ada kata yang terasa kaku, ganti spontan dengan kata yang biasa dipakai.
- Satu blok kutipan adalah satu napas atau satu gagasan. Berhenti sebentar setiap pindah blok.
- Tekankan kata yang membawa cerita, seperti **semua**, **kosong**, **beberapa jam**, dan **aku**.
- Naikkan tempo saat menjelaskan situasi. Perlambat saat perintah `migrate:fresh` muncul dan saat masuk ke refleksi.
- Tatap kamera pada kalimat pendek. Lirik skrip lagi saat masuk ke bagian penjelasan teknis.

# Catatan rekam

- Bawakan sebagai pengakuan kesalahan, bukan ceramah tentang bahaya AI.
- Beri jeda setelah hook dan setelah menampilkan `migrate:fresh`.
- Gunakan terminal tiruan untuk visual. Jangan jalankan perintah pada project asli.
- Tampilkan alur sederhana: `data ada → migrate:fresh → tabel kosong → seed/import ulang`.
- Talking head tetap menjadi visual utama.
