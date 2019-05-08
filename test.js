// var myPastDate = new Date(1545, 11, 2, 10, 30, 15);
// var myFutureDate = new Date(2515, 0, 31, 10, 30, 15);

// console.log(myFutureDate + "      " + myFutureDate);


var birthdate = new Date(1985, 0, 15, 11, 15, 25);
var birthdate2 = new Date(1985, 0, 15, 11, 15, 25);

console.log(birthdate.getMonth());


console.log(birthdate.getFullYear());

console.log(birthdate.getTime());

if(birthdate.getTime == birthdate2.getTime){
        console.log("birthdates are equal");
}
else{

    console.log("birthdays are not equal");

}