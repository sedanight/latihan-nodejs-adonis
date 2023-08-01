function nilaiTertinggi(siswa) {
    let hasil = {};
    siswa.forEach(murid => {
      if (!hasil[murid.class] || hasil[murid.class].score < murid.score) {
        hasil[murid.class] = { name: murid.name, score: murid.score };
      }
    });
    return hasil;
  }
  console.log(nilaiTertinggi([
    {
      name: 'Asep',
      score: 90,
      class: 'adonis'
    },
    {
      name: 'Ahmad',
      score: 85,
      class: 'vuejs'
    },
    {
      name: 'Regi',
      score: 74,
      class: 'adonis'
    },
    {
      name: 'Afrida',
      score: 78,
      class: 'reactjs'
    }
  ]));  
