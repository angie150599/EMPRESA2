

// =========================
// ESPERAR A QUE CARGUE TODO
// =========================
window.addEventListener("DOMContentLoaded", () => {

    // =========================
    // ANIMACIONES SCROLL
    // =========================
    const elementos = document.querySelectorAll(".animado");

    function mostrarElementos() {
        const alturaPantalla = window.innerHeight;

        elementos.forEach(el => {
            const distancia = el.getBoundingClientRect().top;

            if (distancia < alturaPantalla - 100) {
                el.classList.add("mostrar");
            }
        });
    }

    // Ejecutar al cargar
    mostrarElementos();

    // Ejecutar al hacer scroll
    window.addEventListener("scroll", mostrarElementos);
});


// =========================
// HEADER TRANSPARENTE SCROLL
// =========================
window.addEventListener("scroll", () => {
    const header = document.querySelector(".header-scroll");

    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});

