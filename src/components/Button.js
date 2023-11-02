import React from 'react';
import '../style-sheets/Button.css';

const Button = ({ text, clickButton, event }) => {

    return (
        <div className='btns'>

            <button className={clickButton ? 'click-btn' : 'restart-btn'}
                onClick={event}>
                {text}
            </button>
        </div>


    )
}

export default Button;