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
    async function deleteOne(id) {
        const res = await fetch(`http://localhost:3000/api/auth/register/delete/${id}`, {
            method: "DELETE",
            headers: { token: localStorage.getItem("token") }
        })
    }
    useEffect(() => {
        getUsers()
    }, [deleteOne])
    return (
        <div>
            <button id='new' onClick={() => {
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
                    <th>update</th>
                    <th>delete</th>
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
                            <td className='but'><button id='ent' onClick={()=>{
                                navigate(`/user/${item._id}`)
                            }}>update</button></td>
                            <td className='but'><button id='ent' onClick={()=>{
                                deleteOne(item._id)
                            }}>delete</button></td>
                        </tr>
                    )
                })}
            </table>
        </div>
    )
}

export default MainUses
