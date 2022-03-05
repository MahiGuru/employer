import { FilterOutlined } from '@ant-design/icons';
import { Button, Col, List, Popover, Row, Select } from 'antd';
import moment from 'moment';
import React, { useState } from 'react';
import { Outlet, useNavigate, useParams } from "react-router-dom";
import './Jobs.css';

import { jobsData } from '../../../utils/shared/dummy_data/jobs_data';
import JobCard from './JobCard';
import FilterJobs from './FilterJobs';

const {Option} = Select;

function JobsList() {
  const [jobsList, setJobslist] = useState(jobsData); 

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
    {id: 1, name: 'Week ago', value:'week'},
    {id: 2, name: 'Month ago', value:'month'},
    {id: 4, name: 'Year ago', value:'year'}
  ]


  const onStatusChange = (status) => {  
    let list = jobsData.filter(job => { 
      return job["status"] === status
    }); 
    if(status === 'All') { list = jobsData}
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
    let list = jobsData.filter(job => {  
      var dateB = moment(job.posted_at, 'DD/MM/YYYY');
      const diff = dateA.diff(dateB, 'days');
      return diff <= daysDiff;
    }); 
    setJobslist(list);
  }
  const onFilterBtnClick = (filterVal) => {
    console.log("FilterVal", filterVal);
  }

  return (
    <>
      <h2>{params.jobId}</h2>
      <Outlet /> 
      
      <Row justify="center">
        <Col span={20}>
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
              <Button htmlType="button" onClick={() => navigate('/employer/jobs/create')}>
                Create Job
              </Button>
          </Col>
        </Row> <br /> 
         
          <List
            itemLayout="horizontal"
            grid={{
              gutter: 20,
              xs: 3,
              sm: 3,
              md: 3,
              lg: 3,
              xl: 3,
              xxl: 3,
            }}
            dataSource={jobsList}
            renderItem={item => (
              <List.Item key={item.title}>
                 <JobCard job={item} />
              </List.Item>
            )}
          />
        </Col>
      </Row>
    </>
  );
}

export default JobsList;