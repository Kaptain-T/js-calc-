let number = ''
const input = document.querySelector('#inputbox');
const one = document.querySelector('.one');


// FOR NUMBERS CLICKED
one.addEventListener("click", function(){
    let first = '1'
    number += first
    input.innerHTML = number
})
const two = document.querySelector('.two');
two.addEventListener("click", function(){
    let second = '2'
    number += second
    input.innerHTML = number
})
const three = document.querySelector('.three');
three.addEventListener("click", function(){
    let third = '3'
    number += third
    input.innerHTML = number
})
const four = document.querySelector('.four');
four.addEventListener("click", function(){
    let fourth = '4'
    number += fourth
    input.innerHTML = number
})
const five = document.querySelector('.five');
five.addEventListener("click", function(){
    let fifth ='5'
    number += fifth
    input.innerHTML = number
})
const six = document.querySelector('.six');
six.addEventListener("click", function(){
    let sixth = '6'
    number += sixth
    input.innerHTML = number
})
const seven = document.querySelector('.seven');
seven.addEventListener("click", function(){
    let seventh = '7'
    number += seventh
    input.innerHTML = number
})
const eight = document.querySelector('.eight');
eight.addEventListener("click", function(){
    let eighth = '8'
    number += eighth
    input.innerHTML = number
})
const nine = document.querySelector('.nine');
nine.addEventListener("click", function(){
    let ninth  = '9'
    number += ninth
    input.innerHTML = number
})
const zero = document.querySelector('.zero');
zero.addEventListener("click", function(){
    let zeroth = '0'
    number += zeroth
    input.innerHTML = number
})
const dot = document.querySelector('.dot');
dot.addEventListener("click", function(){
    let dott = '.'
    if (number.includes('.') == true) {
        input.innerHTML = number
    } else {
        number += dott
        input.innerHTML = number
    }
})

// FOR OPERATIONS CLICKED
const times = document.querySelector('.times');
times.addEventListener("click", function(){
    let multiply = '*'
    if (number.includes("%") == true || number.includes("+") == true || number.includes("-") == true || number.includes("*") == true || number.includes("/") == true) {
        input.innerHTML = number
    } else {
        number += multiply
        input.innerHTML = number
    }
})
const divide = document.querySelector('.divide');
divide.addEventListener("click", function(){
    let division = '/'
    if (number.includes("%") == true || number.includes("+") == true || number.includes("-") == true || number.includes("*") == true || number.includes("/") == true) {
        input.innerHTML = number
    } else {
        number += division
        input.innerHTML = number
    }
})
const minus = document.querySelector('.minus');
minus.addEventListener("click", function(){
    let substract = '-'
    if (number.includes("%") == true || number.includes("+") == true || number.includes("-") == true || number.includes("*") == true || number.includes("/") == true) {
        input.innerHTML = number
    } else {
        number += substract
        input.innerHTML = number
    }
})
const plus = document.querySelector('.plus');
plus.addEventListener("click", function(){
    let add = '+'
    if (number.includes("%") == true || number.includes("+") == true || number.includes("-") == true || number.includes("*") == true || number.includes("/") == true) {
        input.innerHTML = number
    } else {
        number += add
        input.innerHTML = number
    }
})
const module = document.querySelector('.modulus');
module.addEventListener("click", function(){
    let modulus = '%'
    if (number.includes("%") == true || number.includes("+") == true || number.includes("-") == true || number.includes("*") == true || number.includes("/") == true) {
        input.innerHTML = number
    } else {
        number += modulus
        input.innerHTML = number
    }
})

// FOR SOLUTION
const result = document.querySelector(".resultbox")

const equals = document.querySelector('.equals');
equals.addEventListener("click", function(){
    let answer = eval(number)
    let ans = answer.toString()
    if (answer.toString().length > 12) {
        result.innerHTML = ans.slice(0, 12)
    } else {
        result.innerHTML = answer
    }
    input.textContent = ''
    number = ''
})

// TO CLEAR INPUT AND BOARD
const AC = document.querySelector(".AC")
AC.addEventListener("click", function(){
    result.textContent = ''
    number = ''
    input.textContent = ''
}
)

const clear = document.querySelector(".clear")
clear.addEventListener("click", function(){
    number = number.slice(0, -1);
    input.innerHTML = number
})