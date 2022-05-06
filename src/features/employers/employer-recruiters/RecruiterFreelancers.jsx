import React, { useState, useEffect } from 'react';
import { List, message, Avatar, Card, Typography, Button, Space, Popconfirm } from 'antd';
import { CheckOutlined } from '@ant-design/icons';
import { freelanceRecruitersData } from '../../../utils/shared/dummy_data/interested_recruiters';
import { useNavigate } from 'react-router-dom';
const { Text } = Typography;


// const fakeDataUrl =
//   'https://randomuser.me/api/?results=20&inc=name,gender,email,nat,picture&noinfo';
// const ContainerHeight = 400;

const EmployerRecruiterFreelancers = ({ jobId }) => {
  const [freelanceRecruiters, setFreelanceRecruiters] = useState([]);
  let recruitersData = [];
  // const appendData = () => {
  //   fetch(fakeDataUrl)
  //     .then(res => res.json())
  //     .then(body => { 
  //       console.log(recruiterFirmsData, body.results); 
  //     });
  // };

  let navigate = useNavigate();
  useEffect(() => {
    if (jobId) {
      recruitersData = freelanceRecruitersData.filter(firms => firms.job.id === parseInt(jobId));
    }
    console.log(recruitersData);
    const result = recruitersData.reduce(function (r, a) {
      const key = a.job.title || 'others';
      r[key] = r[key] || [];
      r[key].push(a);
      return r;
    }, Object.create(null));
    setFreelanceRecruiters({ ...result })
  }, []);

  return (
    <Card title=""  >
      {
        Object.keys(freelanceRecruiters).map((recruiter, index) => {
          return (
            <List
              itemLayout="horizontal"
              dataSource={freelanceRecruiters[recruiter]}
              style={{ textAlign: 'left' }}
              key={`${recruiter}-${index}`}
              renderItem={item => (
                <List.Item>
                  <List.Item.Meta
                    avatar={
                      <Space direction='vertical' align='middle' style={{ textAlign: 'center' }}>
                        <Avatar src="https://joeschmoe.io/api/v1/random" style={{ height: 80, width: 80 }} />
                        <Button type="dashed" shape="round" icon={<CheckOutlined />} onClick={() => navigate('/employer/recruiters/details/' + item.id)} >
                          View Details
                        </Button>
                      </Space>
                    }
                    title={<> {item.name} </>}
                    description={
                      <Space direction='vertical'>
                        <Text>
                          {item.about}
                        </Text>
                        <Space>
                          <Text strong>Applying for Position:</Text>
                          <Text code>{item.job.title}</Text>
                        </Space>
                        <Space>
                          <Text strong>Available Profiles:</Text>
                          <Text code>{item.avalable_profiles}</Text>
                        </Space>
                      </Space>
                    }
                  />
                  <Space>
                    <Button type="primary" shape="round" icon={<CheckOutlined />} onClick={() => { }} >
                      Accept
                    </Button>
                    <Popconfirm placement="top" title={'Are you sure you want to delete?'} onConfirm={() => { message.info('Clicked on Yes.'); }} okText="Yes" cancelText="No">
                      <Button type="dashed" danger>Reject</Button>
                    </Popconfirm>
                  </Space>
                </List.Item>
              )}
            />
          )
        })
      }
    </Card>
  );
};

export default EmployerRecruiterFreelancers;