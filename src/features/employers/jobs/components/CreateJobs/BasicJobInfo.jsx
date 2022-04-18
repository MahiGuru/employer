import React from 'react';
import { Formik } from 'formik';
import { message, Form, Row, Col, Button, Space, Typography } from 'antd';
import { FormikDebug, FormItem, Input, InputNumber, Radio, ResetButton, Select, SubmitButton } from 'formik-antd';
import * as Yup from 'yup';

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
function BasicJobInfo({submitHandler}) {
  return (
    <div>
      <Formik
        initialValues={{
          validateOnMount: true,
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
                    <ResetButton>Reset</ResetButton>
                    <SubmitButton onClick={formik.submitForm} disabled={!formik.isValid}>Go to Job Details</SubmitButton> 
                </Space>
              </Col>
            </Row>
            <pre style={{ flex: 1 }}> 
              {JSON.stringify(formik.errors)}
              <FormikDebug />
            </pre>
          </Form>
        )}
      />
    </div>
  );
}

export default BasicJobInfo;