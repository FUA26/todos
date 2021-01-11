import axios from 'axios'
import {URL} from './Config'

const GET = (path, payload) =>{
    const promise = new Promise((resolve,reject) =>{
        axios.get(`${URL}/${path}`,payload)
        .then((result)=>{
            console.log(result)
            resolve(result.data);
        },(err)=>{
            reject(err)
        })
    })
    return promise
}

export default GET;