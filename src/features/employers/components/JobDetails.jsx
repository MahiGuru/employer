import React from 'react';
import { useParams } from 'react-router-dom';
 

function JobDetails(props) {
  let params = useParams();
  console.log("Params ", params);
  
    return (
        <>
           <h3>Job Details here... {params.id}</h3>
        </>
    );
}

export default JobDetails;