import React from "react";

const Title = (props) => {
    return (
        <div>
            <h2 style={{backgroundColor: "lightgray"}}>
                {props.title}
            </h2>
        </div>
    )
}

export default Title