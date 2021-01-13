import axios from 'axios'
import {URL} from './Config'



const POST = (path, payload) =>{
    const promise = new Promise((resolve,reject) =>{
        axios.post(`${URL}/${path}`,payload,{
            headers: {
            'Content-Type': 'application/json'
            }})
        .then((result)=>{
            resolve(result.data);
        },(err)=>{
            console.log(err)
            reject(err)
        })
    })
    return promise
}


export default POST;