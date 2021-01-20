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
import { useDispatch, useSelector } from 'react-redux';
import API from '../../../services';
import { setTodoDatas } from '../../../config/redux/actions';

import { format } from 'date-fns';
 

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
    const {projectList,stateData} = useSelector(state =>state.mainReducer)
    const dispatch = useDispatch()
    
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
    const toDay = format(new Date(), "yyyy-MM-dd'T'HH:mm:ssxxx")

    const onSubmit =async data => {
        // console.log(data)
      let payload = {
        "projectID": data.project,
        "title": data.title,
        "des": data.deskripsi,
        "doDate" : data.doDate,
        "start" :"",
        "end" :"",
        "status" :data.status,
        "priority" :data.priority
      }
      // console.log("Date",payload)
      if (isEdit) {
          payload.id=recordForEdit.id
          await API.postUpdateTodo(payload)
          .then( result =>{
              dispatch(setTodoDatas(1))
          })
          .catch(error => {
              console.log(error)
          })
      } else {
          await API.postAddTodo(payload)
          .then( result =>{
              dispatch(setTodoDatas(1))
          })
          .catch(error => {
              console.log(error)
          })
      }
    };

    const handleDelete = async id => {
      let payload = {
          "id": id
      }
      console.log("Id :",payload)
      await API.deleteTodo(payload)
      .then( result =>{
          console.log("Delete :",result)
          dispatch(setTodoDatas(1))
      })
      .catch(error => {
          console.log(error)
      })
    }
  
      return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={3}>
                <Grid item xs={12} >
                    <Input
                    ref={register}
                    id="title"
                    type="text"
                    label="Title"
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
                    multiline
                    rows={6}
                    label="Deskripsi"
                    name="deskripsi"
                    error={!!errors.deskripsi}
                    helperText={errors?.deskripsi?.message}
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                  <DatePicker
                    properties={properties}
                    field="doDate"
                    label="Do Date"
                    defaultValue= {isEdit? recordForEdit.doDate : toDay}
                    format= 'dd/MM/yyyy'
                  />
                </Grid>

                <Grid item xs={12} md={6}>
                <Select
                  properties={properties}
                  field="project"
                  label="Projet"
                  options={projectList}
                ></Select>
                </Grid>

                <Grid item xs={12} md={6}>
                <Select
                  properties={properties}
                  field="priority"
                  label="priority"
                  options={priority}
                ></Select>
                </Grid>
                
                <Grid item xs={12} md={6}>
                  <Select
                    properties={properties}
                    field="status"
                    label="Status"                 
                    fullWidth
                    options={stateData}
                  ></Select>
                </Grid>
                <Grid item xs={12} >
                  <Grid
                    container
                    direction="row"
                    justify="flex-end"
                    alignItems="center"
                  >
                    {(isEdit ? 
                    <PrimaryButton
                      color="secondary"
                      onClick={() => { handleDelete(recordForEdit.id) }}
                    >Delete</PrimaryButton> : "")}
                    
                    <PrimaryButton
                      type="submit"
                      color="primary"
                    >Save</PrimaryButton>
                  </Grid>
                </Grid>
            </Grid>
        
        
        
      </Form>
      );
}
export default TodoForm