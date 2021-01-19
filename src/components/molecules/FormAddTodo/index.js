import React from 'react'
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { Form } from '../../atoms/Forms/Form';
import { Input } from '../../atoms/Forms/Input';
import { PrimaryButton } from '../../atoms/Forms/PrimaryButton';
import DatePicker  from '../../atoms/Forms/DatePicker';
import { Grid } from '@material-ui/core';
import  Select  from '../../atoms/Forms/Select';
import { useSelector } from 'react-redux';
 

const schema = yup.object().shape({
    title: yup
      .string()
      .required("Email harus diisi!"),
      priority: yup
      .string()
      .required("Email harus diisi!")
  });
  

function TodoForm(props) {
    const { recordForEdit,isEdit } = props
    const {priority} = useSelector(state =>state.formTodoReducer)
    const { register, errors, handleSubmit } = useForm({
        defaultValues: recordForEdit,
        mode: "onBlur",
        resolver: yupResolver(schema),
      });
    const properties = {
        register,
        errors,
        schema,
      };
    const toDay = new Date().toDateString()
  
    // console.log(recordForEdit.doDate)
      const onSubmit = data => {
          console.log(data)
        // let payload = {
        //     "email": data.email,
        //     "password": data.password,
        // }
        // let login = await dispatch(setLogin(payload)).catch(err => err)
        // if (login) {
        //     let { from } = location.state || { from: { pathname: "/" } };
        //     history.replace(from);
        // }
      };
    
      return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Input
                    ref={register}
                    id="v"
                    type="text"
                    label="Email"
                    name="title"
                    error={!!errors.title}
                    helperText={errors?.title?.message}
                    />
                </Grid>                
                <Grid item xs={12}>
                    <Input
                    ref={register}
                    id="deskripsi"
                    type="text"
                    label="Deskripsi"
                    name="deskripsi"
                    error={!!errors.deskripsi}
                    helperText={errors?.deskripsi?.message}
                    />
                </Grid>
                <Grid item xs={6}>
                  <DatePicker
                    properties={properties}
                    field="doDate"
                    label="Do Date"
                    defaultValue= {isEdit? new Date(recordForEdit.doDate).toDateString() : toDay}
                  />
                </Grid>
                
                <Grid item xs={6}>
                <Select
                  properties={properties}
                  field="priority"
                  label="priority"
                  options={priority}
                ></Select>
                </Grid>
                <Grid item xs={12}>
                    <PrimaryButton>Next</PrimaryButton>
                </Grid>
            </Grid>
        
        
        
      </Form>
      );
}
export default TodoForm