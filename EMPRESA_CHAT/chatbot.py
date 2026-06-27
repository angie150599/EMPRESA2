def responder(mensaje):

    mensaje = mensaje.lower()

    if "hola" in mensaje:
        return "¡Hola! Soy el asistente de MJ6 Montajes."

    elif "presupuesto" in mensaje:
        return "Puedes solicitar un presupuesto desde la página de contacto."

    elif "servicios" in mensaje:
        return "Hacemos estructuras metálicas, aluminio y vidrio."

    elif "contacto" in mensaje:
        return "Puedes escribirnos o llamar al teléfono de la web."

    else:
        return "No tengo esa información, pero puedo ayudarte con presupuestos o servicios."