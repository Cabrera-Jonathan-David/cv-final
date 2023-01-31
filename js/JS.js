let ofertas=0;
document.getElementById("masInfo").addEventListener("click",  function() {
    document.getElementById("masInfo").style.display= "none";
    document.getElementById("hidden").style.display= "inline"

});


document.getElementById("afirmativo").addEventListener("click", function () {
    document.getElementById("satCV").style.display= "none";
    document.getElementById("pregunta").innerHTML= "Genial, espero su contacto"; 
    ofertas=ofertas+1;
});

document.getElementById("negativo").addEventListener("click", function () {
    document.getElementById("satCV").style.display= "none";
    document.getElementById("pregunta").innerHTML= "Espero que cuente conmigo para la proxima convocatoria"; 
    ofertas=ofertas+1;
});

document.getElementById("cierre").addEventListener("click", function () {
    document.getElementById("cuestionario").style.display= "none";
});

document.getElementById("abrirForm").addEventListener("click", function () {
    document.getElementById("cuestionario").style.display= "inline";
});
document.getElementById("hidden").addEventListener("click", function () {
    document.getElementById("hidden").style.display= "none";
    document.getElementById("masInfo").style.display= "inline";
});


