// src/setupTests.js

// Jest DOM menambahkan custom matchers untuk mempermudah pengujian elemen DOM.
// Ini memungkinkan kita untuk melakukan asersi yang lebih spesifik pada konten dan atribut elemen.
// Contoh penggunaan:
// expect(element).toHaveTextContent(/react/i)  -> Memastikan elemen memiliki teks yang mengandung "react" (case insensitive)
// expect(button).toBeDisabled()                -> Memastikan tombol dalam keadaan nonaktif (disabled)
// expect(link).toHaveAttribute('href', '/home') -> Memastikan link memiliki atribut href yang tepat

// Dokumentasi lebih lanjut dapat dilihat di: 
// https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
