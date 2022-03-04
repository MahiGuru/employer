import { CheckCircleOutlined, FilterOutlined } from '@ant-design/icons';
import { Avatar, Badge, Button, Card, Col, Descriptions, Divider, List, Rate, Row, Space, Tag } from 'antd';
import Title from 'antd/lib/skeleton/Title';
import React from 'react';
import { Outlet, useNavigate, useParams } from "react-router-dom";

import { jobsData } from '../../../utils/shared/dummy_data/jobs_data';


function JobsList() {
  let params = useParams();

  let navigate = useNavigate();

  return (
    <>
      <h2>{params.jobId}</h2>
      <Outlet /> 
      
      <Row justify="center">
        <Col span={20}>
        <Row>
          <Col flex="100px"><FilterOutlined /> Filter</Col>
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
            dataSource={jobsData}
            renderItem={item => (
              <List.Item>
                <Badge.Ribbon text={item.status} color={item.status === 'Completed' ? 'green' : item.status === 'Hold' ? 'red' : 'blue'}>
                  <Card title={item.title}>
                    <Descriptions column={4}>
                      <Descriptions.Item label="Posted on" span={4}>23/02/2022</Descriptions.Item>
                      <Descriptions.Item label="Experiece" span={4}>{item.experience}</Descriptions.Item>
                      <Descriptions.Item label="No of profile Received" span={4}>
                          <Tag color={item.recruiters.applied ? "processing": 'magenta'}>
                            {item.recruiters.applied ? item.recruiters.applied : 0}
                          </Tag>
                      </Descriptions.Item>
                      <Descriptions.Item label="Ratings" span={4}>
                          <Rate allowHalf defaultValue={item.ratings} />
                      </Descriptions.Item> 
                    </Descriptions> 

                  </Card>
                </Badge.Ribbon>
                {/* <List.Item.Meta
              avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
              title={<a href="https://ant.design">{item.title}</a>}
              description="Ant Design, a design language for background applications, is refined by Ant UED Team"
            />

            <Link
              style={{ display: "block", margin: "1rem 0" }}
              to={`/employer/jobs/details/${item.id}`}
              key={item.id}
            > CLICK HERE {item.id}
            </Link> */}
              </List.Item>
            )}
          />
        </Col>
      </Row>
    </>
  );
}

export default JobsList;