//Soal Nomor 1
var nama = 'John';
var peran = '';

if(nama === "" && peran === "" ){
    console.log("Nama harus diisi!");
}
else if( nama && peran ==="" ){
    console.log("Halo " + nama + ", Pilih peranmu untuk memulai game!");
    }
else if( nama  && peran === "Penyihir"){
    console.log("Selamat datang di Dunia Werewolf, " + nama);
    console.log("Halo " + peran + " " + nama + " , kamu dapat melihat siapa yang menjadi werewolf!");                  
} else if(nama  && peran === "Guard"){
    console.log("Selamat datang di Dunia Werewolf, " + nama);
    console.log("Halo " + peran + " " + nama + " , kamu akan membantu melindungi temanmu dari serangan werewolf.");  
} else if(nama  && peran === "Werewolf"){
    console.log("Selamat datang di Dunia Werewolf, " + nama);
    console.log("Halo " + peran + " " + nama + " , Halo Werewolf Junaedi, Kamu akan memakan mangsa setiap malam!"); 
}
else{
    console.log('Peran yang ada hanyalah Penyihir, Guard, dan Werewolf')
}
//Soal Nomor 2
var hari = 21; 
var bulan = 1; 
var tahun = 1945;
//  Maka hasil yang akan tampil di console adalah: '21 Januari 1945'; 

function validateInput(key) {
  console.log(key, [key])
  if (key === 'hari') {
    return 1 >= [key] <= 31 ? [key] : false
  }
  if (key === 'bulan') {
    return 1 >= [key] <= 12 ? [key] : false
  }
  if (key === 'tahun') {
    return 1900 >= [key] <= 2200 ? [key] : false
  }
}

const validatedHari = validateInput('21')
const validatedBulan = validateInput('1')
const validatedTahun = validateInput('1945')


function newBulan(x){

switch(x) {
  case 1:   { return 'Januari'; break; }
  case 2:   { return 'Februari'; break; }
  case 3:   { return 'Maret'; break; }
  case 4:   { return 'April'; break; }
  case 5:   { return 'Mei'; break; }
  case 6:   { return 'Juni'; break; }
  case 7:   { return 'Juli'; break; }
  case 8:   { return 'Agustus'; break; }
  case 9:   { return 'September'; break; }
  case 10:   { return 'Oktober'; break; }
  case 11:   { return 'November'; break; }
  case 12:   { return 'Desember'; break; }
  default:  { return 'Bulan tidak valid! (Masukkan 1-12 saja)'}}
  }
  var bulanStringified = newBulan(validatedBulan)
  
console.log(validatedHari, bulanStringified, validatedTahun)