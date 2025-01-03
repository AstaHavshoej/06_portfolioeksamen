// const myImage = document.querySelector("#myImage");

// myImage.addEventListener("click", () => {
//   const mySrc = myImage.getAttribute("src");
//   if (mySrc === "billeder/statemachine.webp") {
//     myImage.setAttribute("src", "billeder/aktivitetsdiagram.webp");
//   } else {
//     myImage.setAttribute("src", "billeder/statemachine.webp");
//   }
// });

// Find billedet med ID'et myImage
const myImage = document.querySelector("#myImage");

// Tilføj klik-event, der skifter billedet
myImage.addEventListener("click", () => {
  const mySrc = myImage.getAttribute("src"); // Henter den aktuelle src

  // Skift mellem tre forskellige billeder i den ønskede rækkefølge
  if (mySrc === "billeder/statemachine.webp") {
    myImage.setAttribute("src", "billeder/aktivitetsdiagram.webp");
  } else if (mySrc === "billeder/aktivitetsdiagram.webp") {
    myImage.setAttribute("src", "billeder/kode_spil.webp");
  } else if (mySrc === "billeder/kode_spil.webp") {
    myImage.setAttribute("src", "billeder/statemachine.webp");
  }
});
