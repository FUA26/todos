import GET from './Get'

//POST
const getTodos = (data) => GET('v1/todo/get-todo',data)



//GET



const API = {
    getTodos
}

export default API;
