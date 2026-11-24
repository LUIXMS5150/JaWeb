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


const container = document.querySelector('.carrusel');
const sentinel = document.createElement('centinela');
container.appendChild(sentinel);

// 2. Función para clonar las tarjetas existentes
function cargarMasTarjetas() {
    const tarjetas = document.querySelectorAll('.cardcar');
    tarjetas.forEach(cardcar => {
    const copia = cardcar.cloneNode(true); 
    container.insertBefore(copia, sentinel);
    });
}

const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
    cargarMasTarjetas();
    }
}, { root: container, threshold: 0.1 });

observer.observe(sentinel);


//3. visibilidad de las tarjetas ante el scroll
document.addEventListener("DOMContentLoaded", () => {
            const cards = document.querySelectorAll('.artista-card');
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