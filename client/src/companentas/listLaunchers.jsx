import React, { useEffect, useState } from 'react'
import { useLaunchers } from '../zustand/store'
import Select from 'react-select'
import { useNavigate } from 'react-router'

function ListLaunchers() {
    const negativ = useNavigate()
    const [city,setCity] = useState("")
    const [rocketType,setRooketType] = useState({label:"all",value:"all"})
    const {launchers,fetchLounchers} = useLaunchers()
    useEffect(()=>{
        fetchLounchers()  
    },[])
    const options = [
        {label:"all",value:"all"},
        {label:"Shahab3",value:"Shahab3"},
        {label:"Fetah110",value:"Fetah110"},
        {label:"Radwan",value:"Radwan"},
        {label:"Kheibar",value:"Kheibar"}
    ]
  return (
    <div>
        <div id='hed'>
            <div id='cit'>
                <p>city:</p>
                <input type="text" className='int' onChange={(e)=>setCity(e.target.value)}/>
            </div>
            <div id='cit'>
                <p>rocketType:</p>
            <Select className='int'
            defaultValue={rocketType}
            onChange={setRooketType}
            options={options}
            />
            </div>
            <button className='int' id='new' onClick={()=>{
               negativ("/add")
            }}>new+</button>
        </div>
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
      {launchers.filter((item1)=>{
          if(city === "" && rocketType.value === "all"){
            return item1
          }else if(city !== "" && rocketType.value !== "all"){
              if(item1.city.toLowerCase() === city.toLowerCase() && item1.roketType === rocketType.value){
                return item1
              }
          }else if(city !== "" && rocketType.value === "all"){
            if(item1.city.toLowerCase() === city.toLowerCase()){
                return item1
              }
          }else if(city === "" && rocketType.value !== "all"){
            if(item1.roketType === rocketType.value){
                return item1
              }
          }
      })
      .map((item)=>{
         return(
            <tr>
                <td>{item._id}</td>
                <td>{item.city}</td>
                <td>{item.roketType}</td>
                <td>{item.latitude}</td>
                <td>{item.longitude}</td>
                <td>{item.name}</td>
                <td className='but'><button id='ent'onClick={()=>{
                   negativ(`/${item._id}`)
                }}>enter</button></td>
            </tr>
         )
      })}
      </table>
    </div>
  )
}

export default ListLaunchers
