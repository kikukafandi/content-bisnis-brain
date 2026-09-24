# Lembar Rekam

**Judul:** Aku Kebanyakan Tutorial tapi Tetap Mandek Belajar Embedded
**Target durasi:** 8 menit
**Rekam per segmen, jangan sekali jalan.**

### HOOK (0:00-0:25) — kata-per-kata
> "Dua minggu cari solve di YouTube. Ternyata ESP-ku kebakar dan tiap WiFi nyala malah reset sendiri. Kiamat."

*Teks layar:* DUA MINGGU, HASILNYA KIAMAT

### FRAMING (0:25-1:00) — poin
- alat alat IoT, sekedar tahu
- lampu remot lewat API
- pakai HP dan ESP32
- `[BELUM ADA BAHAN — jalankan /gali lagi]`

### SEGMEN 1 — Proyek Lampu (1:00-2:15)
| Beat | Pemicu |
|---|---|
| Setup | otomatis lampu, remot lewat HP |
| Penderitaan | VCC dan GND nyambung |
| Reveal | komponen kebakar, ESP ikut konslet |
| Reaksi | di kos, terkejut |
| Pelajaran | `[BELUM ADA BAHAN — jalankan /gali lagi]` |

*Teks layar:* VCC + GND NYAMBUNG
*Shorts:* ya

### SEGMEN 2 — WiFi Bikin Reset (2:15-3:30)
| Beat | Pemicu |
|---|---|
| Setup | cabut kabel VCC |
| Penderitaan | WiFi digunakan, reset sendiri terus |
| Reveal | tanpa WiFi, ESP-nya bisa |
| Reaksi | `[BELUM ADA BAHAN — jalankan /gali lagi]` |
| Pelajaran | `[BELUM ADA BAHAN — jalankan /gali lagi]` |

*Teks layar:* WIFI NYALA, ESP RESET
*Shorts:* ya

### SEGMEN 3 — Dua Minggu YouTube (3:30-4:45)
| Beat | Pemicu |
|---|---|
| Setup | debugging dua minggu |
| Penderitaan | cari solve di YouTube |
| Reveal | semua cara, tidak ada hasilnya |
| Reaksi | kiamat |
| Pelajaran | `[BELUM ADA BAHAN — jalankan /gali lagi]` |

*Teks layar:* SEMUA CARA, NIHIL
*Shorts:* ya

### SEGMEN 4 — Install Ulang Driver (4:45-5:45)
| Beat | Pemicu |
|---|---|
| Setup | satu cara paling diingat |
| Penderitaan | install ulang driver |
| Reveal | tetap tidak menyelesaikan reset |
| Reaksi | kiamat |
| Pelajaran | `[BELUM ADA BAHAN — jalankan /gali lagi]` |

*Teks layar:* INSTALL ULANG DRIVER
*Shorts:* tidak

### SEGMEN 5 — Dugaan Regulator (5:45-6:30)
| Beat | Pemicu |
|---|---|
| Setup | ada artikel, tapi lupa |
| Penderitaan | tegangan tidak cukup, mungkin |
| Reveal | masalahnya mungkin di regulator |
| Reaksi | semuanya aku urungkan |
| Pelajaran | siapkan banyak ESP cadangan, wkwk |

*Teks layar:* MUNGKIN REGULATOR
*Shorts:* ya

### NUANSA (6:30-7:30) — poin
- hubungan kebanyakan tutorial masih lemah
- proyek akhirnya tidak jadi
- semuanya aku urungkan
- ingin aku kontenin prosesnya
- `[BELUM ADA BAHAN — jalankan /gali lagi]`

### CTA (7:30-8:00) — kata-per-kata
> "Pernah nggak kalian ngerusakin board, terus dua minggu malah nyari salahnya di software? Ceritain di komentar."

---

## Panen Shorts
| # | Dari segmen | Kalimat detik 0 |
|---|---|---|
| 1 | Proyek Lampu | "VCC dan GND nyambung, komponenku kebakar." |
| 2 | WiFi Bikin Reset | "WiFi nyala, ESP-ku reset sendiri terus." |
| 3 | Dua Minggu YouTube | "Dua minggu cari solusi, hasilnya tidak ada." |
| 4 | Dugaan Regulator | "Masalahnya mungkin di regulator." |

---

## Checklist sebelum rekam
- [ ] Hook sudah hafal (cuma ini yang perlu dihafal)
- [ ] Baterai & memori cukup
- [ ] Rekam per segmen, salah tinggal ulang satu segmen
- [ ] HP/notif silent

## Cadangan / bahan Shorts
- install ulang driver
- reaksi: kiamat
- siapkan banyak ESP cadangan, wkwk


## Skript
## HOOK — 0:00–0:30

Aku pernah hampir dua minggu nyari solusi di YouTube gara-gara ESP32-ku selalu reset sendiri setiap WiFi dinyalakan.

Awalnya aku kira programku yang bermasalah.

Jadi aku cari tutorial, utak-atik program, sampai install ulang driver.

Tapi gak ada yang berhasil.

Dan setelah hampir dua minggu nyari kesalahan di software, aku baru kepikiran...

**“Jangan-jangan ESP-nya memang rusak?”**

Karena sebelum semua masalah itu terjadi, aku sempat bikin **VCC dan GND nyambung sampai ada komponen yang kebakar.**

Harusnya curiga dari awal, ya.

---

## FRAMING — 0:30–1:15

Jadi waktu mulai belajar embedded dan IoT, pengetahuanku sebenarnya masih dasar banget.

Kalau sekadar tahu alat-alatnya, ya tahu.

ESP32 pernah lihat.

Sensor tahu.

Relay tahu.

Pernah ngoding mikrokontroler juga.

Tapi kalau ditanya sampai benar-benar ngerti kenapa sebuah rangkaian bekerja, bagaimana power-nya, apa yang terjadi kalau salah sambung...

Nah, itu beda cerita.

Waktu itu aku memang lagi pengen belajar sambil bikin proyek.

Karena kalau cuma nonton tutorial terus, aku merasa kayak ngerti.

Tapi begitu disuruh bikin sendiri...

bingung mulai dari mana.

Akhirnya aku punya ide yang menurutku waktu itu cukup sederhana.

Aku pengen bikin **lampu yang bisa dikontrol lewat HP.**

Jadi kurang lebih HP bakal ngirim perintah lewat API, kemudian ESP32 menerima perintah itu, dan dari situ lampunya bisa aku nyalakan atau matikan.

Di bayanganku:

HP, ESP32, lampu.

Selesai.

Ternyata proyek sederhana ini malah jadi tempat aku belajar kalau di embedded...

**kesalahan kecil bisa bikin debugging ke mana-mana.**

---

## SEGMEN 1 — SALAH SAMBUNG VCC DAN GND — 1:15–2:25

Aku mulai ngerangkai semuanya.

Pasang kabel satu-satu.

VCC ke mana.

GND ke mana.

Komponen dipasang.

ESP disambungkan.

Pokoknya saat itu aku ngerjainnya seperti biasa.

Sampai akhirnya ada satu kesalahan.

**VCC dan GND nyambung.**

**Teks layar:**

`VCC + GND NYAMBUNG`

Dan begitu itu terjadi...

ada komponen yang kebakar.

ESP yang aku pakai juga ikut konslet.

Aku waktu itu ngerjainnya di kos.

Dan pas kejadian, reaksiku cuma kayak...

**“Lah?”**

Karena aku kan awalnya cuma pengen bikin lampu.

Kok sekarang malah ada yang kebakar?

Tapi setelah itu aku coba lagi ESP-nya.

Aku cabut bagian yang bermasalah, terus aku nyalakan.

Dan ternyata board-nya masih hidup.

Program masih bisa masuk.

Masih bisa menjalankan program juga.

Jadi pikiranku waktu itu sederhana:

**“Oh... berarti masih aman.”**

Karena logikaku sebagai orang yang masih belajar waktu itu:

kalau rusak, ya harusnya mati total.

Kalau masih bisa nyala berarti gak rusak.

Ternyata hardware gak sesederhana itu.

Sesuatu bisa aja masih hidup...

tapi bukan berarti semua bagiannya masih bekerja dengan normal.

Dan waktu itu aku belum kepikiran sampai sana.

---

## SEGMEN 2 — KENAPA CUMA WIFI YANG BIKIN RESET? — 2:25–3:35

Setelah kabel VCC yang bermasalah tadi aku cabut, aku coba menjalankan ESP-nya lagi.

Kalau aku pakai tanpa WiFi...

**bisa.**

Programnya jalan.

Board-nya nyala.

Kelihatannya normal.

Tapi begitu bagian WiFi mulai digunakan...

**reset.**

Nyala lagi.

Coba konek WiFi.

Reset lagi.

**Teks layar:**

`WIFI NYALA → ESP RESET`

Aku ulang beberapa kali.

Tanpa WiFi?

Bisa.

Pakai WiFi?

Reset.

Di sinilah aku mulai bingung.

Karena kalau ESP-nya rusak, pikiranku waktu itu:

**“Kenapa program lain masih bisa jalan?”**

Dan karena masalahnya muncul tepat ketika WiFi digunakan, aku langsung menghubungkan masalah itu dengan program.

Mungkin ada yang salah di kode WiFi-nya.

Mungkin library-nya.

Mungkin konfigurasi board.

Mungkin ada sesuatu yang belum aku install.

Pokoknya pikiranku langsung lari ke **software**.

Padahal kalau dipikir sekarang...

beberapa waktu sebelumnya board ini habis konslet.

Harusnya itu masuk daftar tersangka utama.

Tapi waktu itu enggak.

Aku malah buka YouTube.

Dan dari sinilah dua minggu yang sangat produktif...

**dalam mencari tutorial, bukan menyelesaikan proyek.**

---

## SEGMEN 3 — TUTORIAL PERTAMA, KEDUA, KETIGA... — 3:35–5:00

Aku mulai cari masalahnya di YouTube.

Kurang lebih kata kuncinya seputar:

“ESP32 reset when WiFi connect.”

Atau ESP32 restart sendiri.

Atau masalah WiFi di ESP32.

Dan enaknya internet itu...

hampir setiap masalah yang kita ketik pasti ada orang yang pernah membahas sesuatu yang mirip.

Masalahnya adalah:

**mirip belum tentu sama.**

Waktu itu aku belum terlalu mikirin itu.

Aku lihat judul videonya cocok dengan masalahku?

Klik.

Ada orang bilang coba cara A.

Aku coba cara A.

Gak berhasil.

Balik lagi.

Cari video berikutnya.

Ada yang bilang kemungkinan ini.

Aku coba.

Masih reset.

Cari lagi.

Baca komentar.

Buka artikel.

Coba solusi lain.

Begitu terus.

Dan setiap kali menemukan tutorial baru, selalu ada sedikit harapan:

**“Nah. Ini nih kayaknya.”**

Apalagi kalau gejala yang diceritakan mirip banget.

ESP restart.

WiFi bermasalah.

Board reset.

Aku langsung merasa solusinya pasti sama.

Aku ikutin langkahnya.

Upload program.

Tes.

WiFi mulai konek...

**reset.**

Oke.

Cari lagi.

Dan ini terjadi kurang lebih selama **dua minggu**.

**Teks layar:**

`DUA MINGGU CARI SOLUSI`

Yang lucu adalah aku merasa sedang belajar banyak.

Karena setiap hari aku nonton video baru.

Baca artikel baru.

Nemukan istilah baru.

Nyoba solusi baru.

Kelihatannya produktif.

Tapi kalau ditanya:

**“Proyek lampunya maju gak?”**

Enggak.

Tetap di masalah yang sama.

WiFi nyala.

ESP reset.

WiFi nyala.

ESP reset.

Sampai di satu titik aku sendiri gak tahu lagi apa yang sebenarnya sedang aku perbaiki.

Aku cuma terus mencari tutorial dengan harapan tutorial berikutnya adalah jawabannya.

---

## SEGMEN 4 — SAMPAI INSTALL ULANG DRIVER — 5:00–5:50

Salah satu solusi yang paling aku ingat adalah...

**install ulang driver.**

**Teks layar:**

`INSTALL ULANG DRIVER`

Aku sudah lupa persisnya kenapa waktu itu sampai curiga ke driver.

Tapi karena aku menemukan solusi yang menyarankan itu, akhirnya aku coba.

Install ulang.

Atur lagi.

Tes lagi.

Dalam pikiranku:

**“Semoga ini.”**

Program dijalankan.

ESP nyala.

Masuk ke bagian WiFi.

Dan...

reset lagi.

**Kiamat.**

Di sini aku mulai kehabisan ide.

Karena sudah banyak hal yang aku coba.

Dan setiap tutorial memberi kemungkinan baru.

Mungkin driver.

Mungkin library.

Mungkin program.

Mungkin konfigurasi.

Mungkin kabel.

Semakin banyak aku cari, semakin banyak juga kemungkinan masalahnya.

Bukannya semakin jelas...

aku malah semakin bingung.

---

## SEGMEN 5 — JANGAN-JANGAN REGULATOR? — 5:50–6:45

Sampai akhirnya aku nemu sebuah artikel.

Artikel persisnya sudah lupa, jadi aku gak mau bilang ini sebagai diagnosis pasti.

Tapi dari yang aku pahami waktu itu, salah satu kemungkinan ESP reset ketika WiFi aktif adalah masalah pada **suplai daya**.

Saat WiFi bekerja, ada kondisi di mana kebutuhan dayanya meningkat.

Kalau suplai tegangannya gak stabil, board bisa mengalami masalah dan akhirnya reset.

Dan waktu baca itu aku mulai mikir:

**“Tunggu dulu...”**

ESP-ku sebelumnya habis konslet.

VCC dan GND sempat nyambung.

Ada komponen yang sampai kebakar.

Jangan-jangan ada bagian power-nya yang memang sudah bermasalah?

Mungkin regulatornya?

Aku gak bisa memastikan.

Karena untuk memastikan kerusakan hardware seperti itu, pengetahuanku waktu itu juga belum cukup.

Tapi setidaknya dari sana aku mulai sadar...

**mungkin selama dua minggu ini aku nyari masalah di tempat yang salah.**

Aku sibuk utak-atik software.

Padahal bisa jadi dari awal masalahnya ada di hardware.

---

## SEGMEN 6 — KEBANYAKAN TUTORIAL, TAPI KOK TETAP MANDEK? — 6:45–7:40

Dan menurutku justru bagian ini yang paling aku ingat dari proyek itu.

Aku sempat berpikir kalau semakin banyak tutorial yang aku tonton, harusnya semakin cepat aku menemukan solusi.

Ternyata belum tentu.

Karena tutorial itu biasanya menjawab **masalah tertentu**.

Sedangkan waktu itu aku bahkan belum benar-benar tahu masalahku apa.

Aku cuma tahu gejalanya:

**WiFi nyala → ESP reset.**

Lalu aku cari orang lain yang punya gejala sama.

Begitu ketemu, aku ikutin solusinya.

Padahal dua perangkat yang sama-sama reset ketika WiFi nyala belum tentu rusaknya di bagian yang sama.

Punya orang lain mungkin memang software.

Punyaku?

Lah, sebelumnya habis konslet.

Dan aku malah hampir gak mempertimbangkan itu.

Jadi mungkin masalahnya bukan aku kurang banyak nonton tutorial.

Justru aku terlalu cepat mencari **jawaban**, sebelum ngerti **masalahnya**.

Sekarang kalau ketemu error, aku berusaha gak langsung:

“Cari tutorial apa, ya?”

Tapi coba bertanya dulu:

**Apa yang berubah?**

**Kapan masalahnya mulai muncul?**

**Sebelumnya aku ngapain?**

**Ini kemungkinan software atau hardware?**

Karena tiga pertanyaan sederhana itu mungkin bisa menghemat dua minggu hidupku waktu itu.

---

## PENUTUP — 7:40–8:15

Akhirnya proyek lampunya gimana?

**Gak jadi.**

Semuanya aku urungkan.

Tapi lucunya, sekarang justru kejadian kayak gini yang pengen aku kontenin.

Karena kalau cuma menunjukkan proyek yang berhasil, proses belajarnya kelihatan lurus banget.

Padahal kenyataannya enggak.

Kadang salah sambung kabel.

Kadang komponen kebakar.

Kadang error dua minggu.

Kadang nonton sepuluh tutorial dan gak ada satu pun yang menyelesaikan masalah.

Dan kadang...

setelah semuanya dilakukan, proyeknya tetap gak jadi.

Tapi setidaknya dari situ aku belajar:

**jangan langsung menganggap semua masalah bisa diselesaikan dengan tutorial berikutnya.**

Kadang kita harus berhenti mencari solusi sebentar dan memastikan dulu...

**sebenarnya yang rusak apaan?**

Dan satu pelajaran tambahan:

kalau lagi belajar embedded dan masih suka eksperimen...

**siapkan ESP cadangan. Wkwk.**

## CTA

“Pernah nggak kalian ngerusakin board, terus dua minggu malah nyari salahnya di software? Ceritain di komentar.”