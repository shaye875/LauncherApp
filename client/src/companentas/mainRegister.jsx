import React, { useState } from 'react'

function MainRegister() {
    const [username,setUsername] = useState("")
    const [password,setPassword] = useState("")
    const [email,setEmail] = useState("")
    const [userType,setUserType] = useState("")
    const [ans, setAns] = useState("")
    const [boolAns, setBoolAns] = useState(false)
    async function register(){
        try{
            const res = await fetch("http://localhost:3000/api/auth/register/create", {
                method: "POST",
                headers: { "Content-Type": "application/json",token:localStorage.getItem("token") },
                body: JSON.stringify({
                    username: username,
                    password: password,
                    email:email,
                    userType:userType
                })
            })
            const data = await res.json()
            console.log(data);
            setAns(JSON.stringify(data)) 
            setBoolAns(true)
        }catch(err){
            throw new Error(err)
        }
    }
  return (
    <div>
      <div>
        <p>username:</p>
        <input type="text" onChange={(e)=>setUsername(e.target.value)}/>
      </div>
      <div>
      <p>password:</p>
      <input type="text" onChange={(e)=>setPassword(e.target.value)}/>
      </div>
      <div>
      <p>email:</p>
      <input type="text" onChange={(e)=>setEmail(e.target.value)}/>
      </div>
      <div>
      <p>user type:</p>
      <input type="text" onChange={(e)=>setUserType(e.target.value)}/>
      </div>
      <button onClick={()=>{
        register()
      }}>submit</button>
      {boolAns && <p>{ans}</p>}
    </div>
  )
}

export default MainRegister
