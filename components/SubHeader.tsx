import React from 'react'
import { Button } from './ui/button'

const SubHeader = () => {
    return (
        <div className='px-4 py-2'>
            <div className=' flex mb-2'>
                <div className='flex-1'>

                </div>
                <span className='text-xl font-semibold'>Manage Widget</span>
            </div>
            <div className='bg-purple-700 rounded-md p-2 flex justify-between items-center'>
                <h1 className='text-2xl'>Welcome Abroad, Blessing ✋</h1>
                <p className='text-gray-400 text-lg'>We're thrilled to have you join Techrity Team!</p>
                <Button className='bg-white p-4 rounded-md text-black'>Update Profile</Button>
            </div>
        </div>
    )
}

export default SubHeader