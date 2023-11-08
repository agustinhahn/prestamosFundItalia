import { useContext, useState } from 'react'
import BotonGral from '../components/BotonGral'
import { ContextCart } from '../context/CartContext'
const Resumen = () => {

    const {importElegido, setImportElegido} = useContext(ContextCart)
    const {cuotaElegida,setCuotaElegida} = useContext(ContextCart)

    console.log(cuotaElegida)

    const botonPrueba = () =>{
        console.log(cuotaElegida)
    }

    return (
        <div>
            <h1>Resumen</h1>
            <h2>pediste: {importElegido} </h2>
            <h3>lo devolveras en {cuotaElegida} cuotas de y $</h3>
            <button onClick={botonPrueba}>es prueba</button>
            <BotonGral textoBoton="completar requisitos" />
            <BotonGral textoBoton="volver a cotizar" />
        </div>
    )
}

export default Resumen