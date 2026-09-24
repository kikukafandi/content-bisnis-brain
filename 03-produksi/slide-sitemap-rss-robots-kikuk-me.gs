function createSeoSlides() {
  const deck = SlidesApp.create('Sitemap, RSS Feed, dan Robots.txt — kikuk.me');
  const slides = [
    ['Tiga file, tiga tugas berbeda', 'Sitemap.xml, RSS feed, dan robots.txt di kikuk.me'],
    ['Jangan disamakan', 'Sitemap\nDaftar URL untuk mesin pencari\n\nRSS feed\nAliran konten terbaru\n\nRobots.txt\nAturan akses crawler'],
    ['Bayangkan sebuah gedung', 'SITEMAP = peta\nRSS = papan pengumuman\nROBOTS = satpam\nJSON-LD = kartu identitas ruangan'],
    ['Sitemap kikuk.me', 'Halaman statis\n+ proyek\n+ posting terbit\n+ tutorial terbit\n+ chapter terbit\n\n→ kikuk.me/sitemap.xml'],
    ['Draft jangan ikut jalan-jalan', 'Hanya konten berstatus terbit yang masuk.\n\nSitemap membantu URL ditemukan.\nBukan jaminan URL langsung masuk indeks.'],
    ['RSS feed kikuk.me', 'Posting + tutorial terbaru\nJudul · URL · ringkasan · tanggal · kategori\n\n→ kikuk.me/feed.xml'],
    ['RSS bukan sitemap', 'SITEMAP\nMembantu crawler menemukan URL\n\nRSS\nMendistribusikan pembaruan konten\n\nBonus: Atom + JSON Feed'],
    ['Robots.txt kikuk.me', 'Allow: /\nDisallow: /admin/\nDisallow: /login/\nDisallow: /dashboard/\nSitemap: kikuk.me/sitemap.xml'],
    ['Robots.txt bukan gembok', 'Disallow mengatur crawling, bukan keamanan.\n\nHalaman privat tetap perlu autentikasi.\nSalah blokir bisa menyulitkan crawler.'],
    ['Satu ekosistem', 'ROBOTS → mengatur crawler\nSITEMAP → menunjukkan URL\nRSS → menyebarkan konten baru\nJSON-LD → menjelaskan isi halaman\n\nYang paling bikin kalian bingung?']
  ];

  deck.getSlides()[0].remove();
  slides.forEach((content, index) => addSeoSlide(deck, content[0], content[1], index + 1, slides.length));
  Logger.log(deck.getUrl());
  return deck.getUrl();
}

function addSeoSlide(deck, title, body, number, total) {
  const slide = deck.appendSlide(SlidesApp.PredefinedLayout.BLANK);
  const width = deck.getPageWidth();
  const height = deck.getPageHeight();
  const paper = '#F2F0E9';
  const ink = '#171816';
  const muted = '#686A63';
  const accent = '#D43B2F';

  slide.getBackground().setSolidFill(paper);
  const bar = slide.insertShape(SlidesApp.ShapeType.RECTANGLE, 0, 0, 14, height);
  bar.getFill().setSolidFill(accent);
  bar.getBorder().setTransparent();

  const label = slide.insertTextBox('KIKUK.ME / TECHNICAL SEO', 42, 28, width - 84, 18);
  styleText(label, 10, ink, true, SlidesApp.ParagraphAlignment.LEFT);

  const count = slide.insertTextBox(String(number).padStart(2, '0') + ' / ' + String(total).padStart(2, '0'), width - 105, 28, 65, 18);
  styleText(count, 10, muted, true, SlidesApp.ParagraphAlignment.RIGHT);

  const line = slide.insertShape(SlidesApp.ShapeType.RECTANGLE, 42, 54, width - 84, 1);
  line.getFill().setSolidFill('#C9C7BD');
  line.getBorder().setTransparent();

  const heading = slide.insertTextBox(title, 42, 82, width - 84, 95);
  styleText(heading, number === 1 ? 34 : 30, ink, true, SlidesApp.ParagraphAlignment.LEFT);

  const text = slide.insertTextBox(body, 45, 195, width - 90, height - 245);
  styleText(text, number === 1 ? 22 : 19, number === 1 ? accent : muted, false, SlidesApp.ParagraphAlignment.LEFT);

  const footer = slide.insertTextBox(number === total ? 'PERTANYAAN BUAT KOLOM KOMENTAR' : 'STUDI KASUS IMPLEMENTASI NYATA', 42, height - 30, width - 84, 14);
  styleText(footer, 8, muted, true, SlidesApp.ParagraphAlignment.LEFT);
}

function styleText(shape, size, color, bold) {
  const text = shape.getText();
  text.getTextStyle().setFontFamily('Arial').setFontSize(size).setForegroundColor(color).setBold(bold);
}
