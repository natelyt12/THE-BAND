document.getElementsByClassName('burger-menu')[0].addEventListener("click", function () {
    var header = document.querySelector(".navbar");
    header.classList.toggle('expand');
})

var dropdown = document.getElementById('dropdown-menu')
var search = document.getElementsByClassName('search')[0]
var mobilemedia = window.matchMedia("(max-width: 760px)")

function show() {
    dropdown.style.transform = 'translateY(0px)'
    search.style.transform = 'translateY(-50px)'
}

function hide() {
    dropdown.style.transform = 'translateY(50px)'
    search.style.transform = 'translateY(0px)'
}