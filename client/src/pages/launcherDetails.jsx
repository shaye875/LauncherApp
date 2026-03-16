import { useEffect, useState } from "react";
import { useParams } from "react-router";
import OneLauncher from "../companentas/oneLauncher";
import Title from "../companentas/title";


function LauncherDetails() {
    const { id } = useParams()
    const [launcher, setLauncher] = useState({})
    async function getLauncher() {
        try {
            const res = await fetch(`http://localhost:3000/api/launchers/${id}`)
            const data = await res.json()
            setLauncher(data)
        } catch(err) {
            throw new Error(err)
        }
    }
    useEffect(()=>{
       getLauncher()
    },[])
    return (
        <div>
            <Title />
            <OneLauncher props={launcher} />
        </div>
    )
}

export default LauncherDetails
