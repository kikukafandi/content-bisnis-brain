---
title: Vibe Coding yang Rapi Dimulai dari PRD, Bukan Prompt
status: draft
format:
  - long-form
tags:
  - produksi
  - ai
  - coding
  - vibe-coding
---

# Vibe Coding yang Rapi Dimulai dari PRD, Bukan Prompt

## Janji video

Menjelaskan workflow yang aku gunakan sebelum meminta AI menulis kode: menyusun PRD, menentukan arah desain dari referensi, menyiapkan dokumen konteks, lalu memakai skills agar AI bekerja lebih terarah dan tidak menghabiskan konteks untuk membaca ulang hal yang sama.

## Pilihan judul

1. **Vibe Coding yang Rapi Dimulai dari PRD, Bukan Prompt**
2. **Cara Aku Menyiapkan AI Sebelum Mulai Vibe Coding**
3. **Jangan Langsung Ngoding: Siapkan Ini Dulu buat AI**

## Thumbnail

Teks: **JANGAN LANGSUNG NGODING**

Visual: prompt kosong di satu sisi, kumpulan file `PRD.md`, `architecture.md`, `design.md`, `AGENTS.md`, dan `rules.md` di sisi lain.

## Format

Talking head dengan screen recording contoh struktur dokumen. Tidak menggunakan demo project tertentu.

Estimasi durasi: 6–8 menit.

# Skrip video

## Pembuka

Kalau aku mau bikin sesuatu pakai AI, biasanya aku nggak langsung menyuruh AI menulis kode. Aku justru mulai dari menyiapkan konteksnya dulu: sebenarnya aku mau bikin apa, tampilannya mau seperti apa, struktur project-nya bagaimana, dan aturan apa yang perlu diikuti.

Memang kelihatannya lebih lama daripada langsung mengetik, “Bikinin aplikasi ini.” Tapi dari pengalamanku, kalau sejak awal arah project-nya belum jelas, AI memang bisa menghasilkan kode dengan cepat, cuma hasilnya belum tentu menuju ke tempat yang aku mau.

Apalagi kalau semua keputusan hanya disimpan di chat. Hari ini aku bilang tampilannya begini, besok membahas arsitektur, lalu beberapa percakapan kemudian aku harus menjelaskan semuanya lagi. AI-nya kehilangan konteks, aku juga mulai lupa pernah memutuskan apa. Akhirnya satu project bisa punya beberapa arah sekaligus.

Karena itu, sebelum masuk ke coding, hal pertama yang biasa aku siapkan adalah PRD.

## Menyusun PRD dengan AI

PRD ini juga nggak kutulis sendirian dari halaman kosong. Aku tetap memakai AI untuk membantu menyusunnya. Biasanya aku jelaskan dulu ide yang ada di kepalaku, masalah yang ingin diselesaikan, siapa yang akan memakai, dan kira-kira fitur utamanya apa. Setelah itu, aku minta AI mengubah penjelasan tadi menjadi dokumen yang lebih terstruktur.

Tapi hasil pertama dari AI nggak langsung aku anggap selesai. Kadang fiturnya terlalu banyak, scope-nya melebar ke mana-mana, atau AI menambahkan sesuatu yang sebenarnya nggak kubutuhkan. Bagian-bagian seperti itu aku koreksi lagi sampai PRD-nya benar-benar mewakili apa yang ingin kubuat.

Jadi di sini AI membantu merapikan pikiranku, bukan mengambil alih keputusan produknya. Setelah selesai, PRD ini menjadi pegangan utama. Kalau nanti AI tiba-tiba menambahkan fitur aneh atau mengubah arah project, aku punya dokumen untuk mengecek: ini memang bagian dari rencana atau cuma kreativitas AI yang sedang berlebihan?

## Menentukan arah desain

Setelah gambaran produknya jelas, baru aku memikirkan desainnya. Biasanya aku mencari beberapa referensi di internet yang temanya mendekati apa yang kuinginkan.

Aku nggak mengambil satu desain lalu menyalinnya mentah-mentah. Dari satu referensi mungkin aku suka layout-nya, dari yang lain aku suka warna atau tipografinya, lalu semuanya aku modifikasi lagi supaya sesuai dengan kebutuhan.

Soalnya kalau ke AI aku cuma bilang, “Buat desain yang modern dan minimalis,” hasilnya bisa ke mana-mana. Modern menurutku dan modern menurut AI kadang beda alam. Jadi referensi tadi kupakai untuk memperjelas arah, kemudian keputusan akhirnya kutulis di `design.md`.

Di dalamnya bisa ada pilihan warna, tipografi, bentuk komponen, jarak, layout, responsivitas, sampai interaksi yang perlu dipertahankan. Dengan begitu, AI nggak hanya menerima kata-kata yang samar. Ia punya acuan yang bisa dibaca lagi ketika mengerjakan halaman berikutnya.

## Membagi konteks ke beberapa dokumen

Selain PRD dan `design.md`, aku juga menyiapkan beberapa file Markdown lain sesuai kebutuhan. Misalnya `architecture.md` untuk menyimpan keputusan teknis: bagaimana project dibagi, bagaimana data mengalir, dan bagian mana yang bertanggung jawab terhadap sesuatu.

Lalu ada `AGENTS.md` untuk memberi tahu agent cara bekerja di dalam project. Isinya bisa berupa file mana yang penting, kebiasaan yang harus diikuti, dan pemeriksaan apa yang perlu dilakukan sebelum sebuah pekerjaan dianggap selesai.

Aku juga bisa memakai `rules.md` untuk aturan yang nggak boleh diubah sembarangan. Misalnya aturan penulisan kode, batas penggunaan dependency, atau bagian tertentu yang jangan disentuh tanpa alasan yang jelas.

Pembagiannya nggak harus selalu persis seperti ini. Project kecil mungkin cukup memakai PRD dan satu file aturan. Kalau kebutuhannya lebih kompleks, konteksnya baru dipecah supaya AI lebih mudah menemukan informasi yang relevan.

Karena tujuannya bukan mengoleksi file Markdown sebanyak mungkin. Kalau semua file isinya cuma tiga baris dan saling mengulang, itu bukan sistem yang rapi. Itu folder yang sedang cosplay menjadi dokumentasi.

Hal lain yang perlu dijaga adalah jangan sampai satu keputusan disalin ke banyak file. Kalau nanti keputusannya berubah tetapi hanya satu file yang diperbarui, AI malah menerima beberapa aturan yang saling bertentangan. Bukannya makin paham, dia malah disuruh memilih kebenarannya sendiri.

## Skills untuk instruksi yang digunakan berulang

Selain dokumen project, aku juga menggunakan skills untuk pola instruksi yang ingin kupakai berulang kali. Daripada setiap mulai percakapan aku menempelkan instruksi panjang yang sama, pola kerjanya bisa disimpan dan dipanggil ketika memang dibutuhkan.

Contohnya ada Ponytail, yang kupakai supaya AI lebih memilih solusi sederhana dan nggak buru-buru membuat abstraksi atau fitur yang sebenarnya belum diperlukan. Ada juga Graphify untuk membantu membaca hubungan dan struktur ketika informasi yang sedang ditangani sudah lebih besar.

Menurutku ini bisa membuat penggunaan konteks lebih terarah. Tapi bukan berarti setiap task harus memuat semua skill. Kalau pekerjaannya sederhana, ya cukup berikan konteks yang diperlukan. Niatnya menghemat token, jangan sampai AI malah harus membaca satu perpustakaan sebelum mengganti warna tombol.

## Baru mulai coding

Setelah PRD, desain, arsitektur, dan aturan kerjanya cukup jelas, barulah aku masuk ke tahap coding. Itu pun aku nggak langsung meminta AI membangun semuanya sekaligus. Aku mulai dari satu bagian yang jelas, melihat perubahan yang dibuat, lalu memeriksanya sebelum lanjut ke bagian berikutnya.

Kalau ada keputusan baru selama proses coding, dokumennya juga ikut diperbarui. Dokumen-dokumen tadi bukan prasasti yang sekali dibuat lalu nggak boleh disentuh. Justru kalau arah project berubah tetapi dokumennya dibiarkan, AI akan mengikuti aturan lama dengan sangat patuh, lalu aku sendiri yang bingung kenapa hasilnya melenceng.

Workflow ini juga bukan jaminan kodenya pasti rapi atau bebas bug. AI masih bisa salah memahami instruksi, memilih pendekatan yang kurang tepat, atau merusak bagian lain. Hasilnya tetap harus dibaca, dijalankan, dan dites.

Bedanya, ketika hasilnya mulai melenceng, aku punya acuan yang jelas. Aku bisa menunjukkan keputusan mana yang tidak diikuti tanpa harus menjelaskan ulang seluruh project dari awal.

## Penutup

Jadi, buatku vibe coding yang rapi bukan dimulai dari mencari satu prompt paling sakti. Aku lebih memilih membuat arah project-nya jelas sebelum AI menulis kode.

PRD menjelaskan apa yang mau dibuat. `design.md` menjaga arah tampilannya. `architecture.md` menyimpan keputusan teknisnya. File aturan dan skills membantu agent bekerja dengan cara yang lebih konsisten.

AI-nya tetap bisa menulis kode dengan cepat. Tapi keputusan tentang ke mana project ini berjalan nggak sepenuhnya kuserahkan ke AI.

Kalau kalian biasa vibe coding, konteks project-nya sudah disimpan dalam dokumen seperti ini atau masih tersebar di chat?

## Catatan validasi sebelum rekam

- Pastikan ejaan dan nama file sesuai yang benar-benar digunakan: `architecture.md`, `design.md`, `AGENTS.md`, dan `rules.md`.
- Tampilkan isi contoh yang aman dan tidak membocorkan data project.
- Jangan mengklaim workflow ini membuat kode pasti rapi atau tidak mudah rusak.
- Jelaskan penghematan token sebagai tujuan dan pengalaman penggunaan, bukan angka pasti tanpa pengukuran.
