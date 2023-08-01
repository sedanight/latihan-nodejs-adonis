// let hasil = '';
// for ($k=1; $k<=7 ; $k++) 
// {
//     for ($u=1; $u<=$k ; $u++)
//     {
//         hasil += "#";
//     } 
//         hasil +="\n";
// }
// console.log(hasil);
function makeLadder(sisi){
    for(var i = 1; i <= sisi; i++){
        var step = "";
        for(var j= 0; j < i;j++){
            step += "#";
        }
        console.log(step);
    }
}
makeLadder(7);
