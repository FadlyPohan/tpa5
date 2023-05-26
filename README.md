**Nama : Fadlyani Pohan**  
**Tim : BE-8**  
**Mentor : Luthfi Fitra Musyaffa**

# Webservice Restful API Operasi

Ini adalah Web Service & RESTful API for ToDoList Application

## Fitur

API ini menyediakan fitur berikut:

- Login
- Membuat todo baru
- Melihat semua todo
- Melihat detail todo
- Mengubah todo
- Menghapus todo
- Menghapus semua todo

## Langkah-langkah Pengcodingan

Berikut adalah langkah-langkah yang perlu diikuti untuk menjalankan webservice API:

1. Pastikan Anda memiliki Node.js dan npm terinstal di komputer Anda.

2. melakukan initializer digunakan untuk menyiapkan paket npm baru atau yang sudah ada.:

```sh
$ npm init
```

3. melakukan instalasi express.js :

```sh
$ npm install express
```

3. melakukan instalasi sebagai berikut :

```sh
$ npm install dotenv nanoid cors jsonwebtoken body-parser
```

5.  melakukan instalasi sequelize :

```sh
$ npm install -g sequelize-cli
```

5.  melakukan instalasi sequelize secara global :

```sh
$ npm install -g sequelize-cli
```

6. melakukan instalasi sequelize dan driver sequelize:

```sh
npm install --save sequelize
```

```sh
npm install --save mysql
```

6. melakukan inisialisasi terlebih dahulu agar dapat melakukan generate code perintah berikut:

```sh
npx sequelize-cli init
```

7. setelah attribute table telah dibuat selanjutnya generate mengecek ke database sehingga dapat kita gunakan untuk penimpanan DB dengan perintah:

```sh
npx sequelize-cli db:generate
```

7. setelah itu kita melakukan generate seed dengan perintah:

```sh
npx sequelize-cli seed:generate --name demo-customer
```

8. ketika API sekarang berjalan di http://localhost:3030/. Anda dapat mengakses endpoint-endpoint API yang disebutkan di bawah ini.

## Percobaan

Untuk melakukan pengujian API langkah-langkah untuk pengujian menggunakan Postman:

1.
2. Sebelum melakukan operasi CRUD pada entri customer, Anda perlu membuat akun terlebih dahulu dan melakukan login. Gunakan rute-rute berikut:

- POST http://localhost:3030/register: Rute untuk mendaftar pengguna baru.  
  Contoh Request Body :

```sha
{
  "nama": "fadly",
  "email": "fadly@gmail.com",
  "password": "123456",
  "confPassword": "123456"
}
```

- POST http://localhost:3030/login: Rute untuk melakukan login dan menghasilkan token JWT yang disimpan di header 'Authorization' dengan waktu kadaluwarsa 60 detik.  
  Contoh Request Body :

```sha
{
  "email": "fadly@gmail.com",
  "password": "123456",
}
```

Contoh Token JWT yang didapatkan pada header :

```sha
Authorization = Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImZhZGx5QGdtYWlsLmNvbSIsInBhc3N3b3JkIjoiMTIzNDU2IiwiaWF0IjoxNjg1MTEyMzcwLCJleHAiOjE2ODUxMTI0OTB9.DxowQ2szUHELMldYhaaNVN52j4IfW6KMuXk0yGARKJs
```

3. Setelah berhasil login, Anda dapat menggunakan token JWT yang dihasilkan pada header dengan nama 'Authorization' untuk mengakses rute-rute operasi customer berikut:
   Contoh Penggunaan Token JWT pada header :

```sha
Authorization = Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImRhbmlAZ21haWwuY29tIiwicGFzc3dvcmQiOiIxMjMiLCJpYXQiOjE2ODQ5MTMzODUsImV4cCI6MTY4NDkxMzQ0NX0.aDB0woP1HodszxFLioNlO72TE3Uc83Wmd8a5OB8dvPg
```

- POST http://localhost:3030/customer: Rute untuk membuat entri customer baru.  
  Contoh Request Body :

```sha
{
    "nama": "fadly"
    "email": "fadly@gmail.com"
}
```

- GET http://localhost:3030/customers: Rute untuk melihat semua entri customer.
- GET http://localhost:3030/customer/:id: Rute untuk melihat detail satu entri customer berdasarkan ID.
- PUT http://localhost:3030/customer/:id: Rute untuk mengedit satu entri customer berdasarkan ID.  
  Contoh Request Body :

```sha
{
  "nama": "pohan"
  "email": "pohan@gmail.com"
}
```

- DELETE http://localhost:3030/customer/:id: Rute untuk menghapus satu entri customer berdasarkan ID.
