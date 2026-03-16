export function isInformation(keys,obj){
    let count = 0
    for(let key in obj){
        for(let keyMust of keys){
            if(String(key).toLowerCase() === String(keyMust).toLowerCase()){
                count +=1
                if(key !== keyMust){
                    obj[keyMust] = obj[key]
                    delete obj[key]
                }
            }
        }
    }
    if(count === keys.length){
        return true
    }
    return false
}

export function isTypes(obyTypes,obj){
    let count = 0
    for(let key in obj){
        if(typeof obj[key] === typeof obyTypes[key]){
            count+=1
        }
    }
    if(count === Object.keys(obj).length){
        return true
    }
    return false
}

export function schema(obj){
    for(let key in obj){
        if(Number(key) === obj[key].size){
            return true
        }
    }
    return false
}



