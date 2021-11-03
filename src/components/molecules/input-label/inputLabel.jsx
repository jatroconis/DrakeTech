import React from 'react'
import DefaultInput from "../../atoms/default-input/defaultInput";
import DefaultLabel from "../../atoms/default-label/defaultLabel";



const InputLabel = ({text, refName}) => {
    return (
        <div>
            <DefaultLabel text={text}/>
            <DefaultInput refName={refName}/>
        </div>
    )
}

export default InputLabel
