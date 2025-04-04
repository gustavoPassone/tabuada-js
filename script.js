const btn = document.querySelector("#btn")

function tabuada() {
    const numero = document.getElementById("numero").value;
    const vezes = document.getElementById("vezes").value;
    var calculos = document.querySelector(".calculos");
    var titulo = document.querySelector(".titulo__content")

    calculos.innerHTML = "";

    for(let i = 1; i <= vezes; i++) {
        calculos.innerHTML += `<p>${numero} x ${i} = ${numero * i}</p>`
    }

    titulo.innerHTML = (`Tabuada do ${numero}`)
}

btn.addEventListener("click", tabuada)