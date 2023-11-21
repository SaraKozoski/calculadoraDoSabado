let linguaPortuguesa = document.createElement("script");
linguaPortuguesa.src ="./idiomas/portugues.js";
document.head.appendChild(linguaPortuguesa);

let linguaEspanhola = document.createElement("script");
linguaEspanhola.src ="./idiomas/espanhol.js";
document.head.appendChild(linguaEspanhola);

let selectIdioma = document.querySelector("#idioma");
selectIdioma.addEventListener("change", 
    function () {
        translate(this.value);
    });
    function translate(idiomas) {
        let traducao =
        (idioma ="br")? portugues() :(idioma = "es")? espanhol() :(idioma = "fr")? frances(): (idioma = "en")? ingles():null;
        selectedLanguage(traducao);
    }

    function setLanguage(novoIdioma){
        let btSoma = document.querySelector("#btSoma");
        btSoma.value = novoIdioma.soma;
        let btSubtracao = document.querySelector("#btSubtracao")
    }
