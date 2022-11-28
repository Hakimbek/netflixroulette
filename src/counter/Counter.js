import React from "react";
import './counter.css';
import Number from "./Number";

function Counter() {
    const [count, setCount] = React.useState(0);

    return (
        <div className="counter_wrapper">
            <h3>Functional Counter</h3>
            <button className="counter_button" onClick={() => setCount(e => e + 1)}>+</button>
            <Number num = {count}/>
            <button className="counter_button" onClick={() => setCount(e => e !== 0 ? e - 1 : e)}>-</button>
        </div>
    );
}

export default Counter;
