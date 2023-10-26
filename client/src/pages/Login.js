import React, {useEffect, useState} from "react";
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { Button, Form, Input, message, Spin,Space } from "antd";
import { Link, useNavigate } from "react-router-dom";
import "../resources/authentication.css";
import axios from "axios";

function Register() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate()
  const [passwordVisible, setPasswordVisible] = React.useState(false);
  const onFinish = async (values) => {
    setLoading(true)
    try {
      const user = await axios.post("/api/user/login", values);
      message.success("Login successfull");
      localStorage.setItem("smart_resume-user", JSON.stringify(user.data));
      setLoading(false)
      navigate('/home')
    } catch (error) {
      setLoading(false)
      message.error("Login failed");
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
      {loading && <Spin size="large"/>}
      
      <Form layout="vertical" onFinish={onFinish}>
        <h1>Login</h1>
        <hr />
        <Form.Item name="username" label="Username">
          <Input placeholder="Please enter your username" />
        </Form.Item>
        <Form.Item name="password" label="Password">
          <Input type="password" placeholder="Please enter your password" 
          />
        </Form.Item>

        <div className="d-flex align-items-center justify-content-between">
          <Link to="/register">Doesn't have an account?</Link>
          <Button type="primary" htmlType="submit">
            LOGIN
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default Register;
