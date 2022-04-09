import { CheckOutlined, CloseOutlined, UserOutlined, SolutionOutlined, SmileOutlined } from '@ant-design/icons/lib/icons';
import { Button, Card, Col, DatePicker, Form, Input, InputNumber, message, PageHeader, Row, Select, Space, Steps, Switch } from 'antd';
import TextArea from 'antd/lib/input/TextArea';
import { useFormik } from 'formik';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import Label from '../../../utils/shared/components/Label';
import { skillsData } from '../../../utils/shared/dummy_data/skills_data';


const { Option } = Select;
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

const PostJob = (props) => {
  const [minExp, setMinExp] = useState(0);
  const [maxExp, setMaxexp] = useState(1);
  const [recruiterShare, setRecruiterShare] = useState('Percentage');
  const onValueChange = (value) => {
    console.log(value);
    formRef.current.setFieldsValue({
      note: 'Hi, man!',
    });
  };
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
  
  const [current, setCurrent] = React.useState(0);
  return (
    <>
      
      <Row justify="center">
        <Col span={18}>
          <Steps current={current}>
            <Step title="Job Details" icon={<UserOutlined />} />
            <Step title="Job Description" icon={<SolutionOutlined />} />
            <Step title="Done" icon={<SmileOutlined />} />
          </Steps>
          <Card bordered={false} >
            <PageHeader
              className="site-page-header"
              onBack={() => navigate('/employer/jobs/list')}
              title="Create Job"
            />
            <Form {...layout} ref={formRef} name="control-ref" >
              <Label name="title" label={'Job Title'} >
                <Input placeholder='Ex: Consultant' />
              </Label>
              <Label name="expereience" label={'Experience'} >
                <Input placeholder='Ex: Consultant' />
              </Label>
              <Label name="location" label={'Preferred Locations'} >
                <Input placeholder='Ex: Consultant' />
              </Label>
              <Label name="compensation" label={'Compensation'} >
                  <Space style={{textAlign:'left'}}>  
                    <InputNumber min={0} max={100} defaultValue={1} onChange={(val) => { }} /> - 
                    <InputNumber min={1} max={100} defaultValue={3} onChange={() => {}} /> Currency 
                    <Select defaultValue="percentage" onChange={(val) => { console.log(val)}}>
                      <Option value="percentage">Lakhs</Option>
                      <Option value="money">Dollers</Option> 
                    </Select>
                  </Space>
              </Label>
              <Label name="key_skills" label={'Must have skills'} >
                <Select
                    mode="tags" 
                    style={{ width: '100%' }}
                    placeholder="Please select" 
                    onChange={(values) => { console.log(values)}}
                  >
                    {
                      skillsData.map((s, i) => <Option key={'skill'+i}>{s.skill}</Option>)
                    }
                    
                  </Select>
              </Label>


              <Button type="primary" onClick={() => {setCurrent(current + 1)}}>
                Next
              </Button>


              <Label name="job_description" label={'Job Description'} >
                <TextArea rows={4} placeholder="Ex: Full stack web developer..." maxLength={6} />
              </Label>
              <Label name="skills" label={'Required Skills'} >
                <Select
                  mode="tags" 
                  style={{ width: '100%' }}
                  placeholder="Please select" 
                  onChange={(values) => { console.log(values)}}
                >
                  {
                    skillsData.map((s, i) => <Option key={'skill'+i}>{s.skill}</Option>)
                  }
                  
                </Select>
              </Label>
              <Label name="experience" label={'Experience'} >
                <Space align="start"> 
                  <InputNumber min={0} max={100} defaultValue={minExp} onChange={(val) => { setMaxexp(val); console.log(val, maxExp);}} /> - 
                  <InputNumber min={maxExp} max={100} defaultValue={maxExp}   onChange={() => {}} /> Years
                </Space>
              </Label>
              
              <Label name="compensation" label={'Compensation'} >
                <Space> 
                  <InputNumber min={0} max={100} defaultValue={1} onChange={(val) => { }} /> - 
                  <InputNumber min={1} max={100} defaultValue={3} onChange={() => {}} /> LPA
                </Space>
              </Label>
              <Label name="recruiter_percentage" label={'Recruiter Percentage'} >
                <Space size={'middle'}> 
                    <Select defaultValue="percentage" onChange={(val) => { setRecruiterShare(val)}}>
                      <Option value="percentage">Percentage (%)</Option>
                      <Option value="money">Money (Rs)</Option>
                      <Option value="monthly">Monthly (Rs)</Option>
                    </Select>
                    <InputNumber min={0} max={recruiterShare === 'percentage'? 100 : ''} defaultValue={1} onChange={(val) => { }} />
                </Space>
              </Label> 
              <Label name="target_date" label={'Expect to join before '} >
                  <DatePicker bordered={false} /> 
              </Label>
              <Label name="is_interviewr" label={'Opting Interviewer?'} >
                <Switch 
                    checkedChildren={<CheckOutlined />}
                    unCheckedChildren={<CloseOutlined />}
                    defaultChecked 
                    onChange={(values) => { console.log(values)}} 
                />
              </Label> 
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
            </Form>

          </Card>
          
        </Col>
      </Row>
    </>
  );
}

export default PostJob;