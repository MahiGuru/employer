import { BranchesOutlined } from '@ant-design/icons/lib/icons';
import { Col, Row, Space } from 'antd';
import Title from 'antd/lib/typography/Title';
import React from 'react';
import UserProfile from './UserProfile';
import {
    Link, useLocation, useNavigate
  } from "react-router-dom";
  
function HeaderComponent(props) {  
    
    let navigate = useNavigate();
    const { pathname } = useLocation(); 
    console.log("path name ", pathname);
    return (
        <>
            <Row style={{...styles.borderBottom, ...styles.background}}>
                <Col span={6} style={styles.flex} onClick={() => navigate('/employer/jobs/list')}> 
                    <BranchesOutlined style={{ color: "#3aafa9", fontSize: 36, marginRight: 10 }} /> 
                    <Title level={3}>  Skillers 
                        <div><Title level={5}> Employer</Title></div>
                    </Title> 
                </Col>
                <Col span={12} flex="auto" style={{display:'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <Row  gutter={16} justify="middle">
                        <Space align='center'  style={{justifyContent: 'center'}} size={[24, 24]}>
                            <Col  flex="auto" className={{'active': /jobs/.test(pathname) ? true: false}}>
                                <Link to="/employer/jobs/list">My Jobs</Link>
                            </Col> 
                            <Col flex="auto" className={{'active': /recruiters/.test(pathname) ? true: false}}>
                                <Link to="/employer/recruiters" >Recruiters</Link>
                            </Col>
                            <Col  flex="auto" className={{'active': /interviewers/.test(pathname) ? true: false}}>
                                <Link to="/employer/interviewers">Interviewers</Link>
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
export default HeaderComponent;