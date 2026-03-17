import JWT from 'jsonwebtoken'
import 'dotenv/config'

export function getToken(username, password, userType) {
    const token = JWT.sign({
        username: username,
        password: password,
        userType: userType
    },
        process.env.SECRET,
        { expiresIn: "10h" }
    )
    return token
}

export function veryfyToken(token){
    let result
    JWT.verify(token,process.env.SECRET,(err,deccord)=>{
        if(!err){
            result = deccord
        }
    })
    return result
}



