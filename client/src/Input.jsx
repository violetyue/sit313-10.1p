import React from "react";

const InputBar = (props) => {
    return (
        <div>
            <input 
                size={props.size}
                name={props.name}
                type={props.type}
                placeholder={props.placeholder}
                onChange={props.onChange}
              />
        </div>
    )
}

export default InputBar