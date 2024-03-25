//1 . Cambia el título "Generation 1 Pokémon" por "Generasión 1 Pokimon".

document.getElementById('gen-1').innerText = "Generasión 1 Pokimon"

//2 . Cambia el color de fondo de la primera generación de Pokimon.

document.querySelector('.infocard-list').style.backgroundColor = "grey"

//3 . Imprime por consola la URL de la página.

console.log(document.URL)

//4 . Imprime por consola el dominio de la página.

console.log(document.domain)

//5 . Imprime todos los nodos de imagen.

console.log(document.querySelectorAll('img'))

//6 . Sustituye el atributo "src" de todas las imágenes por este "https://media.giphy.com/media/2v170e71aanfi/giphy.gif"

let cambiarImg = document.querySelectorAll("img")

for (let i = 0; i < cambiarImg.length; i++) {
    cambiarImg[i].setAttribute("src", "https://media.giphy.com/media/2v170e71aanfi/giphy.gif" )
}

//7 . Cambia el fondo de todos los infocard-lg-data text-muted para todos los Pokimon voladores itype flying

let aElements = document.querySelectorAll(".flying")

for (const a of aElements) {
    a.parentNode.parentNode.style.backgroundColor = "Red"
}