import { Avatar, List } from 'antd';
import React from 'react';
import { Outlet, useParams } from "react-router-dom";
import {
  Link
} from "react-router-dom";

const data = [
  {
    id: 1,
    title: 'Ant Design Title 1',
  },
  {
    id: 2,
    title: 'Ant Design Title 2',
  },
  {
    id: 3,
    title: 'Ant Design Title 3',
  },
  {
    id: 4,
    title: 'Ant Design Title 4',
  },
];

function JobsList(props) {
  let params = useParams();
  return (
    <>
      <h2>{params.jobId}</h2>
      <Outlet />
      <List
        itemLayout="horizontal"
        dataSource={data}
        renderItem={item => (
          <List.Item>
            <List.Item.Meta
              avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
              title={<a href="https://ant.design">{item.title}</a>}
              description="Ant Design, a design language for background applications, is refined by Ant UED Team"
            />

            <Link
              style={{ display: "block", margin: "1rem 0" }}
              to={`/employer/jobs/details/${item.id}`}
              key={item.id}
            > CLICK HERE {item.id}
            </Link>
          </List.Item>
        )}
      />
    </>
  );
}

export default JobsList;