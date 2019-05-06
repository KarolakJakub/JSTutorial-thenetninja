var myArray = new Array();
myArray[0] = 8;

var myCar = new Object();
myCar.maxSpeed = 50;
myCar.driver = "Janusz";
myCar.drive = function(){console.log("now driving");};


console.log(myCar.driver+", "+ myCar.maxSpeed);
myCar.drive();

var myCar2 = {
    maxSpeed: 40,
    driver: "Andrzej",
    drive: function(speed, time) {
          console.log(speed * time);
        }
    };

console.log(myCar2.maxSpeed);
myCar2.drive(50, 3);