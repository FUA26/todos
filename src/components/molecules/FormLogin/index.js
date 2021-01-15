import React, { useEffect } from 'react'
import { Grid, } from '@material-ui/core';
import Controls from "../../atoms/Form";
import { useForm, Form } from '../../atoms/Form/useForm';
import API from '../../../services';
import { useSelector,useDispatch } from 'react-redux';
import { setTodoDatas } from '../../../config/redux/actions';
import { AES, enc } from 'crypto-js';

const initialValues ={
    email: "",
    password: ""
}

function LoginForm(props) {

    const dispatch = useDispatch()

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
        setValues,
        errors,
        setErrors,
        handleInputChange,
        resetForm
    } = useForm(initialValues, true, validate);

    const handleSubmit = e => {
        e.preventDefault()
        if (validate()) {
            let payload = {
                "email": values.email,
                "password": values.password,
            }
            API.postLogin(payload)
            .then( result =>{
                // console.log("Data dari API: ",result)
                var ciphertext = AES.encrypt(JSON.stringify(result.data), 'secret key 123').toString();
                // console.log(ciphertext)
                sessionStorage.setItem('todoUser', ciphertext);
                // var bytes  = AES.decrypt(ciphertext, 'secret key 123');
                // var decryptedData = JSON.parse(bytes.toString(enc.Utf8));
                // console.log(decryptedData)
            })
            .catch(error => {
                console.log(error)
            })

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