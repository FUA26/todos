import React, { useState } from 'react'
import TodoList from '../../molecules/Todolist'
import Form from "../../atoms/Form";
import TodoForm from "../../molecules/FormAddTodo";
import Popup from "../../atoms/Popup";
import './stageList.scss'
import { useSelector } from 'react-redux';
import { withStyles } from '@material-ui/core';


const styles = theme => ({
    '@global': {
      '*::-webkit-scrollbar': {
        width: '8px',
        height: '8px',
        backgroundColor: '#F5F5F5'
      },
      '*::-webkit-scrollbar-track': {
        '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.00)',
        borderRadius: '10px',
        backgroundColor: '#F5F5F5'
      },
      '*::-webkit-scrollbar-thumb': {
        borderRadius: '10px',
        '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,.3)',
        backgroundColor: '#3F51B5'
      }
    }
  });
function StageList(props) {
    const [openPopup, setOpenPopup] = useState(false)
    const {todoLogin} = useSelector(state =>state.mainReducer)
    const { title, todos} = props
    return (
        <div className="stage" id="scroll-bar">
            <div className="stage__title">
                {title}
            </div>
            <div className="stage_wrapper" id="scroll-bar">
            {todoLogin ? <TodoList></TodoList>: todos.map(todo => (<TodoList key={todo.id} data={todo}></TodoList>))}
            {title === "Backlog" ?             
            <>
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
            </>:""}

            </div>
        </div>
    )
}

export default withStyles(styles)(StageList)
