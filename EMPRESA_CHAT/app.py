from flask import Flask, render_template, request, jsonify
from chatbot import responder

app = Flask(__name__)

# =========================
# PÁGINA PRINCIPAL
# =========================
@app.route("/")
def index():
    return render_template("index.html")


# =========================
# SERVICIOS
# =========================
@app.route("/servicios")
def servicios():
    return render_template("servicios.html")


# =========================
# NOSOTROS
# =========================
@app.route("/nosotros")
def nosotros():
    return render_template("nosotros.html")


# =========================
# PROYECTOS
# =========================
@app.route("/proyectos")
def proyectos():
    return render_template("proyectos.html")


# =========================
# CONTACTO
# =========================
@app.route("/contacto")
def contacto():
    return render_template("contacto.html")


# =========================
# FORMULARIO
# =========================
@app.route("/form")
def form():
    return render_template("form.html")


# =========================
# CHATBOT (POST ONLY)
# =========================
@app.route("/chat", methods=["POST"])
def chat():
    try:
        datos = request.get_json()

        if not datos or "mensaje" not in datos:
            return jsonify({"respuesta": "No he recibido ningún mensaje."})

        mensaje = datos["mensaje"]
        respuesta = responder(mensaje)

        return jsonify({"respuesta": respuesta})

    except Exception as e:
        return jsonify({"respuesta": "Error en el servidor: " + str(e)})


# =========================
# EJECUTAR APP
# =========================
if __name__ == "__main__":
    app.run(debug=True)