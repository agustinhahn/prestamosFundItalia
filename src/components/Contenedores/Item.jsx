import React from 'react'

const Item = ({id,valor}) => {
    return (
        <>
            <option value={id}>{valor}</option>
        </>
    )
}

export default Item