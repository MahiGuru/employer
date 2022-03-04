import { BranchesOutlined } from '@ant-design/icons/lib/icons';
import { Col, Row } from 'antd';
import Title from 'antd/lib/typography/Title';
import React from 'react';
import UserProfile from './UserProfile';
import {
    Link
  } from "react-router-dom";
  
function HeaderComponent(props) { 
    return (
        <>
            <Row>
                <Col span={6} style={styles.flex}> 
                    <BranchesOutlined style={{ color: "#3aafa9", fontSize: 36, marginRight: 10 }} /> 
                    <Title level={3}>  Skillers </Title> 
                </Col>
                <Col span={12} flex="auto" style={{display:'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <Row  gutter={5} style={{flex: 'auto', textAlign:'center'}}>
                        <Col className="gutter-row"  flex="auto">
                            <Link to="/employer">Home</Link>
                        </Col>
                        <Col className="gutter-row"  flex="auto">
                            <Link to="/employer/jobs/list">Jobs</Link>
                        </Col> 
                        <Col className="gutter-row"  flex="auto">
                            <Link to="/recruiter">Recruiters</Link>
                        </Col>
                    </Row>
                     
                </Col>
                <Col span={6} style={styles.profile}> 
                    <UserProfile />
                </Col>
            </Row>
        </>
    );
}
const styles = {
    flex: {
        display: 'flex',
        flexDirection: 'row',
        padding:'20px'
    },
    menu: {
        display: 'flex',
        padding: '20px'
    },
    profile : {
        display: 'inline-flex',
        justifyContent: 'end',
        alignItems: 'center',
        padding:'20px'
    }

}
export default HeaderComponent;