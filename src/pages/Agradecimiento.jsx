import { useContext, useState, useEffect } from 'react';
import { ContextCart } from '../context/CartContext';

const Agradecimiento = () => {


    const {cbu,setCbu} = useContext(ContextCart)
    const {nombreCliente,setnombreCliente} = useContext(ContextCart)
    const {dniCliente,setDniCliente} = useContext(ContextCart)
    const {cuotaElegida, setCuotaElegida} = useContext(ContextCart)
    const {importElegido, setImportElegido} = useContext(ContextCart)


    const valorxCuota = importElegido / cuotaElegida

    const enviarWhatsapp = () => {
        if (mensaje) {
            const numeroCelular = '3416524078'; // Reemplaza con el número de teléfono deseado

            // Combina los dos mensajes con un salto de línea usando \n
            const mensajesCombinados = encodeURIComponent(`Hola Mario, te contacto por un prestamo.\nMi nombre es: ${nombreCliente}\nMi CBU: ${cbu}\nQuiero recibir: $${importElegido}\nCantidad de cuotas: ${cuotaElegida} \nEstare pagando por cuota: $${valorxCuota}`);

            // Genera el enlace de WhatsApp con los mensajes combinados
            const enlaceWhatsapp = `https://wa.me/${numeroCelular}?text=${mensajesCombinados}`;

            // Abre el enlace en una nueva ventana o pestaña
            window.open(enlaceWhatsapp, '_blank');
        } else {
            alert('Por favor, ingresa el primer mensaje.');
        }
    };

    useEffect(() => {
        const delay = 5000;
        const timeoutId = setTimeout(enviarWhatsapp, delay);
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