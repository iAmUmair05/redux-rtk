"use client"

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, incrementByAmount } from '@/Redux/counterSlice';

const Counter = () => {
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();

    let amount = 10

    return (
        <div className="text-center grid place-content-center h-screen">

            <div className="text-2xl font-semibold mb-5">{count}</div>

            <div className="flex justify-center items-center space-x-4">
                <button
                    className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded"
                    aria-label="Increment value"
                    onClick={() => dispatch(increment())}
                >
                    Increment
                </button>

                <button
                    className="bg-red-500 hover:bg-red-600 text-white font-semibold px-4 py-2 rounded"
                    aria-label="Decrement value"
                    onClick={() => dispatch(decrement())}
                >
                    Decrement
                </button>

                <button
                    className="bg-green-500 hover:bg-green-600 text-white font-semibold px-4 py-2 rounded"
                    aria-label="Decrement value"
                    onClick={() => dispatch(incrementByAmount(amount))}
                >
                    Decrement
                </button>

            </div>
        </div>
    );
};

export default Counter;
