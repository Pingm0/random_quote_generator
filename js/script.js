/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
const quotes = [
  {"quote":"My quote","source":"Me","citation":"myDesk","year":2021},
  {"quote":"We become what we think about","source":" Earl Nightingale"},
  {"quote":"Success is not final, failure is not fatal: it is the courage to continue that counts.","source":"Winston Churchill",},
  {"quote":"Happiness is not something readymade. It comes from your own actions.","source":"Dalai Lama","citation":"myDesk1","year":2021},
  {"quote":"Life is what happens when you’re busy making other plans.","source":"John Lennon",},
  {"quote":"My Money and success don’t change people; they merely amplify what is already there.","source":" Will Smith","year":2018},
  {"quote":"I’m sick of following my dreams, man. I’m just going to ask where they’re going and hook up with ’em later.","source":"Mitch Hedberg","citation":"myDesk","year":2021},
  {"quote":"Be the change that you wish to see in the world.","source":"Mahatma Gandhi","year":1989},
  {"quote":"If you tell the truth, you don't have to remember anything.","source":"Mark Twain","year":1935},
  {"quote":"Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.","source":"Martin Luther King Jr","year":1955 }

]


/***
 * `getRandomQuote` function
***/

function getRandomQuote() {
  let randomNumber =Math.floor(Math.random() * quotes.length);
   return quotes[randomNumber];
}







/***
 * `printQuote` function
***/
function printQuote  () {

  const randomQuote = getRandomQuote()
  console.log(randomQuote)

  let htmString =
  `
  <p class="quote"> ${randomQuote.quote} </p>
  <p class="source"> ${randomQuote.source} 
  `

  if (randomQuote["citation"]) {
    htmString += `<span class="citation"> ${randomQuote.citation}</span>`
  }

  if (randomQuote["year"]) {
    htmString += `<span class="citation"> ${randomQuote.year}</span>`
  }

    htmString += `</p>`


    document.getElementById('quote-box').innerHTML = htmString;
    //document.body.style.backgroundColor=`rgb(${randomColor ()},${randomColor ()},${randomColor ()})`
    
    const rgbColors = randomColor()
    document.body.style.backgroundColor=`rgb(${rgbColors[0]},${rgbColors[1]},${rgbColors[2]})`
    console.log(rgbColors)

  

}

// function randomColor () {
//     return Math.floor(Math.random() * 255)
// }

function randomColor () {
  let rgb = []
  for (let i = 0 ; i < 3 ; i++){
      let randomColor = Math.floor(Math.random() * 255)
      rgb.push(randomColor)
  }

  return rgb
}









/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/


document.getElementById('load-quote').addEventListener("click", printQuote, false);