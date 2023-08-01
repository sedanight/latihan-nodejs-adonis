export const sapa = (nama)=>{
    return `Halo Selamat Pagi ${nama}`    
}

export const convert = (nama,domisili,umur) =>{
    return{
        nama,
        domisili,
        umur
    }
}

const data = [
 {name:"Ahmad",kelas:"adonis"},
 {name:"Regi",kelas:"laravel"},
 {name:"Bondra",kelas:"adonis"},
 {name:"Iqbal",kelas:"vuejs"},
 {name:"Putri",kelas:"Laravel"},
];

export const filterData = (namaKelas) => {
    for(let j=0; j<data.length; j++){
        return data.filter((el)=>el['kelas'].toLowerCase().includes(namaKelas.toLowerCase()));
    }
}

export const checkScore = (input) =>{
    const dataArray = input.split(',');
    const processedData = dataArray.reduce((acc, curr) => {
        const [key,value]= curr.split(':');
        acc[key] = value;
        return acc;
    },{name:"Ahmad",kelas:"adonis",score:89});
    return processedData;
};