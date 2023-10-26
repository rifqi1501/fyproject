import React, {useEffect, useState} from "react";
import { Button, message, Form, Input, Spin } from "antd";
import {Link, Navigate, useNavigate} from 'react-router-dom';
import '../resources/authentication.css';
import axios from 'axios';


function Register() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate()
  const onFinish = async(values) => {
         setLoading(true);
    try {
      await axios.post('/api/user/register', values)
      setLoading(false);
      message.success ('Registration successfull')
    } catch (error) {
      setLoading(false);
      message.error('Registration failed')
    }

  };

  useEffect(()=>{
    if(localStorage.getItem('smart_resume-user'))
    {
      navigate('/home')
    }
  })

  return (
    <div className="auth-parent">
      {loading && (<Spin size="large"/>)}
      <Form layout="vertical" onFinish={onFinish}>
        <h1>Register</h1>
        <hr/>
        <Form.Item name="username" label="Username">
          <Input  placeholder="Please enter your username" />
        </Form.Item>
        <Form.Item name="password" label="Password">
          <Input type='password' placeholder="Please enter your password" />
        </Form.Item>
        <Form.Item name="cpassword" label="Confirm Password">
          <Input type='password' placeholder="Please confirm your password" />
        </Form.Item>

        <div className="d-flex align-items-center justify-content-between"> 
        <Link to='/login'>Already have an account?</Link>
        <Button type="primary" htmlType="submit">
          REGISTER
        </Button>
        </div>
      </Form>
    </div>
  );
}

export default Register;
