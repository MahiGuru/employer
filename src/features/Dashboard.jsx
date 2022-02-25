import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Employer from './employers/EmployerLayout';
import Recruiter from './recruiters/RecruiterLayout';

function Dashboard(props) {
    return ( 
        <Routes> 
            <Route exact path="" element={<Navigate to="employer" />}></Route>
            <Route exact path="employer/*" element={<Employer />}></Route>
            <Route path="recruiter" element={<Recruiter />}></Route>
            <Route
                path="*"
                element={
                    <main style={{ padding: "1rem" }}>
                        <p>There's nothing here!</p>
                    </main>
                }
            />
        </Routes>  
    );
}

export default Dashboard;