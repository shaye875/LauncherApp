import React, { useState } from 'react'
import Select from 'react-select'

function Add() {
    const [name, setName] = useState("")
    const [rocketType, setRooketType] = useState(null)
    const [latitude, setLatitube] = useState(0)
    const [longitude, setLongitude] = useState(0)
    const [city, setCity] = useState("")
    const [ans, setAns] = useState(false)
    async function postLauncher() {
        const res = await fetch("http://localhost:3000/api/launchers", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                "city": city,
                "roketType": rocketType.value,
                "latitude": latitude
                , "longitude": longitude,
                "name": name
            })
        })
        if (res.ok) {
            setAns(true)
        }
    }
    const options = [
        { label: "Shahab3", value: "Shahab3" },
        { label: "Fetah110", value: "Fetah110" },
        { label: "Radwan", value: "Radwan" },
        { label: "Kheibar", value: "Kheibar" }
    ]
    return (
        <div id='add'>
            <div id='ins'>
                <input className='sel' type="text" placeholder='name' onChange={(e) => {
                    setName(e.target.value)
                }} />
                <Select className='sel'
                    defaultValue={rocketType}
                    onChange={setRooketType}
                    options={options}
                />
                <input className='sel' type="number" placeholder='latitude' onChange={(e) => {
                    setLatitube(e.target.value)
                }} />
                <input className='sel' type="number" placeholder='longitude' onChange={(e) => {
                    setLongitude(e.target.value)
                }} />
                <input className='sel' type="text" placeholder='city' onChange={(e) => {
                    setCity(e.target.value)
                }} />
                <button id='but' onClick={() => {
                    postLauncher()
                }}>submit</button>
                {ans && <h3>godd!!!</h3>}
            </div>
        </div>
    )
}

export default Add
