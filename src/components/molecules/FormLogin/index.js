import React from 'react'
import { Grid, } from '@material-ui/core';
import Controls from "../../atoms/Form";
import { useForm, Form } from '../../atoms/Form/useForm';
import { useDispatch } from 'react-redux';

import { setLogin } from '../../../config/redux/actions/loginAction';
import { useHistory, useLocation } from 'react-router-dom';

const initialValues ={
    email: "",
    password: ""
}

function LoginForm(props) {
    const dispatch = useDispatch()
    let history = useHistory();
    let location = useLocation();
  


    const validate = (fieldValues = values) => {
        let temp = { ...errors }
        if ('email' in fieldValues)
            temp.email = fieldValues.email ? "" : "This field is required."
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
    } = useForm(initialValues, true, validate);

    const handleSubmit = async e => {
        e.preventDefault()
        if (validate()) {
            let payload = {
                "email": values.email,
                "password": values.password,
            }
            let login = await dispatch(setLogin(payload)).catch(err => err)
            // console.log(login)
            if (login) {
                let { from } = location.state || { from: { pathname: "/" } };
                history.replace(from);
            }
        }
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Controls.Input
                        name="email"
                        label="email"
                        value={values.email}
                        onChange={handleInputChange}
                        error={errors.email}
                    />
                    <Controls.Input
                        label="password"
                        name="password"
                        type="password"
                        value={values.password}
                        onChange={handleInputChange}
                    />

                </Grid>
                <Grid item xs={12}>
                    <div>
                        <Controls.Button
                            type="submit"
                            text="Submit"/>
                    </div>
                </Grid>
            </Grid>
        </Form>
    )
}
export default LoginForm