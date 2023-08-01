// Problem
// Diberikan sebuah function konversiMenit(menit) yang menerima satu parameter 
// berupa angka yang merupakan ukuran waktu 
// dalam menit. Function akan me-return string waktu dalam format jam:menit 
// berdasarkan menit tersebut. 
// Contoh, jika menit adalah 63, maka function akan me-return "1:03".

function konversiMenit(menit) {
  let detik = menit % 60; 
  let Menit = menit / 60; 
  let pembulatan = Math.floor(Menit);

  if(detik <= 9){
    console.log(`${pembulatan}:0${detik}`);
  }else{
    console.log(`${pembulatan}:${detik}`);
  }
    
}  

  
  // TEST CASES
  console.log(konversiMenit(63)); // 1:03
  console.log(konversiMenit(124)); // 2:04
  console.log(konversiMenit(53)); // 0:53
  console.log(konversiMenit(88)); // 1:28
  console.log(konversiMenit(120)); // 2:00

// ------------------------------------
console.log('')
// ------------------------------------

//   Problem
//   Diberikan sebuah function xo(str) yang menerima satu parameter berupa string. 
//   Function akan me-return true jika jumlah karakter x sama dengan jumlah karakter o, 
//   dan false jika tidak.

function xo(str) {

  //variabel ini dibuat untuk menampung hitungan jumlah X dan O 
  let jumlahX = 0;
  let jumlahO = 0;
  //for loop untuk melakukan looping melalui setiap karakter dalam string
  for (let i = 0; i < str.length; i++){
    const huruf = str[i]; 
    //untuk memeriksa apakah karakter yang dilewati adalah huruf X atau O, 
    //apabila salah satu dari itu. Menambahkan jumlahX atau O
    if (huruf === 'x'){
      jumlahX++;
    }else if (huruf === 'o'){
      jumlahO++;
    }
  }
    // digunakan untuk membandingkan apakah jumlah sama dan tipe data sama ato 
    // tidak apabila sama output true apabila tidak output false
    return jumlahX === jumlahO; 


}
   
  

  
  // TEST CASES
  console.log(xo('xoxoxo')); // true
  console.log(xo('oxooxo')); // false
  console.log(xo('oxo')); // false
  console.log(xo('xxxooo')); // true
  console.log(xo('xoxooxxo')); // true

