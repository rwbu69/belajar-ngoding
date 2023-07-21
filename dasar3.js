let nilai = 100; 

if (nilai >= 80 && nilai <= 100){
    nilai = "A";
}else if (nilai >= 70 && nilai < 80){
    nilai = "B";
}else if (nilai >= 60 && nilai < 70){
    nilai = "C";
}

console.log(nilai); 

nilai = 50; 
//&& (logical and) semua kondisi harus terpenuhi 
//atau salah satu kondisi harus terpenuhi 

let banding = nilai >= 80 && nilai <= 100; //antara true or false 
console.log(banding, '&&')
let banding2 = nilai >= 80 || nilai <=100; //antara true or false 
console.log(banding2, '||')
let banding3 = nilai !=50;
console.log(banding3, '!')


//equal to dan equal type 

let x = 10; 
let y = "10"; 
let z = '10'; 
let makan = true; 
let f = 1; 

console.log(y == z ); //equal to = artinya nilainya sama tidak peduli tipe datanya 
console.log(x === y); //equal type = artinya tipe variabel nya 
console.log (x == makan); //hasil false karena makan=true yang dimana makan berarti 1 
console.log (makan == f);  //hasil true karena makan=true (1) yang dimana sama dengan nilai variabel f 
