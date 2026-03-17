import React, { useState } from 'react'
import { useParams } from 'react-router'

function MainUpdateUser() {
    const { id } = useParams()
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    const [userType, setUserType] = useState("")
    const [ans, setAns] = useState("")
    const [boolAns, setBoolAns] = useState(false)
    async function register() {
        try {
            const res = await fetch("http://localhost:3000/api/auth/register/update", {
                method: "PUT",
                headers: { "Content-Type": "application/json", token: localStorage.getItem("token") },
                body: JSON.stringify({
                    _id: id,
                    username: username,
                    password: password,
                    email: email,
                    userType: userType,
                    lastLogin: new Date()
                })
            })
            const data = await res.json()
            console.log(data);
            setAns(JSON.stringify(data))
            setBoolAns(true)
        } catch (err) {
            throw new Error(err)
        }
    }
    return (
        <div  id='add'>
            <div  id='ins'>
                <div>
                    <p>username:</p>
                    <input type="text" onChange={(e) => setUsername(e.target.value)} />
                </div>
                <div>
                    <p>password:</p>
                    <input type="text" onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div>
                    <p>email:</p>
                    <input type="text" onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div>
                    <p>user type:</p>
                    <input type="text" onChange={(e) => setUserType(e.target.value)} />
                </div>
                <button id='but' onClick={() => {
                    register()
                }}>submit</button>
                {boolAns && <p>{ans}</p>}
            </div>
        </div>
    )
}

export default MainUpdateUser
