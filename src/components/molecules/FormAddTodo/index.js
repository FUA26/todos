import React from 'react'
import { Grid, } from '@material-ui/core';
import Controls from "../../atoms/Form";
import { useForm, Form } from '../../atoms/Form/useForm';


const genderItems = [
    { id: '0', title: 'Male' },
    { id: '1', title: 'Female' },
    { id: '2', title: 'Other' },
]

const initialFValues = {
    id: 0,
    title: '',
    deskripsi: '',
    project: '',
    priority: '',
    doDate: new Date(),
    isPermanent: false,
}

export default function TodoForm(props) {

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
        errors,
        setErrors,
        handleInputChange,
        resetForm
    } = useForm(initialFValues, true, validate);

    const handleSubmit = e => {
        e.preventDefault()
        if (validate()) {
            alert(JSON.stringify(values))
        }
    }


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
                        options={genderItems}
                        error={errors.priority}
                    />
                </Grid>
                <Grid item xs={6}>
                    <Controls.Select
                        name="project"
                        label="project"
                        value={values.project}
                        onChange={handleInputChange}
                        options={genderItems}
                        error={errors.project}
                    />
                    
                </Grid>
                
                <Grid item xs={6}>
                    <Controls.DatePicker
                        name="hireDate"
                        label="Hire Date"
                        value={values.hireDate}
                        onChange={handleInputChange}
                    />
                </Grid>
                <Grid item xs={12}>
                    <div>
                        <Controls.Button
                            type="submit"
                            text="Submit"/>
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
