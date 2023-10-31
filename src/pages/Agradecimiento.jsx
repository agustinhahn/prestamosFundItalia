import React from 'react'

const Agradecimiento = () => {

    const enviarWhatsAppBtn = () =>{
        const numeroWhatsApp = '5493416524078';
        const mensaje = '¡Hola! Quiero compartir información contigo.';
        const enlaceWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensaje)}`;
        window.open(enlaceWhatsApp)
    }
    return (
        <div>
            <h1>gracias por tu solicitud</h1>
            <p>tu prestamos esta siendo evaluado y en breve tendras noticias nuestras</p>
            <button onClick={enviarWhatsAppBtn}>Enviar por WhatsApp</button>
        </div>
    )
}

export default Agradecimiento