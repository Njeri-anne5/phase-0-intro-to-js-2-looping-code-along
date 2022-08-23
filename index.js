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
let bcountDown=11;
while(bcountDown--){
    console.log(bcountDown);
}
}
