document.addEventListener("DOMContentLoaded", () => {

    const boton = document.getElementById("chat-btn");
    const ventana = document.getElementById("chat-window");
    const cerrar = document.getElementById("chat-close");

    const mensajes = document.getElementById("chat-messages");
    const input = document.getElementById("mensaje");
    const enviar = document.getElementById("enviar");

    // seguridad básica (evita errores si no existen)
    if (!boton || !ventana || !cerrar || !mensajes || !input || !enviar) {
        console.error("Faltan elementos del chat en el HTML");
        return;
    }

    boton.onclick = () => {
        ventana.style.display =
            ventana.style.display === "block" ? "none" : "block";
    };

    cerrar.onclick = () => {
        ventana.style.display = "none";
    };

    async function enviarMensaje() {

        const texto = input.value.trim();
        if (texto === "") return;

        mensajes.innerHTML += `<div class="user">${texto}</div>`;
        input.value = "";

        mensajes.scrollTop = mensajes.scrollHeight;

        try {
            const respuesta = await fetch("/chat", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ mensaje: texto })
            });

            const datos = await respuesta.json();

            mensajes.innerHTML += `<div class="bot">${datos.respuesta}</div>`;
            mensajes.scrollTop = mensajes.scrollHeight;

        } catch (error) {
            mensajes.innerHTML += `<div class="bot">Error de conexión con el servidor</div>`;
        }
    }

    enviar.onclick = enviarMensaje;

    input.addEventListener("keypress", (e) => {
        if (e.key === "Enter") enviarMensaje();
    });

});