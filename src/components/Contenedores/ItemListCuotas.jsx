import React from 'react'
import ItemCuota from './ItemCuota';


const ItemListCuotas = ({cuotas}) => {
    return (
        <>
            {cuotas.map((p)=> {
                return(
                    <>
                        <ItemCuota
                            key={p.id}
                            id={p.id}
                            cuota={p.cuota}
                        />
                    </>
                )
            })}
        </>
    )
}

export default ItemListCuotas