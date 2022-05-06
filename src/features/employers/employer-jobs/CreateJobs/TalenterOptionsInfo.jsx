import React from 'react';
import { Formik } from 'formik';
import { Form, Row, Col, Space, Button } from 'antd';
import { FormItem, ResetButton, Select, SubmitButton } from 'formik-antd';
import * as Yup from 'yup';

const talenterInfoSchema = Yup.object().shape({
  recruiters: Yup.array().nullable(),
  interviewers: Yup.array().nullable()
});

function TalenterOptionInfo({ submitHandler, stepBackHandler }) {
  return (
    <div>
      <Formik
        initialValues={{
          recruiters: [],
          interviewers: []
        }}
        validationSchema={talenterInfoSchema}
        onSubmit={async (values, { validate }) => {
          console.log("Values ", values)
          submitHandler(values);
        }}
        validateOnBlur={true}
        validate={values => {
          console.log("Validate >> ", values);
          return;
        }}>
        {(formik) => (
          <Form className='job-details-form' labelCol={{ lg: 5 }} wrapperCol={{ lg: 20 }} layout='vertical' style={{ textAlign: 'left' }}>
            <FormItem name="recruiters" label="Recruiters" required={false}>
              <Select
                name="recruiters"
                placeholder="Select Recruiters"
                mode="multiple"
              >
                <Select.Option value={'angular'}>Sharma Tech</Select.Option>
                <Select.Option value={'react'}>VKR Solutions</Select.Option>
                <Select.Option value={'jquery'}>Abid Tech</Select.Option>
                <Select.Option value={'html'}>Anos Infotech</Select.Option>
                <Select.Option value={'css'}>SR services</Select.Option>
              </Select>
            </FormItem>
            <FormItem name="interviewers" label="Interviewers" required={false}>
              <Select
                name="interviewers"
                placeholder="Select Interviewers"
                mode="multiple"
              >
                <Select.Option value={'1'}>Mahipal</Select.Option>
                <Select.Option value={'120'}>Pavan</Select.Option>
                <Select.Option value={'66'}>Venkatesh</Select.Option>
                <Select.Option value={'4'}>Murali</Select.Option>
                <Select.Option value={'9'}>Venkat</Select.Option>
                <Select.Option value={'14'}>Ram</Select.Option>
                <Select.Option value={'34'}>Peter</Select.Option>
                <Select.Option value={'12'}>John</Select.Option>
              </Select>
            </FormItem>

            <Row style={{ marginTop: 60 }}>
              <Col offset={8}>
                <Space>
                  <Button onClick={stepBackHandler}>Back</Button>
                  <ResetButton>Reset</ResetButton>
                  <SubmitButton onClick={formik.submitForm} disabled={!formik.isValid}>CREATE JOB</SubmitButton>
                </Space>
              </Col>
            </Row>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default TalenterOptionInfo;