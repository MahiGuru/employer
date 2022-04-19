import { UserOutlined, SolutionOutlined, SmileOutlined } from '@ant-design/icons/lib/icons';
import { Card, Col, PageHeader, Row, Steps } from 'antd';
import Title from 'antd/lib/typography/Title';
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../../../../AppContext';
import BasicInfoJob from './BasicJobInfo';
import JobDescription from './JobDescriptionInfo';
import TalenterOptionInfo from './TalenterOptionsInfo';



const PostJob = () => {
  const { Step } = Steps;
  const {state, dispatch} = useContext(AppContext);
  const [current, setCurrent] = React.useState(0);
  const [jobData, setJobData] = React.useState({});
  let navigate = useNavigate();
 
  const nextStepMethod = React.useCallback((values) => {
    setJobData({...jobData, ...values}); 
    setCurrent(current + 1);
  }, [jobData, current])
  const prevStepMethod = React.useCallback((values) => { 
    setCurrent(current - 1); 
  }, [current])
  const submitNewJobForm = (values) => {
    setJobData({...jobData, ...values}); 
    dispatch({type: 'CREATE_FORM', payload: jobData});
    navigate('/employer/jobs/list'); 
  };
  /**
   * Job form steps:
   * @param {*} stepjob - counter
   * @returns step wise form here...
   */
  const createJobsForm = (stepjob) => {
    switch (stepjob) {
      case 0:
        return <BasicInfoJob submitHandler={(values) => { nextStepMethod(values); }} stepBackHandler={() => navigate('/employer/jobs/list')} />
      case 1:
        return <JobDescription submitHandler={(values) => { nextStepMethod(values); }} stepBackHandler={ prevStepMethod }  />
      case 2:
        return <TalenterOptionInfo submitHandler={(values) => {submitNewJobForm(values)}} stepBackHandler={ prevStepMethod } />
      default:
        return;
    } 
  };

  console.log("postJOB", current, jobData);
  return (
    <>
      <Row justify="center" style={{ margin: 20 }}>
        <Col span={16}>
          <Title level={2}>Create JOB</Title>
          <Row>
            <Col span={4}>
              <Steps current={current} direction="vertical" size="small" align={'center'} style={{padding:20, background:'#f5f9ff'}}>
                <Step title="Job Details" icon={<UserOutlined />} />
                <Step title="Job Description" icon={<SolutionOutlined />} />
                <Step title="Talenter Options" icon={<SmileOutlined />} />
              </Steps>
            </Col>
            <Col span={20}>
              <Card bordered={false}>
                {createJobsForm(current)}
              </Card>
            </Col>
          </Row>

        </Col>
      </Row>
    </>
  );
};

export default PostJob;