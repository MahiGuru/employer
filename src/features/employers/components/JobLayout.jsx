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

function JobOutlet(props) {
  let params = useParams();
  return (
    <> 
      <Outlet /> 
    </>
  );
}

export default JobOutlet;