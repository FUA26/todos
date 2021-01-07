import { Card, CardContent, makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import './todoList.scss'


const useStyles = makeStyles({
    card:{
        marginBottom: 15
    }
  });

const TodoList = ({title}) => {
    const classes = useStyles()
    return (
        <Card className={classes.card}>
            <CardContent>
                <Typography>
                    {title}
                </Typography>
            </CardContent>
        </Card>
    )
}

export default TodoList
