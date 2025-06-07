import { Sidebar } from '@/components/Sidebar'
import React from 'react'

const page = () => {
    return (
        <div className='flex-1 bg-black'>
            <div className='relative'>
                <Sidebar />
            </div>

        </div>
    )
}

export default page