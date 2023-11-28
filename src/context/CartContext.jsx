import {createContext, useState} from 'react'
export const ContextCart = createContext(null)

export const CartContext = ({children}) =>{

    const [importElegido, setImportElegido] = useState(null)
    const [cuotaElegida, setCuotaElegida] = useState(null)
    const [recargoElegido, setRecargoElegido] = useState(null)
    const [cbu, setCbu] = useState(null)
    const [nombreCliente, setNombreCliente] = useState(null)
    const [dniCliente, setDniCliente] = useState(null)

    
        return (
    
            <ContextCart.Provider value={{importElegido,setImportElegido,cuotaElegida, setCuotaElegida,recargoElegido, setRecargoElegido, cbu,setCbu,nombreCliente, setNombreCliente,dniCliente, setDniCliente}}>
                {children}
            </ContextCart.Provider>
    
        )
    }
    
    export default CartContext