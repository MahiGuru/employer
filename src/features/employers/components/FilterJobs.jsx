import { Button, Checkbox, Form, Input, InputNumber, Select } from 'antd';
import React from 'react';
const { Option } = Select;
function FilterJobs({onStatusChange, onFilterBtnClick}) {
    const onFinish = (values) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const handleChange = (value) => {
        console.log(`selected ${value}`);
    }
    const status = [
        {id: 1, name: 'Completed'},
        {id: 2, name: 'Active'},
        {id: 3, name: 'Hold'}
    ]
    return (
        <div>
            <Form
                name="basic"
                layout='inline'
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item
                    label="Status"
                    name="status" 
                >
                    <Select defaultValue="Active" onChange={onStatusChange}>
                        {status.map(status => <Option key={'status'+status.id} value={status.name}>{status.name}</Option> )} 
                    </Select>
                </Form.Item>

                <Form.Item
                    label="Interviewers"
                    name="interviews" 
                >
                    <Input.Group compact>
                        <Select defaultValue="less_then" style={{width: '60px'}}>
                            <Option value="less_then">&lt;</Option>
                            <Option value="greater_then">&gt;</Option>
                        </Select> 
                        <InputNumber />
                    </Input.Group>
                </Form.Item> 
                <Form.Item
                    label="Recruiters"
                    name="recruiters" 
                >
                    <Input placeholder='E.g: 2 ' />
                </Form.Item> 

                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary" htmlType="submit" onClick={onFilterBtnClick}>
                        Filter
                    </Button>
                </Form.Item> 
            </Form>
        </div>
    );
}

export default FilterJobs;