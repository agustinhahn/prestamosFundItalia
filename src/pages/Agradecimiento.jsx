import { useContext, useState, useEffect } from 'react';
import { ContextCart } from '../context/CartContext';

const Agradecimiento = () => {

    const {imagen1,setImagen1} = useContext(ContextCart)
    const {imagen2,setImagen2} = useContext(ContextCart)
    const {cbu,setCbu} = useContext(ContextCart)

    

    // const enviarWhatsAppBtn = () =>{
    //     const numeroWhatsApp = '5493416524078';
    //     const mensaje = '¡Hola! Quiero compartir información contigo.';
    //     const enlaceWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensaje)}`;
    //     window.open(enlaceWhatsApp)
    // }
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