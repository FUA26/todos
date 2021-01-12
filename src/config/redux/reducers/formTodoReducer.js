const initialState ={
    form:{
        id: 0,
        title: '',
        deskripsi: '',
        project: '',
        priority: '',
        doDate: new Date(),
    },
    isEdit:false,
    priority:[
        { id: '0', title: 'Low' },
        { id: '1', title: 'Normal' },
        { id: '2', title: 'High' },
    ]
  }

const FormTodoReducer = (state=initialState,action) =>{
    switch (action.type) {
    //untuk isert data from
        case 'UPDATE_DATA_FORM':
            return{
            ...state,
            todoDatas:action.data
            }
        case 'UPDATE_ISEDIT':
            return{
            ...state,
            todoLogin: action.data
            }
        default:     
            return state
    }
}


export default FormTodoReducer