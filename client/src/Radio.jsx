import React from "react";

const RadioCheck = (props) => {
    return (
        <div>
            <input
                type={props.type}
                name={props.name}
                value={props.value}
                onChange={props.onChange}
            />
        </div>
    )
}

export default RadioCheck