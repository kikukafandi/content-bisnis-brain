---
title: Core Web Vitals untuk Mahasiswa yang Baru Belajar SEO
tags:
  - produksi
  - seo
  - web-performance
status: siap-rekam
---

# Core Web Vitals untuk Mahasiswa yang Baru Belajar SEO

## Sudut video
Rangkuman mahasiswa ke mahasiswa tentang Core Web Vitals. Fokus memahami metrik dan arah optimasi, bukan mengklaim sebagai ahli atau menjanjikan ranking Google naik.

## Materi inti

### Apa itu Core Web Vitals?
Core Web Vitals adalah tiga metrik Google untuk mengukur pengalaman pengguna nyata pada halaman web:

- **LCP — Largest Contentful Paint:** seberapa cepat konten utama terlihat.
- **INP — Interaction to Next Paint:** seberapa cepat halaman merespons interaksi pengguna.
- **CLS — Cumulative Layout Shift:** seberapa stabil tata letak halaman.

### Ambang yang dianggap baik
- LCP: maksimal **2,5 detik**.
- INP: maksimal **200 milidetik**.
- CLS: maksimal **0,1**.
- Penilaian memakai persentil ke-75 dan dipisahkan antara perangkat mobile dan desktop.

### Tool gratis
- PageSpeed Insights untuk melihat data pengguna nyata jika tersedia dan hasil pengujian lab.
- Lighthouse di Chrome DevTools untuk diagnosis saat pengembangan.
- Search Console untuk laporan Core Web Vitals pada website yang dimiliki.

### Field data dan lab data
- **Field data:** pengalaman pengguna nyata selama 28 hari terakhir dari Chrome User Experience Report; tidak selalu tersedia untuk website baru atau trafik rendah.
- **Lab data:** simulasi pada kondisi perangkat dan jaringan tertentu; cocok untuk mencari masalah saat pengembangan.
- Skor lab bisa berubah antarpengujian karena kondisi jaringan, perangkat, dan resource yang tersedia.
- Skor Lighthouse 90 ke atas tergolong baik, tetapi skor hijau tidak otomatis berarti pengalaman semua pengguna sudah baik.

### Arah optimasi

#### LCP lambat
- Kompres dan gunakan ukuran gambar yang sesuai.
- Prioritaskan gambar atau konten utama; jangan lazy-load elemen LCP.
- Kurangi resource yang menghambat rendering.
- Perbaiki waktu respons server bila lambat.

#### INP tinggi
- Kurangi pekerjaan JavaScript yang panjang.
- Pecah tugas berat agar browser sempat merespons.
- Hindari event handler yang melakukan terlalu banyak pekerjaan.
- Kurangi script pihak ketiga yang tidak diperlukan.

#### CLS tinggi
- Tentukan `width` dan `height` atau rasio aspek gambar/video.
- Sediakan ruang untuk iklan, embed, dan konten dinamis.
- Hindari menyisipkan elemen baru di atas konten yang sudah tampil.
- Atur font agar pergantiannya tidak menggeser layout secara berlebihan.

### Hubungan dengan SEO
- Core Web Vitals membantu menilai pengalaman halaman dan termasuk salah satu sinyal pengalaman halaman Google.
- Nilai yang baik tidak menjamin ranking naik.
- Relevansi konten, kualitas, intent pencarian, crawlability, dan faktor lain tetap berpengaruh.
- Framing aman: `memperbaiki pengalaman pengguna dan kesehatan SEO teknis`, bukan `pasti menaikkan ranking`.

## Skrip siap ngomong sesuai slide

### Slide 1 — Skor 100 belum tentu terasa cepat

Waktu mulai belajar SEO, aku kira website yang penting bisa dibuka, kontennya muncul, terus selesai.

Ternyata pengalaman orang yang membuka website juga dilihat. Konten utamanya muncul secepat apa, tombolnya merespons atau malah bengong, dan isi halamannya stabil atau tiba-tiba geser sendiri.

Nah, tiga hal itu dirangkum dalam Core Web Vitals. Di video ini aku mau ngebahas versi yang sedang aku pahami: apa itu LCP, INP, dan CLS, terus bagian mana yang perlu dicek kalau nilainya jelek.

**Bridging ke slide 2:** Sebelum masuk ke istilah yang panjang-panjang, kita sederhanakan dulu. Core Web Vitals sebenarnya cuma ngecek tiga hal.

### Slide 2 — Tiga hal yang dicek

Yang pertama LCP. Ini berhubungan dengan seberapa cepat konten utama muncul.

Yang kedua INP. Ini melihat seberapa cepat halaman merespons setelah kita berinteraksi.

Yang ketiga CLS. Ini mengukur apakah layout halaman tetap stabil atau suka geser sendiri.

Jadi biar gampang diingat: munculnya cepat, pas diklik responsif, dan tampilannya nggak lompat-lompat.

**Bridging ke slide 3:** Kita mulai dari yang paling gampang dirasakan saat pertama membuka halaman, yaitu LCP.

### Slide 3 — LCP

LCP adalah Largest Contentful Paint. Namanya lumayan panjang, tapi pertanyaannya sederhana: bagian paling besar dan penting di halaman itu muncul kapan?

Biasanya elemen LCP berupa gambar besar, banner, atau judul utama yang pertama dilihat pengunjung. Nilai yang dianggap baik adalah maksimal dua setengah detik.

Kalau LCP lambat, jangan langsung panik terus kompres semua gambar ya, gais. Cari dulu elemen mana yang terbaca sebagai LCP. Setelah itu baru cek ukuran gambarnya, resource yang menghambat tampilan, dan respons servernya.

Satu hal yang perlu diperhatikan, elemen LCP biasanya jangan di-lazy-load. Kalau konten utamanya malah disuruh nunggu, ya dari awal kita sudah bikin dia telat muncul.

**Bridging ke slide 4:** Website bisa saja cepat terbuka, tapi masalah berikutnya baru terasa ketika mulai dipakai.

### Slide 4 — INP

Pernah klik tombol atau buka menu, tapi halamannya diem sebentar? Nah, bagian itu berhubungan dengan INP atau Interaction to Next Paint.

INP menghitung berapa lama halaman memberi respons visual setelah pengguna berinteraksi. Bisa saat klik tombol, membuka menu, atau mengetik di sebuah input. Target baiknya maksimal dua ratus milidetik.

Kalau nilainya tinggi, salah satu penyebabnya bisa jadi JavaScript sedang terlalu sibuk. Ada proses yang panjang, event handler terlalu berat, atau terlalu banyak script pihak ketiga.

Arah perbaikannya bukan selalu menghapus semua JavaScript. Coba pecah pekerjaan yang terlalu panjang, ringankan proses saat pengguna berinteraksi, lalu cek script mana yang sebenarnya nggak diperlukan.

**Bridging ke slide 5:** Kalau INP bikin tombol terasa lambat, metrik berikutnya bikin tombolnya malah pindah tempat.

### Slide 5 — CLS

Bayangin kalian mau klik tombol. Pas jarinya hampir sampai, tiba-tiba gambar muncul dan tombolnya turun. Akhirnya yang diklik malah bagian lain. Tombolnya bukan rusak, dia cuma menghindar.

Hal seperti itu diukur lewat CLS atau Cumulative Layout Shift. CLS melihat seberapa banyak isi halaman bergeser sendiri setelah mulai tampil. Nilai yang dianggap baik maksimal nol koma satu.

Penyebab yang sering terjadi adalah gambar atau video nggak punya ukuran yang jelas. Browser belum tahu harus menyediakan ruang sebesar apa. Begitu filenya selesai dimuat, elemen lain langsung terdorong.

Karena itu, tentukan ukuran atau rasio gambar dan video dari awal. Sediakan juga ruang untuk embed, iklan, dan konten dinamis. Hindari memasukkan elemen baru di atas konten yang sudah tampil.

**Bridging ke slide 6:** Sekarang kita sudah kenal tiga metriknya. Pertanyaannya, ngeceknya di mana?

### Slide 6 — Tool gratis

Cara paling gampang adalah mulai dari PageSpeed Insights. Tinggal masukkan URL, lalu kita bisa melihat hasil untuk mobile dan desktop.

Selain itu ada Lighthouse di Chrome DevTools. Ini lebih cocok dipakai saat kita sedang mengembangkan website dan ingin mencari sumber masalahnya.

Kalau websitenya sudah terhubung ke Google Search Console, di sana juga ada laporan Core Web Vitals berdasarkan halaman yang ditemukan Google.

Tiga tool ini gratis. Tapi angka yang muncul bisa berbeda karena data yang digunakan juga berbeda.

**Bridging ke slide 7:** Nah, perbedaan yang paling penting untuk dipahami adalah field data dan lab data.

### Slide 7 — Field data dan lab data

Field data berasal dari pengalaman pengguna nyata. Di PageSpeed Insights, datanya mengambil periode dua puluh delapan hari terakhir dari Chrome User Experience Report.

Karena butuh data pengguna, website baru atau website yang trafiknya masih sedikit kadang belum punya field data. Jadi kalau bagian ini kosong, bukan berarti websitenya rusak ya.

Sementara lab data berasal dari simulasi. Website diuji memakai kondisi perangkat dan jaringan tertentu. Data ini berguna untuk mencari masalah saat pengembangan, tapi belum tentu sama persis dengan pengalaman semua pengguna.

Makanya hasil tes bisa berubah walaupun kodenya nggak kita sentuh. Kondisi pengujian dan resource yang tersedia bisa ikut memengaruhi hasil.

**Bridging ke slide 8:** Setelah hasilnya muncul, jangan cuma lihat angka besar dan warna hijau di bagian atas.

### Slide 8 — Membaca hasil

Skor performa sembilan puluh ke atas memang tergolong baik untuk pengujian lab. Tapi skor hijau belum otomatis berarti pengalaman semua pengguna sudah baik.

Lihat LCP, INP, dan CLS satu per satu. Cari mana yang merah atau kuning. Setelah itu baca bagian diagnosis untuk mencari kemungkinan penyebabnya.

Jangan jalankan tes berkali-kali cuma sampai kebetulan dapat warna hijau. Itu bukan optimasi. Itu nyari hasil yang bikin hati tenang.

Yang kita butuhkan adalah tahu bagian mana yang bermasalah dan kenapa itu terjadi.

**Bridging ke slide 9:** Biar nggak kewalahan melihat banyak saran, perbaikannya bisa dilakukan satu per satu.

### Slide 9 — Urutan optimasi

Mulai dari metrik yang merah atau kuning. Setelah itu cari penyebab yang dampaknya paling besar.

Pilih satu perbaikan dulu. Misalnya gambar utama terlalu besar, optimalkan gambar itu. Kalau JavaScript memblokir interaksi, cari proses yang paling berat. Kalau layout bergeser, sediakan ruang untuk elemennya dari awal.

Setelah diperbaiki, uji lagi dengan kondisi yang kurang lebih sama. Lihat apakah nilainya membaik dan pastikan bagian lain nggak ikut rusak.

Nggak harus memperbaiki semua rekomendasi sekaligus ya, gais. Kalau semuanya dikerjakan dalam satu waktu, nanti kita sendiri bingung perubahan mana yang benar-benar ngaruh.

**Bridging ke slide 10:** Terus pertanyaan yang biasanya muncul: kalau semua nilainya bagus, ranking Google langsung naik nggak?

### Slide 10 — Hubungan dengan ranking

Jawabannya, nggak ada jaminan.

Core Web Vitals membantu memperbaiki pengalaman pengguna dan termasuk bagian dari sinyal pengalaman halaman. Tapi ranking Google dipengaruhi banyak hal lain.

Kontennya relevan atau nggak, menjawab kebutuhan pencarian atau nggak, bisa dirayapi atau nggak, dan kualitas halamannya bagaimana, itu tetap berpengaruh.

Jadi jangan anggap Core Web Vitals sebagai tombol rahasia menuju halaman pertama Google. Gunakan metrik ini untuk memastikan website lebih nyaman dipakai. Kalau pengunjung saja kesal karena halaman lambat dan tombolnya lari-lari, skor SEO juga bukan masalah pertama kita.

**Bridging ke slide 11:** Jadi dari semua istilah tadi, cukup ingat tiga pertanyaan ini.

### Slide 11 — Ringkasan dan penutup

LCP: konten utamanya muncul seberapa cepat?

INP: setelah diklik, halaman merespons seberapa cepat?

CLS: layout-nya stabil atau suka bergeser sendiri?

Mulai dari PageSpeed Insights. Cari satu metrik yang bermasalah, pahami penyebabnya, perbaiki satu bagian, lalu ukur lagi.

Nggak perlu langsung menguasai semua hal tentang web performance. Yang penting jangan cuma mengejar angka seratus. Website itu dipakai manusia, jadi yang harus terasa lebih baik ya pengalaman manusianya.

Kalau kalian pernah cek PageSpeed Insights, yang paling sering merah itu LCP, INP, atau CLS, gais?

## Rencana shooting dan editing
- Talking head untuk hook, penjelasan metrik, hubungan SEO, dan penutup.
- Screen recording PageSpeed Insights untuk menunjukkan letak field data, lab data, dan tiga metrik; tidak perlu mengaudit website tertentu.
- Teks layar: `LCP ≤ 2,5 detik`, `INP ≤ 200 ms`, `CLS ≤ 0,1`.
- Gunakan jump cut sederhana; tanpa animasi khusus.
- Target durasi 7–9 menit.

## Sumber materi
- [Web Vitals — web.dev](https://web.dev/articles/vitals)
- [About PageSpeed Insights — Google for Developers](https://developers.google.com/speed/docs/insights/v5/about)
