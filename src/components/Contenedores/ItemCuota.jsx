import React from 'react'

const ItemCuota = ({id,cuota}) => {
    return (
        <>
            <option value={id}>{cuota}</option>
        </>
    )
}

export default ItemCuota