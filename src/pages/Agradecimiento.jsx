import { useContext, useState, useEffect } from 'react';
import { ContextCart } from '../context/CartContext';


const Agradecimiento = () => {


    const {cbu,setCbu} = useContext(ContextCart)
    const {nombreCliente,setnombreCliente} = useContext(ContextCart)
    const {dniCliente,setDniCliente} = useContext(ContextCart)
    const {cuotaElegida, setCuotaElegida} = useContext(ContextCart)
    const {importElegido, setImportElegido} = useContext(ContextCart)


    const valorxCuota =(importElegido / cuotaElegida).toFixed(2)
    

    const enviarWhatsapp = () => {
        const numeroCelular = '3416524078'; 
        const mensajesCombinados = encodeURIComponent(`Hola Mario, te contacto por un prestamo.\nMi nombre es: ${nombreCliente}\nMi documento: ${dniCliente}\nMi CBU: ${cbu}\nQuiero recibir: $${importElegido}\nCantidad de cuotas: ${cuotaElegida} \nEstare pagando por cuota: $${valorxCuota}`);
        const enlaceWhatsapp = `https://wa.me/${numeroCelular}?text=${mensajesCombinados}`;
        window.open(enlaceWhatsapp, '_blank');
        window.location.href= "/"
    };

    useEffect(() => {
        console.log("hola de useefect")
        const delay = 3000;
        const timeoutId = setTimeout(enviarWhatsapp, delay);
    },[])


    return (
        <div className='containerApp'>
            <h1 className='tituloh1'>gracias por tu solicitud</h1>
            <p className='info'>tu prestamos esta siendo evaluado y en breve tendras noticias nuestras</p>
            <button>Volver al inicio</button> 
        </div>
    )
}

export default Agradecimiento