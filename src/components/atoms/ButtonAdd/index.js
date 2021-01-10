import React from 'react'
import { Card, CardContent, Typography } from '@material-ui/core'
import { Add } from '@material-ui/icons';
import './buttonAdd.scss';


function ButtonAdd(props) {
    return (
        <Card className="buttonAdd" {...props}>
            <CardContent className="buttonAdd__content">
                <Add></Add>
                <Typography>
                    Add Task
                </Typography>
            </CardContent>
        </Card>
    )
}

export default ButtonAdd
