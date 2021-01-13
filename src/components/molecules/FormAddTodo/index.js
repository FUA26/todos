import React, { useEffect } from 'react'
import { Grid, } from '@material-ui/core';
import Controls from "../../atoms/Form";
import { useForm, Form } from '../../atoms/Form/useForm';
import API from '../../../services';
import { connect, useSelector,useDispatch } from 'react-redux';
import { setTodoDatas } from '../../../config/redux/actions';

function TodoForm(props) {
    const {form,priority} = useSelector(state =>state.formTodoReducer)
    const {projectList} = useSelector(state =>state.mainReducer)
    const dispatch = useDispatch()
    const { addOrEdit,isEdit, recordForEdit } = props

    const validate = (fieldValues = values) => {
        let temp = { ...errors }
        if ('title' in fieldValues)
            temp.title = fieldValues.title ? "" : "This field is required."
        if ('project' in fieldValues)
            temp.project = fieldValues.project.length !== 0 ? "" : "This field is required."
        setErrors({
            ...temp
        })

        if (fieldValues === values)
            return Object.values(temp).every(x => x === "")
    }

    const {
        values,
        setValues,
        errors,
        setErrors,
        handleInputChange,
        resetForm
    } = useForm(form, true, validate);

    const handleSubmit = e => {
        e.preventDefault()
        if (validate()) {
            
            let payload = {
                "projectID": values.project,
                "title": values.title,
                "des": values.deskripsi,
                "doDate" :values.doDate,
                "start" :"",
                "end" :"",
                "status" :"1",
                "priority" :values.priority
            }
            console.log("Date",payload)
            if (isEdit) {
                payload.id=values.id
                // console.log(payload)
                API.postUpdateTodo(payload)
                .then( result =>{
                    dispatch(setTodoDatas(1))
                })
                .catch(error => {
                    console.log(error)
                })
            } else {
                API.postAddTodo(payload)
                .then( result =>{
                    dispatch(setTodoDatas(1))
                })
                .catch(error => {
                    console.log(error)
                })
            }

        }
    }

    const handleDelete = id => {
            let payload = {
                "id": id
            }
            console.log("Id :",payload)
            API.deleteTodo(payload)
            .then( result =>{
                console.log("Delete :",result)
                dispatch(setTodoDatas(1))
            })
            .catch(error => {
                console.log(error)
            })

    }

    useEffect(() => {
        if (recordForEdit != null)
            setValues({
                id: recordForEdit.id,
                title: recordForEdit.title,
                deskripsi: recordForEdit.des,
                project: recordForEdit.id_project,
                priority: recordForEdit.priority,
                doDate: recordForEdit.do_date,
            })
    }, [recordForEdit])
    return (
        <Form onSubmit={handleSubmit}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Controls.Input
                        name="title"
                        label="title"
                        value={values.title}
                        onChange={handleInputChange}
                        error={errors.title}
                    />
                    <Controls.Input
                        label="deskripsi"
                        name="deskripsi"
                        multiline
                        rows={6}
                        value={values.deskripsi}
                        onChange={handleInputChange}
                    />

                </Grid>
                
                <Grid item xs={6} >
                    <Controls.Select
                        name="priority"
                        label="priority"
                        value={values.priority}
                        onChange={handleInputChange}
                        options={priority}
                        error={errors.priority}
                    />
                </Grid>
                <Grid item xs={6}>
                    <Controls.Select
                        name="project"
                        label="project"
                        value={values.project}
                        onChange={handleInputChange}
                        options={projectList}
                        error={errors.project}
                    />
                    
                </Grid>
                
                <Grid item xs={6}>
                    <Controls.DatePicker
                        name="doDate"
                        label="Do Date"
                        value={values.doDate}
                        onChange={handleInputChange}
                    />
                </Grid>
                <Grid item xs={12}>
                    <div>
                        <Controls.Button
                            type="submit"
                            text="Submit"/>
                        {(isEdit ? <Controls.Button color="secondary"
                        text="Delete" onClick={() => { handleDelete(values.id) }}/>: "")}
                        <Controls.Button
                            text="Reset"
                            color="default"
                            onClick={resetForm} />
                    </div>
                </Grid>
            </Grid>
        </Form>
    )
}
export default connect()(TodoForm)