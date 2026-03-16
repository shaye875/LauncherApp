import React, { useEffect } from 'react'
import { useLaunchers } from '../zustand/store'

function ListLaunchers() {
    const {launchers,fetchLounchers} = useLaunchers()
    useEffect(()=>{
        fetchLounchers()  
    },[])
  return (
    <div>
        <table>
            <tr>
                <th>id</th>
                <th>city</th>
                <th>rocketType</th>
                <th>latitude</th>
                <th>longitude</th>
                <th>name</th>
                <th>enter</th>
            </tr>
      {launchers.map((item)=>{
         return(
            <tr>
                <td>{item._id}</td>
                <td>{item.city}</td>
                <td>{item.roketType}</td>
                <td>{item.latitude}</td>
                <td>{item.longitude}</td>
                <td>{item.name}</td>
                <td className='but'><button id='ent'>enter</button></td>
            </tr>
         )
      })}
      </table>
    </div>
  )
}

export default ListLaunchers
