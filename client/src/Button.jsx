import React from "react";

const Button = (props) => {
    return (
        <button 
            type={props.type}
            onClick={props.onClick}
            style={{backgroundColor: "lightgray", fontSize: "large"}}
        >
            {props.text}
        </button>
    )
}

export default Button