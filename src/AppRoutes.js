import React from 'react';
import { Navigate, Outlet, useRoutes } from 'react-router-dom';  
import Nomatch from './Nomatch'; 
import MasterLayout from './features/employers/layout/EmployerLayout';  
import PostJob from './features/employers/employer-jobs/CreateJobs/CreateJob'; 
import JobDetails from './features/employers/employer-jobs/jobDetail/JobDetails';
import JobsList from './features/employers/employer-jobs/JobList/JobsList';
import EmployerRecruiters from './features/employers/employer-recruiters/RecruiterList';
import EmployerInterviewer from './features/employers/employer-interviewers/InterviewerPage';
import EmployerInterviewerDetails from './features/employers/employer-interviewers/InterviewerDetails';
import EmployerRecruiterFirmDetails from './features/employers/employer-recruiters/RecruiterFirmDetails';
import EmployerRecruiterFreelancerDetails from './features/employers/employer-recruiters/RecruiterFreelancerDetails';
import RecruiterLayout from './features/recruiters/layout/RecruiterLayout';
import RecruiterJobs from './features/recruiters/Job/JobsList';
import RecruiterInterviewerDetails from './features/recruiters/recruiter-interviewers/InterviewerDetails';
import RecruiterInterviewer from './features/recruiters/recruiter-interviewers/InterviewerPage';
import RecruiterJobDetails from './features/recruiters/Job/JobDetails'; 
import RecruiterFirmDetails from './features/recruiters/RecruiterFirmDetails';
import RecruiterFreelancerDetails from './features/recruiters/RecruiterFreelancerDetails';


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
          { path: "recruiters", 
            element: <Outlet />,
            children : [
                { path: '',   element: <Navigate to='list' />},                
                { path: "list", element: <EmployerRecruiters /> },
                { path: "job/:jobId", element: <EmployerRecruiters /> },
                { path: "firm-details/:recruiterId", element: <EmployerRecruiterFirmDetails /> },  
                { path: "details/:recruiterId", element: <EmployerRecruiterFreelancerDetails /> },  
                { path: "*", element: <Nomatch /> },      
            ]
          }, 
          { path: "interviewers", 
            element: <Outlet />,
            children : [
                { path: '',   element: <Navigate to='list' />},
                { path: "list", element: <EmployerInterviewer /> },        
                { path: "details/:interviewerId", element: <EmployerInterviewerDetails /> },  
                { path: "*", element: <Nomatch /> },      
            ]
          }
        ],
    },
    {
      path: "/recruiters",
      element: <RecruiterLayout />,
      children: [
        { path: '',   element: <Navigate to='jobs' />}, 
        { path: "firm-details/:recruiterId", element: <RecruiterFirmDetails /> },  
        { path: "details/:recruiterId", element: <RecruiterFreelancerDetails /> },  

        { path: "jobs", 
            element: <Outlet />,
            children : [
                { path: '',   element: <Navigate to='list' />},
                { path: "list", element: <RecruiterJobs /> },                
                { path: "details/:id", element: <RecruiterJobDetails /> },  
                { path: "*", element: <Nomatch /> },      
            ]
        }, 
        
        { path: "interviewers", 
          element: <Outlet />,
          children : [
              { path: '',   element: <Navigate to='list' />},
              { path: "list", element: <RecruiterInterviewer /> },        
              { path: "details/:interviewerId", element: <RecruiterInterviewerDetails /> },  
              { path: "*", element: <Nomatch /> },      
          ]
        }        
      ]
    },
  
    {
      path: "",
      element: <Navigate to="/recruiters" />
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