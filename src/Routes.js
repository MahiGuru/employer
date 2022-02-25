import { Outlet } from "react-router-dom";
import Dashboard from "./features/Dashboard";
import JobDetails from "./features/employers/components/JobDetails";
import JobsList from "./features/employers/components/JobsList";
import PostJob from "./features/employers/components/PostJob";
import Employer from "./features/employers/EmployerLayout";
import Recruiter from "./features/recruiters/RecruiterLayout";
import Nomatch from "./Nomatch";

export let appRoutes = [
    {
      path: "/",
      element: <Dashboard />,
      children: [
        { index: true, element: <Employer /> },
        {
          path: "/employer",
          element: <Employer />,
          children: [
            {   index: true, element: <JobsList /> },
            {   path: "jobs", element: <Outlet />,
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
        { path: "*", element: <Nomatch /> },
      ],
    }
];