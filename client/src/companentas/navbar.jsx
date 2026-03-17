import React from 'react'
import { Link, useNavigate } from 'react-router'

function Navbar() {
    const navigate = useNavigate()
    const { userType } = JSON.parse(localStorage.getItem("user")).user
    return (
        <div>
            {userType == "admin" &&
                <div id='nav'>
                    <Link className='lin' to={"/"}>login</Link>
                    <Link to={"/launchers"}>list launchers</Link>
                    <Link to={"/add"}>add launcher</Link>
                    <Link to={"/users"}>list users</Link>
                    <Link to={"/register"}>add user</Link>
                    <button onClick={()=>{
                        localStorage.clear()
                       return navigate("/")
                    }}>log out</button>
                </div>
            }
            {userType == "intellagens" &&
                <div id='nav'>
                    <Link to={"/"}>login</Link>
                    <Link to={"/launchers"}>list launchers</Link>
                    <Link to={"/add"}>add launcher</Link>
                </div>
            }
            {userType == "airports" && 
            <div id='nav'>
                  <Link to={"/"}>login</Link>
            </div>
            }
        </div>
    )
}

export default Navbar
