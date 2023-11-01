import React from 'react'
import BotonGral from '../components/BotonGral'

const Index = () => {
    return (
        <div className='containerApp'>
            <h1 className='tituloh1'>Prestamos Italia</h1>
            <BotonGral textoBoton="SOLICITAR"/>
            <BotonGral textoBoton="REQUISITOS" />
        </div>
    )
}

export default Index