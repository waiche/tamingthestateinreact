import React from 'react';

function CounterPresenter(props) {
    return (
        <div>
            <p>{props.counter}</p>
            <button type="button" onClick={props.onIncrement}>Increment</button>
            <button type="button" onClick={props.deIncrement}>Decrement</button>
        </div>
    )
}
