---
title: Apa Itu Quantum Gates - Fondasi Revolusi Komputasi Modern
date: 2026-09-23
tags:
  - source-summary
  - quantum-computing
  - quantum-gates
sources:
  - "[[archives/Apa Itu Quantum Gates Fondasi Revolusi Komputasi Modern.md]]"
status: active
---

# Apa Itu Quantum Gates - Fondasi Revolusi Komputasi Modern

Artikel Quantum Computing Indonesia mengenalkan gerbang kuantum sebagai operasi yang mengubah keadaan qubit di dalam rangkaian kuantum. Berbeda dari banyak gerbang logika klasik, evolusi sistem kuantum tertutup direpresentasikan oleh transformasi uniter sehingga normanya tetap terjaga dan operasinya dapat dibalik. ([[archives/Apa Itu Quantum Gates Fondasi Revolusi Komputasi Modern.md]])

## Gerbang satu qubit

- **Hadamard (H):** mengubah keadaan basis menjadi superposisi dengan amplitudo yang sama, tetapi hasil untuk $|0\rangle$ dan $|1\rangle$ memiliki pola fase berbeda.
- **Pauli-X:** menukar $|0\rangle$ dan $|1\rangle$; mirip NOT klasik pada keadaan basis.
- **Pauli-Y:** menukar keadaan basis sekaligus mengubah fase kompleks.
- **Pauli-Z:** mempertahankan $|0\rangle$ dan memberi faktor fase negatif pada $|1\rangle$.
- **Rotasi $R_x$, $R_y$, dan $R_z$:** memutar keadaan qubit dengan sudut tertentu terhadap sumbu Bloch.
- **S dan T:** gerbang fase masing-masing sebesar $\pi/2$ dan $\pi/4$.

Gerbang satu qubit dapat divisualisasikan sebagai rotasi pada Bloch sphere, tetapi visualisasi ini hanya berlaku langsung untuk keadaan satu qubit murni.

## Gerbang multi-qubit

- **CNOT:** membalik qubit target ketika qubit kontrol berada pada $|1\rangle$ dalam keadaan basis. CNOT dapat menghasilkan entanglement jika inputnya tepat, tetapi tidak otomatis mengentangkan setiap pasangan qubit.
- **Toffoli atau CCNOT:** membalik target jika kedua kontrol bernilai $|1\rangle$ dan juga digunakan dalam komputasi klasik reversibel.
- **SWAP:** menukar keadaan dua qubit dan dapat dipakai ketika konektivitas perangkat membatasi pasangan qubit yang bisa berinteraksi langsung.

## Universalitas

Himpunan gerbang seperti Clifford+T dapat mengaproksimasi operasi uniter dengan ketelitian arbitrer. H, CNOT, dan T umum dipakai sebagai contoh himpunan universal. Kata "universal" tidak berarti satu rangkaian pendek dapat menjalankan semua algoritma secara persis atau efisien; operasi perlu didekomposisi dan jumlah gerbangnya dapat besar.

## Koreksi dan batas sumber

- Qubit tidak sebaiknya disebut menyimpan lebih banyak informasi klasik yang dapat dibaca daripada satu bit. Keadaannya memerlukan amplitudo kompleks, tetapi pengukuran satu qubit tetap menghasilkan satu bit klasik.
- Superposisi bukan "campuran" klasik dan tidak berarti seluruh kemungkinan dapat dibaca bersamaan.
- CNOT hanya dapat menciptakan entanglement pada input tertentu, misalnya ketika qubit kontrol sudah berada dalam superposisi.
- Entanglement tidak berarti keadaan satu qubit mengirim pengaruh atau informasi secara instan ke qubit jauh. Analogi dua dadu yang selalu sama hanya menggambarkan korelasi secara lemah dan dapat menyesatkan.
- Transformasi uniter menggambarkan evolusi sistem tertutup. Pengukuran, reset, noise, dan kanal kuantum umum tidak semuanya berupa gerbang uniter pada sistem yang diamati.
- Reversibilitas bukan alasan langsung bahwa gerbang kuantum menjaga kestabilan atau menjadi mekanisme koreksi kesalahan. Koreksi kesalahan membutuhkan encoding, syndrome measurement, operasi koreksi, dan toleransi kesalahan.
- Klaim penerapan pada AI, logistik, obat, dan kriptografi tidak disertai rujukan atau bukti hasil praktis dalam artikel; perlakukan sebagai area riset atau potensi, bukan manfaat yang sudah mapan.
- Penulis dan tanggal publikasi tidak tercantum pada clipping, sehingga otoritas dan kemutakhiran sumber tidak dapat dinilai dengan baik.

## Relevansi untuk creator

Sumber menambah bahan untuk bagian quantum gate dalam [[Menjelaskan Komputer Kuantum Tanpa Menyesatkan]], terutama perbedaan gerbang satu qubit dan multi-qubit. Artikel ini cocok sebagai daftar awal, bukan sumber teknis final. Matriks gerbang, contoh rangkaian Bell, universalitas, dan hubungan gate dengan perangkat fisik perlu diverifikasi melalui buku ajar atau dokumentasi resmi sebelum menjadi narasi video.

## Terkait

- [[Dasar Komputasi Kuantum]]
- [[Quantum Computers Explained – Limits of Human Technology]]
- [[Menjelaskan Komputer Kuantum Tanpa Menyesatkan]]
