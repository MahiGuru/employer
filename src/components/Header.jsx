import { BranchesOutlined } from '@ant-design/icons/lib/icons';
import { Col, Row } from 'antd';
import Title from 'antd/lib/typography/Title';
import React, { useEffect } from 'react';
import UserProfile from './UserProfile';
import {
    Link, useLocation
  } from "react-router-dom";
  
function HeaderComponent(props) {  
    const { pathname } = useLocation(); 
    console.log("path name ", pathname);
    return (
        <>
            <Row style={{...styles.borderBottom, ...styles.background}}>
                <Col span={6} style={styles.flex}> 
                    <BranchesOutlined style={{ color: "#3aafa9", fontSize: 36, marginRight: 10 }} /> 
                    <Title level={3}>  Skillers </Title> 
                </Col>
                <Col span={12} flex="auto" style={{display:'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <Row  gutter={16} style={{flex: 'auto', textAlign:'center'}}>
                        <Col  flex="auto" className={{'active': /jobs/.test(pathname) ? true: false}}>
                            <Link to="/employer/jobs/list">My Jobs</Link>
                        </Col> 
                        <Col flex="auto" className={{'active': /recruiters/.test(pathname) ? true: false}}>
                            <Link to="/employer/recruiters" >Recruiters</Link>
                        </Col>
                        <Col  flex="auto" className={{'active': /interviewers/.test(pathname) ? true: false}}>
                            <Link to="/employer/interviewers">Interviewers</Link>
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