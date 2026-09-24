---
title: Nyolder Ulang Rangkaian Tiga Kali demi Mengatur Kecepatan Motor
status: draft-perlu-validasi
format:
  - long-form
tags:
  - produksi
  - kuliah
  - elektronika
  - control-system
---

# Nyolder Ulang Rangkaian Tiga Kali demi Mengatur Kecepatan Motor

## Pilihan judul

1. **Aku Nyolder Rangkaian Ini 3 Kali karena Satu Jalur Kelupaan**
2. **17 Jam di Warkop demi Bikin Motor Ini Bisa Diatur**
3. **Dari Jam 1 Siang sampai 6 Pagi demi Satu Rangkaian**

## Thumbnail

Teks: **NYOLDER 3 KALI**

Visual: pegang tiga PCB atau PCB terakhir, ekspresi lelah, motor dan osiloskop terlihat di meja. Jangan membuat tiga PCB palsu jika PCB lama sudah tidak tersedia.

# Skrip video panjang

Estimasi durasi: 6–8 menit.

## 1. Hook

> "Aku mulai ngerjain rangkaian ini bareng teman-temanku jam 1 siang di warkop."
>
> "Targetnya sederhana: bikin kecepatan motor bisa diatur."
>
> "Tapi jam 6 pagi, kami masih di sana. Dan aku sudah nyolder ulang rangkaian yang sama sampai tiga kali cuma karena ada jalur yang kelupaan."

[Tampilkan PCB, suasana warkop, atau dokumentasi malam jika tersedia]



## 2. Sebenarnya kami sedang membuat apa?

> "Ini project salah satu mata kuliah . Kami diminta membuat sistem open-loop untuk mengatur kecepatan motor menggunakan PWM."
>
> "Open-loop adalah sistem kendali yang output-nya tidak digunakan kembali sebagai umpan balik untuk mengoreksi proses kendali."

[Tampilkan diagram sederhana]

`Triangle generator → signal conditioning → comparator → motor driver → motor`

> "Sistemnya terdiri dari tiga bagian."
>
> "Pertama, triangle generator menghasilkan gelombang segitiga yang nantinya dibandingkan dengan tegangan kontrol untuk membuat sinyal PWM."
>
> "Kedua, signal conditioning untuk mengatur offset sinyal mulai dari 0 volt dan gain-nya sampai 5 volt."
>
> "Ketiga, comparator untuk mengubah perbandingan sinyal tadi menjadi PWM, lalu output-nya masuk ke motor driver."
>
> "Saat VR diputar, duty cycle PWM berubah, dan kecepatan motor ikut berubah. Setidaknya, itu rencananya."

## 3. Dari siang sampai mulai mencurigakan

> "Kami mulai sekitar jam 1 siang. Karena dikerjakan bareng-bareng di warkop, awalnya suasananya masih santai."
>
> "Komponen disiapkan, rangkaian mulai dipasang ke PCB bolong, terus jalurnya disolder satu per satu."
>
> "Kalau lihat skematik, rangkaiannya kelihatan masuk akal. Tapi memindahkan skematik ke PCB bolong itu beda cerita."
>
> "Di layar, satu garis tinggal ditarik. Di PCB, garis itu harus diterjemahkan jadi kaki komponen, kabel, timah, dan keputusan hidup yang mulai dipertanyakan ketika malam datang."

## 4. Jam 6 sore kami sudah budrek

> "Padahal belum malam-malam banget. Sekitar jam 6 sore, kami sudah budrek."
>
> "Kepala sudah penuh sama jalur, komponen, dan sinyal yang nggak keluar. Kalau dipaksa lanjut saat itu juga, kayaknya yang korslet bukan cuma rangkaiannya."
>
> "Kebetulan waktu itu ada chant di kampus. Jadi kami tinggalin warkop sebentar, berangkat ke kampus, terus ikut teriak-teriak dan nyanyi bareng."
>
> "Bukan buat menyelesaikan rangkaiannya. Kami cuma butuh meluapkan semuanya sebentar sebelum balik menghadapi PCB yang sama."

[Gunakan dokumentasi chant jika tersedia dan aman ditampilkan. Naikkan tempo pada bagian teriak dan nyanyi, lalu potong kembali ke suasana meja yang sunyi]

> "Setelah energi dan suara agak terkuras, kami balik lagi ke warkop. Masalahnya tentu masih menunggu dengan sabar."

## 5. Sinyalnya tidak keluar

> "Setelah rangkaian pertama selesai, kami tes."
>
> "Sinyalnya nggak keluar seperti yang diharapkan."
>
> "Mulailah fase melihat skematik, melihat PCB, lalu melihat skematik lagi seolah-olah pada tatapan kelima jalurnya bakal menyambung sendiri."
>
> "Akhirnya ketemu masalahnya. Ada bagian pada signal conditioning yang belum tersambung. VR dan resistor-nya belum terhubung ke ground."

[Tampilkan skematik dan tandai jalur yang terlewat]

> "Kelihatannya cuma satu jalur. Tinggal sambungkan, kan?"
>
> "Masalahnya, posisi komponen dan jalur yang sudah terpasang membuat perbaikannya nggak sesederhana menambah satu kabel. Kalau dipaksa, rangkaiannya makin semrawut, rawan merusak sambungan lain, dan bakal lebih susah dicek lagi kalau masih ada masalah."

## 6. Nyolder ulang, lalu mengulang lagi

> "Akhirnya aku memilih bikin ulang di PCB bolong yang baru."
>
> "Aku copot fokus dari rangkaian pertama, tata ulang komponennya, lalu nyolder dari awal."
>
> "Rangkaian kedua ternyata masih punya masalah yang hampir sama. Jalurnya belum benar-benar rapi dan aman untuk dilanjutkan."
>
> "Di titik itu pilihannya dua: terus menambal rangkaian yang sudah bikin pusing, atau menerima kenyataan bahwa aku harus mulai lagi."
>
> "Jadi aku ambil PCB bolong baru. Lagi."

[Jeda; tampilkan PCB ketiga]

> "Ini sudah percobaan ketiga. Teman-temanku juga masih ikut mengerjakan dan mengecek bagian-bagian sistem. Jam terus jalan, warkop makin sepi, dan target kami turun dari ‘bikin rangkaian yang bagus’ menjadi ‘tolong motornya muter dulu.’"

## 7. Momen ketika akhirnya bekerja

> "Setelah semua jalur dicek ulang, kami tes rangkaiannya lagi."
>
> "Triangle generator menghasilkan sinyal. Signal conditioning mengatur rentangnya. Comparator membentuk PWM. Output-nya masuk ke motor driver."
>
> "Lalu waktu VR diputar, kecepatan motornya ikut berubah."

[Tampilkan bukti motor berputar dan perubahan sinyal PWM jika tersedia]

> "Secara visual hasilnya mungkin cuma motor kecil yang berputar lebih cepat atau lebih lambat."
>
> "Tapi setelah tiga kali nyolder dan bertahan dari jam 1 siang sampai jam 6 pagi, motor itu rasanya seperti sedang melakukan demonstrasi teknologi paling canggih di dunia."

> [!warning] Validasi sebelum rekam
> Pastikan hasil akhir memang berhasil mengatur kecepatan motor. Jika belum berhasil penuh, ganti bagian ini sesuai hasil sebenarnya.

## 8. Hal yang sebenarnya kupelajari

> "Awalnya kupikir tantangan project ini ada di memahami triangle generator, signal conditioning, comparator, dan PWM."
>
> "Ternyata memahami cara kerjanya belum tentu membuat implementasi fisiknya langsung benar."
>
> "Satu sambungan ke ground yang terlewat bisa membuat satu bagian sistem nggak bekerja. Dan kalau layout PCB-nya nggak direncanakan dengan baik, perbaikan kecil bisa berubah jadi nyolder ulang semuanya."
>
> "Kalau mengulang project seperti ini, aku bakal mengecek koneksi per blok sebelum seluruh rangkaian disolder. Mulai dari generator, lanjut signal conditioning, baru comparator dan motor driver."
>
> "Aku juga bakal menandai setiap koneksi yang sudah dipindahkan dari skematik ke PCB, terutama VCC dan ground. Karena jalur yang paling gampang dianggap sepele justru bisa membuat kami menginap tidak resmi di warkop."

## 9. Penutup

> "Project ini memang open-loop. Tapi proses ngerjainnya terasa seperti loop tanpa akhir: nyolder, tes, bingung, lalu nyolder lagi."
>
> "Setidaknya setelah tiga PCB dan 17 jam, aku bukan cuma melihat motor berputar. Aku jadi paham bahwa rangkaian yang benar di skematik masih harus diterjemahkan dengan benar ke dunia nyata."

## CTA

> "Kalian pernah mengulang project dari awal cuma gara-gara satu bagian kecil yang terlewat? Ceritain. Biar perjuangan begadang kami nggak terasa terlalu personal."

# Visual yang perlu dikumpulkan

- Dokumentasi warkop dari siang, malam, atau pagi jika tersedia.
- PCB pertama, kedua, dan ketiga jika masih ada.
- Close-up jalur VR dan resistor menuju ground.
- Skematik asli yang sudah disensor jika diperlukan.
- Tampilan sinyal pada osiloskop.
- Perubahan PWM saat VR diputar.
- Motor saat kecepatannya berubah.
- Foto atau video teman-teman yang aman ditampilkan setelah mendapat izin.

# Catatan rekam

- Fokus utama adalah cerita tiga kali menyolder dan kerja kelompok selama 17 jam, bukan kuliah teori control system.
- Penjelasan teknis cukup memakai satu diagram dan bukti sinyal.
- Percepat tempo saat menceritakan percobaan pertama dan kedua.
- Beri jeda sebelum mengungkap jalur ground yang terlewat dan sebelum PCB ketiga.
- Perlambat saat masuk ke pelajaran tentang pengecekan per blok.
- Jangan menyebut teman sebagai penyebab kesalahan jika pembagian pekerjaan belum jelas.
