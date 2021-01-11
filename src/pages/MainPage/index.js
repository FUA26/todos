import React, { useEffect } from 'react'
import { connect,useSelector,useDispatch} from 'react-redux'
import StageList from '../../components/organismes/StageList'
import { setTodoDatas } from '../../config/redux/actions'
import API from '../../services'
import './mainPage.scss'



const MainPage = () =>{
    const {todoDatas, todoLogin} = useSelector(state =>state.mainReducer)
    const dispatch = useDispatch()
    console.log(todoDatas)
    useEffect(() => {
         dispatch(setTodoDatas(1))
    }, [dispatch])
    
    
console.log(todoLogin)
    return (
        <div>
            <h1>TODO APP</h1>
            <div className="StageWrapper">
                {todoLogin ? <StageList className="items"></StageList> :  todoDatas.map(list =>(<StageList key={list.id} title={list.title} todos={list.todos} className="items"></StageList>))}
            </div>
        </div>
    )
}



export default (MainPage)
