import React from 'react';
import { Navigate, Outlet, useRoutes } from 'react-router-dom'; 
import JobDetails from './features/employers/jobs/JobDetails'; 
import JobsList from './features/employers/jobs/JobsList';
import PostJob from './features/employers/jobs/CreateJob';  
import Nomatch from './Nomatch';
import SuccessJob from './features/employers/jobs/components/SuccessJob'; 
import MasterLayout from './layouts/MasterLayout';
import Recruiter from './features/employers/recruiters/RecruiterPage';
import Interviewer from './features/employers/interviewers/InterviewerPage';
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