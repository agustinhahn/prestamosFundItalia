import { useContext, useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import ItemList from './ItemList';
import ItemListCuotas from './ItemListCuotas';
import BotonGral from '../BotonGral';
import { ContextCart } from '../../context/CartContext';

const ItemListaContainer = () => {
    // const [salida, setSalida] = useState(false);
    // const history = useNavigate();

    // const handleCambioDeRuta = (e) => {
    //     e.preventDefault(); // Evitar la redirección predeterminada
    //     setSalida(true);

    //     setTimeout(() => {
    //         setSalida(false);
    //         // Después de completar la transición, redirigir a la nueva ruta
    //         history('/fecha');
    //     }, 1000); 
    // };

    // const handleVolver = (e) => {
    //     e.preventDefault(); // Evitar la redirección predeterminada
    //     setSalida(true);

    //     setTimeout(() => {
    //         setSalida(false);
    //         // Después de completar la transición, redirigir a la nueva ruta
    //         history('/');
    //     }, 1000); 
    // };

    const {importElegido, setImportElegido} = useContext(ContextCart)

    const [dineroElegido, setDineroElegido] = useState('')
    const [cuotaElegida, setCuotaElegida] = useState('')

    const importes = [
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
            id:1,
            cuota: 3
        },
        {
            id:2,
            cuota: 6
        },
        {
            id:3,
            cuota: 12
        },
        {
            id:4,
            cuota: 16
        },
        {
            id:5,
            cuota: 18
        },
    ]

    const handleSelectChangeDinero = (e) =>{
        const opcionDineroSeleccionado = e.target.value;
        setDineroElegido(opcionDineroSeleccionado)
        console.log(opcionDineroSeleccionado)
    }

    const handleSelectChangeCuota = (e) =>{
        const opcionCuotaSeleccionado = e.target.value;
        setDineroElegido(opcionCuotaSeleccionado)
        console.log(opcionCuotaSeleccionado)
    }

    return (
        <div className='containerApp'>
            <h1 className='animated zoomIn tituloh1'>DINERO Y CUOTAS</h1>
            <select value={dineroElegido} onChange={handleSelectChangeDinero} className='animated zoomIn'>
                <ItemList importes={importes} />
            </select>
            <select value={cuotaElegida} onChange={handleSelectChangeCuota} className='animated zoomIn'>
                <ItemListCuotas cuotas={cuotas} />
            </select>
            <BotonGral textoBoton="cotizar" />
            <BotonGral textoBoton="volver" />
        </div>
    )
}

export default ItemListaContainer