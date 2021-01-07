import React from 'react'
import TodoList from '../Todolist'
import './stageList.scss'

const StageList = ({title, todos}) => {
    console.log(todos)
    return (
        <div className="stage">
            <div className="stage__title">
                {title}
            </div>
            {todos.map(todo => (<TodoList key={todo.id} title={todo.text}></TodoList>))}
            
        </div>
    )
}

export default StageList
