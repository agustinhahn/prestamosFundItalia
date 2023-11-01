import React from 'react'
import Item from './Item'

const ItemList = ({importes}) => {
    return (
        <>
            {importes.map((p)=> {
                return(
                    <>
                        <Item
                            key={p.id}
                            id={p.id}
                            valor={p.valor}
                        />
                    </>
                )
            })}
        </>
    )
}

export default ItemList