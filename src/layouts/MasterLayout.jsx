import React from 'react';
import { Layout } from "antd";
import { Outlet } from "react-router-dom";
import HeaderComponent from "../components/Header";

const MasterLayout = () => {
    return (
        <Layout justify="center">
            <HeaderComponent></HeaderComponent> 
            <div flex="auto" align="center">
                <Outlet />
            </div>
        </Layout>
    );
}
 
export default MasterLayout;