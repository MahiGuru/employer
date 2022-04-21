import React, { useState, useEffect } from 'react';
import { List, message, Avatar, Card, Row, Col, Typography, Button, Space, Popconfirm } from 'antd';
import VirtualList from 'rc-virtual-list';
import { CheckOutlined } from '@ant-design/icons';
import { date } from '../../../utils/dateUtils';
import { recruiterFirmsData } from '../../../utils/shared/dummy_data/interested_recruiters';
const { Title, Paragraph, Text, Link } = Typography;


const fakeDataUrl =
  'https://randomuser.me/api/?results=20&inc=name,gender,email,nat,picture&noinfo';
const ContainerHeight = 400;

const EmployerRecruiterFirms = () => {
  const [recruiterFirms, setRecruiterFirms] = useState([]); 

  const appendData = () => {
    fetch(fakeDataUrl)
      .then(res => res.json())
      .then(body => {
        setRecruiterFirms([...body.results]);
        console.log(recruiterFirmsData, body.results);
      });
  };

  useEffect(() => {
    // appendData();
    
    const result = recruiterFirmsData.reduce(function (r, a) {
        const key = a.job.title || 'others';
        r[key] = r[key] || [];
        r[key].push(a);
        return r;
    }, Object.create(null)); 
    setRecruiterFirms({ ...result }); 
  }, []);

  const onScroll = e => {
    // if (e.target.scrollHeight - e.target.scrollTop === ContainerHeight) {
    //   appendData();
    // }
  };

  return ( 
    <Card title=""  >
      { 
        Object.keys(recruiterFirms).map((recruiter, index) => { 
          return (
            <List
              itemLayout="horizontal"
              dataSource={recruiterFirms[recruiter]}
              style={{ textAlign: 'left' }}
              key={`${recruiter}-${index}`}
              renderItem={item => (
                <List.Item> 
                  {console.log("item ", item)}
                  <List.Item.Meta
                    avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                    title={<> {item?.firm?.name} </>}
                    description={
                      <Space direction='vertical'>
                        <Text>
                          {item.about}
                        </Text>
                        <Space>
                          <Text strong>Applying for Position:</Text>
                          <Text code>{item?.job?.title}</Text>
                        </Space>
                        <Space>
                          <Text strong>Available Profiles:</Text>
                          <Text code>{item.firm?.bench_resources}</Text>
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

export default EmployerRecruiterFirms;