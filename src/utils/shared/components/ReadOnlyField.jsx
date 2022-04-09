import React from 'react';
import { Row, Col } from 'antd';

function ReadOnlyField({label, value, labelClass=styles.labelClass, valueClass= styles.valueClass, spanSize = 4, children}) {
    return (
        <Row>
            <Col span={spanSize} style={labelClass}>{label}</Col>
            <Col flex="auto" align="start" justify='center' style={valueClass}>{value ? value : children}</Col>
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