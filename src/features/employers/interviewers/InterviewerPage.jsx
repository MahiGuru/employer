import React, { useState, useEffect } from 'react';
import { List, message, Avatar, Card, Row, Col, Typography, Button, Space, Popconfirm } from 'antd';
import VirtualList from 'rc-virtual-list';
import { CheckOutlined } from '@ant-design/icons';
import { date } from '../../../utils/dateUtils';
import { interviewersData } from './../../../utils/shared/dummy_data/interested_interviewers';
const { Title, Paragraph, Text, Link } = Typography;


const fakeDataUrl =
    'https://randomuser.me/api/?results=20&inc=name,gender,email,nat,picture&noinfo';
const ContainerHeight = 400;
const { Meta } = Card;
const EmployerInterviewer = () => {
    const [data, setData] = useState([]);

    const appendData = () => {
        fetch(fakeDataUrl)
            .then(res => res.json())
            .then(body => {
                setData([...body.results]);
                console.log(data, body.results);
            });
    };

    useEffect(() => {
        // appendData();
        const result = interviewersData.reduce(function (r, a) {
            const key = a.job.title || 'others';
            r[key] = r[key] || [];
            r[key].push(a);
            return r;
        }, Object.create(null)); 
        setData({ ...result });
    }, []);

    const onScroll = e => {
        // if (e.target.scrollHeight - e.target.scrollTop === ContainerHeight) {
        //   appendData();
        // }
    };

    return (

        <Row justify="center" style={{ margin: 20 }}>
            <Col span={16} align="start">
                <Card title="">
                    <Title>Applied Interviewers</Title>
                    {
                        Object.keys(data).map((item, index) => { 
                            return (
                                <div key={`${item}-${index}`}>
                                    <Title level={4} type="danger" style={{marginTop:20, marginBottom:20}}>{item}</Title>
                                    <Row gutter={[16, 16]} key={item}>
                                    {
                                        data[item].map(interviewer => (
                                            <Col span={6} key={interviewer.name}>
                                                <Card
                                                    hoverable
                                                    cover={(
                                                        <Row justify='start' align='start' style={{ padding: 10 }}>
                                                            <img alt="example" src="https://joeschmoe.io/api/v1/jai" style={{ height: 120 }} />
                                                            <Col flex={2} align="middle" style={{ alignSelf: 'center' }}>
                                                                <Popconfirm placement="top" title={'Are you sure you want to hire this interviewer?'} onConfirm={() => { message.info('Clicked on Yes.'); }} okText="Yes" cancelText="No">
                                                                    <Button type="primary" shape="round" style={{ margin: 10 }} icon={<CheckOutlined />} onClick={() => { }}>
                                                                        Hire
                                                                    </Button>
                                                                </Popconfirm>
                                                            </Col>
                                                        </Row>
                                                    )}
                                                >
                                                    <Meta title={
                                                        <>
                                                            <Title level={4} style={{ margin: 0 }}>{interviewer.name}</Title>
                                                            <Text type="success">{interviewer.experience}</Text>
                                                            <p><Text code>{interviewer.current_job_title}</Text></p>
                                                        </>
                                                    } description={(
                                                        <>

                                                            <Row gutter={[16, 16]}>
                                                                <Col span={24}>
                                                                    <Text strong>Applied for Position:</Text>
                                                                    <Text>{interviewer.job.title}</Text>
                                                                </Col>
                                                                <Col span={24} flex={1}>
                                                                    <Text strong>Requested at: </Text>
                                                                    <Text> {date.getDateWithFormat()}</Text>
                                                                </Col>
                                                            </Row>
                                                        </>
                                                    )} />
                                                </Card>
                                            </Col>
                                        ))
                                    }
                                    </Row> 
                                </div>
                        )
                        })
                    }
                </Card>
            </Col>
        </Row>
    );
};

export default EmployerInterviewer;