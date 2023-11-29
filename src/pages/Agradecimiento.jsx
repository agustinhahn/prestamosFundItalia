import React, { useContext, useEffect } from 'react';
import { ContextCart } from '../context/CartContext';

const Agradecimiento = () => {
    const { cbu, setCbu } = useContext(ContextCart);
    const { nombreCliente, setnombreCliente } = useContext(ContextCart);
    const { dniCliente, setDniCliente } = useContext(ContextCart);
    const { cuotaElegida, setCuotaElegida } = useContext(ContextCart);
    const { importElegido, setImportElegido } = useContext(ContextCart);

    const valorxCuota = (importElegido / cuotaElegida).toFixed(2);

    const enviarWhatsapp = () => {
        const numeroCelular = '3414684871';
        const mensajesCombinados = encodeURIComponent(
            `Hola Mario, te contacto por un prestamo.\nMi nombre es: ${nombreCliente}\nMi documento: ${dniCliente}\nMi CBU: ${cbu}\nQuiero recibir: $${importElegido}\nCantidad de cuotas: ${cuotaElegida} \nEstare pagando por cuota: $${valorxCuota}`
        );
        const enlaceWhatsapp = `https://wa.me/${numeroCelular}?text=${mensajesCombinados}`;
        window.location.href = enlaceWhatsapp;
    };

    useEffect(() => {
        console.log("hola de useEffect");
        const delay = 3000;
        const timeoutId = setTimeout(enviarWhatsapp, delay);
    }, []);

    return (
        <div className="containerApp">
            <h1 className="tituloh1">Gracias por tu solicitud</h1>
            <p className="info">Tu préstamo está siendo evaluado y en breve tendrás noticias nuestras</p>
            <a href="#" onClick={enviarWhatsapp}>
                Abrir WhatsApp
            </a>
        </div>
    );
};

export default Agradecimiento;
