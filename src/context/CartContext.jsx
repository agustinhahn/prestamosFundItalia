import {createContext, useState} from 'react'
export const ContextCart = createContext(null)

export const CartContext = ({children}) =>{

    const [importElegido, setImportElegido] = useState(0)
    
        return (
    
            <ContextCart.Provider value={{importElegido,setImportElegido}}>
                {children}
            </ContextCart.Provider>
    
        )
    }
    
    export default CartContext