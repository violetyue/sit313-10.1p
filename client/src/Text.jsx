import React from "react";

const InputText = (props) => {
    return (
        <div>
            <textarea 
                cols={props.cols} 
                rows={props.rows}
                name={props.name}
                placeholder={props.placeholder}
                onChange={props.onChange}
              />
        </div>
    )
}

export default InputText