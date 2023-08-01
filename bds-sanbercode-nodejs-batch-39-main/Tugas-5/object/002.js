function naikAngkot(arrPenumpang) {
    var rute = ['A', 'B', 'C', 'D', 'E', 'F'];
    var result = [];
    for (var i = 0; i < arrPenumpang.length; i++) {
    var penumpang = arrPenumpang[i][0];
    var naikDari = arrPenumpang[i][1];
    var tujuan = arrPenumpang[i][2];
    var bayar = (rute.indexOf(tujuan) - rute.indexOf(naikDari)) * 2000;
    var obj = {
    penumpang: penumpang,
    naikDari: naikDari,
    tujuan: tujuan,
    bayar: bayar
    };
    result.push(obj);
    }
  return result;
}
console.log(naikAngkot([['Luis', 'A', 'F'], ['Maria', 'C', 'E']]));
  