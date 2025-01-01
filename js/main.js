// Find billedet med ID'et myImage
const myImage = document.querySelector("#myImage");

// Tilføj klik-event, der skifter billedet
myImage.addEventListener("click", () => {
  const mySrc = myImage.getAttribute("src"); // Henter den aktuelle src
  if (mySrc === "billeder/statemachine.webp") {
    myImage.setAttribute("src", "billeder/aktivitetsdiagram.webp");
  } else {
    myImage.setAttribute("src", "billeder/statemachine.webp");
  }
});
