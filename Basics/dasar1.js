//membuat variabel 

var a = 'a';
let b = 'b';
const c = 'c';

//tipe data 

let nama = "sinta"; //string
let umur = 22; //number
let apakahBenar = true; //boolean
let uang = 5000.5 // number pake koma 

//operator aritmatika 
let angka1 = 10;
let angka2 =10; 
console.log(angka1 + angka2);
console.log(angka1 - angka2);
console.log(angka1 / angka2);
console.log(angka1 * angka2);
console.log(angka1 % angka2, 'modulus = sisa pembagian');

//camel case 
let hasilAritmatika = angka1 + angka2;
console.log(hasilAritmatika); //hasilAritmatika sudah menjadi variable jadi tidak perlu menggunakan let 

//string bisa ditambah namun tidak bisa dikurang dengan operator aritmatika 
let firstname = 'budi';
let lastname = 'setiawan';
console.log(firstname+lastname);
console.log(firstname + ' ' + lastname); //menambahkan spasi

//alur pembacaan code 
//untuk membaca code harus dibaca dari kiri ke kanan dan atas kebawah (kyk bahasa indoensia)

let number = 20; 
console.log(number + 10); // harusnya 30 
number = 10; 
console.log(number + 10); //JADI 20 karena sudah diubah di line 38 
number = true;
console.log(true + 10); // jadi 11 dikarenakan true bernilai 1, false bernilai 0 

//membaca error 
//error adalah hal bagus dikarenakan mempermudah dalam debugging (mencari bug), apabila program memiliki bug namun tidak memiliki
//pemberitahuan error, programer langsung ketar ketir

//contoh error 
const hewan = jerapah; 
console.log(hewan);
hewan = 'buaya'; //jerapah is not defined dikarenakan variabel const itu adalah konstanta dan tidak dapat diubah 

//kata sepuh discord = ngoding adalah habit 
let ngoding = habit;
console.log(habit); 
