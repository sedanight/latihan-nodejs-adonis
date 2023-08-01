//Soal Nomor 1
let word = 'JavaScript'; 
let second = 'is'; 
let third = 'awesome'; 
let fourth = 'and'; 
let fifth = 'I'; 
let sixth = 'love'; 
let seventh = 'it!';
const theString = `${word} ${second} ${third} ${fourth} ${fifth} ${sixth} ${seventh}`;
console.log(theString);


//Soal Nomor 2
var sentence = "I am going to be Node JS Developer"; 
var exampleFirstWord = sentence[0] ; 
var exampleSecondWord = sentence[2] + sentence[3]  ; 
var thirdWord = sentence[5] + sentence[6] + sentence[7] + sentence[8] + sentence[9]; // lakukan sendiri, wajib mengikuti seperti contoh diatas 
var fourthWord = sentence[11] + sentence[12]; // lakukan sendiri , wajib mengikuti seperti contoh diatas
var fifthWord = sentence[14] + sentence[15]; // lakukan sendiri , wajib mengikuti seperti contoh diatas
var sixthWord = sentence[17] + sentence[18] + sentence[19] + sentence[20]; // lakukan sendiri , wajib mengikuti seperti contoh diatas
var seventhWord = sentence[22] + sentence[23]; // lakukan sendiri , wajib mengikuti seperti contoh diatas
var eighthWord = sentence[25] + sentence[26] + sentence[27] + sentence[28] + sentence[29] + sentence[30] + sentence[31] + sentence[32] + sentence[33]; // lakukan sendiri , wajib mengikuti seperti contoh diatas
            
console.log('First Word: ' + exampleFirstWord); 
console.log('Second Word: ' + exampleSecondWord); 
console.log('Third Word: ' + thirdWord); 
console.log('Fourth Word: ' + fourthWord); 
console.log('Fifth Word: ' + fifthWord); 
console.log('Sixth Word: ' + sixthWord); 
console.log('Seventh Word: ' + seventhWord); 
console.log('Eighth Word: ' + eighthWord);


//Soal Nomor 3 
let sentences= 'wow JavaScript is so cool'; 

let firstWords= sentences.substring(0, 3); 
let secondWords= sentences.substring(4, 14); // do your own! 
let thirdWords= sentences.substring(15, 17); // do your own! 
let fourthWords= sentences.substring(18, 20); // do your own! 
let fifthWords= sentences.substring(21, 25); // do your own! 

console.log('Kata Pertama: ' + firstWords); 
console.log('Kata Kedua: ' + secondWords); 
console.log('Kata Ketiga: ' + thirdWords); 
console.log('Kata Keempat: ' + fourthWords); 
console.log('Kata Kelima: ' + fifthWords);


//Soal Nomor 4
var sentence3 = 'wow JavaScript is so cool'; 

var exampleFirstWord3 = sentence3.substring(0, 3); 
var secondWord3 = sentences.substring(4, 14); // do your own! 
var thirdWord3 = sentences.substring(15, 17); // do your own! 
var fourthWord3 = sentences.substring(18, 20); // do your own! 
var fifthWord3 = sentences.substring(21, 25); // do your own! 

var firstWordLength = exampleFirstWord3.length;  
var secondWordLenght= secondWord3.length;  
var thirdWordLenght = thirdWord3.length;  
var fourthWordLenght = fourthWord3.length;  
var fifthWordLenght = fifthWord3.length;  
// lanjutkan buat variable lagi di bawah ini 
console.log('First Word: ' + exampleFirstWord3 + ', with length: ' + firstWordLength); 
console.log('Second Word: ' + secondWord3 + ', with length: ' + secondWordLenght); 
console.log('Third Word: ' + thirdWord3 + ', with length: ' + thirdWordLenght); 
console.log('Fourth Word: ' + fourthWord3 + ', with length: ' + fourthWordLenght); 
console.log('Fifth Word: ' + fifthWord3 + ', with length: ' + fifthWordLenght); 