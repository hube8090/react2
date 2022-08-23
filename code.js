let todoArray = []

const myForm = document.querySelector("form")
const myInput = document.querySelector("input")

myForm.addEventListener("submit", (event) => {
    event.preventDefault()
    // todoArray.push(myInput.value)
    optionTwo (List, myInput.value)
    myInput.value = ''
})

const list = document.getElementById("todoList")

//1
list.innerHTML = "<li> Hello world</li>"
list.innerHTML += "<li> Hello world</li>"

//2
const newElement = document.createElement("li")
newElement.innerText ="hello world"
list.appenedChild(newElement)

