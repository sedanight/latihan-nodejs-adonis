function makeRectangle(panjang,lebar){
    for(let i=0; i< lebar; i++){
        let row = "";
        for(let j=0; j<panjang;j++){
            row +="#";
        }
        console.log(row);
    }
}
makeRectangle(8,4);