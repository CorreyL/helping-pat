// Fetch Futurama characters and populate the ordered list
const list = document.getElementById("character-list");
const headshot = document.getElementById("headshot");

fetch("https://api.sampleapis.com/futurama/characters")
  .then((response) => response.json())
  .then((characters) => {
    characters.forEach((character) => {
      // Your code goes here to render each character name in the ol#character-list element
      // And to also add a click handler so that the img#headshot element gets populated with the character's
      // image from the API
    });
  })
  .catch((error) => console.error("Error fetching characters:", error));
