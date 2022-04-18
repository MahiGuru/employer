import { UserOutlined, SolutionOutlined, SmileOutlined } from '@ant-design/icons/lib/icons';
import { Card, Col, PageHeader, Row, Steps } from 'antd';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import BasicInfoJob from './components/CreateJobs/BasicJobInfo';
import JobDescription from './components/CreateJobs/JobDescriptionInfo';
import TalenterOptionInfo from './components/CreateJobs/TalenterOptionsInfo';

const JobSteps = props => {
  let { currentStep, callbackHandler } = props;

  switch (currentStep) {
    case 'BASIC_JOB':
      return <BasicInfoJob submitHandler={callbackHandler} />;
      break;
    case 'JOB_DESCRIPTION':
      return <JobDescription submitHandler={callbackHandler} />
      break;
    case 'TALENTER_OPTIONS':
      return <TalenterOptionInfo submitHandler={callbackHandler} />
      break;
    default:
      return null;
  }
};


const PostJob = (props) => {

  const { Step } = Steps;

  let navigate = useNavigate();

  const [currentStep, setCurrentStep] = React.useState('basic_job_info');
  const [current, setCurrent] = React.useState(0);
  return (
    <>
      <Row justify="center">
        <Col span={18}>
          <PageHeader
            className="site-page-header"
            onBack={() => navigate('/employer/jobs/list')}
            title="Create Job"
          />
          <Row>
            <Col span={4}>
              <Steps current={current} direction="vertical" size="small" align={'center'}>
                <Step title="Job Details" icon={<UserOutlined />} />
                <Step title="Job Description" icon={<SolutionOutlined />} />
                <Step title="Talenter Options" icon={<SmileOutlined />} />
              </Steps>
            </Col>
            <Col span={20}>
              <Card bordered={false} >

                {(() => {
                  if (currentStep === 'basic_job_info') {
                    return <BasicInfoJob submitHandler={(values) => { setCurrent(current + 1); setCurrentStep('job_details'); }} />
                  } else if (currentStep === 'job_details') {
                    return <JobDescription submitHandler={(values) => { setCurrent(current + 1); setCurrentStep('talenter_info'); }} />
                  } else if (currentStep === 'talenter_info') {
                    return <TalenterOptionInfo submitHandler={(values) => { setCurrent(current + 1); setCurrentStep('talenter_info'); }} />
                  }
                })()}
              </Card>

            </Col>
          </Row>

        </Col>
      </Row>
    </>
  );
}

export default PostJob;