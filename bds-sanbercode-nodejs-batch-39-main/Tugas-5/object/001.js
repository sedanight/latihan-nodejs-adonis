function arrayToObject(arr) {
    for (var i = 0; i < arr.length; i++) {
    var obj = {};
    obj.firstName = arr[i][0];
    obj.lastName = arr[i][1];
    obj.gender = arr[i][2];
    if (arr[i][3] !== undefined) {
    obj.age = new Date().getFullYear() - arr[i][3];
    } else {
    obj.age = "Invalid Birth Year";
    }
    console.log((i + 1) + ". " + obj.firstName + " " + obj.lastName + ": " + JSON.stringify(obj));
    }
}
    
var people = [["Bruce", "Banner", "male", 1975], ["Natasha", "Romanoff", "female"]];
arrayToObject(people);
    
var people2 = [["Tony", "Stark", "male", 1980], ["Pepper", "Pots", "female", 2023]];
arrayToObject(people2);
