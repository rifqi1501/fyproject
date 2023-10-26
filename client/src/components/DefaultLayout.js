import React from "react";
import "./../resources/defaultlayout.css";
import { Dropdown, Space,} from "antd";
import { DownOutlined, UserOutlined } from '@ant-design/icons';
import { Link, useNavigate } from "react-router-dom";

function DefaultLayout(props) {
  const user = JSON.parse(localStorage.getItem('smart_resume-user'))
  const navigate = useNavigate()
  const items = [
    {
      label: (
        <Link  to="/main">
          Home
        </Link>
      ),
      key: '0',
    },
    {
      label: (
        <Link  to="/profile">
          Profile
        </Link>
      ),
      key: '1',
    },
    {
      label: (
        <Link  to="/home">
          Templates
        </Link>
      ),
      key: '2',
    },
    {
      type: 'divider',
    },
    {
      label: (
        <a target="_blank" rel="noopener noreferrer" onClick={()=>{
          localStorage.removeItem('smart_resume-user')
          navigate('/login')
        }}>
          Logout
        </a>
      ),
      key: '3',
    },
  ];
  return (
    <div className="layout">
      <div className="header">
        
        <h1 onClick={()=>navigate('/main')} style={{cursor : 'pointer'}} >
          Smart Resume</h1>
        <Dropdown menu={{ items }}>
          <a onClick={(e) => e.preventDefault()}>
            <Space>
            <UserOutlined />{user.username.toUpperCase()}
              <DownOutlined />
            </Space>
          </a>
        </Dropdown>
      </div>
      <div className="content" style={{overflow :'auto'}}>{props.children}</div>
    </div>
  );
}

export default DefaultLayout;
