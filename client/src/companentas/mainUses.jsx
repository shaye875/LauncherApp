import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'

function MainUses() {
    const navigate = useNavigate()
    const [users, setUsers] = useState([])
    async function getUsers() {
        try {
            const res = await fetch("http://localhost:3000/api/auth/register/get", {
                method: "GET",
                headers: { token: localStorage.getItem("token") }
            })
            const arr = await res.json()
            setUsers(arr)
        } catch (err) {
            throw new Error(err)
        }
    }

    useEffect(() => {
        getUsers()
    }, [])
    return (
        <div>
            <button onClick={()=>{
            navigate("/register")
            }}>new+</button>
            <table>
                <tr>
                    <th>id</th>
                    <th>username</th>
                    <th>password</th>
                    <th>email</th>
                    <th>user type</th>
                    <th>last login</th>
                </tr>
                {users.map((item) => {
                    return (
                        <tr>
                            <td>{item._id}</td>
                            <td>{item.username}</td>
                            <td>{item.password}</td>
                            <td>{item.email}</td>
                            <td>{item.userType}</td>
                            <td>{item.lastLogin}</td>
                            {/* <td className='but'><button id='ent'onClick={()=>{
                   negativ(`/${item._id}`)
                }}>enter</button></td> */}
                        </tr>
                    )
                })}
            </table>
        </div>
    )
}

export default MainUses
