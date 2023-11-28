import React, { useState } from 'react';

const Enviarwpp = () => {
    const [mensaje, setMensaje] = useState('');
    const [mensaje2, setMensaje2] = useState('');

    const enviarWhatsapp = () => {
        if (mensaje) {
            const numeroCelular = '3416524078'; // Reemplaza con el número de teléfono deseado

            // Combina los dos mensajes con un salto de línea usando \n
            const mensajesCombinados = encodeURIComponent(`Hola Mario, te contacto por un prestamo.\nMi nombre es: ${mensaje}\nMi CBU:${mensaje2}`);

            // Genera el enlace de WhatsApp con los mensajes combinados
            const enlaceWhatsapp = `https://wa.me/${numeroCelular}?text=${mensajesCombinados}`;

            // Abre el enlace en una nueva ventana o pestaña
            window.open(enlaceWhatsapp, '_blank');
        } else {
            alert('Por favor, ingresa el primer mensaje.');
        }
    };

    return (
        <div>
            <h2>Generador de Enlace de WhatsApp</h2>
            <input
                type="text"
                value={mensaje}
                onChange={(e) => setMensaje(e.target.value)}
                placeholder="Escribe tu primer mensaje"
            />
            <input
                type="text"
                value={mensaje2}
                onChange={(e) => setMensaje2(e.target.value)}
                placeholder="Escribe tu segundo mensaje"
            />
            <button onClick={enviarWhatsapp}>Enviar por WhatsApp</button>
        </div>
    );
};

export default Enviarwpp;
