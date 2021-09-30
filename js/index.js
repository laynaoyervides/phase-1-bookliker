//main event
document.addEventListener("DOMContentLoaded", function() {});
//global variables 
const allBooks = 'https://localhost:3000/books'; 
const bookList = document.querySelector("#list");
const showPanel = document.querySelector('#show-panel');

//fetch request function
//pillar 1
function getBooks (){
    fetch(allBooks){}
    .then (resp => resp.json())
    .then ((response) => {

    })
}
//pillar 2 dom
function turnBooksIntoHTML (response)
let outerElement = document.createElement('li');
outerElement.className = "book title";

outerElement.innerText = ``

//append

bookList.append(outerElement)