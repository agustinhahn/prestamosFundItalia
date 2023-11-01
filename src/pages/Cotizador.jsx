import React from 'react'
import BotonGral from '../components/BotonGral'

const Cotizador = () => {
    return (
        <div className='containerApp'>
            <h1 className='tituloh1'>Prestamos Italia</h1>
            <select>
                <option value="opcion1">Opción 2</option>
                <option value="opcion1">Opción 1</option>
                <option value="opcion1">Opción 1</option>
                <option value="opcion1">Opción 1</option>
            </select>
            <select>
                <option value="opcion1">3 cuotas</option>
                <option value="opcion1">Opción 1</option>
                <option value="opcion1">Opción 1</option>
                <option value="opcion1">Opción 1</option>
            </select>
            <BotonGral textoBoton="cotizar" />
            <BotonGral textoBoton="volver" />
        </div>
    )
}

export default Cotizador