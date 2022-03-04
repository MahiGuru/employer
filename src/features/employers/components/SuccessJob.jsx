import { Button, Result } from 'antd';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function SuccessJob({title}) {
    const navigate = useNavigate();
    
    const gotoJobpage = () => {
        console.log("submit button click");
        navigate('/employer/jobs/create');
    }
    return (
        <div>
            <Result
                status="success"
                title="Successfully Created Job"
                subTitle="Created Job title: "
                extra={[
                <Button key="buy" onClick={gotoJobpage}>
                     Create Another Job 
                </Button>,
                ]}
            />
        </div>
    );
}

export default SuccessJob;