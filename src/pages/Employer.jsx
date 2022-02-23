import Layout, { Footer } from 'antd/lib/layout/layout';
import React from 'react';
import HeaderComponent from '../Layout/Header';
import JobList from './JobList';

function Employer(props) {
    return (
        <>
            <Layout>
                <HeaderComponent></HeaderComponent> 
                
                <JobList />
                <Footer>Footer</Footer>
            </Layout>
        </>
    );
}

export default Employer;