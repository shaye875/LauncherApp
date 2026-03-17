import React from 'react'
import { useNavigate } from 'react-router'

function MainAdmin() {
    const navigate = useNavigate()
    return (
        <div>
            <button onClick={() => {
                navigate("/launchers")
            }}>launchers</button>
            <button onClick={() => {
                navigate("/users")
            }}>users</button>
        </div>
    )
}

export default MainAdmin
