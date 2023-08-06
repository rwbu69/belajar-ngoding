//1. Let's Form a Sentence

// Problem
// Pada tugas ini kamu diminta untuk melakukan penambahan string menggunakan simbol +.
//  Disediakan variable word. Tambahkan nilai word satu per satu dengan nilai variable lain
//  untuk membentuk sebuah kalimat. Jangan lupa menambahkan spasi di setiap kata, dan
//   tampilkan di console hasil penggabungannya! Kamu tidak perlu membuat variable baru!

let word = "JavaScript";
let second = "is";
let third = "awesome";
let fourth = "and";
let fifth = "I";
let sixth = "love";
let seventh = "it!";

//code here
console.log(
  word +
    " " +
    second +
    " " +
    third +
    " " +
    fourth +
    " " +
    fifth +
    " " +
    sixth +
    " " +
    seventh
);

// ---------------------------------------
console.log(" ");
// ---------------------------------------

// 2. Index Accessing - 1 by 1
// Problem
// Pada tugas ini kamu diminta untuk "memecah" sebuah kalimat dan menampilkan setiap kata didalamnya.
//  Untuk soal nomor ini, gunakan akses satu per satu karakter dari string untuk mengambil setiap huruf dalam kata.
//   Terasa manual? Tidak apa-apa, kita coba ini dulu untuk saat ini.

// Hints
// Saat kamu mendapatkan tiap huruf, untuk membentuk setiap kata kamu tinggal menggunakan simbol + untuk membentuk kata
//  tersebut!

let word2 = "wow JavaScript is so cool";
let exampleFirstWord = word2[0] + word2[1] + word2[2];
let secondWord =
  word2[4] +
  word2[5] +
  word2[6] +
  word2[7] +
  word2[8] +
  word2[9] +
  word2[10] +
  word2[11] +
  word2[12] +
  word2[13];
let thirdWord = word2[15] + word2[16];
let fourthWord = word2[18] + word2[19];
let fifthWord = word2[21] + word2[22] + word2[23] + word2[24];

console.log("First Word: " + exampleFirstWord);
console.log("Sec Word: " + secondWord);
console.log("Third Word: " + thirdWord);
console.log("Fourth Word: " + fourthWord);
console.log("Fifth Word: " + fifthWord);

// ---------------------------------------
console.log(" ");
// ---------------------------------------

// 3. Breaking Sentence (Again) using Substring
// Problem
// Mirip seperti soal nomor 2, namun kali ini gunakan substring untuk mengambil potongan dari tiap kata!

let word3 = "wow JavaScript is so cool";
let exampleFirstWord3 = word3.substring(0, 3);
let kata2 = word3.substring(4, 14);
let kata3 = word3.substring(15, 17);
let kata4 = word3.substring(18, 20);
let kata5 = word3.substring(21, 25);

console.log(
  "First Word: " +
    exampleFirstWord3 +
    " " +
    kata2 +
    " " +
    kata3 +
    " " +
    kata4 +
    " " +
    kata5
);

// ---------------------------------------
console.log(" ");
// ---------------------------------------

// 4. Breaking Sentence (yet Again) and Count Each Length
// Problem
// Mirip seperti soal nomor 3, tapi tampilkan juga panjang kata masing-masingnya!

let word4 = "wow JavaScript is so cool";
let kataSatu = word4.substring(0, 3);
let kataDua = word4.substring(4, 14);
let kataTiga = word4.substring(15, 17);
let kataEmpat = word4.substring(18, 20);
let kataLima = word4.substring(21, 25);

let kataSatuLength = kataSatu.length;
let kataDuaLength = kataDua.length;
let kataTigaLength = kataTiga.length;
let kataEmpatLength = kataEmpat.length;
let kataLimaLength = kataLima.length;

console.log("First Word: " + kataSatu + ", with length: " + kataSatuLength);
console.log("Sec Word: " + kataDua + ", with length: " + kataDuaLength);
console.log("Tird Word: " + kataTiga + ", with length: " + kataTigaLength);
console.log("Forth Word: " + kataEmpat + ", with length: " + kataEmpatLength);
console.log("Fif Word: " + kataLima + ", with length: " + kataLimaLength);
