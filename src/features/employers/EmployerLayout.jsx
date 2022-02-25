import Layout from 'antd/lib/layout/layout';
import React from 'react';
import HeaderComponent from '../../components/Header'; 
import {
    Routes,
    Route,
    Navigate,
    useRoutes, 
  } from "react-router-dom"; 
import Jobs from './components/JobLayout';
import JobDetails from './components/JobDetails';
import PostJob from './components/PostJob';
import JobsList from './components/JobsList'; 
import JobOutlet from './components/JobLayout';

  
function Employer(props) {
    // let employeRoutes = useRoutes(EmployeRoutes);
    return (
        <Layout>
            <HeaderComponent></HeaderComponent> 
            <Routes> 
                <Route index element={<JobOutlet />}></Route>
                <Route path="jobs/*" element={<JobOutlet />}>
                    <Route path="list" element={<JobsList />} />
                    <Route path="details/:jobId" element={<JobDetails />} />
                </Route>
                <Route path="postjob" element={<PostJob />}></Route>
                <Route
                    path="*"
                    element={
                        <main style={{ padding: "1rem" }}>
                        <p>There's nothing here in employer layout!</p>
                        </main>
                    }
                    />
            </Routes>  
        </Layout>
    );
}

export default Employer;