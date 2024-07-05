import React from 'react'
import { useParams } from 'react-router-dom'
const User = () => {
    const { id } = useParams()
    return (
        <div className='bg-gray-700 text-center text-white text-3xl p-4 '>User: {id}</div>
    )
}

export default User