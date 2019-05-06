var myCar2 = {
    maxSpeed: 40,
    driver: "Andrzej",
    drive: function(speed, time) {
          console.log(speed * time);
        },
    test: function(){
        console.log(this);
    },
    logDriver: function(){
        console.log("driver name is " + this.driver)
    }

};



myCar2.logDriver();
console.log(myCar2.maxSpeed);
myCar2.drive(50, 3);