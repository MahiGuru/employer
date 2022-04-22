import React, { useState, useEffect } from 'react';
import { Col, Collapse, Row, Typography } from 'antd'; 
import EmployerRecruiterFirms from './RecruiterFirms';
import EmployerRecruiterFreelancers from './RecruiterFreelancers';
import { CaretRightOutlined } from '@ant-design/icons';
const { Title, Paragraph, Text, Link } = Typography;

const { Panel } = Collapse;
const fakeDataUrl =
  'https://randomuser.me/api/?results=20&inc=name,gender,email,nat,picture&noinfo';
const ContainerHeight = 400;

const EmployerRecruiters = () => { 
   

  return (
    <Row justify="center" style={{ margin: 20 }}>
        <Col span={16}>
          <Collapse 
              bordered={false}
              defaultActiveKey={['2']}
              expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
              className="site-collapse-custom-collapse">
            <Panel header={<Title level={4}>Interested Recruiter Firms</Title>} key="1" className="site-collapse-custom-panel">
              <EmployerRecruiterFirms ></EmployerRecruiterFirms>
            </Panel>
            <Panel header={<Title level={4}>Interested Recruiter Freelancers</Title>} key="2" className="site-collapse-custom-panel">
               <EmployerRecruiterFreelancers></EmployerRecruiterFreelancers>
            </Panel> 
          </Collapse>
      </Col> 
    </Row>
  );
};

export default EmployerRecruiters;