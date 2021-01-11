const initialState ={
    isLogin: false,
    todoLogin:true,
    todoDatas:[]
  }

const MainReducer = (state=initialState,action) =>{
    switch (action.type) {
    //untuk isert data from
        case 'UPDATE_DATA_TODO':
            return{
            ...state,
            todoDatas:action.data
            }
        case 'UPDATE_LOADING':
            return{
            ...state,
            todoLogin: !state.todoLogin
            }
        default:     
            return state
    }
}


export default MainReducer