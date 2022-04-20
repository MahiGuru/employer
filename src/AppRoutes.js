import React from 'react';
import { Navigate, Outlet, useRoutes } from 'react-router-dom';  
import Nomatch from './Nomatch'; 
import MasterLayout from './layouts/MasterLayout';  
import PostJob from './features/employers/jobs/CreateJobs/CreateJob'; 
import JobDetails from './features/employers/jobs/jobDetail/JobDetails';
import JobsList from './features/employers/jobs/JobList/JobsList';
import EmployerRecruiters from './features/employers/recruiters/RecruiterPage';
import EmployerInterviewer from './features/employers/interviewers/InterviewerPage';


function AppRoutes(props) {  
    const appRoutes = [{
        path: "/employer",
        element: <MasterLayout />, 
        children: [
          { path: '',   element: <Navigate to='jobs' />},
          { path: "jobs", 
            element: <Outlet />,
            children : [
                { path: '',   element: <Navigate to='list' />},
                { path: "list", element: <JobsList /> },        
                { path: "create", element: <PostJob /> },             
                { path: "details/:id", element: <JobDetails /> },  
                { path: "*", element: <Nomatch /> },      
            ]
          },
          {
            path: "recruiters",
            element: <EmployerRecruiters />,
          },
          {
              path: "interviewers",
              element: <EmployerInterviewer />,
          },
        ],
    },
  
    {
      path: "",
      element: <Navigate to="/employer" />
    },
    { path: "*", element: <Nomatch /> },
  ]

    const routing = useRoutes(appRoutes);  
    return (
        <>
            {routing}
        </>
    );
}

export default AppRoutes;