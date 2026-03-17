import React, { useState } from 'react'
import { useNavigate } from 'react-router'

function Login() {
    const navigate = useNavigate()
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [ans, setAns] = useState("")
    const [boolAns, setBoolAns] = useState(false)
    async function login() {
        try {
            const res = await fetch("http://localhost:3000/api/auth/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    username: username,
                    password: password
                })
            })
            const data = await res.json()
            if (res.ok) {
                const token = data.token
                while (localStorage.getItem("token") !== token) {
                    localStorage.setItem("token", token)
                }
                setBoolAns(false)
                async function getUser() {
                    try {
                        const res = await fetch("http://localhost:3000/api/auth/getUser", {
                            method: "GET",
                            headers: { token: localStorage.getItem("token") }
                        })
                        const user = await res.json()
                            alert(`
                                username: ${user.user.username}
                                password: ${user.user.password}
                                user type: ${user.user.userType}
                                `)
                        while (localStorage.getItem("user") !== JSON.stringify(user)) {
                            localStorage.setItem("user", JSON.stringify(user))
                        }
                    } catch (err) {
                        throw new Error(err)
                    }
                }
                getUser()
                const {user} = JSON.parse(localStorage.getItem("user"))
                if (user.userType === "admin") {
                    navigate("/admin")
                } else {
                    navigate("/launchers")
                }
            } else {
                setBoolAns(true)
                setAns(JSON.stringify(data))
            }
        } catch (err) {
            throw new Error(err)
        }
    }
    return (
        <div>
            <div>
                <p>username:</p>
                <input type="password" onChange={(e) => setUsername(e.target.value)} />
            </div>
            <div>
                <p>password:</p>
                <input type="password" onChange={(e) => setPassword(e.target.value)} />
            </div>
            <button onClick={() => {
                login()
            }}>submit</button>
            {boolAns && <p>{ans}</p>}
        </div>
    )
}

export default Login
