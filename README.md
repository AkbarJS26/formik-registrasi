# **Form Registrasi**

Ini adalah website mengenai Form Registrasi yang dibuat menggunakan Vite React, Formik, Yup, dan Tailwind Css.

---

## Teknologi yang Digunakan

- [React Js v.18](https://react.dev/) - Library Javascript untuk membangun antarmuka pengguna.
- [ViteJs](https://vitejs.dev/) - Sebuah FrontEnd Tool untuk mengembangkan proyek lebih cepat.
- [Formik](https://formik.org/) - Library React untuk mengelola form.
- [Yup](https://www.npmjs.com/package/yup) - Library Validasi data Javascript yang umumnya di pasangkan dengan Formik.
- [Tailwind CSS v.3.3.1](https://tailwindcss.com/) - Framework Css untuk mengatur tampilan antarmuka pengguna.

---

- ### React Js

  React adalah library JavaScript yang memungkinkan saya membangun antarmuka pengguna dengan cepat dan interaktif. Terdapat beberapa fitur dari React Js yang membuat saya tertarik untuk menggunakannya. Diantaranya React menggunakan syntax JSX, yaitu kita dapat membuat syntax HTML di dalam Javascript. Kemudian React itu SEO Friendly. Dan React dapat melakukan server-side-rendering yang dapat meningkatkan performa applikasi.

- ### ViteJs
  Build tool ini memungkinkan pengembangan proyek React lebih cepat dengan menggunakan fitur seperti live-reload, build cepat, dan import on-demand. Dengan menggunakan Vite, saya dapat menghemat waktu dalam proses pengembangan dan meningkatkan produktivitas. Selain itu, Vite juga memiliki performa build yang lebih cepat daripada build tool lainnya.

---

- ### Formik
  Library ini memudahkan pengelolaan state pada form dan menyediakan fitur salah satunya seperti penanganan submit, dan pengaturan nilai default. Dengan menggunakan Formik, dapat menghemat waktu dalam pengembangan karena tidak perlu mengelola state form secara manual. Selain itu, Formik juga mudah diintegrasikan dengan library validasi seperti Yup.

---

- ### Yup
  Library ini memudahkan proses validasi input pada form dengan menyediakan metode validasi seperti required, min, max, dan email. Selain itu, Yup ini biasanya dipasangkan dengan library Formik. Dengan menggunakan Yup, validasi input menjadi lebih mudah.

---

- ### Tailwind CSS
  Library ini menyediakan sejumlah kelas utilitas yang dapat digunakan untuk membangun tampilan antarmuka pengguna yang konsisten dan mudah dikustomisasi. Tailwind CSS memudahkan proses styling dan memungkinkan saya untuk menghasilkan tampilan antarmuka pengguna yang profesional dalam waktu singkat. Selain itu, Tailwind CSS juga dapat meningkatkan produktivitas dalam pengembangan karena kelas utilitas yang dapat digunakan ulang.

---

## Fitur

- Input pertama menjadi auto focus ketika halaman pertama kali dibuka.

  ![ref](https://user-images.githubusercontent.com/119624307/235335112-7adf3cd5-ae33-4db4-a442-3d82275ce167.gif)

- Validasi input menggunakan Yup.
- Menampilkan pesan error jika input tidak valid.

  ![validasi](https://user-images.githubusercontent.com/119624307/235335420-531ebbda-e2b8-4ba1-b81e-62b5e0f8ce4c.gif)

- Jika user click icon mata, maka password akan terlihat, dan jika user click icon mata sekali lagi, maka password akan kembali tertutup.

  ![show hide](https://user-images.githubusercontent.com/119624307/235335237-e7855d00-fc63-4fe7-9b97-ff8731833f2b.gif)

- Tombol register hanya aktif jika semua input sudah valid.
- Jika semua input sudah terisi dengan benar, jika user click tombol register, maka tombol register berubah menjadi animasi spinner dan text loading..., setelah nunggu sekitar 1,5 detik, maka muncul pesan registrasi berhasil.

  ![success](https://user-images.githubusercontent.com/119624307/235335299-3a2fbee6-779d-48e9-a6da-0f2c206275b7.gif)

- Desain tampilan menggunakan Tailwind CSS.

---

## Cara Menjalankan Applikasi

- Clone repositori ini dengan perintah: `git clone https://github.com/AkbarJS26/formik-registrasi.git`
- Pindah ke direktori proyek: `cd formik-registrasi`
- Install dependensi dengan perintah: `npm install`
- Jalankan proyek dengan perintah: `npm run dev`

---

Demikian dokumentasi mengenai project kali ini dan terimakasih sudah mengunjungi repo ini😊.
