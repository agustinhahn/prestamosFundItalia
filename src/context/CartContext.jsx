import {createContext, useState} from 'react'
export const ContextCart = createContext(null)

export const CartContext = ({children}) =>{

    const [importElegido, setImportElegido] = useState(null)
    const [cuotaElegida, setCuotaElegida] = useState(null)
    const [recargoElegido, setRecargoElegido] = useState(null)
    const [imagen1, setImagen1] =useState(null)
    const [imagen2, setImagen2] =useState(null)
    const [cbu, setCbu] = useState(null)

    
        return (
    
            <ContextCart.Provider value={{importElegido,setImportElegido,cuotaElegida, setCuotaElegida,recargoElegido, setRecargoElegido,imagen1, setImagen1,imagen2, setImagen2, cbu,setCbu}}>
                {children}
            </ContextCart.Provider>
    
        )
    }
    
    export default CartContext