import React from 'react';
import { Row, Col } from 'antd';

function ReadOnlyField({label, value, labelRequired=true, labelClass=styles.labelClass, valueClass= styles.valueClass,  labelSpan= 4, contentSpan= 4,  children}) {
    return (
        <Row wrap={true}>
            {labelRequired ? <Col span={labelSpan} style={labelClass}>{label}</Col> : null }
            <Col flex={1} align="start" justify='center' className={valueClass}>{value ? value : children}</Col>
        </Row>
    );
}

const styles = {
    labelClass: { 
        fontWeight: 'bold',        
        padding: '10px'
    },
    valueClass: {       
        padding: '10px'
    }
}
export default ReadOnlyField;