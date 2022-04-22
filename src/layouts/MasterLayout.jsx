import React from 'react';
import { Col, Layout, Row } from "antd";
import { Outlet } from "react-router-dom";
import HeaderComponent from "../components/Header";

const MasterLayout = () => {
    return (
        <Layout justify="center">
            <HeaderComponent></HeaderComponent>
            <div flex="auto" align="center"> 
                <React.Suspense fallback="loading...">
                    <Row justify="center">
                        <Col span={16}>
                            <Outlet />
                        </Col>
                    </Row>
                </React.Suspense>

            </div>
        </Layout>
    );
}

export default MasterLayout;