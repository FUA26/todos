const initialState ={
    isLogin: false,
    todoLogin:true,
    todoDatas:{},
    projectList:{},
    sidebarOpen:false,
    userData:{},
    stateData:[
        { id: '1', title: 'Backlog' },
        { id: '2', title: 'Todo' },
        { id: '3', title: 'On Progress' },
        { id: '4', title: 'Done' },
    ]
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
        case 'UPDATE_USER':
            return{
            ...state,
            userData: action.data
            }
        default:     
            return state
    }
}


export default MainReducer