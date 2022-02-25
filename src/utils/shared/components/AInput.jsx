import React from 'react';
import { Form, Input } from 'antd';
const AInput = ({ name, label, placeHolder, isRequired, prefix, defaultVal, onChange }) => {
    return (
        <Form.Item
            name={name}
            prefix={prefix}
            label= {label} 
            rules={[{ required: {isRequired} } ]}
        >
        <Input placeHolder = {placeHolder} value= {defaultVal} onChange= {onChange} />
      </Form.Item>
      
    );
}

export default AInput;