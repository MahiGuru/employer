import React from 'react';
import { Col, Layout, Row } from "antd";
import { Outlet } from "react-router-dom";   
import RecruiterHeaderComponent from '../components/RecruiterHeader';

const RecruiterLayout = () => {
    return (
        <Layout justify="center">
            <RecruiterHeaderComponent></RecruiterHeaderComponent>
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

export default RecruiterLayout;