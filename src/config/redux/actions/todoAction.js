import API from "../../../services"

export const setTodoDatas =() =>{
    return(dispatch)=>{
        const payload ="";
        API.getTodos(payload).then( result =>{
            dispatch({type:'UPDATE_LOADING',data:true})
            dispatch({type:'UPDATE_DATA_TODO',data:result.data})
            dispatch({type:'UPDATE_LOADING',data:false})
        }
        ).catch(error => {
            console.log(error)
        })
    }
}

export const setProjectList =() =>{
    return(dispatch)=>{
        const payload ="";
        API.getProjectList(payload).then( result =>{
            console.log(result)
            dispatch({type:'UPDATE_LOADING',data:true})
            dispatch({type:'UPDATE_PROJECT_LIST',data:result.data})
            dispatch({type:'UPDATE_LOADING',data:false})
        }
        ).catch(error => {
            console.log(error)
        })
    }
}