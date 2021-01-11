const initialState ={
    isLogin: false,
    todoDatas:[
        {
            title: "Idea",
            id:0,
            todos:[
                {
                    id      : 0,
                    title   : "Test First Todo1",
                    text    : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    
                },
                {
                    id      : 1,
                    title   : "Test Second Todo",
                    text    : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    
                }
            ]
        },
        {
            title: "New 22",
            id:1,
            todos:[
                {
                    id      : 0,
                    title   : "Ready to do",
                    text    : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    
                },
            ]
        }
    ]
  }

const MainReducer = (state=initialState,action) =>{
    switch (action.type) {
    //untuk isert data from
        case 'UPDATE_DATA_TODO':
            return{
            ...state,
            todoDatas:[]
            }
        default:     
            return state
    }
}


export default MainReducer