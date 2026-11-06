---
title: Roadmap Belajar Embedded untuk Pemula
status: siap-rekam
tags:
  - produksi
  - embedded
  - elektronika
  - programming
format: long-form
estimasi-durasi: 8-10 menit
---

# Roadmap Belajar Embedded untuk Pemula

## Sudut video

Roadmap berdasarkan hal-hal yang aku rasa perlu dipelajari ketika masuk ke embedded dari sisi software. Aku bukan ahli embedded, tetapi pernah belajar dan mengerjakan beberapa project IoT, termasuk alat pendeteksi untuk client. Bagian yang paling membuatku kesulitan justru elektronika dan membaca rangkaian.

## Pilihan judul

1. **Mau Belajar Embedded? Mulai dari 6 Hal Ini**
2. **Roadmap Belajar Embedded untuk Pemula, Mulai dari Mana?**
3. **Sebelum Belajar ESP32, Pahami Roadmap Embedded Ini**

# Script

## Hook

Kalau kalian ingin belajar embedded, mungkin kalian bingung harus mulai dari elektronika, coding, atau langsung mencoba board seperti Arduino dan ESP32.

Aku juga sempat bingung menentukan urutannya. Apalagi sebelumnya aku lebih terbiasa dengan software, jadi ada beberapa dasar elektronika dan rangkaian yang perlu aku pelajari lagi.

Setelah belajar dan mengerjakan beberapa project IoT, aku mulai punya gambaran tentang fondasi yang cukup sering dipakai.

Di video ini aku mau membagikan urutan belajar embedded yang menurutku masuk akal untuk pemula. Ini bukan aturan baku dan aku juga masih belajar, jadi anggap saja sebagai peta awal yang bisa kalian sesuaikan dengan project masing-masing.

## Embedded itu sebenarnya belajar apa?

Sebelum masuk ke roadmap-nya, kita perlu memahami dulu bahwa embedded itu bukan cuma soal menulis kode di Arduino IDE, terus mengunggahnya ke ESP32.

Karena di dalam satu project embedded, ada beberapa hal yang bekerja bersamaan.

Ada rangkaian elektroniknya. Ada program atau firmware yang mengatur perangkatnya. Ada sensor yang memberikan data. Kadang ada komunikasi antarperangkat. Kalau sudah masuk IoT, ada Wi-Fi, server, database, bahkan dashboard juga.

Makanya project embedded sering kelihatan gampang ketika kita mengikuti tutorial.

Kabelnya tinggal mengikuti gambar. Kodenya tinggal disalin. Terus alatnya menyala.

Masalah sebenarnya baru muncul ketika kita mencoba bikin sendiri atau ketika alatnya tiba-tiba nggak bekerja.

Kodenya berhasil di-compile. Board-nya menyala. Tapi sensor mengeluarkan angka aneh. Relay-nya nggak mau aktif. Atau perangkatnya restart setiap kali Wi-Fi dinyalakan.

Nah, supaya kita nggak cuma bisa mengikuti tutorial, menurutku fondasi pertama yang perlu dipelajari adalah elektronika dasar.

## Mulai dari elektronika dasar

Tenang, kalian nggak harus langsung bisa menghitung rangkaian yang memenuhi satu papan tulis.

Untuk awal, cukup pahami dulu apa itu tegangan, arus, hambatan, dan daya. Setelah itu, baru masuk ke Hukum Ohm.

Hukum Ohm membantu kita memahami hubungan antara tegangan, arus, dan hambatan. Rumusnya memang sederhana: tegangan sama dengan arus dikali hambatan.

Tapi yang lebih penting bukan sekadar hafal rumusnya. Kita perlu tahu kapan konsep itu dipakai.

Misalnya ketika mau menyalakan LED. Kita nggak seharusnya langsung menyambungkan LED ke sumber tegangan tanpa memikirkan arus yang masuk. Kita butuh resistor untuk membatasi arus supaya LED-nya nggak langsung pensiun di hari pertama.

Setelah Hukum Ohm, pelajari juga Hukum Kirchhoff secara dasar. Nggak harus sampai langsung jago mengerjakan soal yang rangkaiannya bercabang ke mana-mana.

Minimal kita mulai paham bagaimana arus mengalir, bagaimana tegangan terbagi, serta perbedaan rangkaian seri dan paralel.

Di tahap ini, pahami juga soal polaritas, ground, dan batas tegangan komponen.

Ini penting karena di software, kalau kita salah biasanya programnya error. Di elektronika, kalau salah, kadang komponen yang menyampaikan error lewat asap.

## Kenalan dengan komponen

Kalau konsep dasarnya sudah mulai kebayang, lanjut kenalan dengan komponen yang sering dipakai.

Mulai saja dari resistor, LED, push button, kapasitor, diode, transistor, buzzer, relay, dan sensor.

Nggak perlu langsung menghafal semua jenis dan spesifikasinya. Bahkan komponen elektronik itu banyak banget. Kalau semuanya mau dihafalkan dulu, project-nya mungkin baru mulai setelah lulus.

Untuk setiap komponen, cukup biasakan menanyakan tiga hal.

Komponen ini fungsinya apa? Punya polaritas atau nggak? Terus batas tegangan dan arusnya berapa?

Resistor, misalnya, bisa dipakai untuk membatasi arus. Push button menjadi input. Kapasitor bisa membantu menyimpan muatan atau menstabilkan tegangan. Sensor membaca kondisi tertentu, lalu mengubahnya menjadi data yang bisa diproses mikrokontroler.

Kalau ketemu relay, kalian juga perlu lebih hati-hati. Relay memang bisa dipakai untuk mengendalikan beban lain, tapi bukan berarti pemula harus langsung mencoba listrik PLN.

Mulai dulu dari rangkaian bertegangan rendah. Belajar embedded nggak perlu dibuka dengan adu keberanian melawan listrik rumah.

Dan menurutku, cara paling enak untuk mengenal komponen adalah langsung memakainya dalam project kecil.

Coba nyalakan satu LED. Setelah itu baca satu push button. Lalu coba ambil data dari satu sensor.

Dari latihan sederhana seperti itu, kita mulai melihat hubungan antara teori elektronika, bentuk komponen asli, dan kode yang kita tulis.

## Belajar membaca rangkaian

Nah, setelah mengenal komponennya, ada satu kemampuan yang dulu cukup bikin aku bingung: membaca schematic atau diagram rangkaian.

Waktu pertama melihat schematic, yang kelihatan cuma garis ke mana-mana dan simbol-simbol yang seolah dibuat supaya pemula minder.

Padahal kalau dipelajari pelan-pelan, schematic itu sebenarnya cuma cara untuk menunjukkan komponen apa yang dipakai dan bagaimana semuanya saling terhubung.

Mulai dari mengenali simbol dasar dulu. Simbol resistor, kapasitor, diode, transistor, ground, sumber tegangan, dan titik koneksi.

Setelah itu, ambil schematic yang sangat sederhana. Misalnya rangkaian LED dengan resistor atau push button. Coba pindahkan rangkaian itu ke breadboard.

Di sini kalian akan belajar bahwa gambar rangkaian dan bentuk fisiknya memang kelihatan berbeda, tetapi koneksinya tetap sama.

Selain schematic, biasakan juga membaca dokumentasi atau datasheet komponen.

Memang tampilan datasheet kadang nggak ramah buat pemula. Halamannya banyak, tabelnya banyak, dan semuanya terlihat penting.

Kita nggak harus langsung membaca semuanya. Cari dulu informasi yang dibutuhkan: susunan pin, tegangan kerja, batas arus, dan cara komponen itu berkomunikasi.

Kebiasaan ini penting karena ketika alat nggak bekerja, datasheet biasanya lebih bisa dipercaya daripada tebakan kita sendiri.

Targetnya bukan langsung bisa merancang rangkaian yang kompleks. Minimal kita bisa melihat diagram sederhana, memahami jalurnya, lalu memasangnya tanpa sepenuhnya menebak.

## Masuk ke pemrograman C

Kalau elektronikanya sudah mulai dipahami, barulah kita masuk lebih jauh ke bagian firmware.

Untuk embedded, dasar pemrograman C sangat membantu.

Mulai dari variabel, tipe data, operator, percabangan, perulangan, fungsi, dan array. Setelah itu, pelajari pointer secara bertahap.

Kalian nggak harus menguasai semua hal tentang C sebelum menyentuh mikrokontroler. Kalau menunggu paham pointer sampai level dewa dulu, LED-nya nggak akan pernah menyala.

Yang penting, kalian bisa membaca alur program dan memahami data bergerak dari mana ke mana.

Misalnya, mikrokontroler membaca nilai dari sensor. Nilai itu dibandingkan dengan batas tertentu. Kalau melewati batas, program menyalakan LED, buzzer, atau output lain.

Sesederhana itu dulu nggak masalah.

Setelah mulai nyaman, lanjut pelajari input-output digital, pembacaan analog, PWM, timer, dan interrupt. Nggak perlu sekaligus. Ambil sesuai kebutuhan project.

Kalau memakai Arduino framework, kita memang dibantu oleh fungsi seperti `setup()` dan `loop()`, juga banyak library yang tinggal dipakai.

Itu bagus untuk mulai. Tapi usahakan jangan berhenti di tahap menyalin kode.

Coba pahami baris mana yang mengatur pin, bagian mana yang membaca sensor, datanya berbentuk apa, dan kapan output dijalankan.

Karena nanti ketika project-nya bermasalah, kita perlu tahu bagian mana yang harus diperiksa. Bukan cuma mengganti library sambil berharap nasib berubah.

## Kenali mikrokontroler yang dipakai

Setelah dasar C, kenali board yang kalian gunakan. Bisa Arduino, ESP32, STM32, atau board lain yang memang sudah tersedia.

Nggak perlu sibuk mencari board yang paling canggih. Satu board yang benar-benar dipahami jauh lebih berguna daripada lima board yang cuma masuk keranjang belanja.

Pelajari pin mana yang bisa digunakan sebagai input dan output, berapa tegangan logikanya, pin mana yang mendukung pembacaan analog, serta apa saja keterbatasannya.

Soalnya dua pin yang bentuknya sama belum tentu punya fungsi yang sama.

Setelah itu, kalian akan mulai bertemu dengan komunikasi seperti UART, I2C, dan SPI.

Nama-namanya memang kelihatan banyak. Tapi lagi-lagi, jangan dipelajari semuanya sekaligus hanya karena ada di roadmap.

Kalau sensor yang kalian pakai menggunakan I2C, pelajari I2C. Kalau ingin membaca data serial, pelajari UART. Kalau project-nya membutuhkan SPI, baru masuk ke SPI.

Belajar berdasarkan kebutuhan project biasanya lebih mudah menempel daripada mempelajari semuanya tanpa tahu mau dipakai untuk apa.

## Baru lanjut ke IoT

Kalau board sudah bisa membaca sensor dan mengendalikan output dengan stabil, barulah masuk ke bagian IoT.

Misalnya menghubungkan ESP32 ke Wi-Fi, mengirim data ke server, memakai API atau MQTT, menyimpan data, lalu menampilkannya di dashboard.

Bagian ini memang kelihatan paling menarik karena hasilnya bisa dilihat dari laptop atau HP.

Tapi IoT tetap berdiri di atas rangkaian dan firmware yang bekerja dengan benar.

Dashboard-nya boleh cantik. Grafiknya boleh bergerak. Tapi kalau sensornya salah baca, kita cuma sedang menampilkan data yang salah dengan desain yang bagus.

Makanya jangan buru-buru menghubungkan semuanya ke internet kalau pembacaan sensornya saja belum stabil.

Pastikan satu bagian bekerja dulu, baru tambahkan bagian berikutnya.

## Belajar debugging

Dan dari semua hal tadi, ada satu kemampuan yang pasti terus dipakai: debugging.

Karena membuat project embedded itu sebagian waktunya dipakai untuk merakit. Sebagian lagi dipakai untuk menatap rangkaian sambil bertanya, “Ini kenapa lagi?”

Kalau alatnya nggak bekerja, biasakan mengecek dari hal paling dasar.

Sumber dayanya benar nggak? Ground-nya sudah terhubung? Pin yang dipakai sesuai? Ada komponen yang terbalik? Sensor mengirim data? Programnya benar-benar masuk ke bagian yang kita harapkan?

Gunakan serial monitor untuk melihat nilai dan alur program. Kalau punya multimeter, gunakan untuk mengecek tegangan dan koneksi.

Lalu pisahkan masalah hardware dan software.

Misalnya sensor nggak terbaca. Jangan langsung mengujinya di dalam program besar yang sudah terhubung ke Wi-Fi, database, dan dashboard.

Buat program paling sederhana yang hanya membaca sensor itu. Kalau sudah bekerja, baru gabungkan lagi dengan bagian lainnya.

Karena kalau semua fitur dipasang sekaligus lalu gagal, kita bukan lagi mencari satu masalah. Kita sedang mengumpulkan tersangka.

## Urutan project untuk belajar

Kalau seluruh roadmap tadi disederhanakan menjadi urutan project, aku akan mulai seperti ini.

Project pertama: nyalakan LED dan baca push button. Dari sini kita belajar output, input, resistor, dan rangkaian sederhana.

Setelah itu, baca satu sensor lalu tampilkan nilainya di serial monitor.

Kalau sudah berhasil, gunakan nilai sensor itu untuk mengendalikan output. Misalnya LED atau buzzer menyala ketika nilainya melewati batas tertentu.

Berikutnya, tambahkan display atau coba komunikasi antarperangkat.

Baru setelah semuanya cukup stabil, kirim datanya melalui Wi-Fi ke server atau dashboard sederhana.

Dengan urutan seperti ini, setiap project hanya menambahkan sedikit hal baru.

Jadi kalau ada yang gagal, kita masih punya gambaran bagian mana yang kemungkinan bermasalah.

## Penutup

Jadi kalau kalian ingin mulai belajar embedded, urutannya kurang lebih begini.

Mulai dari elektronika dasar. Kenali komponen. Belajar membaca rangkaian dan datasheet. Pelajari dasar C. Kenali mikrokontroler yang dipakai. Setelah itu baru masuk ke komunikasi, debugging, dan project IoT.

Tapi roadmap ini bukan checklist yang harus diselesaikan semuanya sebelum mulai bikin sesuatu.

Menurutku justru lebih enak kalau teori dan praktik berjalan bareng.

Pilih project kecil. Mulai kerjakan. Ketika mentok, cari tahu konsep apa yang belum dipahami. Pelajari bagian itu, lalu coba lagi.

Aku sendiri masih belajar dan belum menguasai semuanya. Tapi setelah mengerjakan beberapa project IoT, fondasi-fondasi ini yang menurutku paling membantu supaya kita nggak cuma bisa mengikuti tutorial, tapi mulai memahami alat yang sedang kita buat.

Kalau kalian baru mulai belajar embedded, bagian mana yang paling bikin bingung: elektronikanya, coding-nya, atau membaca rangkaiannya?

# Poin Pembahasan Saat Rekam

Gunakan bagian ini sebagai peta bicara. Nggak perlu mengikuti kalimat di script secara persis.

## Hook

- Aku sudah bisa ngoding, tetapi tetap bingung ketika mulai belajar embedded.
- Ternyata masalah terbesarku bukan coding, melainkan elektronika dan membaca rangkaian.
- Ceritakan satu contoh singkat: kode tidak error, tetapi alat tetap tidak bekerja.
- Jelaskan bahwa roadmap ini berasal dari proses belajar dan beberapa project IoT yang pernah dikerjakan.
- Tekankan bahwa ini bukan aturan baku dan aku juga masih belajar.

## Gambaran embedded

- Embedded bukan sekadar menulis kode lalu mengunggahnya ke ESP32.
- Dalam satu project ada hardware, firmware, sensor, komunikasi, dan kadang sistem IoT.
- Tutorial terlihat mudah karena rangkaian dan kode sudah disediakan.
- Kesulitan sebenarnya muncul ketika membuat sendiri atau mencari penyebab alat gagal.
- Transisi: karena itu, fondasi pertama yang perlu dipahami adalah elektronika.

## 1. Elektronika dasar

- Bahas tegangan, arus, hambatan, dan daya secara singkat.
- Hukum Ohm tidak cukup dihafal; jelaskan kapan dipakai.
- Gunakan LED dan resistor sebagai contoh sederhana.
- Singgung seri, paralel, polaritas, ground, dan batas tegangan komponen.
- Ceritakan perbedaan error software dan kesalahan elektronika dengan gaya santai.
- Pesan utama: tidak perlu langsung jago hitungan rumit.

## 2. Kenalan dengan komponen

- Sebutkan komponen yang sering ditemui: resistor, LED, tombol, kapasitor, diode, transistor, buzzer, relay, dan sensor.
- Untuk setiap komponen, tanyakan tiga hal: fungsi, polaritas, serta batas tegangan dan arus.
- Tidak perlu menghafal semua jenis komponen sebelum mulai membuat project.
- Mulai dari tegangan rendah; jangan menjadikan listrik PLN sebagai latihan pemula.
- Latihan paling sederhana: LED, tombol, lalu satu sensor.
- Pesan utama: kenali komponen sambil langsung memakainya.

## 3. Membaca rangkaian dan datasheet

- Ceritakan bahwa schematic awalnya terlihat seperti garis dan simbol yang membingungkan.
- Jelaskan bahwa schematic hanya menunjukkan komponen dan koneksinya.
- Mulai dengan simbol dasar dan rangkaian LED yang sederhana.
- Coba pindahkan schematic sederhana ke breadboard.
- Saat membuka datasheet, fokus dulu pada pin, tegangan kerja, batas arus, dan protokol komunikasi.
- Pesan utama: target awalnya memahami jalur sederhana, bukan merancang rangkaian kompleks.

## 4. Dasar pemrograman C

- Bahas variabel, tipe data, operator, percabangan, perulangan, fungsi, dan array.
- Pointer dipelajari bertahap; tidak perlu menunggu menguasainya untuk mulai praktik.
- Gunakan alur sederhana: baca sensor, bandingkan nilai, lalu aktifkan output.
- Setelah itu masuk ke digital I/O, analog, PWM, timer, dan interrupt sesuai kebutuhan.
- Arduino framework boleh dipakai untuk mulai, tetapi jangan hanya menyalin kode.
- Pesan utama: pahami alur program dan pergerakan datanya.

## 5. Kenali mikrokontroler

- Pilih board yang memang tersedia; tidak harus membeli yang paling canggih.
- Pelajari pin input-output, tegangan logika, pin analog, dan keterbatasan board.
- Jelaskan bahwa pin yang terlihat sama belum tentu punya fungsi yang sama.
- Kenalkan UART, I2C, dan SPI tanpa menjelaskan semuanya terlalu dalam.
- Pelajari protokol yang sedang dibutuhkan project.
- Pesan utama: satu board yang dipahami lebih berguna daripada banyak board yang cuma dimiliki.

## 6. Masuk ke IoT

- Masuk ke Wi-Fi, server, API atau MQTT, database, dan dashboard setelah sensor serta output stabil.
- Jelaskan bahwa dashboard bagus tidak bisa memperbaiki data sensor yang salah.
- Tambahkan fitur satu per satu agar sumber masalah masih mudah ditemukan.
- Pesan utama: pastikan fondasi hardware dan firmware bekerja sebelum menambah internet.

## 7. Debugging

- Mulai pengecekan dari daya, ground, pin, polaritas, sensor, lalu alur program.
- Gunakan serial monitor untuk melihat data dan jalannya program.
- Gunakan multimeter jika tersedia untuk mengecek tegangan dan koneksi.
- Pisahkan masalah hardware dan software.
- Uji komponen dengan program paling kecil sebelum dimasukkan kembali ke project besar.
- Pesan utama: jangan mencari masalah ketika semua fitur diuji sekaligus.

## Urutan project latihan

- LED dan push button.
- Membaca satu sensor ke serial monitor.
- Menggunakan nilai sensor untuk mengendalikan LED atau buzzer.
- Menambahkan display atau komunikasi antarperangkat.
- Mengirim data melalui Wi-Fi ke server atau dashboard sederhana.
- Tekankan bahwa setiap project hanya menambahkan satu hal baru.

## Penutup

- Ringkas urutan roadmap tanpa menjelaskan ulang semuanya.
- Ingatkan bahwa roadmap bukan checklist yang harus selesai sebelum mulai membuat project.
- Sarankan belajar teori dan praktik secara bersamaan.
- Pilih project kecil, kerjakan, cari konsep yang belum dipahami saat mentok, lalu coba lagi.
- Tegaskan kembali bahwa aku juga masih belajar.
- Tutup dengan pertanyaan: bagian mana yang paling membingungkan—elektronika, coding, atau rangkaian?

## Ringkasan roadmap di layar

1. Elektronika dasar
2. Komponen dasar
3. Schematic dan datasheet
4. Pemrograman C
5. Mikrokontroler dan peripheral
6. UART, I2C, dan SPI
7. Debugging hardware dan software
8. Project kecil menuju IoT

## Rencana visual

- Hook: talking head diselingi board, sensor, dan rangkaian yang memang tersedia.
- Elektronika: tampilkan `V = I × R` dan contoh LED dengan resistor.
- Komponen: close-up resistor, tombol, kapasitor, sensor, dan relay yang tersedia.
- Schematic: tampilkan diagram LED sederhana, lalu rangkaian fisiknya di breadboard.
- C: screen recording program pembacaan sensor sederhana.
- Komunikasi: diagram `sensor → mikrokontroler → Wi-Fi → server/dashboard`.
- Debugging: rekam serial monitor dan penggunaan multimeter jika tersedia.
- Penutup: tampilkan roadmap lengkap sebagai checklist.
- Editing cukup talking head, jump cut, teks kata kunci, dan B-roll asli.

## Catatan klaim

- Jangan menyebut diri sebagai ahli embedded.
- Project client cukup disebut sebagai project IoT atau alat pendeteksi.
- Jangan memberikan detail project yang bersifat rahasia atau belum diizinkan client.
- Roadmap disampaikan sebagai urutan yang disarankan berdasarkan pengalaman, bukan satu-satunya cara yang benar.
- Jangan menangani listrik PLN dalam demonstrasi.
