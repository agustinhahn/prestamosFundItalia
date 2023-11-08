import { useState } from 'react'
import BotonGral from '../components/BotonGral'
import {Link, useNavigate} from 'react-router-dom'

const Index = () => {
    const [salida, setSalida] = useState(false);
    const history = useNavigate();

    const handleCambioDeRuta = (e) => {
        e.preventDefault(); // Evitar la redirección predeterminada
        setSalida(true);

        setTimeout(() => {
            setSalida(false);
            // Después de completar la transición, redirigir a la nueva ruta
            history('/cotizador');
        }, 1000); 
    };

    const handleVolver = (e) => {
        e.preventDefault(); // Evitar la redirección predeterminada
        setSalida(true);

        setTimeout(() => {
            setSalida(false);
            // Después de completar la transición, redirigir a la nueva ruta
            history('/');
        }, 1000); 
    };
    return (
        <div className='containerApp'>
            <h1 className='tituloh1'>Prestamos Italia</h1>
            <Link to='/' onClick={handleCambioDeRuta}>
                <BotonGral textoBoton="SOLICITAR"/>
            </Link>
            <Link to='/' onClick={handleVolver}>
                <BotonGral textoBoton="REQUISITOS" />
            </Link>
        </div>
    )
}

export default Index