import { AudioOutlined } from '@ant-design/icons';
import { Col, List, Row, Select, Input } from 'antd';
import moment from 'moment';
import React, { useContext, useState, useEffect } from 'react';
import { Outlet, useNavigate, useParams } from "react-router-dom";

import JobCardComponent from './JobCardComponent';
import { AppContext } from '../../../AppContext'; 

function RecruiterJobs() {
  const { state } = useContext(AppContext);

  const sortList = () => {
    return state.jobs.sort((a, b) => {
      var aCat = a.status + moment(a.created_at, 'DD/MM/YYYY');
      var bCat = b.status + moment(b.created_at, 'DD/MM/YYYY');
      return (aCat > bCat ? 1 : aCat < bCat ? -1 : 0);
    })
  }
  useEffect(() => {
    const joblist = state.jobs.filter((job) => {
      return job.status === 'Active';
    });
    setJobslist(joblist);
    setOriginalJobslist(joblist);
  }, [state.jobs]);

  const [jobsList, setJobslist] = useState(sortList); 
  const [originalJobsList, setOriginalJobslist] = useState(sortList); 
  let params = useParams();
  let navigate = useNavigate(); 
  const { Search } = Input;

  const suffix = (
    <AudioOutlined
      style={{
        fontSize: 16,
        color: '#1890ff',
      }}
    />
  );

  const onSearch = value => {
    const data = originalJobsList.filter(job => { 
      return job.title.search(value) !== -1 || job.key_skills.includes(value);
    })
    setJobslist(data);
    console.log(data);
  }

  const onChange = ({ target }) => {
    if(target.value === '') {
      setJobslist(originalJobsList);
    }
  }
  return (
    <>
      <Outlet /> 
      <Row style={{margin: 20}}>
        <Col span={16}  push={4}> 
            <Search
              placeholder="input search text"
              enterButton
              size="large"
              allowClear
              suffix={suffix}
              onChange={onChange}
              onSearch={onSearch}
            /> 
        </Col>
      </Row>
      <List
        itemLayout="horizontal"
        grid={{
          gutter: 20,
          lg: 3,
          xl: 3,
          xxl: 3,
        }}
        dataSource={jobsList}
        renderItem={item => (
          <List.Item key={item.title} >
            <JobCardComponent key={item.title} job={item} clickTitleAction={() => navigate(`/recruiters/jobs/details/${item.id}`)} />
          </List.Item>
        )}
      />
    </>
  );
}

export default RecruiterJobs;