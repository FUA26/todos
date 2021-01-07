const initialState =[
    {
        title: "Idea",
        id:0,
        todos:[
            {
                id      : 0,
                text    : "Test First Todo"

            },
            {
                id      : 1,
                text    : "Test Second Todo"

            }
        ]
    },
    {
        title: "New",
        id:1,
        todos:[
            {
                id      : 0,
                text    : "mulai kerjakan"

            },
        ]
    }
]

const StageReducer = (state=initialState,action) =>{
    switch (action.type) {

        default:     
            return state
    }
}


export default StageReducer