import API from "../../../services"

export const setTodoDatas =() =>{
    return(dispatch)=>{
        const payload ="";
        API.getTodos(payload).then( result =>{
            // console.log(result)
            dispatch({type:'UPDATE_LOADING'})
            dispatch({type:'UPDATE_DATA_TODO',data:result.data})
            // dispatch({type:'UPDATE_LOADING'})
        }
        ).catch(error => {
            console.log(error)
        })
    }

}