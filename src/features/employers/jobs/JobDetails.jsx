import { Button, Card, Col, Row, List } from 'antd';
import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { AppContext } from '../../../AppContext';
import ReadOnlyField from './../../../utils/shared/components/ReadOnlyField';
 
function JobDetails(props) { 
  const [selectedJob, setSelectedJob] = useState(1); 
  let { id } = useParams();
  console.log("Params ", id);
  let navigate = useNavigate();

  const { state } = useContext(AppContext); 
  useEffect(() => {
    setSelectedJob(state.jobs.find((job) => job.id == id));
    console.log(id, selectedJob?.responsibilities?.length)
  }, [selectedJob, id, state.jobs]);


  return (
    <React.Fragment >
      {selectedJob ? (
         <>
          <Card  title={selectedJob.title} style={{textAlign: 'left'}} headStyle={{color:'#007584'}} bordered={false} extra={(
            <Row>
              <Col><Button type="primary">Apply Job</Button></Col>
              <Col><Button type="link" onClick={() => navigate(-1)}>Back to List</Button></Col>
            </Row>
          )} >
            <Card type="inner" title={'About Job'}> 
              <ReadOnlyField label="Posted Date" value={selectedJob.created_at} /> 
              <ReadOnlyField label="Experience" value={`${selectedJob.experience?.min}${selectedJob.experience?.max ? ' to '+ selectedJob.experience?.max : '+'} ${selectedJob.experience?.type}`} /> 
              <ReadOnlyField label="Location" value={selectedJob.location} /> 
              <ReadOnlyField label="Offered Salary" value={`${selectedJob.salary?.min}${selectedJob.salary?.max ? ' to '+ selectedJob.salary?.max : '+'} ${selectedJob.salary?.currency}`} /> 
              <ReadOnlyField label="Must Have Skills" value={
                <Row>
                  { selectedJob?.key_skills?.map(skill => (
                      <Col span={2}>{skill}</Col>
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
              <ReadOnlyField label="Objective" spanSize={24} value={selectedJob.job_description} /> 
              <ReadOnlyField label="Roles and Responsibilties" spanSize={24} >
                <List
                  size="small" 
                  bordered
                  dataSource={selectedJob.responsibilities}
                  renderItem={item => <List.Item>{item}</List.Item>}
                />   
              </ReadOnlyField> 
              <ReadOnlyField label="Required Skills" spanSize={24} >
                <List
                  size="small" 
                  bordered
                  dataSource={selectedJob.required_skills}
                  renderItem={item => <List.Item>{item}</List.Item>}
                />   
              </ReadOnlyField> 
              <ReadOnlyField label="Good to have skills" spanSize={24} >
                <List
                  size="small" 
                  bordered
                  dataSource={selectedJob.desired_skills}
                  renderItem={item => <List.Item>{item}</List.Item>}
                /> 
              </ReadOnlyField>  
            </Card>
          </Card>
 
         </>
      ) : <div>Loading....</div>
      }

    </React.Fragment>

  );
}

export default JobDetails;