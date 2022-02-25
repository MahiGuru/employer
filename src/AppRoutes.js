import React from 'react';
import { Navigate, Outlet, useRoutes } from 'react-router-dom';
import DashboardLayout from './Layout/DashboardLayout';
import JobDetails from './features/employers/components/JobDetails'; 
import JobsList from './features/employers/components/JobsList';
import PostJob from './features/employers/components/PostJob';
import EmployerLayout from './features/employers/EmployerLayout';
import Recruiter from './features/recruiters/RecruiterLayout';
import Nomatch from './Nomatch';

function AppRoutes(props) {  
    const appRoutes = {
        path: "/",
        element: <DashboardLayout />,
        children: [
          { index: true, element: <EmployerLayout /> },
          {
            path: "/employer",
            element: <EmployerLayout />,
            children: [
              { path: '',   element: <Navigate to='jobs' />},
              { path: "jobs", 
                element: <Outlet />,
                children : [
                    { path: "list", element: <JobsList /> },        
                    { path: "create", element: <PostJob /> },        
                    { path: "details/:id", element: <JobDetails /> },        
                ]
              },
              
            ],
          },
          {
              path: "/recruiter",
              element: <Recruiter />,
          },
          
          {
            path: "",
            element: <Navigate to="/employer" />
          },
          { path: "*", element: <Nomatch /> },
        ]
    }

    // const defaultRoute = {
    //     path : "",
    //     element: <Navigate to="/employer" />
    // }

    // const mainRoutes = {
    //     path: '/',
    //     element: <Dashboard />,
    //     children: [
    //       {path: '404', element: <Nomatch />},
    //       {path: '', element: <Navigate to='employer' />},
    //     ],
    //   };
    
    //   const employerRoutes = {
    //     path: 'employer',
    //     element: <EmployerLayout />,
    //     children: [
    //       {path: '', element: <Navigate to='jobs' />}
    //     ],
    //   };
      
    //   const JobRoutes = {
    //     path: 'jobs',
    //     element: <JobOutlet />,
    //     children: [
    //       {path: '*', element: <Navigate to='/404' />},
    //       {path: '/', element: <Navigate to='list' />},
    //       {path: ':id', element: <JobDetails />},
    //       {path: 'add', element: <PostJob />},
    //       {path: 'list', element: <JobsList />},
    //     ],
    //   };
    
    const routing = useRoutes([appRoutes]);  
    return (
        <>
            {routing}
        </>
    );
}

export default AppRoutes;