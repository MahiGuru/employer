import { useField } from 'formik';
import React from 'react';
import { Input, Form, Row, Col } from 'antd';

function MyInput({ label, ...props }) {
    const [field, meta, helpers] = useField(props);
    console.log(props);
    return ( <Input {...field} {...props} /> );
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