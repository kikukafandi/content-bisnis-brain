# SKRIP LENGKAP — "ESP32 Menang di Semua Angka. Tapi Punyaku Restart Terus."

**Status:** Draft — belum tervalidasi, belum siap rekam
**Target durasi:** 8 menit
**Properti:** Arduino Uno + ESP32 DevKit, pegang dua-duanya di hook.
**Cara pakai:** isi slot `[...]`, baca sekali, tutup skripnya, rekam dari ingatan.

> **Kenapa judulnya begini:** video "ESP32 vs Arduino" ada ratusan dan isinya tabel spesifikasi semua. Yang gak ada: orang yang cerita boardnya bermasalah. Itu satu-satunya bagian yang gak bisa ditiru channel lain.

> [!warning]
> Draft ini belum lolos filter pengalaman nyata. Verifikasi melalui `/gali`: kepemilikan kedua board, kejadian restart saat WiFi aktif, diagnosis brownout, langkah perbaikan, durasi stuck, pengalaman ADC/5V, dan waktu yang benar-benar dihabiskan memilih board. Klaim teknis dan harga lokal juga harus dicek sebelum rekam.

---

## HOOK — 0:00–0:30

*(pegang ESP32)*

Board ini menang telak dari Arduino Uno. Prosesornya lima belas kali lebih cepat. RAM-nya lima puluh kali lebih besar. Ada WiFi, ada Bluetooth. Dan harganya sering lebih murah.

Jadi jawabannya gampang, kan? Beli ESP32, selesai.

Masalahnya, punyaku restart terus. Tiap WiFi-nya nyala, board-nya mati, hidup lagi, mati lagi.

*[Teks layar: "menang di semua angka"]*

Dan justru dari situ aku baru ngerti pertanyaan "ESP32 atau Arduino" itu sebenernya harusnya dijawab gimana.

## FRAMING — 0:30–0:50

Aku mahasiswa Teknik Komputer semester [ISI]. Aku pakai dua-duanya — Uno sama ESP32 DevKit. Video ini bukan tabel spesifikasi. Ini soal apa yang kejadian pas boardnya udah di tanganmu.

## SEGMEN 1 — JAWABAN JUJURNYA DULU — 0:50–2:00

Aku kasih jawaban cepatnya duluan, biar kamu gak nunggu.

**Kalau kamu mahasiswa di Indonesia dan lagi bingung mau beli yang mana: ambil ESP32.** Hampir selalu.

Kenapa? Arduino Uno itu prosesornya 16 megahertz, RAM-nya 2 kilobyte. Dua kilobyte. ESP32 jalan di 240 megahertz dengan RAM ratusan kilobyte. Bukan lebih baik sedikit — beda kelas.

Terus WiFi dan Bluetooth-nya udah nempel. Di Arduino, kamu harus beli modul terpisah, dan begitu ditambahin, harganya udah lewat ESP32.

Dan ini yang jarang disebut: di marketplace lokal, ESP32 klon sering **lebih murah** daripada Arduino Uno klon. [ISI: cek harga di Tokopedia/Shopee sebelum rekam, sebutin angkanya]

Jadi kenapa masih banyak yang pakai Arduino? Menurutku jarang alasan teknis. Biasanya karena modul praktikum kampus pakai Arduino, tutorial yang dia ikutin pakai Arduino, atau dia takut ribet sama 3.3 volt.

Oke. Itu jawaban yang kamu bisa dapet di mana aja.

Sekarang bagian yang gak ada di tabel.

## SEGMEN 2 — YANG BIKIN PUNYAKU RESTART — 2:00–3:45

Jadi ESP32-ku ini, tiap kali WiFi-nya aku nyalain, langsung reset. Nyala lagi, WiFi nyambung, reset lagi. Muter terus.

Awalnya aku curiga kodeku. Aku ngoding, jadi refleksku ya nyalahin kode. Aku [ISI: apa yang kamu coba — cek serial monitor, komentarin baris, ganti library, dsb].

[ISI: berapa lama kamu stuck di situ]

Ternyata masalahnya bukan di kode sama sekali.

**Masalahnya listrik.**

Jadi gini. ESP32 kalau lagi diem, makan arus kecil. Tapi begitu WiFi-nya transmit, dia narik lonjakan sampai tiga sampai lima ratus miliampere — sesaat, tapi tajam.

Kalau suplainya gak sanggup ngasih lonjakan itu, tegangannya drop. Dan ESP32 punya pengaman namanya brownout detector — begitu tegangan turun di bawah batas, dia sengaja nge-reset dirinya sendiri biar gak jalan setengah-setengah.

Jadi board-ku gak rusak. Dia lagi ngelindungin diri, dan aku ngiranya dia error.

*[Teks layar: "brownout ≠ board rusak"]*

Penyebab paling sering ada tiga: kabel USB tipis atau kabel yang cuma buat ngecas, port USB laptop yang arusnya cekak, atau board-nya diambil dayanya dari pin 3.3 volt Arduino, padahal pin itu cuma sanggup sekitar 50 miliampere.

Yang benerin punyaku: [ISI: apa yang akhirnya kamu lakuin. Kalau belum kelar, bilang belum kelar dan sebutin apa yang mau kamu coba]

Kalau kamu ngalamin hal yang sama, coba tiga ini sebelum nyalahin board-nya: ganti kabel USB pakai yang tebel dan pendek, kasih daya dari adaptor 5 volt satu amper lewat pin VIN — jangan dari port laptop, dan tempel kapasitor elektrolit 470 mikrofarad antara pin 3V3 sama GND buat nahan lonjakannya.

## SEGMEN 3 — DUA JEBAKAN LAIN — 3:45–5:15

Selain listrik, ada dua hal lagi yang bakal nampar kamu waktu pindah dari Arduino ke ESP32.

**Pertama: 3.3 volt, bukan 5 volt.**

Arduino Uno itu 5 volt. ESP32 itu 3.3 volt. Dan mayoritas sensor sama modul murah yang beredar di marketplace masih dirancang buat 5 volt.

Artinya, sinyal 5 volt yang masuk ke pin ESP32 bisa ngerusak pinnya. Solusinya ada — namanya level shifter — tapi itu komponen tambahan, kabel tambahan, dan satu hal lagi yang bisa salah pasang.

Ini alasan paling nyata kenapa orang balik ke Arduino. Bukan karena Arduino lebih hebat, tapi karena ekosistem barang murah di sekitarnya masih 5 volt.

**Kedua: pembacaan analog ESP32 itu berantakan.**

Kalau kamu baca sensor analog — potensiometer, LDR, sensor suhu analog — ADC di ESP32 gak linear. Hasil bacaannya melenceng, terutama di ujung atas dan ujung bawah rentang.

Dan ada satu jebakan tambahan: sebagian pin analognya gak bisa dipakai barengan sama WiFi. Kalau WiFi nyala, pin-pin itu mati.

Arduino Uno? ADC-nya sederhana, tapi jujur dan konsisten.

## SEGMEN 4 — KAPAN ARDUINO BENERAN LEBIH MASUK AKAL — 5:15–6:30

Jadi walaupun aku bilang ESP32 hampir selalu menang, ada tiga kondisi di mana aku bakal tetep milih Arduino.

**Satu: proyekmu penuh sensor dan shield 5 volt**, dan kamu gak mau ngurusin level shifting. Kalau tujuanmu selesai bukan belajar, pakai yang gak nambah masalah.

**Dua: kamu butuh baca analog yang akurat.** Kalau nilai hasil pembacaannya penting — bukan sekadar "ada cahaya / gak ada cahaya" — ADC Arduino lebih bisa dipercaya.

**Tiga: kamu bener-bener baru mulai.**

Di Arduino, yang bisa salah lebih sedikit. Gak ada WiFi yang bikin brownout, gak ada urusan 3.3 volt, gak ada pin yang tiba-tiba mati.

Waktu kamu lagi belajar dasar, tiap masalah tambahan itu bukan tantangan — itu alasan buat berhenti. Aku hampir aja berhenti gara-gara board yang restart terus, padahal masalahnya cuma kabel.

## SEGMEN 5 — NUANSA — 6:30–7:15

Tapi jujur, menurutku pertanyaan "ESP32 atau Arduino" itu sendiri agak salah arah.

Aku dulu ngabisin waktu lama banget mikirin mau beli board yang mana. Baca perbandingan, nonton review, bandingin spesifikasi. Dan selama itu, aku gak bikin apa-apa.

Padahal dua-duanya sanggup ngerjain 90 persen proyek mahasiswa. Yang bikin proyekmu jalan atau mati bukan pilihan board — tapi apakah kamu ngerti kenapa rangkaianmu gak nyala.

Board cuma alat. Yang mahal itu waktu kamu.

Dan lucunya, hal yang paling banyak ngajarin aku justru board yang bermasalah. Kalau ESP32-ku langsung jalan mulus, aku gak akan pernah tau apa itu brownout.

## PENUTUP + CTA — 7:15–8:00

Jadi ringkasnya.

Bingung mau beli yang mana? Ambil ESP32. Lebih murah, lebih kencang, WiFi udah ada.

Tapi siapin diri buat tiga hal: masalah suplai listrik pas WiFi nyala, urusan 3.3 volt sama 5 volt, dan pembacaan analog yang gak seakurat Arduino.

Dan kalau board-mu tiba-tiba restart sendiri — jangan langsung nyalahin kodemu kayak aku. Cek kabelnya dulu.

Nah, aku mau nanya.

Kamu pakai board apa sekarang, dan masalah paling nyebelin yang pernah kamu alamin sama board itu apa? Tulis di komentar — aku lagi ngumpulin masalah-masalah kayak gini buat video berikutnya.

# PANEN SHORTS

## Short 1 — ESP32 Reset Setiap Wi-Fi Nyala

**Status:** paling kuat; berdasarkan pengalaman nyata

**Hook:** “ESP32-ku normal tanpa Wi-Fi. Begitu Wi-Fi nyala, dia reset terus.”

- Proyek lampu dari HP gagal setelah VCC dan GND tersambung hingga korslet.
- Tanpa Wi-Fi, ESP32 masih berjalan.
- Saat Wi-Fi dipakai, ESP32 terus reset.
- Dua minggu mencari solusi di YouTube.
- Sempat install ulang driver, tetapi tidak berhasil.
- Dugaan terakhir: regulator atau suplai tegangan bermasalah, tetapi belum terverifikasi.

**Payoff:** Jangan buru-buru menyebutnya brownout atau menyalahkan kode kalau penyebabnya belum terukur.

**CTA:** “Pernah ketemu ESP32 yang cuma reset saat Wi-Fi nyala?”

**Produksi:** on-camera, pegang ESP32, teks layar “tanpa Wi-Fi: hidup / pakai Wi-Fi: reset”.

## Short 2 — Dua Minggu Debugging, Solusinya “Kiamat”

**Status:** kuat; berdasarkan pengalaman nyata

**Hook:** “Aku dua minggu debugging ESP32. Pas install ulang driver tetap gagal, kesimpulanku cuma satu: kiamat.”

- Ceritakan pola reset saat Wi-Fi aktif.
- Cari banyak solusi di YouTube.
- Cara paling diingat: install ulang driver.
- Hasilnya tetap nihil.
- Reaksi jujur ke diri sendiri: “kiamat”.

**Payoff:** Masalah hardware tidak selalu selesai dengan ritual software.

**CTA:** “Debugging terlama kalian gara-gara apa?”

**Produksi:** on-camera, satu punch-in saat bilang “kiamat”, tanpa b-roll.

## Short 3 — Proyek IoT Berakhir Sebelum Jadi

**Status:** kuat; berdasarkan pengalaman nyata

**Hook:** “Niatku bikin lampu yang dikontrol HP. Hasil akhirnya malah VCC ketemu GND.”

- Target awal: HP mengontrol lampu lewat API dan ESP32.
- Saat merangkai di kos, VCC dan GND tersambung.
- Komponen terbakar dan ESP32 diduga ikut korslet.
- Refleks pertama: cabut kabel VCC.
- Proyek akhirnya diurungkan.

**Payoff:** Belajar embedded kadang belum sampai fitur; sudah belajar panik duluan.

**CTA:** “Kesalahan wiring paling parah yang pernah kalian lakukan apa?”

**Produksi:** on-camera, gunakan ESP32 yang sudah ada; teks sederhana “target: lampu pintar / hasil: asap”.

## Short 4 — Kenapa ESP32 Cadangan Bukan Pelajaran Utamanya

**Status:** perlu diperdalam sebelum direkam

**Hook:** “Pelajaran pertamaku setelah ESP32 korslet: siapin banyak ESP cadangan. Tapi itu jelas bukan solusi.”

- Buka dengan jawaban spontan tersebut sebagai humor.
- Akui penyebab teknis belum berhasil dipastikan.
- Arahkan ke pelajaran yang benar setelah ada hasil pengecekan rangkaian atau tegangan.
- `[BELUM ADA BAHAN]`: prosedur aman atau perubahan konkret saat merangkai berikutnya.

**CTA:** “Kalau habis ngerusakin board, kebiasaan apa yang kalian ubah?”

**Produksi:** on-camera saja; jangan direkam sebelum bahan dilengkapi lewat `/gali`.

# CATATAN REKAM

**Slot wajib:** cerita di Segmen 2—apa yang dicoba, berapa lama stuck, dan bagaimana akhirnya. Itu tulang punggung videonya.

**Cek harga sebelum rekam.** Catat harga ESP32 DevKit dan Arduino Uno klon pada hari rekam.

**Kalau masalah belum selesai, bilang belum selesai.** Jangan pura-pura sudah beres.

**Pegang dua board** di hook dan penutup.

**Rekam per segmen.** Salah tinggal ulang satu segmen.
