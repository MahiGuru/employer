import React, { useState } from 'react';

import Label from '../../../../../utils/shared/components/Label';
import { Space, InputNumber, Select,  Switch } from 'antd';  
import { CheckOutlined, CloseOutlined } from '@ant-design/icons/lib/icons';
const { Option } = Select; 

function RecruiterJobs(props) {
    const [recruiterShare, setRecruiterShare] = useState('Percentage');
    return (
        <div>
             <Label name="recruiter_percentage" label={'Recruiter Percentage'} >
                <Space size={'middle'}>
                <Select defaultValue="percentage" onChange={(val) => { setRecruiterShare(val) }}>
                    <Option value="percentage">Percentage (%)</Option>
                    <Option value="money">Money (Rs)</Option>
                    <Option value="monthly">Monthly (Rs)</Option>
                </Select>
                <InputNumber min={0} max={recruiterShare === 'percentage' ? 100 : ''} defaultValue={1} onChange={(val) => { }} />
                </Space>
            </Label>
            <Label name="is_interviewr" label={'Opting Interviewer?'} >
                <Switch
                checkedChildren={<CheckOutlined />}
                unCheckedChildren={<CloseOutlined />}
                defaultChecked
                onChange={(values) => { console.log(values) }}
                />
            </Label>
        </div>
    );
}

export default RecruiterJobs;