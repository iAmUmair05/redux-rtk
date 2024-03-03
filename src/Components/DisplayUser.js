"use client"

import React from 'react';
import { useSelector } from 'react-redux';

const DisplayUser = () => {

    const userData = useSelector((state) => state.user.users)

    console.log("userData from useSelector", userData)
    return (
        <div className='grid place-content-center my-10 h-1/2'>

            <div className=' max-w-[600px] mx-auto'>
                <h1>Display User List</h1>

                {userData.map((item) => (
                    <div key={item.id}> {item.name}</div>
                ))}
            </div>

        </div>
    )
}

export default DisplayUser