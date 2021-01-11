import React, { useEffect } from 'react'
import { connect,useSelector,useDispatch} from 'react-redux'
import StageList from '../../components/organismes/StageList'
import API from '../../services'
import './mainPage.scss'



const MainPage = () =>{
    const {todoDatas} = useSelector(state =>state.mainReducer)
    const dispatch = useDispatch()
    console.log(todoDatas)
    useEffect(() => {
        // setTimeout(() => {
        //     dispatch({type:'UPDATE_DATA_TODO'})
        // }, 5000);
    }, [dispatch])

    return (
        <div>
            <h1>TODO APP</h1>
            <div className="StageWrapper">
                {todoDatas.map(list =>(<StageList key={list.id} title={list.title} todos={list.todos} className="items"></StageList>))}
            </div>
        </div>
    )
}

const reduxState = (state) =>({
    stage :state.main
    
})

const reduxDispath = (dispatch) =>({
        changeDataTodo: () => dispatch({data:'sadsa'})
    })

export default connect(reduxState,reduxDispath)(MainPage)
