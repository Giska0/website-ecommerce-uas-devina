# 💄 GYSÉ Beauty Store

> Final Project - Komputer Aplikasi IT-II
> Dibuat oleh Devina Giska Febriana 
> Tahun Akademik 2025/2026

---

# Gambaran Bisnis

## Nama Bisnis

**GYSÉ Beauty Store**

---

## Deskripsi Bisnis

GYSÉ Beauty Store merupakan website e-commerce sederhana yang menjual berbagai produk kecantikan original, mulai dari skincare hingga makeup dari berbagai merek terpercaya seperti Skintific, Somethinc, Rhode, Maybelline, KIKO Milano, dan Focallure.

Website ini dikembangkan sebagai proyek Ujian Akhir Semester (UAS) mata kuliah Komputer Aplikasi IT-II dengan tujuan memberikan pengalaman berbelanja online yang mudah, nyaman, dan menarik. Selain itu, website juga menyediakan halaman admin untuk mengelola data produk dan stok.

---

# Visi

Menjadi platform e-commerce kecantikan yang terpercaya dengan menyediakan produk original serta memberikan pengalaman berbelanja yang mudah, aman, dan nyaman.

---

# Misi

- Menyediakan produk kecantikan 100% original.
- Memberikan pengalaman belanja online yang mudah digunakan.
- Menyediakan berbagai metode pembayaran.
- Menyajikan informasi produk yang lengkap.
- Meningkatkan kualitas layanan dan kepuasan pelanggan.

---

# Value Proposition

Keunggulan yang ditawarkan GYSÉ Beauty Store:

- Produk kecantikan 100% original
- Tampilan website sederhana dan elegan
- Mudah digunakan oleh pengguna
- Proses checkout yang praktis
- Berbagai metode pembayaran
- Voucher gratis ongkir
- Halaman admin untuk mengelola produk
- Stok produk diperbarui secara otomatis setelah checkout

---

# Target Pasar

Target pengguna website ini meliputi:

- Perempuan usia 17–35 tahun
- Pelajar dan mahasiswa
- Karyawan
- Beauty enthusiast
- Masyarakat yang gemar berbelanja online

---

# Analisis Kompetitor

Kompetitor yang memiliki layanan serupa antara lain:

- Sociolla
- Sephora Indonesia
- Watsons Indonesia

Keunggulan GYSÉ Beauty Store:

- Tampilan lebih sederhana dan mudah dipahami.
- Proses checkout yang praktis.
- Simulasi berbagai metode pembayaran.
- Halaman admin sederhana untuk mengelola produk.

---

# Strategi Produk

Produk dibagi menjadi dua kategori utama:

- Skincare
- Makeup

Setiap produk memiliki informasi berupa:

- Gambar Produk
- Nama Brand
- Nama Produk
- Deskripsi Produk
- Harga
- Rating
- Stok

Admin dapat:

- Menambah produk
- Mengubah data produk
- Menghapus produk
- Mengubah stok produk

---

# Model Bisnis

Model bisnis yang digunakan adalah:

**Business to Customer (B2C)**

Sumber pendapatan berasal dari penjualan produk kecantikan.

---

# Strategi Harga dan Promosi

Harga produk disesuaikan dengan harga pasar untuk produk original.

Strategi promosi yang digunakan:

- Voucher Gratis Ongkir
- Tampilan produk best seller
- Tampilan website yang menarik
- Pengalaman belanja yang mudah

Biaya administrasi pembayaran:

Pembayaran menggunakan QRIS dan COD gratis biaya admin, sedangkan menggunakan e-wallet dan transfer bank ada biaya admin senilai Rp.2.500

---

# Proses Checkout

Alur pembelian pada website:

1. Melihat daftar produk
2. Mencari atau memfilter produk
3. Melihat detail produk
4. Menambahkan produk ke keranjang
5. Mengatur jumlah pembelian
6. Melakukan checkout
7. Memilih metode pembayaran
8. Menyelesaikan pesanan
9. Stok produk otomatis berkurang

Metode pembayaran yang tersedia:

- QRIS
- E-Wallet
- Transfer Bank
- Cash On Delivery (COD)

---

# Keamanan dan Pemeliharaan

Fitur keamanan yang diterapkan:

- Validasi form
- Validasi input
- Penyimpanan data menggunakan Local Storage

Pemeliharaan sistem dilakukan dengan:

- Memperbarui data produk
- Memperbarui stok
- Memperbaiki bug
- Mengembangkan tampilan website

---

# Rencana Penggunaan Data Analytics

Pengembangan selanjutnya dapat memanfaatkan data analytics untuk mengetahui:

- Jumlah pengunjung
- Produk yang paling sering dilihat
- Produk terlaris
- Tingkat keberhasilan checkout
- Produk yang sering ditambahkan ke keranjang

---

# Penjelasan Teknis

## Teknologi yang Digunakan

- HTML5
- CSS3
- JavaScript (Vanilla JavaScript)
- Local Storage

---

# Struktur Folder

```
GYSE/

│
├── index.html
├── products.html
├── cart.html
├── checkout.html
├── success.html
├── admin.html
│
├── css/
│   ├── style.css
│   ├── products.css
│   ├── cart.css
│   ├── checkout.css
│   └── admin.css
│
├── js/
│   ├── data.js
│   ├── main.js
│   ├── products.js
│   ├── cart.js
│   ├── checkout.js
│   ├── admin.js
│   └── animations.js
│
└── images/
```

---

# Fitur Website

## Fitur Pelanggan

- Homepage
- Hero Banner
- Katalog Produk
- Detail Produk
- Pencarian Produk
- Filter Kategori
- Keranjang Belanja
- Tambah Produk ke Keranjang
- Ubah Jumlah Produk (+/-)
- Hapus Produk dari Keranjang
- Ringkasan Pesanan
- Checkout
- Pembayaran QRIS
- Pembayaran E-Wallet
- Transfer Bank
- Cash On Delivery (COD)
- Voucher Gratis Ongkir
- Halaman Pesanan Berhasil
- Animasi Sederhana

---

## Fitur Admin

- Melihat daftar produk
- Menambah produk
- Mengubah data produk
- Menghapus produk
- Mengubah stok produk

Stok produk akan otomatis berkurang setelah proses checkout berhasil.

---

# Penyimpanan Data

Website ini menggunakan **Local Storage** sebagai media penyimpanan data, meliputi:

- Data Produk
- Keranjang Belanja
- Data Stok
- Perubahan Data oleh Admin

Website ini belum menggunakan database sehingga seluruh data disimpan pada browser pengguna.

---

# Cara Menjalankan Website

1. Download atau clone repository ini.
2. Buka folder project.
3. Jalankan file **index.html** menggunakan browser atau Live Server.
4. Untuk mengakses halaman admin, buka **admin.html**.
5. Website siap digunakan.

---

# Pengembangan Selanjutnya

Website ini masih dapat dikembangkan dengan menambahkan fitur seperti:

- Login dan Registrasi
- Akun Pengguna
- Wishlist
- Review Produk
- Integrasi Payment Gateway
- Database MySQL
- Riwayat Pesanan
- Pelacakan Pesanan
- Dashboard Admin yang lebih lengkap

---

# 🔗 Repository

**GitHub Repository:**  
(Tambahkan link repository GitHub di sini)

**GitHub Pages:**  
(Tambahkan link website GitHub Pages di sini)

---

# 👩‍💻 Penulis

**Devina Giska Febriana**

Final Project – Mata Kuliah Komputer Aplikasi IT-II

Tahun Akademik 2025/2026