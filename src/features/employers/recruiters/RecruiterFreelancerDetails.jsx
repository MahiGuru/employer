import React, { useState, useEffect } from 'react';
import { message, Card, Row, Col, Typography, Button, Popconfirm, Space } from 'antd';
import { ArrowLeftOutlined, CheckOutlined } from '@ant-design/icons';  
import { useNavigate, useParams } from 'react-router-dom';
import ReadOnlyField from '../../../utils/shared/components/ReadOnlyField';
import { freelanceRecruitersData } from '../../../utils/shared/dummy_data/interested_recruiters';
const { Title, Text } = Typography;



const fakeDataUrl =
    'https://randomuser.me/api/?results=20&inc=name,gender,email,nat,picture&noinfo';
const { Meta } = Card;


const EmployerRecruiterFreelancerDetails = () => {

    let { recruiterId } = useParams();
    let navigate = useNavigate();
    const [freelanceRecruiter, setFreelanceRecruiter] = useState([]);

    const appendData = () => {
        fetch(fakeDataUrl)
            .then(res => res.json())
            .then(body => {
                setFreelanceRecruiter([...body.results]);
                console.log(freelanceRecruiter, body.results);
            });
    };

    useEffect(() => {
        // appendData();
        const result = freelanceRecruitersData.find((val, i) => {
            console.log(val, recruiterId)
            return val.id === parseInt(recruiterId);
        });
        console.log("result >>>> ", result);
        setFreelanceRecruiter(result);
    }, []);
    return (

        <Row justify="center" style={{ margin: 20 }}>
            <Col span={16} align="start">
                <Card title={
                    <Space>
                        <Button type="dashed" shape="round" icon={<ArrowLeftOutlined />} onClick={() => {navigate(-1)}} /> 
                        { freelanceRecruiter ? freelanceRecruiter?.name : "" }
                    </Space>
                }>
                    {freelanceRecruiter ? ( 
                            <Space>
                                <aside style={{textAlign:'center'}}>
                                    <Space direction="vertical">
                                        <img alt="example" src="https://joeschmoe.io/api/v1/jerry" style={{ height: 200, margin: '10px' }} />
                                        <Button type="dashed" danger  icon={<CheckOutlined />} onClick={() => { navigate('/employer/recruiters/details/' + freelanceRecruiter.id) }}>
                                            Short List
                                        </Button>
                                        <Popconfirm placement="top" title={'Are you sure you want to hire this interviewer?'} onConfirm={() => { message.info('Clicked on Yes.'); }} okText="Yes" cancelText="No">
                                            <Button type="primary" shape="round" block icon={<CheckOutlined />} onClick={() => { }}>
                                                Hire
                                            </Button>
                                        </Popconfirm>
                                    </Space>
                                </aside>
                                <section>
                                    <ReadOnlyField labelSpan={8} label="About Me" value={freelanceRecruiter.about} />
                                    <ReadOnlyField labelSpan={8} label="Website" value={<a href={freelanceRecruiter?.firm?.website_link}>{freelanceRecruiter?.firm?.website_link}</a>} />
                                    <ReadOnlyField labelSpan={8} label="Job Success Rate" value={freelanceRecruiter.Job_success} />
                                    <ReadOnlyField labelSpan={8} label="My Skills" value={freelanceRecruiter.skills} />
                                    <ReadOnlyField labelSpan={8} label="Per Resource for Job" value={freelanceRecruiter.price_per_resource} />
                                    <ReadOnlyField labelSpan={8} label="Available profiles" value={freelanceRecruiter.avalable_profiles}
                                    />
                                </section>
                            </Space> 
                    ) : null}

                </Card>
            </Col>
        </Row>
    );
};

export default EmployerRecruiterFreelancerDetails;