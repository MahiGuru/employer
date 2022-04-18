import React from 'react';

import Label from '../../../../../utils/shared/components/Label';
import { Input, Space, InputNumber, Select, DatePicker } from 'antd'; 
import { skillsData } from '../../../../../utils/shared/dummy_data/skills_data';
import TextArea from 'antd/lib/input/TextArea';
import HtmlEditor from './../../../../../components/HtmlEditor';
const { Option } = Select;

function JobDescription(props) {
    return (
        <div>
            <Label name="compensation" label={'Compensation'} >
                <Space>
                    <InputNumber min={0} max={100} defaultValue={1} onChange={(val) => { }} /> -
                    <InputNumber min={1} max={100} defaultValue={3} onChange={() => { }} /> LPA
                </Space>
            </Label>  
            <Label name="job_description" label={'Job Description'} >
                <TextArea rows={4} placeholder="Ex: Full stack web developer..." maxLength={6} />
            </Label>
            <Label name="skills" label={'Required Skills'} >
                <Select
                    mode="tags"
                    style={{ width: '100%' }}
                    placeholder="Please select"
                    onChange={(values) => { console.log(values) }}
                >
                    {
                        skillsData.map((s, i) => <Option key={'skill' + i}>{s.skill}</Option>)
                    }

                </Select>
            </Label>
            <Label name="target_date" label={'Expect to join before '} >
                <DatePicker bordered={false} />
            </Label>
        </div>
    );
}

export default JobDescription;