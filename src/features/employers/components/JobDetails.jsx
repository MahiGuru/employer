import React from 'react';
import { useParams } from 'react-router-dom';
 

function JobDetails(props) {
  let params = useParams();
  
    return (
        <>
           <h3>Job Details here... {params.jobId}</h3>
        </>
    );
}

export default JobDetails;