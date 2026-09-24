---
title: Seri Komputer Kuantum — Peta Ngobrol
tags:
  - produksi
  - quantum-computing
status: siap-rekam
format: seri-6-part
visual: "[[visual-seri-komputer-kuantum.html]]"
---

# Seri Komputer Kuantum — Peta Ngobrol

> [!note] Cara pakai
> Ini peta ngobrol, bukan skrip kata-per-kata. Ikuti urutan idenya, lalu jelaskan dengan bahasamu sendiri. Posisi penyampaian tetap mahasiswa Teknik Komputer yang merangkum hasil riset, bukan ahli atau praktisi kuantum.

- Buka [[visual-seri-komputer-kuantum.html]], lalu pilih part dan scene dengan ID yang sama.
- Target 3–5 menit per part.
- Beri jeda saat pindah scene dan saat meluruskan miskonsepsi.

# Part 1 — Aku butuh dua minggu buat paham dasar komputer kuantum

**Judul utama:** Aku Butuh 2 Minggu buat Paham Dasar Komputer Kuantum—Ini Versi Visualnya

**Alternatif judul:**
- Dua Minggu Belajar Komputer Kuantum, Akhirnya Aku Paham Bagian Ini
- Komputer Kuantum Ternyata Nggak Seperti yang Aku Bayangkan

**Target durasi:** 5–7 menit

## `p1-s1-bukan-sihir` — Hook

**Kalimat pembuka**

> “Aku belajar dasar komputer kuantum sekitar dua minggu khusus buat bikin video ini. Bukan karena aku sudah ahli, justru karena aku nggak mau asal menyederhanakan topik yang memang rumit.”

**Lanjutkan dengan:**
- Alasan belajarnya memang untuk membuat video YouTube.
- Selama dua minggu, fokusnya mencari cara menjelaskan konsep dasar tanpa membuatnya menyesatkan.
- Visual membantu menunjukkan hubungan antarkonsep yang sulit dijelaskan hanya dengan kata-kata.

**Contoh kalimat:**

> “Masalahnya, komputer kuantum itu gampang banget dijelaskan secara menarik, tapi belum tentu benar. Tinggal bilang qubit bisa jadi 0 dan 1 sekaligus, lalu selesai. Padahal pas aku pelajari lagi, penjelasannya nggak sesederhana itu.”

> “Jadi di video ini aku nggak mau pura-pura jadi ahli. Aku cuma mau menunjukkan hasil belajarku selama dua minggu, lewat visual yang paling membantu aku memahami dasarnya.”

**Cue visual**
- Talking head untuk kalimat pertama.
- Tampilkan tab, catatan, atau sumber belajar yang benar-benar digunakan.
- Munculkan beberapa klaim populer, lalu beri tanda tanya: “Sederhana, tapi akurat nggak?”

## `p1-s2-bit-transistor` — Mulai dari komputer biasa

**Inti pembahasan**
- Jangan langsung masuk ke qubit.
- Mulai dari bit supaya penonton punya pijakan.
- Bit dibaca sebagai 0 atau 1.
- Dalam perangkat, kondisi fisik seperti rentang tegangan dapat ditafsirkan sebagai dua nilai tersebut.
- Transistor bisa dibayangkan sebagai sakelar untuk model awal, walaupun kenyataannya lebih kompleks.

**Contoh penyampaian:**

> “Sebelum ngomongin komputer kuantum, kita mundur dulu ke komputer yang sekarang kalian pakai. Di level paling dasar, komputer biasa mengolah informasi dalam bentuk bit: 0 atau 1.”

> “Biar gampang dibayangin, anggap aja seperti sakelar. Mati atau nyala. Ini memang penyederhanaan, tapi cukup buat memahami fondasinya.”

> “Terus, 0 dan 1 ini disusun dalam jumlah yang sangat banyak. Dari situ komputer bisa menyimpan data, menghitung, sampai membuka video ini.”

**Cue visual**
- Sakelar berpindah antara mati dan menyala.
- Label berubah menjadi 0 dan 1.
- Deretan bit berkembang menjadi teks, gambar, atau aplikasi.

**Batas akurasi**
- Jangan mengatakan angka 0 dan 1 benar-benar bergerak di dalam komputer.
- Jangan mengatakan transistor nyata persis seperti sakelar rumah.

## `p1-s3-and-not` — Bit perlu diolah

**Inti pembahasan**
- Bit saja belum cukup; komputer membutuhkan operasi logika.
- Gunakan NOT sebagai contoh paling sederhana: 0 menjadi 1, 1 menjadi 0.
- Gunakan AND secara singkat: hasilnya 1 hanya jika kedua input bernilai 1.
- Operasi sederhana dapat disusun menjadi sistem yang jauh lebih kompleks.

**Contoh penyampaian:**

> “Tapi punya banyak angka 0 dan 1 doang belum bikin komputer jadi pintar. Nilai-nilai ini harus bisa diubah dan digabungkan.”

> “Contoh paling gampang itu NOT. Kalau masukannya 0, keluarnya 1. Kalau masukannya 1, keluarnya 0. Sederhana banget. Tapi operasi sederhana seperti ini kalau disusun dalam jumlah besar bisa menjadi bagian dari proses yang jauh lebih kompleks.”

> “Komputer kuantum juga punya operasi semacam ini. Namanya quantum gate. Tapi sebelum ke sana, masalahnya bukan cuma cara mengolah informasinya. Bentuk informasinya sendiri juga berbeda.”

**Cue visual**
- Tampilkan NOT lebih dulu.
- Tampilkan AND sebentar tanpa membahas seluruh tabel terlalu lama.
- Hubungkan gerbang klasik ke bentuk quantum circuit sebagai open loop.

## `p1-s4-mengapa-kuantum` — Kenapa dibuat berbeda?

**Inti pembahasan**
- Komputer kuantum bukan dibuat untuk menggantikan laptop dalam semua pekerjaan.
- Objek seperti atom, molekul, dan partikel mengikuti aturan mekanika kuantum.
- Merepresentasikan sistem kuantum tertentu secara rinci pada komputer klasik dapat menjadi sangat berat ketika ukurannya bertambah.
- Sistem kuantum berpotensi merepresentasikan struktur tertentu dengan lebih alami.
- Keunggulan tetap bergantung pada masalah, algoritma, dan perangkat yang sesuai.

**Contoh penyampaian:**

> “Sebelum masuk ke qubit, ada satu pertanyaan yang perlu dijawab dulu: sebenarnya kenapa komputer kuantum perlu dikembangkan kalau komputer klasik sudah bisa melakukan banyak hal?”

> “Ternyata jawabannya bukan karena kita butuh laptop yang bisa buka Chrome lebih cepat. Komputer kuantum diteliti karena ada masalah tertentu yang strukturnya memang berkaitan dengan mekanika kuantum.”

> “Misalnya ketika kita mencoba merepresentasikan sistem seperti atom atau molekul dengan sangat rinci. Semakin kompleks sistemnya, representasi klasiknya bisa ikut membesar dengan cepat.”

> “Karena perangkat kuantum juga bekerja memakai aturan kuantum, ada harapan sistem tertentu bisa direpresentasikan dengan lebih alami. Tapi ini bukan berarti semua masalah otomatis jadi lebih cepat.”

**Cue visual**
- CPU dan QPU muncul berdampingan, bukan saling menggantikan.
- Tampilkan atom atau molekul sebagai ilustrasi abstrak, bukan model literal.
- Munculkan tiga syarat: masalah yang cocok, algoritma yang cocok, perangkat yang mampu.

## Penutup dan open loop Part 2

> “Jadi sejauh ini, komputer kuantum bukan komputer biasa yang tinggal dinaikkan kecepatannya. Ia menggunakan cara merepresentasikan dan mengolah informasi yang berbeda untuk masalah tertentu.”

> “Nah, bagian yang paling lama bikin aku bingung ada di unit informasinya: qubit. Katanya bisa berada dalam superposisi, tapi waktu diukur hasilnya tetap cuma 0 atau 1. Di part berikutnya kita bongkar bagian itu lewat visual.”

**Jangan pakai CTA generik.** Akhiri pada visual bit yang berubah menjadi qubit.

**Yang jangan diklaim**
- Komputer kuantum selalu lebih cepat.
- Komputer kuantum akan menggantikan komputer klasik.
- Semua simulasi kuantum pasti mendapat percepatan.
- Visual atom merupakan bentuk atom yang literal.

# Part 2 — Qubit, superposisi, dan pengukuran

## `p2-s1-psi` — Keadaan |ψ⟩

**Tujuan**
- Mengenalkan notasi keadaan satu qubit.

**Urutan ngomong**
- Baca $|\psi\rangle=\alpha|0\rangle+\beta|1\rangle$.
- $|0\rangle$ dan $|1\rangle$ adalah keadaan basis.
- Alfa dan beta adalah amplitudo kompleks yang membawa besar dan fase.
- Satu qubit bukan dua bit yang ditumpuk.

**Yang jangan diklaim**
- Notasi ini cukup untuk semua sistem terbuka atau keadaan campuran.
- Qubit menyimpan dua nilai klasik yang bisa dibaca sekaligus.

**Cue visual**
- Persamaan muncul sebagai satu kesatuan.

**Sambungan**
- Hubungkan amplitudo dengan peluang hasil pengukuran.

## `p2-s2-amplitudo` — Amplitudo dan probabilitas

**Tujuan**
- Membedakan amplitudo dari probabilitas.

**Urutan ngomong**
- Peluang 0 adalah $|\alpha|^2$ dan peluang 1 adalah $|\beta|^2$.
- Jumlah keduanya harus 1.
- Amplitudo juga punya fase.
- Fase baru tampak dampaknya lewat interferensi.

**Contoh/analogi**
- Besar amplitudo $1/\sqrt2$ memberi peluang setengah-setengah.

**Yang jangan diklaim**
- Alfa dan beta langsung merupakan probabilitas.

**Cue visual**
- Dua batang berubah dengan jumlah tetap satu.

**Sambungan**
- Petakan keadaan satu qubit lewat Bloch sphere.

## `p2-s3-bloch` — Bloch sphere

**Tujuan**
- Memberi peta visual keadaan murni satu qubit beserta batasnya.

**Urutan ngomong**
- Kutub atas mewakili $|0\rangle$, kutub bawah $|1\rangle$.
- Titik lain membawa kombinasi amplitudo dan fase.
- Gate satu qubit dapat dibayangkan sebagai rotasi.
- Bola ini adalah peta matematika.

**Yang jangan diklaim**
- Bola tersebut benda fisik di dalam komputer.
- Bloch sphere biasa cukup untuk menggambar banyak qubit ter-entangle.

**Cue visual**
- Vektor berputar di antara dua kutub.

**Sambungan**
- Dari keadaan kuantum, kembali ke data klasik lewat measurement.

## `p2-s4-superposisi-measurement` — Superposisi dan measurement

**Tujuan**
- Meluruskan bahwa satu pengukuran tidak membuka seluruh amplitudo.

**Urutan ngomong**
- Sebelum diukur, qubit dapat berada dalam superposisi.
- Pengukuran basis komputasi memberi satu hasil: 0 atau 1.
- Jalankan circuit berkali-kali untuk memperkirakan distribusi.
- Algoritma mengatur amplitudo agar hasil berguna lebih sering muncul.

**Yang jangan diklaim**
- Satu pengukuran membaca alfa dan beta lengkap.
- Semua kemungkinan keluar sekaligus.

**Cue visual**
- Psi masuk alat ukur dan menghasilkan satu nilai.

**Sambungan**
- Lihat alat untuk mengatur keadaan: gate dan circuit.

# Part 3 — Quantum gates dan circuit

## `p3-s1-xyz` — X, Y, dan Z

**Tujuan**
- Mengenalkan perubahan keadaan oleh gate satu qubit.

**Urutan ngomong**
- Gate ideal pada sistem tertutup direpresentasikan sebagai transformasi uniter.
- X menukar $|0\rangle$ dan $|1\rangle$.
- Y menukar basis sekaligus mengubah fase kompleks.
- Z memberi tanda minus pada amplitudo $|1\rangle$.

**Yang jangan diklaim**
- Semua proses, termasuk measurement dan noise, adalah gate uniter.
- Z langsung mengubah peluang ukur dalam basis 0/1.

**Cue visual**
- X, Y, Z muncul berurutan pada wire.

**Sambungan**
- Fokus ke Hadamard sebagai pintu masuk superposisi.

## `p3-s2-hadamard` — Hadamard

**Tujuan**
- Menjelaskan H tanpa menyebutnya tombol acak.

**Urutan ngomong**
- H mengubah $|0\rangle$ menjadi amplitudo sama untuk 0 dan 1.
- Jika langsung diukur berkali-kali, hasil mendekati setengah-setengah.
- H kedua tanpa measurement mengembalikan keadaan ke $|0\rangle$.
- Fase dan interferensi menjelaskan hasil tersebut.

**Yang jangan diklaim**
- Hadamard sekadar generator angka acak.

**Cue visual**
- Dua gate H pada satu wire; hasil akhir kembali $|0\rangle$.

**Sambungan**
- Pisahkan peluang yang terlihat dari fase yang belum terlihat.

## `p3-s3-fase` — Fase

**Tujuan**
- Menjelaskan fungsi fase relatif dalam interferensi.

**Urutan ngomong**
- Dua keadaan bisa punya peluang ukur sama tetapi fase berbeda.
- Gate berikutnya dapat mempertemukan amplitudo.
- Fase searah dapat menguatkan; fase berlawanan dapat melemahkan.
- Algoritma memakai pola ini untuk membentuk distribusi akhir.

**Yang jangan diklaim**
- Fase selalu terlihat dari measurement langsung pada basis yang sama.

**Cue visual**
- Dua gelombang dengan fase berbeda.

**Sambungan**
- Susun gate tadi menjadi circuit.

## `p3-s4-circuit` — Aliran circuit

**Tujuan**
- Memberi cara baca dasar quantum circuit.

**Urutan ngomong**
- Baca dari kiri ke kanan: persiapan, gate, measurement.
- Hasil measurement menjadi bit klasik.
- Satu pengulangan disebut shot; banyak shot memberi distribusi.
- Gate logis perlu diterjemahkan menjadi kontrol perangkat fisik.

**Yang jangan diklaim**
- Diagram circuit sama persis dengan bentuk perangkat kerasnya.

**Cue visual**
- $|0\rangle$, H, Z, dan M muncul berurutan.

**Sambungan**
- Gabungkan dua qubit lewat CNOT.

# Part 4 — Entanglement dan interferensi

## `p4-s1-cnot` — CNOT

**Tujuan**
- Menjelaskan gate dua qubit dan syarat awal entanglement.

**Urutan ngomong**
- Qubit pertama menjadi kontrol, kedua menjadi target.
- Pada keadaan basis, target dibalik jika kontrol 1.
- CNOT tidak selalu membuat entanglement.
- Entanglement bisa terbentuk jika inputnya tepat, misalnya kontrol dalam superposisi.

**Yang jangan diklaim**
- Setiap CNOT otomatis menghasilkan entanglement.

**Cue visual**
- Gunakan aliran circuit sebagai representasi sederhana dua tahap.

**Sambungan**
- Terapkan H lalu CNOT untuk membentuk Bell state.

## `p4-s2-bell` — Bell state

**Tujuan**
- Menunjukkan pembentukan keadaan bersama dua qubit.

**Urutan ngomong**
- Mulai dari $|00\rangle$.
- Beri H pada qubit pertama.
- Jalankan CNOT dengan qubit pertama sebagai kontrol.
- Hasil ideal $(|00\rangle+|11\rangle)/\sqrt2$ tidak bisa dipisahkan menjadi dua keadaan independen.

**Yang jangan diklaim**
- Masing-masing qubit punya keadaan murni independen setelah ter-entangle.

**Cue visual**
- H menjadi fokus; sebut CNOT sebagai langkah setelahnya.

**Sambungan**
- Ukur keduanya dan lihat korelasinya.

## `p4-s3-korelasi` — Korelasi, bukan komunikasi instan

**Tujuan**
- Memisahkan korelasi entanglement dari pengiriman pesan.

**Urutan ngomong**
- Measurement ideal menghasilkan 00 atau 11 sekitar setengah-setengah.
- Hasil kedua sisi berkorelasi.
- Tidak ada pihak yang bisa memilih hasil lokalnya.
- Karena itu entanglement sendiri bukan saluran pesan lebih cepat dari cahaya.

**Yang jangan diklaim**
- Mengukur satu qubit mengirim pesan instan ke qubit lain.

**Cue visual**
- Alat ukur menghasilkan nilai yang cocok; overlay tetap menyebut “korelasi”.

**Sambungan**
- Korelasi mengatur keadaan bersama; interferensi mengatur amplitudo hasil.

## `p4-s4-interferensi` — Interferensi

**Tujuan**
- Merangkum peran interferensi dalam algoritma.

**Urutan ngomong**
- Amplitudo dari beberapa jalur dapat dijumlahkan.
- Fase searah menguatkan, fase berlawanan meniadakan.
- Measurement tetap hanya memberi sampel.
- Circuit harus membentuk distribusi yang berguna sebelum diukur.

**Yang jangan diklaim**
- Interferensi menjamin jawaban benar dalam satu kali ukur.

**Cue visual**
- Dua gelombang bertemu dengan fase berbeda.

**Sambungan**
- Terapkan mekanisme ini pada contoh algoritma.

# Part 5 — Algoritma dan kegunaan

## `p5-s1-algoritma` — Bukan paralelisme gratis

**Tujuan**
- Membongkar gambaran “semua jawaban dicoba dan dibaca sekaligus”.

**Urutan ngomong**
- Superposisi dapat membawa banyak amplitudo.
- Measurement tidak mengeluarkan daftar semua kandidat.
- Gate dan interferensi harus memperbesar peluang hasil berguna.
- Keuntungan hanya muncul jika struktur masalah mendukungnya.

**Yang jangan diklaim**
- Superposisi sendiri sudah menyelesaikan masalah.

**Cue visual**
- Batang probabilitas bergeser menuju hasil tertentu.

**Sambungan**
- Grover memberi contoh percepatan yang terukur, tetapi tidak instan.

## `p5-s2-grover` — Grover

**Tujuan**
- Menjelaskan percepatan kuadratik Grover secara proporsional.

**Urutan ngomong**
- Ada $N$ kandidat dan prosedur untuk mengecek target.
- Pencarian klasik tak terstruktur berskala linear.
- Grover memakai oracle dan amplitude amplification.
- Jumlah pemanggilan oracle berskala sekitar $\sqrt N$.

**Contoh/analogi**
- Sejuta kandidat memberi gambaran skala sekitar seribu iterasi, sebelum biaya implementasi.

**Yang jangan diklaim**
- Grover menemukan jawaban dalam satu langkah.
- Grover memberi percepatan eksponensial.

**Cue visual**
- Deretan kandidat bit muncul; satu kelompok menjadi fokus.

**Sambungan**
- Shor memberi jenis keuntungan berbeda untuk faktorisasi.

## `p5-s3-shor` — Shor

**Tujuan**
- Menjelaskan dampak teoretis Shor tanpa klaim keamanan berlebihan.

**Urutan ngomong**
- Shor memfaktorkan bilangan bulat secara efisien secara teoretis.
- Subrutin kuantumnya mencari periode.
- RSA bergantung pada sulitnya faktorisasi bagi algoritma klasik yang diketahui.
- Skala relevan membutuhkan komputer kuantum toleran-kesalahan yang besar.

**Yang jangan diklaim**
- Semua enkripsi sudah jebol.
- Semua jenis kriptografi diserang Shor.
- Perangkat saat ini sudah mampu tanpa verifikasi sumber terbaru.

**Cue visual**
- Aliran circuit menandai subrutin kuantum dan measurement.

**Sambungan**
- Beralih ke penggunaan yang dekat dengan sifat perangkat: simulasi kuantum.

## `p5-s4-simulasi` — Simulasi kuantum

**Tujuan**
- Menjelaskan potensi simulasi tanpa melompat ke hasil praktis.

**Urutan ngomong**
- Ruang keadaan molekul dan material tumbuh cepat.
- Perangkat kuantum mengendalikan keadaan kuantum secara langsung.
- Targetnya dapat berupa energi atau dinamika sistem.
- Nilai praktis bergantung pada akurasi, noise, ukuran, algoritma, dan pembanding klasik.

**Yang jangan diklaim**
- Komputer kuantum sudah menemukan obat baru hanya karena dapat dipakai untuk riset kimia.
- Metode klasik berhenti berkembang.

**Cue visual**
- Atom abstrak menjadi pusat visual.

**Sambungan**
- Potensi tadi bertemu batas perangkat nyata: noise.

# Part 6 — Noise, error correction, dan batasnya

## `p6-s1-noise` — Noise

**Tujuan**
- Menjelaskan kenapa jumlah qubit bukan satu-satunya ukuran kemampuan.

**Urutan ngomong**
- Pulsa kontrol, pembacaan, dan interaksi tak diinginkan dapat salah.
- Kesalahan menumpuk ketika circuit makin panjang.
- Perhatikan fidelitas, konektivitas, koherensi, dan kualitas measurement.
- Bandingkan kemampuan lewat keseluruhan sistem, bukan angka qubit saja.

**Yang jangan diklaim**
- Semua error punya satu penyebab yang sama.

**Cue visual**
- Gelombang terlihat terganggu dan berubah sepanjang waktu.

**Sambungan**
- Salah satu proses penting di balik kehilangan informasi adalah decoherence.

## `p6-s2-decoherence` — Decoherence

**Tujuan**
- Membedakan decoherence dari analogi “baterai habis”.

**Urutan ngomong**
- Qubit perlu dikontrol sekaligus diisolasi.
- Interaksi lingkungan dapat membocorkan informasi fase.
- Koherensi yang dibutuhkan untuk interferensi lalu berkurang.
- Material, pendinginan, kontrol, dan kalibrasi membantu mengurangi masalah.

**Yang jangan diklaim**
- Decoherence sekadar energi qubit habis.
- Isolasi fisik saja menyelesaikan semua error.

**Cue visual**
- Gelombang ganda bergerak; jelaskan bahwa ini simbol koherensi, bukan pengukuran literal.

**Sambungan**
- Komputasi panjang memerlukan error correction.

## `p6-s3-qec` — Quantum error correction

**Tujuan**
- Menjelaskan qubit logis dan overhead tanpa angka palsu.

**Urutan ngomong**
- Informasi satu qubit logis disebar ke banyak qubit fisik.
- Syndrome memberi petunjuk error tanpa membaca langsung nilai logis.
- Koreksi memakai encoding dan redundansi terstruktur.
- Jumlah qubit fisik bergantung pada perangkat, kode, dan target komputasi.

**Yang jangan diklaim**
- QEC menyalin qubit tak dikenal secara sempurna.
- Satu qubit logis selalu membutuhkan jumlah qubit fisik yang sama.

**Cue visual**
- Bloch sphere menjadi simbol qubit logis yang perlu dijaga; jangan sebut sebagai diagram QEC literal.

**Sambungan**
- Tutup dengan posisi realistis komputer kuantum di samping komputer klasik.

## `p6-s4-spesialisasi` — Klasik dan kuantum

**Tujuan**
- Menutup seri dengan model akselerator khusus.

**Urutan ngomong**
- Laptop, ponsel, web, dan database biasa tetap cocok untuk komputer klasik.
- Sistem klasik menyiapkan masalah, mengontrol perangkat, dan mengolah hasil.
- QPU menangani submasalah yang punya algoritma dan perangkat cocok.
- Saat mendengar klaim, tanyakan masalah, algoritma, dan kebutuhan perangkatnya.

**Kalimat kunci:** “Tanpa tiga hal itu, kita baru punya headline, belum punya penjelasan.”

**Yang jangan diklaim**
- Manfaat praktis sudah pasti untuk semua bidang.
- Komputer klasik akan ditinggalkan.

**Cue visual**
- CPU dan QPU tetap aktif dan saling terhubung.

**Sambungan**
- Akhiri tanpa CTA jika jeda terakhir sudah terasa kuat.

# Catatan akurasi dan sumber

- Qubit, amplitudo, measurement, interferensi, dan batas analogi: [[Dasar Komputasi Kuantum]] dan [[Quantum Computers Explained – Limits of Human Technology]].
- Gate H, X, Y, Z, CNOT, universalitas, dan batas transformasi uniter: [[Apa Itu Quantum Gates - Fondasi Revolusi Komputasi Modern]].
- Sumber internal di atas adalah ringkasan awal. Klaim status perangkat, jumlah resource, dan keamanan yang berubah dari waktu ke waktu wajib diverifikasi lagi menjelang publikasi.
- Referensi pendidikan lanjutan: [IBM Quantum Learning](https://quantum.cloud.ibm.com/learning), [Microsoft Quantum concepts](https://learn.microsoft.com/azure/quantum/concepts-overview), dan [NIST Post-Quantum Cryptography](https://www.nist.gov/pqcrypto).
- Jangan memakai klaim: “semua jawaban dibaca sekaligus”, “entanglement mengirim pesan instan”, “Grover mencari dalam satu langkah”, “semua enkripsi akan langsung rusak”, atau “komputer kuantum menggantikan komputer klasik”.
