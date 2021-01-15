
import GET from './Get'
import POST from './Post'

//AUTH
const postLogin = (data) => POST('/login',data)


//GET
const getTodos = (data) => GET('todo/get-todo',data)
const getProjectList = (data) => GET('project/get-project',data)


//POST
const postAddTodo = (data) => POST('todo/add-todo',data)
const postUpdateTodo = (data) => POST('todo/update-todo',data)
//DELETE
const deleteTodo = (data) => POST('todo/delete-todo',data)

const API = {
    getTodos,
    getProjectList,
    postAddTodo,
    deleteTodo,
    postUpdateTodo,
    postLogin
}

export default API;
