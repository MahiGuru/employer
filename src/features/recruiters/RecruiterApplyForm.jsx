import React, { useState }  from 'react'; 
import { Formik } from 'formik';
import { Form, Row, Col, Button, Space, Typography, Modal } from 'antd';
import { FormItem, Input, InputNumber, Radio, ResetButton, Select, SubmitButton } from 'formik-antd';
import * as Yup from 'yup';  
import { skillsData } from '../../utils/shared/dummy_data/skills_data';
import HtmlEditor from '../../components/HtmlEditor';

const { Text } = Typography;

const ApplyJobSchema = Yup.object().shape({
    recruiter_comments: Yup.string()
        .min(15, 'Too Short!')
        .required('Please enter Job description'),
    
});
const RecruiterApplyForm = ({modalVisible, setModalVisible, submitHandler, stepBackHandler}) => {
    return (
        <div>
            <Modal
                title="Apply Job"
                centered
                visible={modalVisible}
                onOk={() => setModalVisible(false)}
                onCancel={() => setModalVisible(false)}
            > 
       <Formik
            initialValues={{ 
              job_description: "Test Job",
              objectives: "OBJECTIVES HERE..",
              notice: { period: 5, period_type: 'days'},
              role_responsibility: "Roles and responsibility are here...",
              required_skills: ['react', 'angular'],
            }}
            validationSchema={ApplyJobSchema}
            onSubmit={async (values, { validate }) => {
              console.log("Values ", values) 
              submitHandler(values);
            }}
            validateOnBlur={true}
            validate={values => { 
              return;
            }}>
              {(formik) => (
              <Form className='job-details-form' labelCol={{ lg: 5 }} wrapperCol={{ lg: 20 }} layout='vertical' style={{ textAlign: 'left' }}>
                    <FormItem name="objectives" label="Objectives" required={true}>
                    <Input.TextArea  rows={4} name="objectives" placeholder="Objectives" />
                    </FormItem>
                    <FormItem name="recruiter_comments" label="Comments" required={true}>
                        <HtmlEditor editorClass={formik.errors?.job_description ? "editor-class editor_error" : 'editor-class'} callbackHandler={(data) =>{ 
                            formik.setFieldValue('recruiter_comments', data);
                        }
                        } /> 
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

                </Formik> 
            </Modal>  
        </div>
    );
}

export default RecruiterApplyForm;