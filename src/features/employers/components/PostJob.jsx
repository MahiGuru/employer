import { Button, Form, Input, Select } from 'antd';
import { Formik, useFormik } from 'formik';
import React from 'react';
import * as Yup from 'yup';
import ASelect from '../../../components/ASelect';
import Label from '../../../utils/shared/components/Label';


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
      firstName: '',
      lastName: '',
      email: '',
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

  return (
    <Form {...layout} ref={formRef} name="control-ref" >
      <Label name="name1" label={'label1'} >
          <Input />
      </Label>
      <Label name="gender1" label={'Gender1'} >
          <Select
              placeholder="Select a option and change input text above"
              onChange={onValueChange}
              allowClear
            >
              <Option value="male">male</Option>
              <Option value="female">female</Option>
              <Option value="other">other</Option>
          </Select>
      </Label>
       
       
      <Label offset={8} span={16}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
          <Button htmlType="button" onClick={onReset}>
            Reset
          </Button>
          <Button type="link" htmlType="button" >
            Fill form
          </Button>
      </Label>  
    </Form>

  );
}

export default PostJob;