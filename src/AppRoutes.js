import React from 'react';
import { Navigate, Outlet, useRoutes } from 'react-router-dom';
import DashboardLayout from './Layout/DashboardLayout';
import JobDetails from './features/employers/components/JobDetails'; 
import JobsList from './features/employers/components/JobsList';
import PostJob from './features/employers/components/PostJob';
import EmployerLayout from './features/employers/EmployerLayout';
import Recruiter from './features/recruiters/RecruiterLayout';
import Nomatch from './Nomatch';
import SuccessJob from './features/employers/components/SuccessJob';
import Interviewer from './features/interviewers/InterviewerLayout';

function AppRoutes(props) {  
    const appRoutes = [{
        path: "/",
        element: <DashboardLayout />,
        children: [ 
          { path: '',   element: <Navigate to='employer' />},
          {
            path: "employer",
            element: <EmployerLayout />,
            children: [
              { path: '',   element: <Navigate to='jobs' />},
              { path: "jobs", 
                element: <Outlet />,
                children : [
                    { path: '',   element: <Navigate to='list' />},
                    { path: "list", element: <JobsList /> },        
                    { path: "create", element: <PostJob /> },        
                    { path: "success", element: <SuccessJob /> },        
                    { path: "details/:id", element: <JobDetails /> },        
                ]
              },
              {
                path: "recruiters",
                element: <Recruiter />,
              },
              {
                  path: "interviewers",
                  element: <Interviewer />,
              },
            ],
          }
           
        ]
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