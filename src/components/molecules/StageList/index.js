import React from 'react'
import ButtonAdd from '../../atoms/ButtonAdd'
import TodoList from '../Todolist'
import './stageList.scss'

const StageList = ({title, todos}) => {
    console.log(todos)
    return (
        <div className="stage">
            <div className="stage__title">
                {title}
            </div>
            <div className="stage_wrapper">
            {todos.map(todo => (<TodoList key={todo.id} title={todo.title} des={todo.text}></TodoList>))}
            <ButtonAdd></ButtonAdd>
            </div>
            
        </div>
    )
}

export default StageList
