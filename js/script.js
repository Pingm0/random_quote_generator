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
// Array of objects 
const quotes = [
  {"quote":"My quote","source":"Me","citation":"myDesk","year":2021,"tag":"myTag"},
  {"quote":"We become what we think about","source":" Earl Nightingale"},
  {"quote":"Success is not final, failure is not fatal: it is the courage to continue that counts.","source":"Winston Churchill",},
  {"quote":"Happiness is not something readymade. It comes from your own actions.","source":"Dalai Lama","citation":"myDesk1","year":2021},
  {"quote":"Life is what happens when you’re busy making other plans.","source":"John Lennon",},
  {"quote":"My Money and success don’t change people; they merely amplify what is already there.","source":" Will Smith","year":2018},
  {"quote":"I’m sick of following my dreams, man. I’m just going to ask where they’re going and hook up with ’em later.","source":"Mitch Hedberg","citation":"myDesk","year":2021,"tag":"humor"},
  {"quote":"Be the change that you wish to see in the world.","source":"Mahatma Gandhi","year":1989},
  {"quote":"If you tell the truth, you don't have to remember anything.","source":"Mark Twain","year":1935},
  {"quote":"Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.","source":"Martin Luther King Jr","year":1955 }

]




/*this variable is holding the random number used in the previos 
function run forgetRandomQuote()  */
let currentQuote = 0  ;

/***
 * `getRandomQuote` function
 * I added some logic in this function to make sure we don't end up using th same 
 * randome number from last time so we get a new Quote guaranteed 
***/

function getRandomQuote() {

   let randomNumber = Math.floor(Math.random() * quotes.length);
    
  if (currentQuote === randomNumber) {
    alert("match")
    randomNumber = Math.floor(Math.random() * quotes.length);
    //here we set the random nuber to currentQoute so next time we run the  getRandomQuote function we refrencit in the if statment
    currentQuote = randomNumber
    return  quotes[randomNumber];
    
  }
  else {
  currentQuote = randomNumber
   return quotes[randomNumber];
   
  }
}



/***
 * `printQuote` function
 * 
 * in the print function we do couple of things , print the Qoute , call the function to genrate random RGB values
 * clear and reset the refresh interval 
***/
function printQuote  () {
  // we save the returned value from the getRandom Quote into random Quote
  const randomQuote = getRandomQuote()
  //console.log(randomQuote)

  // generating the html string to display into the webpage
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

  if (randomQuote["tag"]) {
    htmString += `<span class="citation"> ${randomQuote.tag}</span>`
  }

    htmString += `</p>`

    // in this step will display the generated htm string 
    document.getElementById('quote-box').innerHTML = htmString;
    
    // this step we get the 3 random numbers for RGB in an array calling the randomColor()
    const rgbColors = randomColor()
    // here we set  the rgb colo accssing the array values 
    document.body.style.backgroundColor=`rgb(${rgbColors[0]},${rgbColors[1]},${rgbColors[2]})`
    console.log(rgbColors)

   //in this step we clear the refresh time of the user click the button and reset the 10 seconds interval
  clearInterval(myTimer)
  myTimer = setInterval(function() {
    printQuote()
  }, 10000);

  
}

/*** 
 * the randomColor functino will genrate 3 random numbers between 0 and 255 and return it in an array

***/

function randomColor () {
  let rgb = []
  for (let i = 0 ; i < 3 ; i++){
      let randomColor = Math.floor(Math.random() * 255)
      rgb.push(randomColor)
  }

  return rgb
}

//setting the refresh interval and calling the printQuote function

let myTimer = setInterval(function() {
  printQuote()
}, 10000);




/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/


document.getElementById('load-quote').addEventListener("click", printQuote, false);



