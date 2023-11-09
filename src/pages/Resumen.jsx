import { useContext, useState } from 'react'
import BotonGral from '../components/BotonGral'
import { ContextCart } from '../context/CartContext'
import {Link, useNavigate} from 'react-router-dom'
const Resumen = () => {
    const [salida, setSalida] = useState(false);
    const history = useNavigate();

    const handleCambioDeRuta = (e) => {
        e.preventDefault(); // Evitar la redirección predeterminada
        setSalida(true);

        setTimeout(() => {
            if(importElegido !==null && cuotaElegida !==null){
                setSalida(false);
                // Después de completar la transición, redirigir a la nueva ruta
                history('/formulariofinal');
            }
            else{
                console.log("ELIGE UN IMPORTE") //despues cambiar por un pop up
            }
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


    const {importElegido, setImportElegido} = useContext(ContextCart)
    const {cuotaElegida,setCuotaElegida} = useContext(ContextCart)
    const {recargoElegido,setRecargoElegido} = useContext(ContextCart)

    const importePorCuota = ((importElegido*recargoElegido)/cuotaElegida).toFixed(2)
    
    return (
        <div className='containerApp'>
            <h1 className='animated zoomIn tituloh1'>Resumen</h1>
            <div>
                <p>Dinero solicitado: ${importElegido} </p>
                <p>Cuotas solicitadas: {cuotaElegida}</p>
                <p>Importe a pagar por mes: ${importePorCuota}</p>
            </div>
            <Link to='/' onClick={handleCambioDeRuta}>
                <BotonGral textoBoton="completar requisitos" />
            </Link>
            <Link to='/' onClick={handleVolver}>
                <BotonGral textoBoton="volver a cotizar" />
            </Link>
        </div>
    )
}

export default Resumen