const initialState ={
    isLogin: false,
    todoLogin:true,
    todoDatas:[],
    projectList:[],
    sidebarOpen:false,
  }

const MainReducer = (state=initialState,action) =>{
    switch (action.type) {
    //untuk isert data from
        case 'UPDATE_DATA_TODO':
            return{
            ...state,
            todoDatas:action.data
            }
        case 'UPDATE_PROJECT_LIST':
            return{
            ...state,
            projectList:action.data
            }
        case 'UPDATE_LOADING':
            return{
            ...state,
            todoLogin: action.data
            }
        case 'UPDATE_SIDEBAR':
            return{
            ...state,
            sidebarOpen: action.data
            }
        default:     
            return state
    }
}


export default MainReducer