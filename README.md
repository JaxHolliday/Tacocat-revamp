# Tacocat-revamp

The Taco Cat coding challenge is based on the more traditional “Reverse a string” exercise but ultimately determines if a word or phrase is a palindrome. The Reverse a string exercise in some form has been used by technology companies such as Amazon, Microsoft, VMware and Norton to assess a candidate’s ability to code an impromptu algorithm.


# Tech Used

- HTML
- JavaScript
- jQuery
- CSS
- Bootstrap


## Description

Write a program that allows a user to enter in a word or phrase and then prints out the reverse of what was entered.
Example: the user enters “developer” the output is “repoleved”.

## JavaScript/CSS

``` document.getElementById("flipBtn").addEventListener("click", tacocat);

function tacocat() {

//Button clicked event

//Step 1

//Retreiving Data

let userInput = document.getElementById("reverseString").value;

//Step 2

//Work with the gathered data

let palinWord = ""

for (let loop = userInput.length - 1; loop >= 0; loop--) {

palinWord += userInput.charAt(loop).toLowerCase();

};

//Step 3

//Result

if (userInput == palinWord) {

swal("Gotcha!", "Tacocat was caught!", "success");

} else {

swal("Sorry!", "Tacocat fainted! you gained 500 XP!", "error");

}

document.getElementById("reverseOutput").innerHTML = palinWord;

};```
-------------------------------------------------------------------------------------------------
## CSS

``body {

color: black;

text - align: center;

background - image: url("../Images/Catch'em.png");

background - size: cover;

}

h1 {

color: black;

text - align: center;

}

h2 {

color: black;

text - align: center;

}

h3 {

color: black;

text - align: center;

}

img {

display: block;

margin - left: auto;

margin - right: auto;

width: 30 %;

}

#reverseString {

text - transform: lowercase;

}``
