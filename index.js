const myDiv = document.getElementById("myDiv");
console.log(myDiv);
myDiv.style.color = "red";
myDiv.innerText = "Goodbye!";
// myDiv.innerHTML = "<ul><li>Hello</li><li>Goodbye</li></ul>";

const hello = "Hello";
const goodbye = "Goodbye";
myDiv.innerHTML = `
<ul>
    <li>${hello}</li>
    <li>${goodbye}</li>
</ul>
`;

// accesarea elementelor dupa numele clasei css
const allErrors = document.getElementsByClassName("error");
console.log(allErrors);

// accesarea elementelor dupa valoarea atributului "name"
const allAnimalInputs = document.getElementsByName("animal");
console.log(allAnimalInputs); 

// accesarea elementelor dupa numele tag-ului
const allSections = document.getElementsByTagName("section");
console.log(allSections);

// accesarea elementelor dupa querry-uri css
const firstSection = document.querySelector("section");
console.log(firstSection);
const allSectionsByQuerry = document.querySelectorAll("section");
console.log(allSectionsByQuerry);

const myDivByQuerry = document.querySelector("#myDiv");
console.log(myDivByQuerry);

const firstError = document.querySelector(".error");
console.log(firstError);

const allErrorsByQuerry = document.querySelectorAll(".error");
console.log(allErrorsByQuerry);

// Manipularea elementelor prin metodele getAttribute și setAttribute
const importantLink = document.querySelector("section > a");
console.log(importantLink);
importantLink.setAttribute("href", "https://dictionary.cambridge.org/dictionary/english/important");
const href = importantLink.getAttribute("href");
console.log("href: ", href);

// Manipularea claselor de css ale elementelor
importantLink.classList.add("important");
const lastError = document.querySelector("section > p:last-child");
console.log(lastError);
lastError.classList.remove("important");

// Crearea de elemente HTML si adaugarea lor in DOM
const parent = document.getElementById("created-elements");
const subtitle = document.createElement("h3");
parent.appendChild(subtitle);
subtitle.textContent = "This subtitle was added with JS";

// Stergerea de elemente
const toDelete = document.querySelector("#delete-me");
toDelete.remove();

