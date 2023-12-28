



function generateText(event){
    event.preventDefault();
   
    new Typewriter('#text', {
        strings: 'Lara Mendes',
        autoStart: true,
        delay: 300,
        
      });


}





let form = document.querySelector("form");
form.addEventListener("submit", generateText);



