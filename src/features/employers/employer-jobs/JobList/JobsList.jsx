import { AppstoreOutlined, FilterOutlined } from '@ant-design/icons';
import { Button, Col, List, Popover, Row, Select, Space } from 'antd';
import moment from 'moment';
import React, { useContext, useState, useEffect, useMemo } from 'react';
import { Outlet, useNavigate, useParams } from "react-router-dom";
import '../Jobs.css';
 
import JobCardComponent from './JobCardComponent';   
import { useLazyQuery, useMutation, useQuery } from '@apollo/client';  
import { AppContext } from 'AppContext';
import FilterJobs from '../FilterJob/FilterJobs';   
import { EDUCATION_BY_ID, EDUCATION_LIST_QUERY } from 'services/graphql/querys/education-query';
import { ADD_ALL_JOBS_MUTATION, ADD_JOB_MUTATION, UPDATE_JOB_MUTATION } from 'services/graphql/querys/job-query';
import { JOB_LIST_QUERY } from './../../../../services/graphql/querys/job-query';
import { AllJobsData } from './../../../../utils/shared/dummy_data/jobsData';

const {Option} = Select;

function JobsList() {  
  const {state, dispatch} = useContext(AppContext);
  const [jobsList, setJobslist] = useState([]); 
  
  const [AddJobs] = useMutation(ADD_ALL_JOBS_MUTATION);
  const [AddJob] = useMutation(ADD_JOB_MUTATION);
  const [loadJobs] = useLazyQuery(JOB_LIST_QUERY);
  const [loadEducation] = useLazyQuery(EDUCATION_BY_ID);


  useEffect(() => { 
    (async () => {
      console.log("state ", state);
      console.log("update use effet BEFORE", state.jobs);

      // Get Jobs
      const jobs = await loadJobs({}); 
      console.log("jobs.data.jobs ", jobs.data.jobs);
      dispatch({type: 'JOB_LIST', payload: jobs.data.jobs}); 
      setJobslist(jobs.data.jobs);
    })();
    console.log("AFTER  use effet ", state.job_list, jobsList); 
    
  }, []);
 
  // setJobslist(state.job_list && state.job_list.filter((job) => {
  //   return !job.isDeleted;
  // })); 
  // const sortList = () => {
  //   return state.job_list.sort((a, b) => { 
  //     var aCat = a.status + moment(a.createdAt, 'DD/MM/YYYY');
  //     var bCat = b.status + moment(b.createdAt, 'DD/MM/YYYY');
  //     return (aCat > bCat ? 1 : aCat < bCat ? -1 : 0); 
  //   });
  // } 
  //     console.log("state ", state);
  console.log("jobsList >>>> ", jobsList);
   
  
  
  let params = useParams();
  let navigate = useNavigate();
  
  const statusJobs = [
    {id: 0, name: 'All'},
    {id: 1, name: 'Completed'},
    {id: 2, name: 'Active'},
    {id: 3, name: 'Hold'}
  ];

  
  const daysList = [
    {id: 0, name: 'Today', value:'today'},
    {id: 1, name: 'Week', value:'week'},
    {id: 2, name: 'Month', value:'month'},
    {id: 4, name: 'Year', value:'year'}
  ]


  const onStatusChange = (status) => {  
    let list = state.job_list.filter(job => { 
      return job["status"] === status
    }); 
    if(status === 'All') { list = state.job_list}
    setJobslist(list) 
  }
  const onDateChange = (val) => {
    let dateA;
    let daysDiff = 0;
    switch(val) {
      case 'today':
        dateA = moment();
        daysDiff = 1;
        break;
      case 'week':
        dateA = moment().subtract(7);
        daysDiff = 7;
        break;
      case 'month':
        dateA = moment().subtract(30);
        daysDiff = 30;
        break;
      case 'year':
        dateA = moment().subtract(365);
        daysDiff = 365;
        break;
      default:
        break;
    } 
    let list = state.job_list.filter(job => {
      // const diff = getDateDifference(new Date(), job.created_at, 'months');
      var dateB = moment(job.created_at, 'DD/MM/YYYY');
      const diff = dateA.diff(dateB, 'days');
      console.log("diff <= daysDiff  ", diff <= daysDiff)
      return diff <= daysDiff;
    }); 
    setJobslist(list);
  }
  const onFilterBtnClick = (filterVal) => {
    console.log("FilterVal", filterVal);
  }

  const addJob = async () => {
    const { loading, error, data } = await AddJob({
      variables: { 
        "input": {
          "title": "Sql Developer",
          "employer": {
            "name": "Educate",
            "isActive": true,
            "logo_url": "https://www.educate.com"
          },
          "experience": {
            "min": 6,
            "max": 9,
            "duration": 'YEARS'
          },
          "location": "Bangalore",
          "job_description_html": "<h2>Director </h2>",
          "expect_joining": "2022-12-22",
          "job_description": "Web application development",
          "objectives": ["As a developer, need to develope new/existing web applications"],
          "key_skills": [
            {
              "skill": "Director",
              "desiredSkill": "People management",
              "requiredSkill": "Client handling and management"
            }
          ],
          "responsibilities": [
            {
              "responsibility": "Maintain and responsible for application development"
            }
          ],
          "required_skills": ["Associate developer with .NET 5"],
          "desired_skills": undefined,
          "resource_pay": [
            {
              "min": 6,
              "max": 7,
              "currency_type": "RUPEE",
              "currency": "LAKHS"
            }
          ],
          "employment_type": {
            "type": "Fulltime Employee"
          },
          "education": [
            {
              "degree": "BSC",
              "startDate": "2012-05-05",
              "speciality": "Electronics",
              "endDate": "2015-05-05"
            }
          ],
          "status": "Active",
          "interviewer": [
            {
              "name": "Mallik",
              "title": "Architect",
              "about": "Having 10+ years of experience in web development and nodejs application.",
              "currentJob": "Resource manager and lead software eng", 
            }
          ],
          "recruiters": [
            {
              "name": "Talent Resource panel",
              "about": "Talent will take care of all kind of recruiting services",
              "status": true
            }
          ],
          "ratings": 5,
          "comments": "Job with lot of benifits",
          "isDeleted": null,
          "like": [
            {
              "like": "4"
            }
          ],
          "review": [
            {
              "comment": "JOB with reviews",
              "rating": 5
            }
          ]
        }
      }
    });  
    console.log("Add JOB \n\n\n\n\n", data, loading, error);
  }
  const addAllJobs = async () => {
    const { loading, error, data } = await AddJobs({
      variables: { 
        "input":  AllJobsData
      }
    });  
  }


  return (
    <>
      <h2>{params.jobId}</h2>
      <Outlet /> 
       
       
        <Row>
          <Col flex="100px">
            <Popover placement="bottomLeft" title={'Search'} content={<FilterJobs onStatusChange={onStatusChange} onFilterBtnClick={onFilterBtnClick} />} trigger="click">
              <Button><FilterOutlined /> Filter</Button>
            </Popover>
          </Col>
          <Col >
              <Select defaultValue="Active"  onChange={onStatusChange}>
                  {statusJobs.map(status => <Option key={'status'+status.id} value={status.name}>{status.name}</Option> )} 
              </Select>
          </Col>
          <Col>
              <Select defaultValue="Today"  onChange={onDateChange}>
                  {daysList.map(days => <Option key={'days'+days.id} value={days.value}>{days.name}</Option> )} 
              </Select>
          </Col>
          <Col flex="auto" align="end">
            <Space size={[10, 10]}>
                <AppstoreOutlined /> | 
                {/* <Button htmlType="button" onClick={() => navigate('/employer/jobs/create')}> */}
                <Button htmlType="button" onClick={addJob}>
                  Create Job
                </Button>

                <Button htmlType="button" onClick={addAllJobs}>
                  Create All Jobs
                </Button>
              </Space>
          </Col>
        </Row> <br /> 
         
          <List
            itemLayout="horizontal"
            grid={{ gutter: 20, 
              lg: 3,
              xl: 3,
              xxl: 3,
            }}
            dataSource={jobsList}
            renderItem={item => (
              <List.Item key={item.title} >
                 <JobCardComponent job={item} clickTitleAction={() => navigate(`/employer/jobs/details/${item.id}`)}/>
              </List.Item>
            )}
          /> 
    </>
  );
}

export default JobsList;