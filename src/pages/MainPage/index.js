
import React, { useEffect } from 'react'
import {useSelector,useDispatch} from 'react-redux'
import StageList from '../../components/organismes/StageList'
import { setProjectList, setTodoDatas } from '../../config/redux/actions'
import './mainPage.scss'




const MainPage = () =>{
    const {todoDatas, todoLogin} = useSelector(state =>state.mainReducer)
    const dispatch = useDispatch()
    useEffect(() => {
         dispatch(setTodoDatas(1))
         dispatch(setProjectList())
    }, [dispatch])
    // console.log(todoDatas)
    return (
        <div className="StageWrapper">
            {todoLogin ? 
                <StageList className="items"></StageList>
                 :  
                todoDatas.map(list =>(
                <StageList key={list.id} title={list.title} todos={list.todos} className="items"></StageList>
                ))}
        </div>
    )
}

export default (MainPage)
