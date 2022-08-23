const names=["Guadalupe", "Ollie", "Aki"];
const event="surprise";

function writeCards(names,event){
    let thankyouCards=[]

    for(let i=0;i<names.length;i++){
            thankyouCards.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`)
     }


    return thankyouCards;

    }

//countDown from 10- for loop
for (let countDown=11;countDown>=0;countDown--){
    console.log(countDown); 
}


//countDown from 4--while loop
function countDown(){
let bcountDown=11;//4
while(bcountDown--){
    console.log(bcountDown);
}
}
/*const names=["Guadalupe", "Ollie", "Aki"];

function writeCards(names){
    for(let i=0;i<names.length;i++){
        console.log(`Thank you, ${names[i]}, for the wonderful surprise gift!`);
    
    }

    return names;

}
writeCards(names);

//countDown from 10- for loop
for (let countDown=10;countDown>=0;countDown--){
    console.log(countDown); 
}


//countDown from 4--while loop
let countDown=4;
while(countDown>=0){
    console.log(countDown--);
    
}--coz I think this is right but its not passing

*/
