import React from 'react';
import { Row, Col } from 'antd';

function ReadOnlyField({label, value, labelClass=styles.labelClass, valueClass= styles.valueClass,  labelSpan= 4, contentSpan= 4,  children}) {
    return (
        <Row wrap={true}>
            <Col span={labelSpan} style={labelClass}>{label}</Col>
            <Col flex={1} align="start" justify='center' style={valueClass}>{value ? value : children}</Col>
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