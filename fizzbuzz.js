//Chika's Second trial
//program to get multiples of 3, multiples of 5, multiples of both 3 and 5
var multiple3 = "fizz"; //assigning and initializing variables for multiples of 3
var multiple5 = "buzz"; //assigning and initializing variables for multiples of 5
var multipleBoth = "fizzbuzz"; //assigning and initializing variables for multiples of both 3 and 5

for(var num = 0; num < 100; num++){ //for loop to iterate numbers 0 to 100

    if(num % 3 == 0 && num % 5 == 0){
        console.log(multipleBoth);
    }
    else if(num % 3 == 0){
        console.log(multiple3);//multiples of both 3&5 which is assigned fizz
    }
    else if(num % 5 == 0){
           console.log(multiple5);
       }
      
           }
    console.log(num);
        