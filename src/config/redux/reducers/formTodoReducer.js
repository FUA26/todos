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
        { value: '0', label: 'Low' },
        { value: '1', label: 'Normal' },
        { value: '2', label: 'High' },
    ]
  }

const FormTodoReducer = (state=initialState,action) =>{
    switch (action.type) {
    //untuk isert data from
        case 'UPDATE_DATA_FORM':
            console.log('hitttt',action.data)
            return{
            ...state,
            form:action.data
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