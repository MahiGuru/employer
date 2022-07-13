import { DeleteOutlined } from '@ant-design/icons';
import { Badge, Card, Col, Row, Tag } from 'antd';
import moment from 'moment';
import React from 'react'; 
import { useNavigate } from 'react-router-dom';

function JobCardComponent({job, clickTitleAction}) {
    let navigate = useNavigate();
    return (
        <div>
            <Badge.Ribbon text={`${job.status}`} color={job.status === 'Completed' ? 'green' : job.status === 'Hold' ? 'red' : 'blue'}>
                  <Card title={(
                      <Row justify='center'  align="middle"> 
                        <Col  flex="auto" onClick={() => {clickTitleAction()}} align="start">
                            <h3>{job.employer?.name}</h3>
                            <h5>{job.title}</h5>
                        </Col>
                      </Row>
                    )}> 
                    <Row>
                        <Col flex={'50%'} className="label">Posted on</Col>
                        <Col flex={3} align="start">{moment(parseInt(job.updatedAt)).format("DD/MM/YYYY")} </Col>
                    </Row>
                    <Row>
                        <Col flex={'50%'} className="label">Experiece</Col>
                        <Col flex={3} align="start">
                            {`${job.experience?.min}${job.experience?.max ? ' to '+ job.experience?.max : '+'} ${job.experience?.duration}`}
                        </Col>
                    </Row>
                    {/* <Row>
                        <Col flex={'50%'} className="label">Interested Recruiters</Col>
                        <Col flex={3} align="start" onClick={() => navigate(`/employer/recruiters/job/${job.id}`)}>
                            <Tag color={job.recruiters.applied ? "processing": 'magenta'}>
                                {job.recruiters.applied ? job.recruiters.applied : 0}
                            </Tag>
                        </Col>
                    </Row>
                    <Row>
                        <Col flex={'50%'} className="label">Assigned Interviewers</Col>
                        <Col flex={3} align="start">
                            <Tag color={"green"}>
                              {job.interviewer?.ShrotList}
                          </Tag>
                        </Col>
                    </Row>  */}
                    <Row justify='center' align='end' style={styles.cardFooter}>
                        <Col flex={2} style={styles.daysLabel} align="start">
                            {moment(parseInt(job.updatedAt)).fromNow()}    
                        </Col>
                        <Col flex={"auto"} align={'end'}>
                            <DeleteOutlined />
                        </Col>
                    </Row> 
                  </Card>
                </Badge.Ribbon>
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