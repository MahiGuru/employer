import React, {  } from 'react';
import { Collapse, Typography } from 'antd'; 
import EmployerRecruiterFirms from './RecruiterFirms';
import EmployerRecruiterFreelancers from './RecruiterFreelancers';
import { CaretRightOutlined } from '@ant-design/icons';
import { useParams } from 'react-router-dom';
const { Title } = Typography;

const { Panel } = Collapse;

const EmployerRecruiters = () => {
  let { jobId } = useParams();
  console.log("JOBBBIIIIDDDD", jobId );
  return ( 
    <Collapse 
        bordered={false}
        defaultActiveKey={['2']} 
        key={"collapse"}
        expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
        className="site-collapse-custom-collapse">
      <Panel header={<Title level={4}>Interested Recruiter Firms</Title>} key="1" className="site-collapse-custom-panel"
        forceRender={true}>
          <EmployerRecruiterFirms jobId={jobId}></EmployerRecruiterFirms>
      </Panel>
      <Panel header={<Title level={4}>Interested Recruiter Freelancers</Title>} key="2" className="site-collapse-custom-panel"
        forceRender={true}>
          <EmployerRecruiterFreelancers jobId={jobId}></EmployerRecruiterFreelancers>
      </Panel> 
    </Collapse> 
  );
};

export default EmployerRecruiters;