import React, {useState} from 'react';
import './App.css';
import 'antd/dist/antd.css';
import './Layout.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import { DatePicker } from 'antd';

import { Layout } from 'antd';
import HeaderComponent from './Layout/Header';

const { Footer, Sider, Content } = Layout;

function App() {
  const [checked, setChecked] = useState(false);
  const [date, setDate] = useState(new Date());
  return (
    <Router>
      <Layout>
          <HeaderComponent></HeaderComponent> 
            
      </Layout> 
    </Router>
  );
}

export default App;
