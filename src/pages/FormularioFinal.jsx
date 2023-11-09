import React from 'react'
import BotonGral from '../components/BotonGral';

const FormularioFinal = () => {

    //MEJORAR EL CODIGO COMO PARA REACT

    // const imagenInput = document.getElementById('imagenInput');
    // const cargarImagenBtn = document.getElementById('cargarImagen');
    // const imagenTemporal = document.getElementById('imagenTemporal');

    // cargarImagenBtn.addEventListener('click', () => {
    //     // Comprueba si se ha seleccionado un archivo
    //     if (imagenInput.files.length > 0) {
    //         const imagenCargada = imagenInput.files[0];
    //         const urlImagen = URL.createObjectURL(imagenCargada);

    //         // Crea un elemento de imagen para mostrar la imagen temporalmente
    //         const img = document.createElement('img');
    //         img.src = urlImagen;
    //         img.alt = 'Imagen Temporal';
    //         img.style.maxWidth = '100%';

    //         // Agrega la imagen al div de imagen temporal
    //         imagenTemporal.innerHTML = ''; // Limpia el div
    //         imagenTemporal.appendChild(img);
    //     }
    // })

    return (
        <div className='containerApp'>
            <h1 className='animated zoomIn tituloh1'>Formulario Final</h1>
            <div>
                <p>
                    Ingrese foto de su ultimo recibo de sueldo
                </p>
                <input type="file" id="imagenInput" accept="image/*" />
                <button id="cargarImagen">Cargar Imagen</button>
                <div id="imagenTemporal"></div>
                <p>
                    Ingrese foto de servicio o impuesto a su nombre
                </p>
                {/* aqui hay que modificar el js para otra imagen */}
                <input type="file" id="imagenInput2" accept="image/*" />
                <button id="cargarImagen2">Cargar Imagen</button>
                <div id="imagenTemporal2"></div>
                <p>
                    ingresar su cbu
                </p>
                <input type='number' />
            </div>
            <div>
                <BotonGral textoBoton="CONFIRMAR PRESTAMO" />
                <BotonGral textoBoton="VOLVER" />
            </div>
        </div>
    )
}

export default FormularioFinal
