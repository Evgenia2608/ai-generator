function displaySaying(response){
 new Typewriter("#saying", {
   strings: response.data.answer,
   autoStart: true,
   delay: 1,
   cursor: "",
 });
}

function generateSaying(event) {
  event.preventDefault();

 let instructionsInput = document.querySelector("#user-instructions");
 let apiKey = "f11b87o82t2bbbea090de2e7338b0747";
 let context =
   "You are very smart and well-read, and you know many famous sayings. Please generate a short famous saying in basic HTML and separate each line with a <br />. Do Not display html in your answer. Make sure to follow the user instructions. Please include author of the saying. Sign the poem with 'SheCodes AI' inside a <strong> element at the end of the saying and NOT at the beginning ";
 let prompt = `User instructions: Generate a famous saying about ${instructionsInput.value}`;
 let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

 let sayingElement = document.querySelector("#saying");
 sayingElement.classList.remove("hidden");
 sayingElement.innerHTML = `<div class="generating">⏳ Generating a famous saying about ${instructionsInput.value}</div>`;

 axios.get(apiURL).then(displaySaying);
}

let sayingFormElement = document.querySelector("#saying-generator-form");
sayingFormElement.addEventListener("submit", generateSaying);
