const initialState =[
    {
        title: "Idea",
        id:0,
        todos:[
            {
                id      : 0,
                title   : "Test First Todo",
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
        title: "New",
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

const StageReducer = (state=initialState,action) =>{
    switch (action.type) {

        default:     
            return state
    }
}


export default StageReducer