const initialState ={
    isLogin: false,
  }

const MainReducer = (state=initialState,action) =>{
    switch (action.type) {
    //untuk isert data from
        case 'INITAL_DATAS':
            return{
            ...state,
            dataToDo:action.data
            }
        case 'UPDATE_DATA_TODO':
        return{
        ...state,
        dataToDo:action.data
        }
        case 'UPDATE_DATA_DONE':
            return{
            ...state,
            dataDone:action.data
            }
        
        default:     
            return state
    }
}


export default MainReducer