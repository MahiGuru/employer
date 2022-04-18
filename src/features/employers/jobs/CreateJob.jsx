import { UserOutlined, SolutionOutlined, SmileOutlined } from '@ant-design/icons/lib/icons';
import { Button, Card, Col, Form, message, PageHeader, Row, Select, Steps } from 'antd';
import { useFormik } from 'formik';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import HtmlEditor from '../../../components/HtmlEditor';
import BasicInfoJob from './components/CreateJobs/BasicJobInfo';
import JobDescription from './components/CreateJobs/JobDescriptionInfo';
import RecruiterJobs from './components/CreateJobs/RecruiterJobsInfo';


const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const PostJob = (props) => {

  const onReset = () => {
    formRef.current.resetFields();
  };
  const formRef = React.createRef();
  const formik = useFormik({
    initialValues: {
      job_title: '',
      job_description: '',
      key_skills: '',
      notice_period: '',
      target_date: ''
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(15, 'Must be 15 characters or less')
        .required('Required'),
      lastName: Yup.string()
        .max(20, 'Must be 20 characters or less')
        .required('Required'),
      email: Yup.string().email('Invalid email address').required('Required'),
    }),
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  const { Step } = Steps;

  let navigate = useNavigate();

  const submitBtnClick = () => {
    console.log("submit button click");
    message.success('Successfully Job Created!');
    // navigate('/employer/jobs/success');
  }

  const [currentStep, setCurrentStep] = React.useState('basic_info');
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
                <Step title="Done" icon={<SmileOutlined />} />
              </Steps>
            </Col>
            <Col span={20}>
              <Card bordered={false} > 
                  {
                    currentStep === 'basic_info' ? (
                      <>
                        <BasicInfoJob submitHandler={(values) => { 
                            setCurrent(current + 1); 
                            setCurrentStep('about_job');
                            console.log('Parent basic info ', values);
                          }
                          } /> 
                      </>
                    ) : null
                  }

                  {
                    currentStep === 'about_job' ? (
                      <>
                        <JobDescription /> 
                        <Button type="primary" onClick={() => { setCurrent(current + 1); setCurrentStep('recruiter_and_interviewers') }}>
                          Recruiters And Interviewers
                        </Button>
                      </>
                    ) : null
                  }

                  {
                    currentStep === 'recruiter_and_interviewers' ? (
                      <>
                        <RecruiterJobs />
                        <Row justify="center">
                          <Col span={2}>
                            <Button type="primary" htmlType="submit" onClick={submitBtnClick}>
                              Submit
                            </Button>
                          </Col>
                          <Col span={2}>
                            <Button htmlType="button" onClick={onReset}>
                              Reset
                            </Button>
                          </Col>
                        </Row>
                      </>
                    ) : null
                  } 

              </Card>

            </Col>
          </Row>

        </Col>
      </Row>
    </>
  );
}

export default PostJob;