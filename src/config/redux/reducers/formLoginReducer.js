const initialState ={
    datalogin:{
        email:"",
        password:"",
    }
  }

const FormLoginReducer = (state=initialState,action) =>{
    switch (action.type) {
    //untuk isert data from
        case 'UPDATE_LOGIN_FORM':
            return{
            ...state,
            datalogin:action.data
            }
        default:     
            return state
    }
}


export default FormLoginReducer