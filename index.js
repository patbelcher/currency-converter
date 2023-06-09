const form = document.querySelector('form');//grab from
form.addEventListener("submit", convertUSDtoWon);//on submit

function convertUSDtoWon(event) {  //conversion
    event.preventDefault();//stop form from refreshing page
    const usd = Number(event.target.usd.value);//get form vaue
    const won = usd/0.00078;//convert to won
    //now display on page
    document.querySelector('h2').innerText = 
    "$" + usd.toLocaleString() + " USD is equal to " + won.toLocaleString() + " Korean Won";
}
