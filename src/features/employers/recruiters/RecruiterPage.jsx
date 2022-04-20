import React, { useState, useEffect } from 'react';
import { List, message, Avatar, Card, Row, Col, Typography, Button, Space, Popconfirm } from 'antd';
import VirtualList from 'rc-virtual-list';
import { CheckOutlined } from '@ant-design/icons';
import { date } from '../../../utils/dateUtils';
const { Title, Paragraph, Text, Link } = Typography;


const fakeDataUrl =
  'https://randomuser.me/api/?results=20&inc=name,gender,email,nat,picture&noinfo';
const ContainerHeight = 400;

const EmployerRecruiters = () => {
  const [data, setData] = useState([]);

  const appendData = () => {
    fetch(fakeDataUrl)
      .then(res => res.json())
      .then(body => {
        setData([...body.results]);
        console.log(data, body.results); 
      });
  };

  useEffect(() => {
    appendData();
  }, []);

  const onScroll = e => {
    // if (e.target.scrollHeight - e.target.scrollTop === ContainerHeight) {
    //   appendData();
    // }
  };
  const ref = React.useRef();

  return (

    <Row justify="center" style={{ margin: 20 }}>
      <Col span={16} align="start">
        <Card title=""  >
        <Title>Interested Recruiters</Title>
          <List
            itemLayout="horizontal"
            dataSource={data}
            renderItem={item => (
              <List.Item>
                <List.Item.Meta
                  avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                  title={<a href="https://ant.design">{item.name.first} {item.name.last}</a>}
                  description={ 
                    <>
                    <Row justify='start'>
                      <Col style={{paddingRight:20, fontWeight: 'bold'}}>Interested Position:</Col>
                      <Col>Full stack developer</Col>
                    </Row> 
                    <Row justify='start'>
                      <Col style={{paddingRight:20, fontWeight: 'bold'}}>Applied at:</Col>
                      <Col>{date.getDateWithFormat()}</Col>
                    </Row> 
                    </>
                  }
                /> 
                <Space> 
                  <Button
                    type="primary" 
                    shape="round"
                    icon={<CheckOutlined />} 
                    onClick={() => {}}
                  >
                    Accept
                  </Button>
                  <Popconfirm placement="top" title={'Are you sure you want to delete?'} onConfirm={() => {message.info('Clicked on Yes.');}} okText="Yes" cancelText="No">
                  <Button  type="dashed" danger>Reject</Button> 
                  </Popconfirm>
                </Space>
              </List.Item>
            )}
          />
        </Card>
      </Col>
    </Row>
  );
};

export default EmployerRecruiters;