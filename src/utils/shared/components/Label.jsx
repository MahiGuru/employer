import React from 'react';
import { Form, Input } from 'antd';
const Label = ({ name, label, offset, span, isRequired, children }) => {
    return (
        <Form.Item
            name={name}
            label= {label} 
            wrapperCol= {{
                offset,
                span,
            }} 
            rules={[{ required: {isRequired} } ]}
        >
        {children}
      </Form.Item>
      
    );
}

export default Label;