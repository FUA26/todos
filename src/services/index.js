import GET from './Get'

//POST
const getTodos = (data) => GET('todo/get-todo',data)



//GET



const API = {
    getTodos
}

export default API;
