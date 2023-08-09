// pada soal yg kedua, kalian harus belajar method split secara mandiri,
// pada soal dibawah ini, method .split() cukup powerfull loh

let input = [
  "0001",
  "Roman Alamsyah ",
  "Bandar Lampung",
  "21/05/1989",
  "Membaca",
];

function dataHandling2(input) {
  input[1] = "Roman Alamsyah Elsharawy";
  input[2] = "Provinsi Bandar Lampung";
  input.pop();
  input.splice(4, 0, "Pria", "SMA Internasional Metro");
  //'0001','Roman Alamsyah Elsharawy','Provinsi Bandar Lampung','21/05/1989','Pria','SMA Internasional Metro'
  console.log(input);

  let bulan = input[3].split("/");
  let bulanBeneran = bulan[1];
  let bulanSlice = bulanBeneran.slice(1, 2);
  switch (bulanSlice) {
    case "1":
      bulanSlice = "januari";
      break;
    case "2":
      bulanSlice = "februari";
      break;
    case "3":
      bulanSlice = "maret";
      break;
    case "4":
      bulanSlice = "april";
      break;
    case "5":
      bulanSlice = "mei";
      break;
    case "6":
      bulanSlice = "juni";
      break;
    case "7":
      bulanSlice = "juli";
      break;
    case "8":
      bulanSlice = "agustus";
      break;
    case "9":
      bulanSlice = "september";
      break;
    case "10":
      bulanSlice = "oktober";
      break;
    case "11":
      bulanSlice = "november";
      break;
    case "12":
      bulanSlice = "desember";
      break;
  }
  console.log(`${bulanSlice}`);

  let tgl = input[3];
  let tglSplit = tgl.split("/");
  let dateDiharapkan = [];
  dateDiharapkan[0] = tglSplit[2];
  dateDiharapkan[1] = tglSplit[0];
  dateDiharapkan[2] = tglSplit[1];
  console.log(dateDiharapkan);

  let date = input[3];
  let pecah = date.split("/");
  let dateBaru = pecah[0] + "-" + pecah[1] + "-" + pecah[2];
  console.log(dateBaru);

  let nama = input[1];
  let namaKepotong = "";
  for (let i = 0; i < 15 && i < nama.length; i++){
    namaKepotong += nama[i];
  }
  console.log(namaKepotong);
}

dataHandling2(input);

/**
 * keluaran yang diharapkan (pada console)
 *
 * ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]
 * Mei
 * ["1989", "21", "05"]
 * 21-05-1989
 * Roman Alamsyah //batasi hanya 15 karakter saja pada array elemen ke 2
 */
