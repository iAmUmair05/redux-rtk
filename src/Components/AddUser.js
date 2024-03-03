"use client"
import { addUser } from '@/Redux/userSlice'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import Link from 'next/link'

const AddUser = () => {

    const dispatch = useDispatch()

    const [name, setName] = useState('')


    const userDispatch = () => {

        console.log(name)
        dispatch(addUser(name))
    }

    return (
        <div className='grid place-content-center h-1/2'>

            <div className=' max-w-[600px] mx-auto mt-10'> <h1 className='my-6'>Add User</h1>
                <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs"
                    onChange={(e) => setName(e.target.value)} />
                <button onClick={userDispatch} className="btn btn-info px-4 my-6">Add User</button>
                <Link href="/counter">Counter page</Link>

            </div>

        </div>
    )
}

export default AddUser