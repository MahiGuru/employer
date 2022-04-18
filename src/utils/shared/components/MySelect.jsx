import { useField } from 'formik';
import React from 'react';
import { Input, Form, Row, Col, Select } from 'antd';

function MyInput({ label, ...props }) {
    const [field, meta, helpers] = useField(props);
    console.log(props);
    return ( 
        <Select
            mode="multiple"
            placeholder="Inserted are removed"
            {...field} 
            {...props} 
        >
            {props.data.map(item => (
            <Select.Option key={item} value={item}>
                {item}
            </Select.Option>
            ))}
        </Select>
    );
}

export default MyInput;


// <>
// <Row>
//     <Col flex={2}>{label}</Col>
//     <Col flex={3}> 
//         <Input {...field} {...props} />
//         {meta.touched && meta.error ? (
//             <div className="error">{meta.error}</div>
//         ) : null}  
        
//     </Col>
// </Row>
// </>