import { AppstoreOutlined, FilterOutlined } from '@ant-design/icons';
import { Button, Col, List, Popover, Row, Select, Space } from 'antd';
import moment from 'moment';
import React, { useContext, useState, useEffect } from 'react';
import { Outlet, useNavigate, useParams } from "react-router-dom";
import '../Jobs.css';
 
import JobCardComponent from './JobCardComponent';  
import FilterJobs from '../FilterJob/FilterJobs';
import { AppContext } from '../../../../AppContext'; 

const {Option} = Select;

function JobsList() {  
  const {state} = useContext(AppContext);
 
  const sortList = () => {
    return state.jobs.sort((a, b) => { 
      var aCat = a.status + moment(a.created_at, 'DD/MM/YYYY');
      var bCat = b.status + moment(b.created_at, 'DD/MM/YYYY');
      return (aCat > bCat ? 1 : aCat < bCat ? -1 : 0); 
    })
  }
  useEffect(() => {
    setJobslist(state.jobs.filter((job) => {
      return !job.isDeleted;
    }))
  }, [state.jobs]);
  const [jobsList, setJobslist] = useState(sortList); 
  console.log(state);
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
    let list = state.jobs.filter(job => { 
      return job["status"] === status
    }); 
    if(status === 'All') { list = state.jobs}
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
    let list = state.jobs.filter(job => {
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
                <Button htmlType="button" onClick={() => navigate('/employer/jobs/create')}>
                  Create Job
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