import Layout from 'antd/lib/layout/layout';
import React from 'react';
import HeaderComponent from '../../components/Header'; 
import {
    Outlet, 
  } from "react-router-dom"; 

  
function EmployerLayout(props) {
    return (
        <Layout justify="center">
            <HeaderComponent></HeaderComponent> 
            <div flex="auto" align="center">
                <Outlet />
            </div>
        </Layout>
    );
}

export default EmployerLayout;