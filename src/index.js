
function displayDestination (response){
    console.log(response.data.answer);

    new Typewriter('#text', {
        strings: response.data.answer,
        autoStart: true,
        delay: 100,
        
      });
}

function generateText(event){
    event.preventDefault();
let textElement = document.querySelector(".instructions");
let apiKey = `dda9a648t200432eo3334f85db57e348`;
let context = 'You are a AI Travel Assistant that loves to recommend the best destination to their clients.Please provide only one answer: one destination in bold with short description of 3 lines maximum. Please place destination inside a <strong>';
let prompt = textElement.value;
let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;


let suggestion = document.querySelector("#text");
suggestion.innerHTML="<div class='color'>Sit back & relax, while we select the perfect destination for you...</div>";

axios.get(apiUrl).then(displayDestination);
}

let form = document.querySelector("form");
form.addEventListener("submit", generateText);



