import { Card, CardContent, makeStyles } from '@material-ui/core'
import { MoreHoriz } from '@material-ui/icons';
import Skeleton from '@material-ui/lab/Skeleton';

import React,{useState} from 'react'
import { useSelector } from 'react-redux';
import Popup from '../../atoms/Popup';
import TodoForm from '../FormAddTodo';
import './todoList.scss'


const useStyles = makeStyles({
    card:{
        marginBottom: 15,
        borderRadius:10,
    }
  });



  
const TodoList = (todo) => {
    const classes = useStyles()
    const [openPopup, setOpenPopup] = useState(false)
    const {todoLogin} = useSelector(state =>state.mainReducer)
    const [recordForEdit, setRecordForEdit] = useState(null)
    const handleChange = (item) => {
        setOpenPopup(true);
        setRecordForEdit(item)
      };
    
    return (
        <div>
            {(todoLogin ? 
            <Card className={classes.card}>
                <CardContent>
                    <div>
                        <div className="card__header">
                            <Skeleton animation="wave" height={10} width="80%" style={{ marginBottom: 6 }} />
                            <MoreHoriz ></MoreHoriz>
                        </div>
                    </div>
                </CardContent>
            </Card> :
                <Card className={classes.card}>
                        <div className="card__content">
                            <div className="card__header">
                                <p>{todo.data.title}</p>
                                <MoreHoriz onClick={() => { handleChange(todo.data) }}></MoreHoriz>
                            </div>
                            <p>{todo.data.des}</p>
                        </div>
                </Card>
                )}
            <Popup
                title="Edit task"
                openPopup={openPopup}
                setOpenPopup={setOpenPopup}

            >
                <TodoForm recordForEdit={recordForEdit} isEdit={true} />
            </Popup>

        </div>
    )
}

export default TodoList
