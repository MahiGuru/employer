import { Badge, Card, Col, Row, Tag, Space, Button, Typography } from 'antd';
import moment from 'moment';
import React, { useState } from 'react'; 
import Title from 'antd/lib/typography/Title';
import { useNavigate } from 'react-router-dom'; 
import RecruiterApplyForm from './../RecruiterApplyForm';
const { Text } = Typography;
function JobCardComponent({job, clickTitleAction}) {
    const [modalVisible, setModalVisible] = useState(false);
    const navigate = useNavigate();
    return (
        <div style={{textAlign: 'left'}}>
            <Badge.Ribbon text={moment(job.updated_at, 'DD/MM/YYYY').fromNow()} color="#3aafa9" >
                  <Card title={(
                      <Row justify='center'  align="middle">
                        <Col flex="50px"><img style={{marginRight: 30}} alt="img" height={36} src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg" /></Col>
                        <Col  flex="auto" onClick={() => {clickTitleAction()}} className="title" align="start">{job.title}</Col>
                      </Row>
                    )} style={{textAlign:'left'}} className="recruiter-card" >
                    <Title level={5} >
                        Job Description
                    </Title>
                    <Text>{job.job_description}</Text>
                    <br />
                    <br />
                    <Row>
                        <Col span={10} className="label">Applied Interviewers</Col>
                        <Col span={14} align="start">
                            <Tag color={"processing"} style={{margin:5, marginLeft: 0}}  onClick={() => navigate("/recruiters/interviewers/details/"+job?.interviewer?.id)}>
                                {job.recruiters.applied ? job.recruiters.applied : 0}
                            </Tag> 
                        </Col>
                    </Row>
                    <Row>
                        <Col span={10} className="label">Applied Recruiters</Col>
                        <Col span={14} flex={1} align="start">
                            <Tag color={"processing"} style={{margin:5, marginLeft: 0}}  onClick={() => navigate("/recruiters/details/"+job?.interviewer?.id)}>
                                {job.recruiters.applied ? job.recruiters.applied : 0}
                            </Tag>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={10} className="label">Compensation</Col>
                        <Col span={14} align="start">
                            <Tag color={"processing"} style={{margin:5, marginLeft: 0}}>
                                {`${job.salary.min} - ${job.salary.max} ${job.salary.currency} `}
                            </Tag>
                        </Col>
                    </Row>
                    <Row justify="start" align="top">
                        <Col span={10} className="label" style={{textAlign:'left'}}>Skills</Col>
                        <Col span={14} align="start">
                            {job.key_skills.map(skill => <Tag key={skill} style={{margin:5, marginLeft:0}}>{skill}</Tag>)}
                        </Col>
                    </Row>
                     
                    <Row justify='center' align='end' style={styles.cardFooter}>
                         
                        <Col flex={"auto"} align={'end'}>
                            <Space>
                                <Button type="primary" onClick={() => setModalVisible(true)}> Apply </Button>
                            </Space>
                        </Col>
                    </Row>
                  </Card>
                </Badge.Ribbon>
                
                <RecruiterApplyForm modalVisible={modalVisible} job={job} setModalVisible={(e) => setModalVisible(e)}></RecruiterApplyForm>
        </div>
    );
}
export const styles = {
    cardFooter: {
        marginTop: 10
    },
    daysLabel: {
        color:'#690bbd',
        fontWeight: 500
    }
}


export default JobCardComponent;