var links = document.getElementsByTagName("a");

for (i = 1; i < 10; i++) {

    if(i===5 || i === 3){

        continue;
    }

    console.log(i);

    if(i===7){
        break;
    }

}

// document.write("you are now over 10");