import React, {  } from 'react';
import { Formik } from 'formik';
import { Form, Space, Typography, Modal } from 'antd';
import { FormItem, Input, InputNumber, Radio } from 'formik-antd';
import * as Yup from 'yup';
import ReadOnlyField from './../../utils/shared/components/ReadOnlyField';
import './Recruiter.css';


const { Text, Title } = Typography;

const ApplyJobSchema = Yup.object().shape({
    recruiter_comments: Yup.string()
        .min(15, 'Too Short!')
        .required('Please enter Job description'),
    is_new_salary: Yup.boolean(),
    isResourcePaymentModify: Yup.boolean(),
    resource_pay: Yup.object({
        min: Yup.number().typeError("min resource payment should be zero"),
        max: Yup.number().moreThan(Yup.ref('min'), 'Max resource payment should be greater than minimum salary').nullable(),
        currency: Yup.string().required("Min resource payment is required")
    }),
    salary: Yup.object({
        min: Yup.number().typeError("min salary should be zero"),
        max: Yup.number().moreThan(Yup.ref('min'), 'Max salary should be greater than minimum salary').nullable(),
        currency: Yup.string().required("Min salary is required")
    })

});
const RecruiterApplyForm = ({ modalVisible, setModalVisible, submitHandler, stepBackHandler, job }) => {
    return (
        <Formik
            initialValues={{
                isCompensation: true,
                isResourcePaymentModify: true,
                resource_pay: { min: job?.resource_pay?.min, max: job?.resource_pay?.max, currency: job?.resource_pay?.currency },
                salary: { min: job?.salary?.min, max: job?.salary?.max, currency: job?.salary?.currency, symbol: '&#8377;' },
                recruiter_comments: "", 
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
                <Modal
                    title="Apply Job"
                    centered
                    visible={modalVisible}
                    width={800}
                    onOk={() => {
                        console.log(formik.values);
                        setModalVisible(false);
                    }}
                    onCancel={() => setModalVisible(false)}
                >
                    <Form className='job-details-form' labelCol={{ lg: 5 }} wrapperCol={{ lg: 20 }} layout='vertical' style={{ textAlign: 'left' }}>

                        <FormItem name="isCompensation" label="" required={true}>
                            <Title level={5}>Do you agree with given compensation by employer? (
                                <Space style={{}}>
                                    <ReadOnlyField labelRequired={false} valueClass={'padding-0'} value={job.salary?.min} /> -
                                    <ReadOnlyField labelRequired={false} valueClass={'padding-0'} value={job.salary?.max} />
                                    <ReadOnlyField labelRequired={false} value={job.salary?.currency} />
                                </Space> )
                            </Title>
                            <Space style={{ display: 'flex', alignItems: 'center' }} >
                                <Radio.Group name="isCompensation" size="true">
                                    <Radio.Button value={true}>Yes</Radio.Button>
                                    <Radio.Button value={false}>Modify</Radio.Button>
                                </Radio.Group>
                            </Space>
                        </FormItem>
                        {!formik.values.isCompensation ? (
                            <Form.Item
                                label=""
                                required={false}
                                key={'proposed_salary_key'}
                            >
                                <div>Proposed Compensation</div>
                                <Space style={{ display: 'flex', alignItems: 'center' }} >
                                    <InputNumber name="salary.min" placeholder="eg: 1" min={0} status={formik.errors?.salary?.min ? "error" : ''} /> -
                                    <InputNumber name="salary.max" placeholder="eg: 4" min={0} status={formik.errors?.salary?.max ? "error" : ''} /> -
                                    <Radio.Group name="salary.currency">
                                        <Radio.Button value={'Lakhs'}>lakhs</Radio.Button>
                                        <Radio.Button value={'Dollers'}>Dollers</Radio.Button>
                                    </Radio.Group>
                                </Space>
                                <Text type="danger">{formik.errors && formik.errors?.salary?.max} </Text>
                            </Form.Item>
                        ) : null}

                        <FormItem name="isResourcePaymentModify" label="" required={true}>
                            <Title level={5}>Do you agree with payment per resource from employer? (
                                <Space style={{}}>
                                    <ReadOnlyField labelRequired={false} valueClass={'padding-0'} value={job?.resource_pay?.min} /> -
                                    <ReadOnlyField labelRequired={false} valueClass={'padding-0'} value={job?.resource_pay?.max} />
                                    <ReadOnlyField labelRequired={false} value={job.resource_pay?.currency} />
                                </Space> )
                            </Title>
                            <Space style={{ display: 'flex', alignItems: 'center' }} >
                                <Radio.Group name="isResourcePaymentModify" size="true">
                                    <Radio.Button value={true}>Yes</Radio.Button>
                                    <Radio.Button value={false}>Modify</Radio.Button>
                                </Radio.Group>
                            </Space>
                        </FormItem>
                        {!formik.values.isResourcePaymentModify ? (
                            <Form.Item
                                label=""
                                required={false}
                                key={'resource_payment_key'}
                            >
                                <div>Proposed payment</div>
                                <Space style={{ display: 'flex', alignItems: 'center' }} >
                                    <InputNumber name="resource_pay.min" placeholder="eg: 1" min={0} status={formik.errors?.resource_pay?.min ? "error" : ''} /> -
                                    <InputNumber name="resource_pay.max" placeholder="eg: 4" min={0} status={formik.errors?.resource_pay?.max ? "error" : ''} /> -
                                    <Radio.Group name="resource_pay.currency">
                                        <Radio.Button value={'thousands'}>thousands</Radio.Button>
                                        <Radio.Button value={'lakhs'}>lakhs</Radio.Button>
                                        <Radio.Button value={'dollers'}>Dollers</Radio.Button>
                                    </Radio.Group>
                                </Space>
                                <Text type="danger">{formik.errors && formik.errors?.resource_pay?.max} </Text>
                            </Form.Item>
                        ) : null}

                        <FormItem name="recruiter_comments" label="Addition comments" required={true}>
                            <Input.TextArea rows={4} name="recruiter_comments" placeholder="Additional Comments" />
                        </FormItem>
                    </Form>
                </Modal>

            )}
        </Formik>
    );
}

export default RecruiterApplyForm;