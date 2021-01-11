import React, { useState } from 'react'
import TodoList from '../../molecules/Todolist'
import Form from "../../atoms/Form";
import TodoForm from "../../molecules/FormAddTodo";
import Popup from "../../atoms/Popup";
import './stageList.scss'
import { useSelector } from 'react-redux';


function StageList(props) {
    const [openPopup, setOpenPopup] = useState(false)
    const {todoLogin} = useSelector(state =>state.mainReducer)
    const { title, todos} = props
    return (
        <div className="stage">
            <div className="stage__title">
                {title}
            </div>
            <div className="stage_wrapper">
            {todoLogin ? <TodoList></TodoList>: todos.map(todo => (<TodoList key={todo.id} data={todo}></TodoList>))}

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
