import { useLazyQuery, useMutation, useQuery } from '@apollo/client';
import { Button, Card, Col, Row, List, Avatar } from 'antd';
import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom'; 
import { JOB_BY_ID, UPDATE_JOB_MUTATION } from 'services/graphql/querys/job-query';
import ReadOnlyField from '../../../../utils/shared/components/ReadOnlyField';
import { AppContext } from './../../../../AppContext';
import moment from 'moment';
 
function JobDetails(props) { 
  const [selectedJob, setSelectedJob] = useState(1); 
  let { id } = useParams();
  console.log("Params ", id);
  let navigate = useNavigate();

  const [UpdateJob] = useMutation(UPDATE_JOB_MUTATION);
  const [loadJob] = useLazyQuery(JOB_BY_ID);

  const { state } = useContext(AppContext); 

  useEffect(() => { 
    (async () => {
      console.log("state ", state); 
      const job = await loadJob({
        variables: {
          "jobId": id
        }
      });
      console.log("job.data.job ", job.data.job[0]);
      setSelectedJob(job.data && job.data.job && job.data.job[0]);
      // Update Jobs
      console.log("NEW DATE ", new Date(parseInt(selectedJob.updatedAt)));
    })();
  }, []);

  const updateJob = async () => {
    const updateJob = await UpdateJob({
      variables: {
        "jobId": 3,
        "input": { 
            "title": "Senior Java Developer", 
            "location": "Bangalore",
            "status": "Completed"
        }
      }
    });
    console.log(" updateJob ", updateJob);
  }

  return (
    <React.Fragment >
      {selectedJob ? (
         <>
          <Card  title={selectedJob.title} style={{textAlign: 'left'}} headStyle={{color:'#007584'}} bordered={false} extra={(
            <Row>
              <Col><Button type="primary">Apply Job</Button></Col>
              <Col><Button htmlType="button" onClick={updateJob}>
                  Updated Job
                </Button>
              </Col>
              <Col><Button type="link" onClick={() => navigate(-1)}>Back to List</Button></Col>
            </Row>
          )} >
            <Card type="inner" title={'About Job'}> 
              <ReadOnlyField label="Posted Date" value={moment(parseInt(selectedJob.updatedAt)).format("DD/MM/YYYY")} /> 
              <ReadOnlyField label="Employment Type" value={selectedJob.employment_type?.type} /> 
              <ReadOnlyField label="Experience" value={`${selectedJob.experience?.min}${selectedJob.experience?.max ? ' to '+ selectedJob.experience?.max : '+'} ${selectedJob.experience?.duration}`} /> 
              <ReadOnlyField label="Location" value={selectedJob.location} /> 
              <ReadOnlyField label="Offered Salary" value={
                <Row>
                  { selectedJob?.resource_pay?.map(pay => (
                      <Col span={8} key={pay}>{`${pay.min}${pay.max ? ' to '+ pay.max : '+'} ${pay.currency}`}</Col>
                    )) 
                  }
                </Row>
              } />
              <ReadOnlyField label="Must Have Skills" value={
                <Row>
                  { selectedJob?.key_skills?.map(skill => (
                      <Col span={2} key={skill}>{skill.skill}</Col>
                    )) 
                  }
                </Row>}  
              />  
              </Card>  
              <Card
                style={{ marginTop: 16 }}
                type="inner"
                title="Job Description" 
                bordered = {false}
              > 
                  <ReadOnlyField label="Objective" spanSize={24} value={selectedJob.objectives} /> 
                  <ReadOnlyField label="Roles and Responsibilties" spanSize={24} >
                    {selectedJob.responsibilities ? (
                      <List
                        size="small" 
                        bordered
                        dataSource={selectedJob.responsibilities}
                        renderItem={item => <List.Item>{item}</List.Item>}
                      />   
                    ) : null}
                    
                  </ReadOnlyField>  
                  <ReadOnlyField label="Required Skills" spanSize={24} value={
                    <Row>
                      { selectedJob?.key_skills?.map(skill => (
                          <Col span={2} key={skill}>{skill.skill}</Col>
                        )) 
                      }
                    </Row>}  
                  /> 
                  <ReadOnlyField label="Good to have skills" spanSize={24} >
                    <List
                      size="small" 
                      bordered
                      dataSource={selectedJob.desired_skills}
                      renderItem={item => <List.Item>{item}</List.Item>}
                    /> 
                  </ReadOnlyField> 
                  <ReadOnlyField label="Education" spanSize={24} >
                    {selectedJob.education ? (
                      <List
                        size="small" 
                        bordered
                        dataSource={selectedJob.education}
                        renderItem={item => <List.Item>
                          <List.Item.Meta
                            avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                            title={<a href="https://ant.design">{item.degree}</a>}
                            description= {item.speciality}
                          />
                        </List.Item>}
                      />   
                    ) : null}
                    
                  </ReadOnlyField>  
              </Card>
               {/* 
               
               
                
            </Card>
            <Card
              style={{ marginTop: 16 }}
              type="inner"
              title="Job Description" 
              bordered = {false}
            > 
            </Card> */}
          </Card>
 
         </>
      ) : <div>Loading....</div>
      }

    </React.Fragment>

  );
}

export default JobDetails;