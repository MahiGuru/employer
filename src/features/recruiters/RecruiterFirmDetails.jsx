import React, { useState, useEffect } from 'react';
import { message, Card, Button, Popconfirm, Space } from 'antd';
import { ArrowLeftOutlined, CheckOutlined } from '@ant-design/icons';
import { useNavigate, useParams } from 'react-router-dom';
import { recruiterFirmsData } from '../../utils/shared/dummy_data/interested_recruiters';
import ReadOnlyField from '../../utils/shared/components/ReadOnlyField';


const RecruiterFirmDetails = () => {

    let { recruiterId } = useParams();
    let navigate = useNavigate();
    const [recruiterFirm, setRecruiterFirm] = useState([]);

    // const appendData = () => {
    //     fetch(fakeDataUrl)
    //         .then(res => res.json())
    //         .then(body => {
    //             setRecruiterFirm([...body.results]);
    //             console.log(recruiterFirm, body.results);
    //         });
    // };

    useEffect(() => {
        // appendData();
        const result = recruiterFirmsData.find((val, i) => {
            console.log(val, recruiterId)
            return val.id === parseInt(recruiterId);
        });
        console.log("result >>>> ", result);
        setRecruiterFirm(result);
    }, [recruiterId]);
    return (
        <Card title={
            <Space>
                <Button type="dashed" shape="round" icon={<ArrowLeftOutlined />} onClick={() => { navigate(-1) }} />
                {recruiterFirm ? recruiterFirm?.firm?.name : ""}
            </Space>
        }>
            {recruiterFirm ? (
                <Space>
                    <aside style={{ textAlign: 'center' }}>
                        <Space direction="vertical">
                            <img alt="example" src="https://joeschmoe.io/api/v1/jaqueline" style={{ height: 200, margin: '10px' }} />
                            <Button type="dashed" danger icon={<CheckOutlined />} onClick={() => { navigate('/employer/recruiters/details/' + recruiterFirm.id) }}>
                                Short List
                            </Button>
                            <Popconfirm placement="top" title={'Are you sure you want to hire this interviewer?'} onConfirm={() => { message.info('Clicked on Yes.'); }} okText="Yes" cancelText="No">
                                <Button type="primary" shape="round" block icon={<CheckOutlined />} onClick={() => { }}>
                                    Accept
                                </Button>
                            </Popconfirm>
                        </Space>
                    </aside>
                    <section>
                        <ReadOnlyField labelSpan={8} label="About Company" value={recruiterFirm.about} />
                        <ReadOnlyField labelSpan={8} label="Website" value={<a href={recruiterFirm?.firm?.website_link}>{recruiterFirm?.firm?.website_link}</a>} />
                        <ReadOnlyField labelSpan={8} label="Job Success Rate" value={recruiterFirm.finished_jobs} />
                        <ReadOnlyField labelSpan={8} label="Per Resource for Job" value={recruiterFirm.price_per_resource} />
                        <ReadOnlyField labelSpan={8} label="Available profiles" value={recruiterFirm.avalable_profiles}
                        />
                    </section>
                </Space>
            ) : null}

        </Card>
    );
};

export default RecruiterFirmDetails;