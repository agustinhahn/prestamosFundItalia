import React from 'react'
import BotonGral from '../components/BotonGral'

const Resumen = () => {
    return (
        <div>
            <h1>Resumen</h1>
            <h2>pediste: $</h2>
            <h3>lo devolveras en x cuotas de y $</h3>
            <BotonGral textoBoton="completar requisitos" />
            <BotonGral textoBoton="volver a cotizar" />
        </div>
    )
}

export default Resumen