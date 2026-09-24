# Bahan Mentah — Aku Kebanyakan Tutorial tapi Tetap Mandek Belajar Embedded

## Jawaban mentah

**Pertanyaan:** Tutorial atau materi embedded apa yang paling sering kamu konsumsi tapi akhirnya tidak benar-benar kamu praktikkan?

**Jawaban:** alat alat iot hanya sekedar tau

**Pertanyaan:** Alat IoT apa yang waktu itu cuma kamu pelajari namanya atau fungsinya, tapi belum pernah kamu pakai langsung?

**Jawaban:** otomatis lampu dengan remot control lewat api ke hp esp32

**Pertanyaan:** Waktu mencoba bikin lampu yang dikontrol HP lewat API dan ESP32 itu, kamu berhenti atau stuck tepat di bagian apa?

**Jawaban:** berhenti karena kebakar,, vcc +  gnd nya nyamung mengakibatkan kebarakan komponen sampai akhir nya esp ikut konslet

**Pertanyaan:** Waktu komponen mulai kebakar sampai ESP ikut korslet, kamu lagi di mana dan apa reaksi atau kalimat pertama yang kamu ucapkan?

**Jawaban:** aku mengerjakan di kos dan reaksi kok terkejut

**Pertanyaan:** Pas terkejut itu, apa yang persis kamu lakukan pertama kali—cabut kabel, matikan listrik, diam, atau tindakan lain?

**Jawaban:** cabut kabel vcc 

**Pertanyaan:** Setelah kabel VCC dicabut, kerusakan apa saja yang kamu lihat atau cek pada komponen dan ESP32?

**Jawaban:** esp softrest karena ngeshort di wifi

**Pertanyaan:** Gimana kamu tahu ESP32 mengalami soft reset karena short saat Wi-Fi aktif—pesan apa yang muncul atau perilaku apa yang kamu lihat?

**Jawaban:** saat wifi aku nyalakan / gunakan reset sendiri terus dan ketika tidak menggunakan wifi esp nya bisa

**Pertanyaan:** Berapa lama kamu debugging sebelum sadar polanya: Wi-Fi dipakai ESP32 reset terus, Wi-Fi tidak dipakai ESP32 masih jalan?

**Jawaban:** 2 minggu

**Pertanyaan:** Selama dua minggu itu, apa saja yang kamu coba untuk mencari penyebab ESP32 reset sendiri?

**Jawaban:** cari solve di youtube

**Pertanyaan:** Di YouTube, solusi apa saja yang kamu coba, dan hasilnya bagaimana pada ESP32-mu?

**Jawaban:** semua cara, tidak ada hasilnya

**Pertanyaan:** Dari “semua cara” itu, satu cara yang paling kamu ingat sempat kamu coba apa?

**Jawaban:** install ulang driver

**Pertanyaan:** Saat install ulang driver tetap tidak menyelesaikan reset-nya, apa yang kamu katakan ke diri sendiri waktu itu?

**Jawaban:** kiamat

**Pertanyaan:** Apa yang akhirnya bikin kamu sadar masalahnya bukan driver atau kode, tapi ESP32-nya sudah rusak karena korslet?

**Jawaban:** masalahnya mungkin di regulator

**Pertanyaan:** Apa yang membuatmu menduga regulator ESP32 yang bermasalah—ada hasil pengukuran, gejala fisik, atau cuma kesimpulan dari pola Wi-Fi reset?

**Jawaban:** ada artikel membahas itu tapi aku lupa,  karena tegangan tidak cukup mungkkin

**Pertanyaan:** Setelah dua minggu baru menduga tegangannya tidak cukup, apa yang kamu harap seseorang bilang ke kamu sebelum mulai merangkai proyek itu?

**Jawaban:** ingin aku kontenin proses nya

**Pertanyaan:** Kalau proses itu dijadikan konten, momen mana yang paling wajib masuk: komponen kebakar, ESP32 reset saat Wi-Fi aktif, dua minggu cari solusi, atau saat bilang “kiamat”?

**Jawaban:** tidak jadi, semuanya aku urungkan dan tidak kepikiran

**Pertanyaan:** Setelah proyeknya kamu urungkan, apa pelajaran paling konkret yang kamu bawa kalau nanti mencoba proyek ESP32 lagi?

**Jawaban:** siapkan banyak esp cadangan wkwk

## Celah yang masih kosong

- Alat atau komponen selain ESP32 yang terbakar belum disebutkan.
- Penyebab teknis kerusakan regulator atau kekurangan tegangan belum terverifikasi.
- Detail rangkaian, API, aplikasi HP, dan tahap proyek sebelum kebakaran belum ada.
- Alasan awal memilih proyek lampu remote belum ada.
- Insight serius selain menyiapkan ESP cadangan belum ada.
- Hubungan cerita ini dengan kebiasaan terlalu banyak menonton tutorial masih lemah; bahan yang muncul lebih kuat sebagai cerita ESP32 rusak dan reset saat Wi-Fi aktif.
