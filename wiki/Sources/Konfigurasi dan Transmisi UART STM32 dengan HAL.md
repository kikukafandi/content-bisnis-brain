---
title: Konfigurasi dan Transmisi UART STM32 dengan HAL
date: 2026-09-09
tags:
  - source-summary
  - stm32
  - uart
  - embedded
sources:
  - "[[archives/STM32 UART Tutorial Configure & Transmit Data (HAL).md]]"
status: active
---

# Konfigurasi dan Transmisi UART STM32 dengan HAL

Sumber menjelaskan alur dasar mengirim data dari STM32 ke serial monitor melalui UART dalam blocking mode: memilih mode asynchronous di STM32CubeMX, menyamakan format komunikasi, menghubungkan perangkat, lalu memanggil `HAL_UART_Transmit()`. Konfigurasi contoh memakai baud rate 115200, 8 data bit, tanpa parity, dan 1 stop bit. ([[archives/STM32 UART Tutorial Configure & Transmit Data (HAL).md]])

Board Nucleo atau Discovery tertentu memiliki Virtual COM Port melalui ST-Link. Board tanpa fitur itu memerlukan USB-to-UART seperti FT232, dengan koneksi silang STM32 TX ke adapter RX dan STM32 RX ke adapter TX. Dukungan Virtual COM Port harus diperiksa pada skematik board.

String dapat dikirim langsung sebagai byte. Angka perlu diformat menjadi teks terlebih dahulu, misalnya dengan `sprintf()`. Argumen panjang pada `HAL_UART_Transmit()` harus sesuai jumlah byte; nilai terlalu kecil memotong data, sedangkan nilai terlalu besar dapat mengirim byte di luar string. Untuk string dinamis, sumber menyarankan `strlen()`.

Output kosong atau rusak paling sering berkaitan dengan baud rate atau frame format yang berbeda, pin TX/RX salah, COM port salah, atau koneksi USB tidak melalui port ST-Link yang menyediakan Virtual COM Port. Blocking mode mudah digunakan untuk debug sederhana, tetapi menahan CPU sampai transmisi selesai; interrupt atau DMA lebih cocok ketika loop bersifat time-critical atau payload besar.

> [!warning]
> Tutorial ini adalah referensi teknis, bukan bukti bahwa creator pernah memakai STM32, CubeMX, atau `HAL_UART_Transmit()`.

## Terkait

- [[UART STM32 dalam Blocking Mode]]
