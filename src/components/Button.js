import React from 'react';
import '../style-sheets/Button.css';

const Button = ({ text, clickButton, event }) => {

    return (
        <button className={clickButton ? 'click-btn' : 'restart-btn'}
            onClick={event}>
            {text}
        </button>
    )
}

export default Button;