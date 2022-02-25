import React from 'react';
import { Form, Select } from 'antd';
const { Option } = Select;
const ASelect = ({ name, label, placeHolder, options, isRequired, onChange }) => {
    console.log(options);
    return (
        <Form.Item
            name={name}
            label={label}
            rules={[ { required: isRequired }]}
        >
            <Select
                placeholder={placeHolder}
                onChange={onChange}
                allowClear
            > 
                {options.map((option, i) => <Option key={i} value={option.value}>{option.value}</Option>)}
            </Select>
        </Form.Item>
    );
}

export default ASelect;