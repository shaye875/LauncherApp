import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'

export function ProtektedRouteBasick({children}) {
    const navigate = useNavigate()
    async function getUser() {
        try {
            const res = await fetch("http://localhost:3000/api/auth/getUser", {
                method: "GET",
                headers: { token: localStorage.getItem("token") }
            })
            if(!res.ok){
                return navigate("/")
            }
        } catch (err) {
            throw new Error(err)
        }
    }
    useEffect(()=>{
        getUser()
    },[])
    return children
}

export async function ProtcektedRouteIntellegans({children}){
    const navigate = useNavigate()
    const [user, setUser] = useState("")
    async function getUser() {
        try {
            const res = await fetch("http://localhost:3000/api/auth/getUser", {
                method: "GET",
                headers: { token: localStorage.getItem("token") }
            })
            const {user} = await res.json()
            if(!res.ok){
                return navigate("/")
            }
            if(user.userType === "airports"){
                return navigate("/launchers")
            }
        } catch (err) {
            throw new Error(err)
        }
    }
    useEffect(()=>{
        getUser()
    },[])
    return children
}

export async function ProtekdtedRouteAdmin({children}){
    const navigate = useNavigate()
    const [user, setUser] = useState("")
    async function getUser() {
        try {
            const res = await fetch("http://localhost:3000/api/auth/getUser", {
                method: "GET",
                headers: { token: localStorage.getItem("token") }
            })
            const {user} = await res.json()
            if(!res.ok){
                return navigate("/")
            }
            if(user.userType !== "admin"){
                return navigate("/launchers")
            }
        } catch (err) {
            throw new Error(err)
        }
    }
    useEffect(()=>{
        getUser()
    },[])
    return children
}