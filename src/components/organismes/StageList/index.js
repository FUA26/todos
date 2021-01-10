import React, { useState } from 'react'
import TodoList from '../../molecules/Todolist'
import Form from "../../atoms/Form";
import TodoForm from "../../molecules/FormAddTodo";
import Popup from "../../atoms/Popup";
import './stageList.scss'


function StageList(props) {
    const [openPopup, setOpenPopup] = useState(false)
    
    const { title, todos, ...other } = props

    console.log(todos)
    return (
        <div className="stage">
            <div className="stage__title">
                {title}
            </div>
            <div className="stage_wrapper">
            {todos.map(todo => (<TodoList key={todo.id} title={todo.title} des={todo.text}></TodoList>))}

            <Form.Button
                text="Add New"
                variant="outlined"
                onClick={() => { setOpenPopup(true);}}
            />

            <Popup
                title={title}
                openPopup={openPopup}
                setOpenPopup={setOpenPopup}
            >
                <TodoForm />
            </Popup>

            </div>
        </div>
    )
}

export default StageList
