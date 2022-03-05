import { Badge, Card, Col, Row, Tag } from 'antd';
import moment from 'moment';
import React from 'react'; 

function JobCard({job}) {
    return (
        <div>
            <Badge.Ribbon text={`${job.status}`} color={job.status === 'Completed' ? 'green' : job.status === 'Hold' ? 'red' : 'blue'}>
                  <Card title={job.title}> 
                    <Row>
                        <Col flex={'50%'} className="label">Posted on</Col>
                        <Col flex={3}>{moment(job.posted_at, 'DD/MM/YYYY').format("DD/MM/YYYY")}</Col>
                    </Row>
                    <Row>
                        <Col flex={'50%'} className="label">Experiece</Col>
                        <Col flex={3}>{job.experience}</Col>
                    </Row>
                    <Row>
                        <Col flex={'50%'} className="label">Recruiter Profiles</Col>
                        <Col flex={3}>
                            <Tag color={job.recruiters.applied ? "processing": 'magenta'}>
                                {job.recruiters.applied ? job.recruiters.applied : 0}
                            </Tag>
                        </Col>
                    </Row>
                    <Row>
                        <Col flex={'50%'} className="label">Interviewer ShortListed</Col>
                        <Col flex={3}>
                            <Tag color={"green"}>
                              {job.interviewer?.ShrotList}
                          </Tag>
                        </Col>
                    </Row>  
                    <Row justify='end'>
                        <Col flex={"auto"} align="end" className='label'>
                            {moment(job.posted_at, 'DD/MM/YYYY').fromNow()}    
                        </Col>
                    </Row>
                  </Card>
                </Badge.Ribbon>
        </div>
    );
}

export default JobCard;