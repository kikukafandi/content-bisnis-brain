---
title: Dasar Komputasi Kuantum
date: 2026-09-23
tags:
  - topic
  - quantum-computing
  - computer-science
---

# Dasar Komputasi Kuantum

Komputer kuantum adalah sistem komputasi yang mengendalikan keadaan kuantum untuk menjalankan algoritma tertentu. Perbedaannya dari komputer klasik bukan sekadar mengganti bit dengan qubit, tetapi juga cara keadaan direpresentasikan, diubah, diinterferensikan, dan diukur. ([[Quantum Computers Explained – Limits of Human Technology]])

## Model sederhana

1. **Persiapan:** qubit diatur ke keadaan awal.
2. **Transformasi:** gerbang kuantum mengubah amplitudo dan fase keadaan.
3. **Korelasi:** operasi multi-qubit dapat menghasilkan entanglement.
4. **Interferensi:** algoritma memperkuat amplitudo hasil yang berguna dan melemahkan hasil lain.
5. **Pengukuran:** keadaan kuantum menghasilkan keluaran klasik secara probabilistik.
6. **Pengulangan:** rangkaian dijalankan berkali-kali untuk memperoleh distribusi hasil.

## Istilah inti

- **Qubit:** unit informasi kuantum dengan keadaan yang direpresentasikan oleh amplitudo kompleks.
- **Superposisi:** kombinasi keadaan dasar sebelum pengukuran, bukan dua nilai klasik yang bisa dibaca bersamaan.
- **Fase:** bagian keadaan kuantum yang memungkinkan amplitudo saling memperkuat atau meniadakan.
- **Entanglement:** keadaan gabungan yang tidak dapat diuraikan menjadi keadaan independen tiap qubit.
- **Quantum gate:** transformasi uniter dan reversibel terhadap keadaan qubit dalam model rangkaian kuantum. Gerbang satu qubit seperti H, X, Y, Z, S, T, dan rotasi mengubah amplitudo atau fase; gerbang multi-qubit seperti CNOT, Toffoli, dan SWAP mengatur interaksi antarqubit. ([[Apa Itu Quantum Gates - Fondasi Revolusi Komputasi Modern]])
- **Measurement:** proses memperoleh hasil klasik sesuai probabilitas amplitudo.
- **Decoherence dan noise:** hilangnya informasi kuantum atau munculnya kesalahan akibat interaksi dengan lingkungan dan kontrol yang tidak sempurna.

## Batas pemahaman penting

- Komputer kuantum tidak otomatis lebih cepat untuk semua masalah.
- Memiliki $n$ qubit tidak berarti kita dapat membaca seluruh $2^n$ kemungkinan hasil.
- Keuntungan muncul ketika algoritma memanfaatkan struktur masalah, interferensi, dan pengukuran secara tepat.
- Entanglement menghasilkan korelasi kuat, tetapi bukan saluran komunikasi seketika.
- Perangkat nyata harus menghadapi noise dan membutuhkan koreksi kesalahan untuk komputasi panjang yang andal.

## Contoh kelas masalah

- **Simulasi kuantum:** memodelkan molekul, material, dan sistem kuantum.
- **Faktorisasi:** algoritma Shor secara teoretis mengancam skema kriptografi tertentu pada mesin toleran-kesalahan yang cukup besar.
- **Pencarian tak terstruktur:** algoritma Grover menawarkan percepatan kuadratik, bukan pencarian instan.

## Batas editorial

Gunakan analogi hanya setelah mekanismenya dinyatakan. Hindari klaim "semua jawaban dihitung sekaligus", "entanglement mengirim informasi instan", atau "komputer kuantum akan menggantikan komputer biasa". Pisahkan konsep mapan, potensi penggunaan, dan status teknologi terbaru; bagian terakhir wajib memakai sumber mutakhir.

## Terkait

- [[Quantum Computers Explained – Limits of Human Technology]]
- [[Apa Itu Quantum Gates - Fondasi Revolusi Komputasi Modern]]
- [[Kuliah]]
