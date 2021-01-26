import { Box, Card, CardContent, makeStyles } from '@material-ui/core'
import { ExpandLess, ExpandMore, Minimize, MoreHoriz } from '@material-ui/icons';
import Skeleton from '@material-ui/lab/Skeleton';
import RemoveRoundedIcon from '@material-ui/icons/RemoveRounded';
import React,{useEffect, useState} from 'react'
import { useSelector } from 'react-redux';
import Popup from '../../atoms/Popup';
import TodoForm from '../FormAddTodo';
import './todoList.scss'
import { green } from '@material-ui/core/colors';


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
        setRecordForEdit({
            id: item.id,
            title: item.title,
            deskripsi: item.des,
            project: item.id_project,
            priority: item.priority,
            doDate: item.do_date,
            status: item.status,
        })
      };
      console.log("todo",todo)
      let prio = <ExpandMore className="low"></ExpandMore>
      if (todo.data !== undefined) {
        if (todo.data.priority === 1) {
            prio = <RemoveRoundedIcon className="normal"></RemoveRoundedIcon>
        } else if(todo.data.priority === 2) {
            prio = <ExpandLess className="high"></ExpandLess>
        }
        else {
            prio = <ExpandMore className="low"></ExpandMore>
        }
      }
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
                                <Box>
                                    {prio}
                                </Box>
                                <Box  flexGrow={1} alignItems="center">
                                    <p>{todo.data.title}</p>

                                </Box>
                                <Box>
                                    <MoreHoriz onClick={() => { handleChange(todo.data) }}></MoreHoriz>
                                </Box>
                            </div>
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
