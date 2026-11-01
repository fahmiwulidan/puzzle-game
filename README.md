<div align="center">

  <h1>8-Puzzle Game - Sliding Number Puzzle</h1>
  <p><b>Aplikasi Game Geser Angka Interaktif Berbasis Web 3x3</b></p>

  [![Vercel Deployment](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://puzzle-game-eight-delta.vercel.app)
  [![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
  [![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
  [![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](./LICENSE)

  <br />

  [Demo Aplikasi](https://puzzle-game-eight-delta.vercel.app) •
  [Laporkan Bug](https://github.com/fahmiwulidan/puzzle-game/issues) •
  [Minta Fitur](https://github.com/fahmiwulidan/puzzle-game/issues)

</div>

---

## Ringkasan Proyek

**8-Puzzle Game** adalah permainan teka-teki geser angka (*sliding puzzle*) 3x3 berbasis web interaktif. Pemain ditantang untuk menyusun kembali ubin berisi angka 1 hingga 8 sesuai urutan dengan memanfaatkan satu slot kosong yang tersedia. Aplikasi ini dilengkapi dengan tombol pengacak angka (*shuffling*) untuk memulai permainan baru secara dinamis.

> [!NOTE]
> Proyek ini dikembangkan menggunakan *pure client-side web stack* (HTML, CSS, Vanilla JS) dan di-deploy secara publik melalui platform **Vercel**.

---

## Teknologi Utama

| Layer | Teknologi | Deskripsi |
| :--- | :--- | :--- |
| **Structure** | HTML5 | Semantik markup elemen papan permainan 3x3 & tombol kontrol |
| **Styling** | CSS3 | Desain grid papan permainan, ubin interaktif, & tata letak responsif |
| **Logic** | JavaScript (ES6+) | Logika pengacakan (*shuffling*), validasi pergerakan ubin, & manipulasi DOM |
| **Deployment** | Vercel | Infrastructure hosting statis dengan integrasi CI/CD otomatis |

---

## Fitur Unggulan

- **Mekanisme Sliding Tile 3x3** — Pergerakan ubin angka interaktif yang presisi menuju ruang kosong saat diklik.
- **Fitur Acak Papan (Acak Angka)** — Pembentukan komposisi awal permainan secara acak untuk tantangan yang bervariasi.
- **Desain Minimalis & Responsif** — Antarmuka bersih yang nyaman dimainkan di layar desktop maupun perangkat seluler.
- **Performa Instan (Zero Dependency)** — Pengunduhan halaman super cepat tanpa ketergantungan *framework* atau *library* luar.
- **Dokumentasi Terstruktur** — Disertai berkas laporan analisis/pengembangan proyek (`Laporan.docx`).

---

## Struktur Direktori

```text
puzzle-game/
├── Laporan.docx      # Berkas dokumentasi & laporan pengembangan game
├── fungsi.js         # Logika utama game (pengacakan, pergeseran ubin, & aturan)
├── index.html        # Berkas utama struktur tata letak halaman game
├── style.css         # Styling antarmuka, tata letak grid, & elemen visual
└── README.md         # Dokumentasi utama repositori
```

---

<div align="center">
  <sub>Dikembangkan dengan ❤️ oleh <a href="https://github.com/fahmiwulidan">Fahmi Wulidan</a></sub>
</div>
