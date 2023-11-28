import { useContext, useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import ItemList from './ItemList';
import ItemListCuotas from './ItemListCuotas';
import BotonGral from '../BotonGral';
import { ContextCart } from '../../context/CartContext';

const ItemListaContainer = () => {
    const [salida, setSalida] = useState(false);
    const history = useNavigate();

    const handleCambioDeRuta = (e) => {
        e.preventDefault(); // Evitar la redirección predeterminada
        setSalida(true);

        setTimeout(() => {
            if(importElegido !==null && cuotaElegida !==null){
                setSalida(false);
                // Después de completar la transición, redirigir a la nueva ruta
                history('/resumen');
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
            history('/');
        }, 1000); 
    };

    const {importElegido, setImportElegido} = useContext(ContextCart)
    const {cuotaElegida,setCuotaElegida} = useContext(ContextCart)
    const {recargoElegido,setRecargoElegido} = useContext(ContextCart)

    const importes = [
        {
            id:0,
            valor:"Elige un monto"
        },
        {
            id: 1,
            valor: 10000
        },
        {
            id: 2,
            valor: 15000
        },
        {
            id: 3,
            valor: 20000
        },
        {
            id: 4,
            valor: 25000
        },
        {
            id: 5,
            valor: 30000
        },
        {
            id: 6,
            valor: 35000
        },
        {
            id: 7,
            valor: 40000
        },
        {
            id: 8,
            valor: 45000
        },
        {
            id: 9,
            valor: 50000
        },
        {
            id: 10,
            valor: 55000
        },
        {
            id: 11,
            valor: 60000
        },
        {
            id: 12,
            valor: 65000
        },
        {
            id: 13,
            valor: 70000
        },
        {
            id: 14,
            valor: 75000
        },
        {
            id: 15,
            valor: 80000
        }
    ]

    const cuotas = [
        {
            id:0,
            cuota:"Elige cuantas cuotas"
        },
        {
            id:1,
            cuota: 3,
            recargo: 1.8
        },
        {
            id:2,
            cuota: 6,
            recargo: 2.2
        },
        {
            id:3,
            cuota: 12,
            recargo: 2.5
        },
        {
            id:4,
            cuota: 16,
            recargo: 2.9
        },
        {
            id:5,
            cuota: 18
            ,recargo: 3.4
        },
    ]

    const handleSelectChangeDinero = (e) =>{
        const opcionDineroSeleccionado = e.target.value;
        if(opcionDineroSeleccionado == "0"){
            setImportElegido(null)
        }
        else{
            const objetoEncontrado = importes.find((obj) => obj.id == opcionDineroSeleccionado);
            const dineroValorFinal = (objetoEncontrado.valor)
            setImportElegido(dineroValorFinal)
        }
    }

    const handleSelectChangeCuota = (e) =>{
        const opcionCuotaSeleccionado = e.target.value;
        if(opcionCuotaSeleccionado == "0"){
            setCuotaElegida(null)
        }
        else{
            const objetoEncontrado = cuotas.find((obj) => obj.id == opcionCuotaSeleccionado);
            const cuotaValorFinal = objetoEncontrado.cuota
            const recargoValorFinal = objetoEncontrado.recargo
            setCuotaElegida(cuotaValorFinal)
            setRecargoElegido(recargoValorFinal)
        }
    }
    return (
        <div className='containerApp'>
            <h1 className='animated zoomIn tituloh1'>DINERO Y CUOTAS</h1>
            <select onChange={handleSelectChangeDinero} className='animated zoomIn'>
                <ItemList importes={importes} />
            </select>
            <select onChange={handleSelectChangeCuota} className='animated zoomIn selectclass'>
                <ItemListCuotas cuotas={cuotas} />
            </select>
            <Link to='/' onClick={handleCambioDeRuta}>
                <BotonGral textoBoton="cotizar" />
            </Link>
            <Link to='/' onClick={handleVolver}>
                <BotonGral textoBoton="volver" />
            </Link>
        </div>
    )
}

export default ItemListaContainer