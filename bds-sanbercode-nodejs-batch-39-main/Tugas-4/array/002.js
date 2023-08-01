function balikKata(kata) {
    var reversed = "";
    for (var i = kata.length - 1; i >= 0; i--) {
      reversed += kata[i];
    }
    return reversed;
  }
  
  console.log(balikKata("SanberCode"));
  console.log(balikKata("racecar"));
  console.log(balikKata("kasur rusak"));
  console.log(balikKata("haji ijah"));
  console.log(balikKata("I am Sanbers"));
  