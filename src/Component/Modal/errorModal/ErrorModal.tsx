import React from "react";
import './errorModal.scss'


export const ErrorModal: React.FC<{isOpen: boolean, message: string, onClose:()=>void}> = (props) =>{
    if(props.isOpen ===false) return null;

    return(<>
    <div className="overlay"/>
    <div className="modal">
        <div className="header">
            <h1>Error Modal</h1>
            <button onClick={props.onClose} className="modal-btn">X</button>
        </div>
        <div className="content">
            {props.message}
        </div>
    </div>
    </>)
}