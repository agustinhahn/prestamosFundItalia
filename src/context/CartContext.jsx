import {createContext, useState} from 'react'
export const ContextCart = createContext(null)

export const CartContext = ({children}) =>{

    const [importElegido, setImportElegido] = useState(null)
    const [cuotaElegida, setCuotaElegida] = useState(null)
    
        return (
    
            <ContextCart.Provider value={{importElegido,setImportElegido,cuotaElegida, setCuotaElegida}}>
                {children}
            </ContextCart.Provider>
    
        )
    }
    
    export default CartContext