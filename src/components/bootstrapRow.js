import React from "react"

export const BoostrapRow = (props) => {
    return (
        <div className="container-fluid">
            <div className="row">
                {props.children}
            </div>
        </div>

    )
}