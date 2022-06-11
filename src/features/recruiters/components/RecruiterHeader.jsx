import { BranchesOutlined } from '@ant-design/icons/lib/icons';
import { Col, Row, Space } from 'antd';
import Title from 'antd/lib/typography/Title';
import React from 'react';  
import {
    Link, useLocation, useNavigate
  } from "react-router-dom";
import UserProfile from '../../../common/components/UserProfile';
import RecruiterUserProfile from './RecruiterUserProfile';
  
function RecruiterHeaderComponent() {  
    let navigate = useNavigate();
    const { pathname } = useLocation(); 
    console.log("path name ", pathname);
    return (
        <>
            <Row style={{...styles.borderBottom, ...styles.background}}>
                <Col span={6} style={{...styles.flex, ...styles.cursor}} onClick={() => navigate('/recruiters/jobs')}> 
                    <BranchesOutlined style={{ color: "#3aafa9", fontSize: 36, marginRight: 10 }} /> 
                    <Title level={3}>  Skillers 
                        <div><Title level={5}> Recruiters</Title></div>
                    </Title> 
                </Col>
                <Col span={12} flex="auto" style={{display:'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <Row  gutter={16} justify="middle">
                        <Space align='center'  style={{justifyContent: 'center'}} size={[24, 24]}>
                            <Col  flex="auto" className={{'active': /jobs/.test(pathname) ? true: false}}>
                                <Link to="/recruiters/jobs">Jobs</Link>
                            </Col>  
                            <Col  flex="auto" className={{'active': /interviewers/.test(pathname) ? true: false}}>
                                <Link to="/recruiters/interviewers">Interviewers</Link>
                            </Col>
                        </Space>
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
        padding:'20px',
        paddingBottom: 0
    },
    cursor: {
        cursor: 'pointer'
    },
    background: {
        background: '#FFF',
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
    },
    borderBottom: {
        borderBottom: '1px solid #CCC'
    }

}
export default RecruiterHeaderComponent;