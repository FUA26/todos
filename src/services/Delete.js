import axios from 'axios'
import {URL} from './Config'



const DELETE = (path, payload) =>{
    
    console.log("Payload",payload)
    const promise = new Promise((resolve,reject) =>{
        axios.delete(`${URL}/${path}`,{
            headers: {
              Authorization: 'authorizationToken'
            },
            data: {
              source: payload
            }
          })
        .then((result)=>{
            console.log(result)
            resolve(result.data);
        },(err)=>{
            console.log(err)
            reject(err)
        })
    })
    return promise
}


export default DELETE;