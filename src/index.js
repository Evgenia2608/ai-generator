function generateSaying(event) {
  event.preventDefault();

  new Typewriter("#saying", {
    strings: "Bla-bla-bla-bla-bla-bla",
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let sayingFormElement = document.querySelector("#saying-generator-form");
sayingFormElement.addEventListener("submit", generateSaying);
