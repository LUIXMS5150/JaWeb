// 1. funcion para el boton de menu en las pantallas reducidas
const menubtn = document.getElementById("menubtn");
const navlinks = document.getElementById("navlinks");
const links = navlinks.querySelectorAll("a");

menubtn.addEventListener("click", () => {
    navlinks.classList.toggle("active");
    if(navlinks.classList.contains("active")){
        menubtn.innerHTML = "X";
        menubtn.setAttribute("aria-expanded","true");
    }else{
        menubtn.innerHTML = "☰";
        menubtn.setAttribute("aria-expanded","false");
    }
});

links.forEach(link => {
    link.addEventListener("click", () =>{
        navlinks.classList.remove("active");
        menubtn.innerHTML = "☰";
        menubtn.setAttribute("aria-expanded","false");
    })
    
});



//2. visibilidad de las tarjetas ante el scroll
document.addEventListener("DOMContentLoaded", () => {
            const cards = document.querySelectorAll('.herramientas-card');
            const observerOptions = {
                threshold: 0.15 
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);

            cards.forEach(card => {
                observer.observe(card);
            });
        });

//3. Funciones para la calculadora
// Funciones de operaciones
function sumar() {
    const x = parseFloat(document.getElementById("num1").value);
    const y = parseFloat(document.getElementById("num2").value);
    document.getElementById("resultado").innerHTML = x + y;
}

function restar() {
    const x = parseFloat(document.getElementById("num1").value);
    const y = parseFloat(document.getElementById("num2").value);
    document.getElementById("resultado").innerHTML = x - y;
}

function multiplicar() {
    const x = parseFloat(document.getElementById("num1").value);
    const y = parseFloat(document.getElementById("num2").value);
    document.getElementById("resultado").innerHTML = x * y;
}

function dividir() {
    const x = parseFloat(document.getElementById("num1").value);
    const y = parseFloat(document.getElementById("num2").value);
    // Se realiza una validacion en caso de queder dividir por 0 (cero)
    if (y === 0) {
        document.getElementById("resultado").innerHTML = "ERROR: no se puede dividir por 0";
    } else {
        document.getElementById("resultado").innerHTML = x / y;
    }
}

// en la siguiente funcion se toma la seleccion del usuario (aquella la cual realizo en la lista) y en base a ello se realiza el llamado a la respectiva funcion
function calcular() {
const operacion = document.getElementById("operaciones").value;
// Se evaluan los posibles casos, se realiza el llamado a la funcion y se entregan resultados 
switch (operacion) {
    case "suma":
    sumar(); break;
    case "resta":
    restar(); break;
    case "multiplicacion":
    multiplicar(); break;
    case "division":
    dividir(); break;
}
}
// al igual a la anteriror funcion esta toma el valor seleccionado por el usuario en el select de opeconver conectado con html mediante un button que al presionar llama la funcion
function convertir() {
const calconver = document.getElementById("opeconver").value;
//se realiza la evaluacion de los posibles casos y se realizan las operaciones correspondientes para al final entregar sus resultados 
switch (calconver) {
    case "cop":
        yen = 0.048; 
        valor= parseFloat(document.getElementById("valor").value);
        resu= valor * yen; 
        document.getElementById("convertido").innerHTML = resu + " JYP";//el resultado puede variar ya que si se escribe con el punto (ej 50.000) lo entrega mas exacto de lo contrario lo redondea
        break;
    case "yen":
        cop = 20.96;
        valor = parseFloat(document.getElementById("valor").value);
        resu = valor * cop;
        document.getElementById("convertido").innerHTML = resu + " COP";//el resultado puede variar ya que si se escribe con el punto (ej 50.000) lo entrega mas exacto de lo contrario lo redondea
}
}