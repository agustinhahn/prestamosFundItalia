import { useContext, useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import BotonGral from '../components/BotonGral';
import { ContextCart } from '../context/CartContext';

const FormularioFinal = () => {

    const {imagen1,setImagen1} = useContext(ContextCart)
    const {imagen2,setImagen2} = useContext(ContextCart)
    const {cbu,setCbu} = useContext(ContextCart)

    const [salida, setSalida] = useState(false);
    const history = useNavigate();


    const handleImageChange1 = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
            setImagen1(reader.result);
        };
        reader.readAsDataURL(file);
    }
    };

    const handleImageChange2 = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
            setImagen2(reader.result);
        };
        reader.readAsDataURL(file);
    }
    };

    const capturarCbu = (event) =>{
        const ingCbu = event.target.value;
        setCbu(ingCbu)
    }

    const handleCambioDeRuta = (e) => {
        e.preventDefault(); // Evitar la redirección predeterminada
        setSalida(true);

        setTimeout(() => {
            if(imagen1 !==null && imagen2 !==null && cbu !==null){
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
                    Ingrese foto de su ultimo recibo de sueldo
                </p>
                <input type="file" id="imagenInput" accept="image/*" onChange={handleImageChange1} />
                <p>
                    Ingrese foto de servicio o impuesto a su nombre
                </p>
                {/* aqui hay que modificar el js para otra imagen */}
                <input type="file" id="imagenInput2" accept="image/*" onChange={handleImageChange2} />
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
