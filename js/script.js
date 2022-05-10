let $ = document
let myDiv = $.getElementById("contextMenu")

$.body.addEventListener("click", () => {
    myDiv.style.display = "none"
})

$.body.addEventListener("contextmenu", (e) => {
    e.preventDefault()
    myDiv.style.left = e.pageX + "px"
    myDiv.style.top = e.pageY + "px"
    myDiv.style.display = "inline-block"
})