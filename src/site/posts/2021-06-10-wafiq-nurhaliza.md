---
title: Analisis Regresi Berganda dengan SPSS
description: Tutorial Analisis Regresi Linear Berganda dengan SPSS 23
date: 2021-06-11T04:51:37.747Z
---
**Analisis Regresi Berganda dengan SPSS**

Analisis regresi merupakan suatu analisis yang digunakan untuk mengetahui hubungan antara dua variabel atau lebih yang pada umumnya dinyatakan dalam persamaan matematis. analisis regresi digunakan sebagai alat untuk mengetahui hubungan antar beberapa variabel bebas terhadap variabel terikat. Analisis regresi linear berganda berfungsi untuk mengetahui pengaruh dari dua atau lebih variabel bebas (X) terhadap variabel terikat (Y).

Dengan demikian, sederhananya dapat dikatakan bahwa jika kita ingin mengetahui apakah ada pengaruh antara variabel bebas (X) terhadap variabel terikat, maka dapat menggunakan analisis regresi sederhana. Sementara, jika kita ingin mengetahui pengaruh dua atau lebih variabel bebas (X) terhadap variabel terikat (Y) maka menggunakan analisis regresi linear berganda.

**Asumsi Analisi Regresi Linear Berganda**

Sebelum melakukan analisis regresi linear berganda, terdapat beberapa asumsi yang harus terpenuhi dalam model regresi. Asumsi-asumsi ini dibuktikan melalui beberapa uji, yakni uji asumsi klasik. uji asumsi klasik meliputi:

1. *Uji normalitas*, dimana asumsi yang harus dipenuhi adalah model regresi berdistribusi normal.
2. *Uji heterokedastisikas*, dimana asumsi yang harus dipenuhi adalah model regresi tidak homoskedastisitas (heterokedastisitas).
3. *Uji autokorelasi*, dimana asumsi yang harus dipenuhi adalah galat pada model regresi tidak mengalami autokorelasi (khusus untuk data time series).
4. *Uji multikolinearitas*, dimana asumsi yang harus dipenuhi adalah pada model regresi tidak terjadi masalah multikolinearitas.

**Theorema Model Regresi : Yi=β0 + β1X1 + β2X2 + ⋯ + βiXi + εi**

Contoh Kasus Analisi Regresi Linear Berganda
Setelah mengetahui konsep dasar tentang analisis regresi linear berganda ini, selanjutnya kita akan masuk ke bagian cara melakukan analisis regresi linear berganda menggunakan SPSS versi 23. Sebagai contoh, kita ingin mengetahui apakah ada pengaruh variabel Tinggi Badan (X1) dan variabel Jam Tidur (X2) terhadap Berat Badan (Y). Sampel penelitian ini sebanyak 15 orang. Data diambil dari Mahasiswa laki-laki semester 3 Jurusan Sistem Informasi di Universitas Tanjungpura. Data lengkap dapat dilihat pada tabel di bawah ini.



![](/images/uploads/ss-8-.png)

**Langkah-langkah Analisis Regresi Linear Berganda dengan SPSS 23**

Buka software SPSS. Klik bagian *Variabel View*. Kemudian pada bagian Name tulis Berat Badan, Tinggi Badan, dan Jam Tidur (Gunakan tanda *“_*” jika terdapat spasi). Pada bagian *Decimals* dapat diubah menjadi angka 0 (jika tidak ingin ada koma pada data). Pada bagian *Label*, boleh ditulis Berat Badan (Y), Tinggi Badan (X1), dan Jam Tidur (X2). Pada bagian *Measure*, pilih *Scale*. Sehingga di layar akan tampak seperti gambar berikut.

![](/images/uploads/ss-1-.png)

Kemudian, buka bagian Data View, lalu masukkan data Berat Badan (Y), Tinggi Badan (X1), dan Jam Tidur (X2) yang sudah dipersiapkan sebelumnya. Sehingga di layar akan tampak seperti gambar berikut.

![](/images/uploads/ss-2-.png)

Selanjutnya, dari menu utama SPSS, pilih *Analyze – Regression – Linear.*

![](/images/uploads/ss-3-.png)

Setelah itu, akan muncul kotak dengan nama “Linear Regression”, kemudian masukkan variabel Tinggi Badan dan Jam Tidur ke kotak *Independent(s)*, masukkan variabel Berat Badan ke kotak *Dependent*, pada bagian *Method* pilih *Enter*, selanjutnya klik *Statistics*…

![](/images/uploads/ss-4-.png)

Pada bagian “Linear Regression: Statistisc”, berikan tanda centang pada *Estimates* dan *Model fit*, kemudian klik *Continue*…

![](/images/uploads/ss-5-.png)

Langkah terakhir adalah klik *Ok*, maka akan muncul output SPSS.



**Output SPSS Analisis Regresi Linear Berganda**

![](/images/uploads/ss-6-.png)

Tabel output “Variables Entered/Removed” di atas memberikan informasi tentang variabel penelitian serta metode yang  digunakan dalam analisis regresi. Adapun variabel bebas yang dipakai dalam analisis ini adalah variabel Jam Tidur dan Tinggi Badan. Sementara variabel terikat adalah variabel Berat Badan. Analisis regresi menggunakan metode Enter. Tidak ada variabel yang dibuang sehingga pada kolom Variabel Removed tidak ada angkanya atay kosong.

![](/images/uploads/ss-7-.jpg)

Tabel “ANOVA” memberikan informasi tentang ada tidaknya pengaruh variabel Jam Tidur dan Tinggi Badan secara simultan (Bersama-sama) terhadap variabel Berat Badan. Pembahasan tentang pengaruh simultan akan dilanjutkan pada artikel berikutnya.

![](/images/uploads/ss-9-.png)

Tabel “Coefficients” memberikan informasi tentang persamaan regresi dan ada tidaknya pengaruh variabel Jam Tidur dan Tinggi Badan secara parsial (sendiri-sendiri) terhadap variabel Berat Badan. Adapun model regresi dalam analisis atau penelitian ini adalah sebagai berikut:

Y = β0 + β1X1 + β2X2 atau Y = -55,230 + 0,701 - 0,571

Sementara, untuk mengetahui ada atau tidak pengaruh variabel Jam Tidur dan Tinggi Badan secara parsial (sendiri-sendiri) terhadap variabel Berat Badan, pembahasannya akan dilanjutkan pada artikel berikutnya.

![](/images/uploads/ss-10-.png)

Tabel “Model Summary” memberikan informasi tentang nilai koefisien determinasi, yakni kontribusi atau sumbangan pengaruh variabel Jam Tidur dan Tinggi Badan secara simultan (bersama-sama) terhadap variabel Berat Badan. Pembahasan tentang tabel di atas dapat disimak pada artikel berikutnya.



Demikian panduan tentang Tutorial Analisis Regresi Linear Berganda dengan SPSS yang dapat saya tulis pada kesempatan kali ini. Semoga bermanfaat dan terima kasih.