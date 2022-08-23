const names=["Guadalupe", "Ollie", "Aki"];

function writeCards(names){
    for(let i=0;i<names.length;i++){
        console.log(`Thank you, ${names[i]}, for the wonderful surprise gift!`);
    
    }

    return names;

}
writeCards(names);

//countDown from 10
let countDown=10;
while(countDown>=0){
    console.log(countDown--);
    
}
//countDown from 4
for (let countDown=4;countDown>=0;countDown--){
    console.log(countDown); 
}

