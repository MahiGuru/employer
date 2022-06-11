import { DownOutlined, UserOutlined } from '@ant-design/icons/lib/icons';
import { Dropdown, Menu } from 'antd';
import React from 'react';

import {
    Link, useLocation, useNavigate
  } from "react-router-dom";

function UserProfile(props) { 
    let navigate = useNavigate();
    const { pathname } = useLocation(); 
    console.log("path name ", pathname);
    const menu = (
        <Menu>
            <Menu.Item key={"employer"} className={{'active': /employer/.test(pathname) ? true: false}}>
                <Link to="/employer/jobs/list">Employer Login</Link> 
            </Menu.Item>
            <Menu.Item key={"recruiter"} className={{'active-link': /recruiters/.test(pathname) ? true: false}}>
                <Link to="/recruiters/jobs">Recruiter Login</Link> 
            </Menu.Item> 
            <Menu.Item key={"interviewer"} className={{'active': /interviewers/.test(pathname) ? true: false}}>
                <Link to="/recruiters/interviewers">Interviewer Login</Link> 
            </Menu.Item> 
        </Menu>
    );

    return (
        <>
          <Dropdown overlay={menu}  trigger={['click']}>
            <div className="ant-dropdown-link" onClick={e => e.preventDefault()} key={"menu"}>
                <UserOutlined /> Mahipal Gurjala <DownOutlined />
            </div>
          </Dropdown>  
        </>
    );
}

export default UserProfile;