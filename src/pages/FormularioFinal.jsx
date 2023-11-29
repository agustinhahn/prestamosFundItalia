import { useContext, useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import BotonGral from '../components/BotonGral';
import { ContextCart } from '../context/CartContext';

const FormularioFinal = () => {

    const {cbu,setCbu} = useContext(ContextCart)
    const {nombreCliente,setNombreCliente} = useContext(ContextCart)
    const {dniCliente,setDniCliente} = useContext(ContextCart)

    const [salida, setSalida] = useState(false);
    const history = useNavigate();



    const capturarCbu = (event) =>{
        const ingCbu = event.target.value;
        setCbu(ingCbu)
    }
    const capturarDni = (event) =>{
        const ingDni = event.target.value;
        setDniCliente(ingDni)
    }
    const capturarNombre = (event) =>{
        const ingNombre = event.target.value;
        setNombreCliente(ingNombre)
    }

    const handleCambioDeRuta = (e) => {
        e.preventDefault(); // Evitar la redirección predeterminada
        setSalida(true);
        setTimeout(() => {
            if(nombreCliente !==null && dniCliente !==null && cbu !==null){
                setSalida(false);
                // Después de completar la transición, redirigir a la nueva ruta
                history('/agradecimiento');
            }
                console.log("completa los datos") //despues cambiar por un pop up
        }, 1000); 
    };

    const handleVolver = (e) => {
        e.preventDefault(); // Evitar la redirección predeterminada
        setSalida(true);

        setTimeout(() => {
            setSalida(false);
            // Después de completar la transición, redirigir a la nueva ruta
            history('/cotizador');
        }, 1000); 
    };

    return (
        <div className='containerApp'>
            <h1 className='animated zoomIn tituloh1'>Formulario Final</h1>
            <div className='info'>
                <p>
                    Ingrese su nombre
                </p>
                <input type='text' className='inputcbu' onChange={capturarNombre} />
                <p>
                    Ingrese su documento
                </p>
                <input type='number' className='inputcbu' onChange={capturarDni} />
                <p>
                    ingresar su cbu
                </p>
                <input type='number' className='inputcbu' onChange={capturarCbu} />
            </div>
            <div>
                <Link to='/' onClick={handleCambioDeRuta}>
                    <BotonGral textoBoton="CONFIRMAR PRESTAMO" />
                </Link>
                <Link to='/' onClick={handleVolver}>
                    <BotonGral textoBoton="VOLVER" />
                </Link>
            </div>
        </div>
    )
}

export default FormularioFinal
