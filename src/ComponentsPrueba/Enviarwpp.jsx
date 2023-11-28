import React, { useState } from 'react';

const Enviarwpp = () => {
    const [mensaje, setMensaje] = useState('');
    const [mensaje2, setMensaje2] = useState('');
    const [imagen, setImagen] = useState(null);

    const handleImagenChange = (e) => {
        // Obtén la primera imagen del conjunto de archivos seleccionados
        const imagenSeleccionada = e.target.files[0];
        setImagen(imagenSeleccionada);
    };

    const enviarWhatsapp = () => {
        if (mensaje) {
            const numeroCelular = '3416524078'; // Reemplaza con el número de teléfono deseado

            // Combina los mensajes con un salto de línea usando \n
            const mensajesCombinados = encodeURIComponent(
                `Hola Mario, te contacto por un préstamo.\nMi nombre es: ${mensaje}\nMi CBU: ${mensaje2}`
            );

            // Genera el enlace de WhatsApp con los mensajes combinados
            let enlaceWhatsapp = `https://wa.me/${numeroCelular}?text=${mensajesCombinados}`;

            // Crea un objeto FormData para enviar la imagen
            const formData = new FormData();
            formData.append('file', imagen);

            // Agrega la imagen al enlace de WhatsApp
            formData.forEach((value, key) => {
                enlaceWhatsapp += `&${key}=${value}`;
            });

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
            <input
                type="file"
                accept="image/*"
                onChange={handleImagenChange}
            />
            <button onClick={enviarWhatsapp}>Enviar por WhatsApp</button>
        </div>
    );
};

export default Enviarwpp;
