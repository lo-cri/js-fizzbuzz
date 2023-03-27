// Consegna:
// Scrivi un programma che stampi in console i numeri da 1 a 100, ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”. Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.

// box-3 - multipli 3 (b)
// box-5 - multipli 5 (g)
// box-15 - multipli 3 E 5 (y)

let containerHtml = document.querySelector(".container")

for( let x = 1; x <= 100; x++){
    let createDiv = document.createElement('div');

    if( x % 3 === 0 && x % 5 === 0){
        createDiv.className = 'box box-15'
        containerHtml.append( createDiv )
        createDiv.innerHTML = "FizzBuzz"

        console.log( "FizzBuzz")
    } else if( x % 3 === 0){
        createDiv.className = 'box box-3'
        containerHtml.append( createDiv )
        createDiv.innerHTML = "Fizz"

        console.log( "Fizz" )
    } else if( x % 5 === 0){
        createDiv.className = 'box box-5'
        containerHtml.append( createDiv )
        createDiv.innerHTML = "Buzz"

        console.log( "Buzz" )
    } else{
        createDiv.className = 'box'
        containerHtml.append( createDiv )
        createDiv.innerHTML = x

        console.log( x )
    }
}
