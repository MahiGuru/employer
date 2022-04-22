import React, { useState, useEffect } from 'react';
import { message, Card, Row, Col, Typography, Button, Popconfirm, Space } from 'antd';
import { ArrowLeftOutlined, CheckOutlined } from '@ant-design/icons';
import { date } from '../../../utils/dateUtils';
import { interviewersData } from '../../../utils/shared/dummy_data/interested_interviewers';
import './interviewer.css';
import { useNavigate, useParams } from 'react-router-dom';
import ReadOnlyField from './../../../utils/shared/components/ReadOnlyField';
const { Title, Text } = Typography;



const fakeDataUrl =
    'https://randomuser.me/api/?results=20&inc=name,gender,email,nat,picture&noinfo';
const { Meta } = Card;


const EmployerInterviewerDetails = () => {

    let { interviewerId } = useParams();
    let navigate = useNavigate();
    const [interviewer, setInterviewer] = useState([]);

    const appendData = () => {
        fetch(fakeDataUrl)
            .then(res => res.json())
            .then(body => {
                setInterviewer([...body.results]);
                console.log(interviewer, body.results);
            });
    };

    useEffect(() => {
        // appendData();
        const result = interviewersData.find((val, i) => {
            console.log(val, interviewerId)
            return val.id === parseInt(interviewerId);
        });
        console.log("result >>>> ", result);
        setInterviewer(result);
    }, []);
    return (
 
                <Card title={
                    <Space>
                        <Button type="dashed" shape="round" icon={<ArrowLeftOutlined />} onClick={() => {navigate(-1)}} /> 
                        { interviewer ? interviewer.name : "" }
                    </Space>
                }>
                    {interviewer ? ( 
                            <Space>
                                <aside style={{textAlign:'center'}}>
                                    <Space direction="vertical">
                                        <img alt="example" src="https://joeschmoe.io/api/v1/jai" style={{ height: 200, margin: '10px' }} />
                                        <Button type="dashed" danger  icon={<CheckOutlined />} onClick={() => { navigate('/employer/interviewers/details/' + interviewer.id) }}>
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
                                    <ReadOnlyField labelSpan={8} label="About Me" value={interviewer.aboutMe} />
                                    <ReadOnlyField labelSpan={8} label="Current Job Title" value={interviewer.current_job_title} />
                                    <ReadOnlyField labelSpan={8} label="Experience" value={interviewer.experience} />
                                    <ReadOnlyField labelSpan={8} label="Skills" value={interviewer.skills} />
                                    <ReadOnlyField labelSpan={8} label="Per Resource for Job" value={interviewer.per_resource} />
                                    <ReadOnlyField labelSpan={8} label="How many Interviews Done from Talenter" value={interviewer.recroded_interviews}
                                    />
                                </section>
                            </Space> 
                    ) : null}

                </Card> 
    );
};

export default EmployerInterviewerDetails;