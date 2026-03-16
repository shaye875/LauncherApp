import { create } from 'zustand'

export const useLaunchers = create((set) =>({
    launchers:[],
    fetchLounchers:async () =>{
        try{
          const res = await fetch("http://localhost:3000/api/launchers")
          const arr = await res.json()
          set({launchers:arr})
        }catch(err){
            throw new Error(err)
        }
    }
}))