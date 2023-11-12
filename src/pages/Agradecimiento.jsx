import { useContext, useState, useEffect } from 'react';
import { ContextCart } from '../context/CartContext';

const Agradecimiento = () => {

    const {imagen1,setImagen1} = useContext(ContextCart)
    const {imagen2,setImagen2} = useContext(ContextCart)
    const {cbu,setCbu} = useContext(ContextCart)



    const enviarWhatsAppBtn = () =>{
        const numeroWhatsApp = '5493416524078';
        //convierto imagen a url base64
        const imagenRecibo = imagen1 instanceof File && URL.createObjectURL(imagen1)
        const imagenServicio = imagen2 instanceof File && URL.createObjectURL(imagen2)
        const reader1 = new FileReader();
        // const reader2 = new FileReader();

        reader1.onloadend = () => {
            const imagenReciboBase64 = reader1.result;
            // reader2.readAsDataURL(imagen2);
            // reader2.onloadend = () => {
            //     const imagenServicioBase64 = reader2.result;

                const mensaje = `Hola Mario! aquí está la información sobre el préstamo que requiero.
                - CBU: ${cbu}
                - Recibo de sueldo: ${imagenReciboBase64}

                `;

                const enlaceWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensaje)}`;
                window.open(enlaceWhatsApp);
                window.location.href = './';
            // };
        };
        reader1.readAsDataURL(imagen1);
    };
    useEffect(() => {
        const delay = 5000;
        const timeoutId = setTimeout(enviarWhatsAppBtn, delay);
        //redireccionar a otra ruta
    },[])

    return (
        <div className='containerApp'>
            <h1 className='tituloh1'>gracias por tu solicitud</h1>
            <p className='info'>tu prestamos esta siendo evaluado y en breve tendras noticias nuestras</p>
            <img src={imagen1} alt=''  style={{width:'200px'}}/>
            <img src={imagen2} alt=''  style={{width:'200px'}}/>
            <p>{cbu}</p>
            <button>Volver al inicio</button> 
            {/* modificar logica para volver al inicio, de todas maneras despues de 5 segundos te redirecciona */}
        </div>
    )
}

export default Agradecimiento