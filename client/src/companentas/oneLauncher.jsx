import React, { useState } from 'react'
import { useNavigate } from 'react-router'

function OneLauncher({ props }) {
    const navigate = useNavigate()
    const [ans,setAns] = useState(false)
    async function deleteLauncher(){
       const res = await fetch(`http://localhost:3000/api/launchers/${props._id}`,{
        method:"DELETE"
       })
       if(res.ok){
         setAns(true)
         setTimeout(()=>{
          navigate("/")
         },2000)
       }
    }
    return (
        <div id='one'>
            <div>
                <p>name:</p>
                <h1>{props.name}</h1>
            </div>
            <div>
                <p>rocket type:</p>
                <h2>{props.roketType}</h2>
            </div>
            <div id='loc'>
                <h2>location</h2>
                <div  id='log'>
                    <div className='lat'>
                        <p>latitude</p>
                        <p><b>{props.latitude}</b></p>
                    </div>
                    <div className='lat'>
                        <p>longitude</p>
                        <p><b>{props.longitude}</b></p>
                    </div>
                </div>
            </div>
            <div>
                <p>city:</p>
                <p><b>{props.city}</b></p>
            </div>
            <button onClick={()=>{
                deleteLauncher()
            }} id='del'>delete</button>
            {ans && <p>the launcher revded!!</p>}
        </div>
    )
}

export default OneLauncher
