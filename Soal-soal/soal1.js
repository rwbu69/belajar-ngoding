// Kamu diminta untuk memprogram suatu game sederhana, Proxytia namanya. 
// Untuk memulai game itu diperlukan 2 variabel (untuk sekarang), 
// yaitu nama dan peran. Variabel peranharus memiliki isi data, 
// bila kosong pemain akan diberikan peringatan berupa "Pilih Peranmu untuk memulai game". 
// Terdapat 3 peran berbeda yaitu Ksatria, Tabib, dan Penyihir. 
// Tugas Anda adalah untuk membuat program yang mengecek isi variabel 
// peran serta mengeluarkan respon sesuai isi variabel tersebut.
// ada 4 jenis respons sesuai dengan 3 jenis peran yaitu
// halo Ksatria ${nama} , kamu dapat menyerang dengan senjatamu!
// halo Tabib ${nama} , kamu akan membantu temanmu yang terluka
// halo Penyihir ${nama} , ciptakan keajaiban yang membantu kemenanganmu!
// tapi kayaknya kamu jadi bot aja ya, peran yang kamu pilih ga ada
// tips belajar penggunaan `` (backtick) pada javascript agar
// mudah dalam memasukan variabel ke dalam string
// tapi tanpa backtick juga ga masalah sih yg penting output sesuai
// algoritma

// cara membuat proxytia  
// buat wadah yang akan menyimpan nama dan peran 
// lalu buat if statement yang conditionnya berdasarkan peran yang diisi di variabel peran
// setelah itu isi di console log taro output yang menjadi nama + peran + jargon 
// kalau di peran tidak berisikan apapun stringnya, maka akan di output sebagai jargon terakhir
// kalau saya sebelumnya jargonnya saya bikin masing-masing jadi variabel karena biar ngetik panjang nya diawal aja
// kalau saya untuk nama + spasi + peran ane jadiin satu di variabel data 
// saya memakai == karena berarti kan equal to, jadi bisa memastikan bahwa sama yang dimana case sensitive juga
// jadi apabila misal salah input jadi ksatria bakal ke detectnya ke arah statement elsenya
// ato harusnya pake = aja yak, bingung juga sebenernya 


// isi algoritma mu disini (AWAS KALO GA DI ISI!!!!)

let nama = "Asep"; 
let peran = "Ksatria";
let word1 = "kamu dapat menyerang dengan senjatamu!";
let word2 = "kamu akan membantu temanmu yang terluka";
let word3 = "ciptakan keajaiban yang membantu kemenanganmu!";
let word4 = "tapi kayaknya kamu jadi bot aja ya, peran yang kamu pilih ga ada";
let judulgame = "Proxytia";

//sama halnya kyk yang variabel data dibawah jargon perannya ane jadiin variabel juga hehe

let data = peran + ' ' + nama; //disini ane jadiin variabel data ae biar ga capek ngetik mulu wkwk

// dibawah ane make backtick seperti yang disarankan, ternyata enak  

console.log(judulgame);

if (peran = "Ksatria"){ 
    console.log(`halo ${data}, ${word1}`); // 
        }
    else if (peran == "Tabib"){
        console.log(`halo ${data}, ${word2}`);

    }else if (peran == "Penyihir") {
        console.log(`halo ${data}, ${word3}`);
        
    }else{
        console.log(word4);
        }
    
//code disini gunakan console.log untuk outputnya

