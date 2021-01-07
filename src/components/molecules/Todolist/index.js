import { Card, CardContent, makeStyles } from '@material-ui/core'
import { MoreHoriz } from '@material-ui/icons';

import React from 'react'
import './todoList.scss'


const useStyles = makeStyles({
    card:{
        marginBottom: 15
    }
  });

const TodoList = ({title,des}) => {
    const classes = useStyles()
    return (
        <Card className={classes.card}>
            <CardContent>
                <div className="card__header">
                    <p>{title}</p>
                    <MoreHoriz></MoreHoriz>
                </div>
                <p>{des}</p>
            </CardContent>
        </Card>
    )
}

export default TodoList
