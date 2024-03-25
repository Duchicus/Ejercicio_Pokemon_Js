document.getElementById('gen-1').innerText = "Generasión 1 Pokimon"

document.querySelector('.infocard-list').style.backgroundColor = "grey"

console.log(document.URL)

console.log(document.domain)

console.log(document.querySelectorAll('img'))

let cambiarImg = document.querySelectorAll("img")

console.log(cambiarImg)

for (let i = 0; i < cambiarImg.length; i++) {
    cambiarImg[i].setAttribute("src", "https://media.giphy.com/media/2v170e71aanfi/giphy.gif" )
}

let aElements = document.querySelectorAll(".flying")

for (const a of aElements) {
    a.parentNode.parentNode.style.backgroundColor = "Red"
}