import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increaseValue, increment, reset } from '../slice/counterSlice';

const Counter = () => {
    const count = useSelector(state => (state.counter.count));
    const dispatch = useDispatch();
    return (
        <div>
            <h1>Count:{count}</h1>
            <button onClick={() => { dispatch(increment()) }}>increment</button>
            <button onClick={() => { dispatch(decrement()) }}>decrement</button>
            <button onClick={() => { dispatch(reset()) }}>reset</button>
            <button onClick={() => { dispatch(increaseValue(5)) }}>increase by value</button>
        </div>
    );
};

export default Counter;