import React from 'react';
import { Formik } from 'formik';
import { Form, Row, Col, Space, Typography, Button } from 'antd';
import { FormikDebug, FormItem, Input, InputNumber, Radio, ResetButton, Select, SubmitButton } from 'formik-antd';
import * as Yup from 'yup';
import HtmlEditor from '../../../../components/HtmlEditor';

const { Text } = Typography; 
const jobDetailsSchema = Yup.object().shape({
    job_description: Yup.string()
        .min(15, 'Too Short!')
        .required('Please enter Job description'),
    role_responsibility: Yup.string().min(5, 'Too Short!').required('Please enter roles and responsibilitys'),
    objectives: Yup.string()
        .min(2, 'Too Short!')
        .required('Please enter objective'),
    notice: Yup.object().shape({
        period: Yup.number().typeError("Please select period"),
        period_type: Yup.string().required("Please enter period type")
    }), 
    required_skills: Yup.array().min(1, "Min 2 skills are required").required("Please select atleast 2 skills")
});

function JobDescription({submitHandler, stepBackHandler}) {  
    return (
        <div>
          <Formik
            initialValues={{ 
              job_description: "Test Job",
              objectives: "OBJECTIVES HERE..",
              notice: { period: 5, period_type: 'days'},
              role_responsibility: "Roles and responsibility are here...",
              required_skills: ['react', 'angular'],
            }}
            validationSchema={jobDetailsSchema}
            onSubmit={async (values, { validate }) => {
              console.log("Values ", values) 
              submitHandler(values);
            }}
            validateOnBlur={true}
            validate={values => { 
              return;
            }}
            render={(formik) => (
              <Form className='job-details-form' labelCol={{ lg: 5 }} wrapperCol={{ lg: 20 }} layout='vertical' style={{ textAlign: 'left' }}>
                <FormItem name="objectives" label="Objectives" required={true}>
                  <Input.TextArea  rows={4} name="objectives" placeholder="Objectives" />
                </FormItem>
                <FormItem name="job_description" label="Job Description" required={true}>
                    <HtmlEditor editorClass={formik.errors?.job_description ? "editor-class editor_error" : 'editor-class'} callbackHandler={(data) =>{ 
                        formik.setFieldValue('job_description', data);
                    }
                    } /> 
                </FormItem>
                <FormItem name="role_responsibility" label="Roles &amp; Responsibilitys" required={true}>
                  <Input.TextArea  rows={4}  name="role_responsibility" placeholder="Roles and Responsibility" />
                </FormItem>
                <Form.Item
                  label="Notice Period"
                  required={false}
                  key={'notice_period_key'}
                >
                  <Space style={{ display: 'flex', alignItems: 'center' }} >
                    <InputNumber name="notice.period" placeholder="eg: 1" min={0} status={formik.errors?.notice?.period ? "error" : ''} />  
                    <Radio.Group name="notice.period_type" status={formik.errors?.notice?.period_type ? "error" : ''} >
                      <Radio.Button value={'days'}>Days</Radio.Button>
                      <Radio.Button value={'months'}>Months</Radio.Button>
                    </Radio.Group>
                  </Space>
                  <Text type="danger" style={{display:'block'}}>{formik.errors && formik.errors?.notice?.period} </Text>
                  <Text type="danger" style={{display:'block'}}>{formik.errors && formik.errors?.notice?.period_type} </Text>
                </Form.Item>  
                <FormItem name="required_skills" label="Required Skills" required={true}>
                  <Select
                    name="required_skills"
                    placeholder="Select skills"
                    mode="multiple"
                  >
                    <Select.OptGroup label="Front End">
                      <Select.Option value={'angular'}>Angular</Select.Option>
                      <Select.Option value={'react'}>React</Select.Option>
                      <Select.Option value={'jquery'}>Jquery</Select.Option>
                      <Select.Option value={'html'}>HTML</Select.Option>
                      <Select.Option value={'css'}>CSS</Select.Option>
                    </Select.OptGroup>
                    <Select.OptGroup label="Server Side">
                      <Select.Option value={'node'}>Nodejs</Select.Option>
                      <Select.Option value={'python'}>Python</Select.Option>
                      <Select.Option value={'.net'}>.Net</Select.Option>
                      <Select.Option value={'java'}>Java</Select.Option>
                      <Select.Option value={'go'}>Go</Select.Option>
                      <Select.Option value={'php'}>PHP</Select.Option>
                    </Select.OptGroup>
                  </Select>
                </FormItem>
    
                <Row style={{ marginTop: 60 }}>
                  <Col offset={8}> 
                    <Space>
                      <Button onClick={stepBackHandler}>Back</Button>
                      <ResetButton>Reset</ResetButton>
                      <SubmitButton onClick={formik.submitForm} disabled={!formik.isValid}>Choose Talenters options</SubmitButton> 
                    </Space>
                  </Col>
                </Row> 
              </Form>
            )}
          />
        </div>
      );
}

export default JobDescription;