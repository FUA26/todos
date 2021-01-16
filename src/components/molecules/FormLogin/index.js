import React from 'react'
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { Form } from '../../atoms/Forms/Form';
import { Input } from '../../atoms/Forms/Input';
import { PrimaryButton } from '../../atoms/Forms/PrimaryButton';
import { useDispatch, useSelector } from 'react-redux';
import { setLogin } from '../../../config/redux/actions/loginAction';
import { useHistory, useLocation } from 'react-router-dom';


const schema = yup.object().shape({
    email: yup
      .string()
      .email("Email tidak sesuai format!")
      .required("Email harus diisi!"),
  });
  

function LoginForm(props) {
    const {datalogin} = useSelector(state => state.formLoginReducer)
     const dispatch = useDispatch()
     
    let history = useHistory();
    let location = useLocation();
    const { register, handleSubmit, errors } = useForm({
        defaultValues: { email: datalogin.email, password: datalogin.password },
        mode: "onBlur",
        resolver: yupResolver(schema),
      });
    
      const onSubmit = async data => {
        let payload = {
            "email": data.email,
            "password": data.password,
        }
        let login = await dispatch(setLogin(payload)).catch(err => err)
        // console.log(login)
        if (login) {
            let { from } = location.state || { from: { pathname: "/" } };
            history.replace(from);
        }
      };
    
      return (
        <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          ref={register}
          id="v"
          type="text"
          label="Email"
          name="email"
          error={!!errors.email}
          helperText={errors?.email?.message}
        />
        <Input
          ref={register}
          id="password"
          type="password"
          label="Password"
          name="password"
          error={!!errors.password}
          helperText={errors?.password?.message}
        />
        
        <PrimaryButton>Next</PrimaryButton>
      </Form>
      );
}
export default LoginForm