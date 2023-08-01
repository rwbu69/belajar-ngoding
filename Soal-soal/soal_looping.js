// 1. Melakukan Looping Menggunakan While
// Problem
// Pada tugas ini kamu diminta untuk melakukan looping dalam JavaScript dengan menggunakan syntax while.
// Untuk membuat tantangan ini lebih menarik, kamu juga diminta untuk membuat suatu looping yang menghitung maju dan
// menghitung mundur. Jangan lupa tampilkan di console juga judul 'LOOPING PERTAMA' dan 'LOOPING KEDUA'.
//tampilkan output yang menunjukan kalau looping itu maju pada looping pertama dan mundur pada looping kedua

// let i = 0; 
// console.log('looping maju'); 
// while(i <= 5){
//     console.log(i);
//     i++ 
// }

// let j = 5; 
// console.log('looping mundur');
// while(j >= 0){
//     console.log(j);
//     j--
// }



// 2. Melakukan Looping Menggunakan For
// Problem
// Pada tugas ini kamu diminta untuk melakukan looping dalam JavaScript dengan menggunakan syntax for.
// Untuk membuat tantangan ini lebih menarik, kamu juga diminta untuk membuat suatu looping yang menghitung maju dan
// menghitung mundur. Jangan lupa tampilkan di console juga judul 'LOOPING PERTAMA' dan 'LOOPING KEDUA'.
//tampilkan output yang menunjukan kalau looping itu maju pada looping pertama dan mundur pada looping kedua

// console.log('LOOPING PERTAMA');
// for(let i = 0; i < 5; i++){
//     console.log(i);
// }

// console.log('LOOPING KEDUA');
// for(let j = 5; j > 0; j--){
//     console.log(j);
// }

// 3. Angka Ganjil dan Genap
// Hint: kamu akan menggunakan kondisional juga di kasus ini.

// Problem
// Buatlah sebuah perulangan 1 - 100 dengan pertambahan counter sebanyak 1
// Di dalam perulangan, periksa setiap angka counter:

// Apabila angka counter adalah angka genap, tuliskan GENAP
// Apabila angka counter adalah angka ganjil, tuliskan GANJIL

// let genap = 0; 
// let ganjil = 0 ;

// for(let i = 1; i <= 100; i++){
//     if(i % 2 == 0){
//         console.log('genap');
//         genap++
//     }else{
//         console.log('ganjil');
//         ganjil++ 
//     }
// }
// console.log ('jumlah angka ganjil ada :', ganjil);
// console.log ('jumlah angka genap ada :', genap);


//4. counter kelipatan
// Buatlah 3 perulangan baru dari 1 - 100, dengan pertambahan counter sebesar 2, 5, dan 9.
// Pada 3 perulangan baru ini periksa setiap angka counter:

// Apabila bukan kelipatan yang ditentukan tidak perlu menuliskan apa-apa
// Apabila angka counter adalah kelipatan 3 dengan pertambahan 2, kelipatan 6 dengan pertambahan 5, 
// dan kelipatan 10 dengan pertambahan 9, tuliskan:
// "3 kelipatan 3"dan seterusnya.

// let kelipatanDua = 0;
// let kelipatanLima = 0; 
// let kelipatanSembilan = 0;

// for(let i = 2; i <= 100; i+=2){
//     if(i % 2 == 0){
//         console.log(`${i} adalah kelipatan 2`);
//         kelipatanDua++;
//     }else{}
   
// }
// console.log('jumlah total kelipatan 2 ada',kelipatanDua);

// for(let j = 5; j <= 100; j+=5){
//     if(j % 5 == 0){
//         console.log(`${j} adalah kelipatan 5`);
//         kelipatanLima++;
//     }else{}
// }
// console.log('jumlah total kelipatan 5 ada',kelipatanLima);

// for(let k = 9; k <= 100; k+=9){
//     if(k % 9 == 0){
//         console.log(`${k} adalah kelipatan 9`);
//         kelipatanSembilan++;
//     }else{}
// }
// console.log('jumlah total kelipatan 9 ada',kelipatanSembilan)