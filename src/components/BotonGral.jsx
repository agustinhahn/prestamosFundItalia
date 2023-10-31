import React from 'react'

const BotonGral = ({textoBoton}) => {

    return (
        <div>
            <button className='animated zoomIn btn_gral'>
                    {textoBoton}
            </button>
        </div>
    )
}

export default BotonGral