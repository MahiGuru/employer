import React from 'react';
import { Formik } from 'formik';
import { Form, Row, Col, Button, Space, Typography } from 'antd';
import { FormItem, Input, InputNumber, Radio, ResetButton, Select, SubmitButton } from 'formik-antd';
import * as Yup from 'yup';
import { skillsData } from '../../../../utils/shared/dummy_data/skills_data';

const { Text } = Typography;

const BasicJobSchema = Yup.object().shape({
  jobTitle: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Please enter Job Title'),
  location: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Please enter location'),
  mustSkills: Yup.array().min(2, "Min 2 skills are required").required("Must skills required"),
  experience: Yup.object().shape({
    type: Yup.string().required('Please enter Job expereience type'),
    expmin: Yup.number().typeError('Minimum experience should be 0 atleast!'),
    expmax: Yup.number().moreThan(Yup.ref('expmin'), 'Max experience should be greater than min experience').nullable(),
  }),
  compensation: Yup.object({
    compMin: Yup.number().typeError("min compensation should be zero"),
    compMax: Yup.number().moreThan(Yup.ref('compMin'), 'Max compensation should be greater than minimum compensation').nullable(), 
    type: Yup.string().required("Min compensation is required")
  })
});
function BasicJobInfo({submitHandler, stepBackHandler}) {
  return (
    <div>
      <Formik
        initialValues={{ 
          jobTitle: "Test Job",
          experience: { expmin: 1, expmax: 6, type: 'years' },
          compensation: { compMin: 5, compMax: 6, type: 'lakhs', symbol: '&#8377;' },
          location: "Hyderabad",
          mustSkills: ['react', 'angular'],
        }}
        validationSchema={BasicJobSchema}
        onSubmit={async (values, { validate }) => {
          console.log("Values ", values) 
          submitHandler(values);
        }}
        validateOnBlur={true}
        validate={values => {
          console.log("Validate >> ", values);
          return;
        }}
        render={(formik) => (
          <Form className='basic-form' labelCol={{ lg: 5 }} wrapperCol={{ lg: 20 }} layout='vertical' style={{ textAlign: 'left' }}>
            <FormItem name="jobTitle" label="Job Title" required={true}>
              <Input name="jobTitle" placeholder="Job Title" />
            </FormItem>
            <Form.Item
              label="Experience"
              required={false}
              key={'experience_key'}
            >
              <Space style={{ display: 'flex', alignItems: 'center' }} >
                <InputNumber name="experience.expmin" placeholder="eg: 1" min={0} status={formik.errors?.experience?.expmin ? "error" : ''} /> -
                <InputNumber name="experience.expmax" placeholder="eg: 4" min={0} status={formik.errors?.experience?.expmax ? "error" : ''} /> -
                <Radio.Group name="experience.type">
                  <Radio.Button value={'years'}>Years</Radio.Button>
                  <Radio.Button value={'months'}>Months</Radio.Button>
                </Radio.Group>
              </Space>
              <Text type="danger" style={{display:'block'}}>{formik.errors && formik.errors?.experience?.expmin} </Text>
              <Text type="danger" style={{display:'block'}}>{formik.errors && formik.errors?.experience?.expmax} </Text>
            </Form.Item>
            <FormItem name="location" label="Location" required={true} >
              <Input name="location" placeholder="Location" />
            </FormItem>
            <Form.Item
              label="Compensation"
              required={false}
              key={'compensation_key'}
            >
              <Space style={{ display: 'flex', alignItems: 'center' }} >
                <InputNumber name="compensation.compMin"  placeholder="eg: 1" min={0} status={formik.errors?.compensation?.compMin ? "error" : ''} /> -
                <InputNumber name="compensation.compMax" placeholder="eg: 4" min={0} status={formik.errors?.compensation?.compMax ? "error" : ''} /> -
                <Radio.Group name="compensation.type">
                  <Radio.Button value={'lakhs'}>lakhs</Radio.Button>
                  <Radio.Button value={'dollers'}>Dollers</Radio.Button>
                </Radio.Group>
              </Space>
              <Text type="danger">{formik.errors && formik.errors?.compensation?.compMax} </Text>
            </Form.Item> 
            <FormItem name="mustSkills" label="Must Skills" required={true}>
              <Select
                name="mustSkills"
                placeholder="Select skills by groups"
                mode="multiple"
              >
                {skillsData.map(skillData => {
                  return <Select.Option value={skillData.skill} key={skillData.skill}>{skillData.skill}</Select.Option>
                })}  
              </Select> 
            </FormItem>

            <Row style={{ marginTop: 60 }}>
              <Col offset={8}>
                <Space>
                    <Button onClick={stepBackHandler}>Back</Button>
                    <ResetButton>Reset</ResetButton>
                    <SubmitButton onClick={formik.submitForm} disabled={!formik.isValid}>Go to Job Details</SubmitButton> 
                </Space>
              </Col>
            </Row>
            {/* <pre style={{ flex: 1 }}> 
              {JSON.stringify(formik.errors)}
              <FormikDebug />
            </pre> */}
          </Form>
        )}
      />
    </div>
  );
}

export default BasicJobInfo;