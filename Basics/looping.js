// while()
// for()

// let i = 0;

// while(i<5){
//     console.log(i);
//     i++
// }

//dalam looping ada arah, kiri pengurangan, kanan penjumlahan
// ^^^^ contoh penjumlahan
// contoh pengurangan

// let j = 5;
// while(j>=0){
//     console.log(j);
//     j--
// }

//salah mengarahkan looping (infinite loop) atau loopnya ga jalan (looping itu untuk mencari sampai true or false)

// for(let k = 0; k < 5 ; k++){
//     console.log(k);
// }

// let name = "udin";

//ada yang namanya method length untuk string dan array
//method length mengembalikan nilai angka, total huruf yang ada di string, dan total element di array

// for(let i = 0; i < name.length; i++){
//     console.log(name[i]);
// }

//tipe data string pada js ada yg namanya indexing, index SUDAH PASTI berawal dari 0

//diberikan kasus untuk membalikan suatu kata tanpa method reverse

//contoh

// let name = "udin"; //length 3, sedangkan index dari 0, u -> 0, g -> 1, dst. Maka untuk mengakses yang paling ujung harus dikurangi 1
// let result = "";

// for(let i = name.length - 1 ; i >= 0; i--){ // i = 3-1; 3-1 >= 0; i--
//     result += name[i];
// }
// console.log(result);

//nested loop

for (let i = 0; i < 5; i++) {
  for (let j = 0; j < i; j++) {
    console.log(j);
  }
  console.log("");
}
console.log("rampung");

// looping akan bertemu dengan method length
// looping itu agar membuat code jadi lebih pendek
// looping membuat proses menjadi dinamis
