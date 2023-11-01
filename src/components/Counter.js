import React from "react";
import '../style-sheets/Counter.css';

const Counter = ({ numClicks }) => {

    return (
        <div className="counter">
            {numClicks}
        </div>
    )
}

export default Counter;