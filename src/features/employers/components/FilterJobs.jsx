import { Button, Checkbox, Form, Input, InputNumber, Select } from 'antd';
import React, { useContext, useState } from 'react';
import { AppContext } from '../../../AppContext';
const { Option } = Select;
function FilterJobs({onStatusChange, onFilterBtnClick}) {
    const {state, dispatch} = useContext(AppContext);
    const [filters, setFilters] = useState({
        status: null,
        days: null,
        recruiters: null,
        interviewers: null
    })
    console.log("state >>> ", state);
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
    
    const daysList = [
        {id: 0, name: 'Today', value:'today'},
        {id: 1, name: 'Week', value:'week'},
        {id: 2, name: 'Month', value:'month'},
        {id: 4, name: 'Year', value:'year'}
    ]

    const dispatchAction = (values) => {
        dispatch({type: 'FILTERS', payload: filters})
    }
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
                    <Select defaultValue="Active" onChange={(val) => setFilters({...filters, status: val})}>
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
                        <InputNumber onChange={(val) => setFilters({...filters, interviewers: val})}/>
                    </Input.Group>
                </Form.Item> 
                <Form.Item
                    label="Recruiters"
                    name="recruiters" 
                >
                    <InputNumber placeholder='E.g: 2 ' onChange={(val) => setFilters({...filters, recruiters: val})}/>
                </Form.Item> 
                <Form.Item
                    label="Days"
                    name="days" 
                >
                    <Select defaultValue="Year"  onChange={(val) => setFilters({...filters, days: val})}>
                        {daysList.map(days => <Option key={'days'+days.id} value={days.value}>{days.name}</Option> )} 
                    </Select>
                </Form.Item> 

                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary" htmlType="submit"  onClick={dispatchAction}>
                        Filter
                    </Button>
                </Form.Item> 
            </Form>
        </div>
    );
}
// onChange={(val) => {dispatch({type: 'FILTERBY_STATUS', payload: val})}}
export default FilterJobs;