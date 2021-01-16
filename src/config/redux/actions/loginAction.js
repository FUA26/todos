import { AES } from "crypto-js";
import API from "../../../services"

export const setLogin1 =(payload) =>{
    return(dispatch)=>{
        API.postLogin(payload)
        .then( result =>{
            if (result.code === '00') {
                var ciphertext = AES.encrypt(JSON.stringify(result.data), 'secret key 123').toString();
                sessionStorage.setItem('todoUser', ciphertext);
                let dataPayload = result.data
                dispatch({type:'UPDATE_USER',data:dataPayload})
            }
        })
        .catch(error => {
            console.log(error)
        })
    }
}

export const setLogin =(payload) =>(dispatch)=>{
    return new Promise((resolve, reject)=>{
        API.postLogin(payload)
        .then( result =>{
            console.log(result)
            if (result.code === '00') {
                var ciphertext = AES.encrypt(JSON.stringify(result.data), 'secret key 123').toString();
                sessionStorage.setItem('todoUser', ciphertext);
                let dataPayload = result.data
                dispatch({type:'UPDATE_USER',data:dataPayload})
                resolve(true)
            }
            reject(false)
        })
        .catch(error => {
            console.log(error)
            reject(false)
        })
    })
}


export const setLogout =() =>{
    return(dispatch)=>{
        var data=[]
        dispatch({type:'UPDATE_USER',data:data})
        sessionStorage.removeItem("todoUser");
    }
}

export const updateUser =(data) =>{
    return(dispatch)=>{
        dispatch({type:'UPDATE_USER',data:data})
    }
}
