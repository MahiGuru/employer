import gql from "graphql-tag";

export const JOB_LIST_QUERY = gql` 
    query Jobs {
      jobs {
        id
        title
        employer {
          id
          name
          logo_url
          isActive
        }
        experience {
          id
          min
          max
          duration
        }
        location
        job_description_html
        expect_joining
        job_description
        objectives
        key_skills {
          id
          skill
          desiredSkill
          requiredSkill
        }
        responsibilities {
          id
          responsibility
        }
        required_skills
        desired_skills
        resource_pay {
          id
          min
          max
          currency_type
          currency
        }
        employment_type {
          id
          type
        }
        education {
          id
          degree
          startDate
          speciality
          endDate
        }
        status
        interviewer {
          id
          name
          title
          about
          currentJob
          status 
        }
        recruiters {
          name
          hasFirm
          about
          status 
        }
        isDeleted
        like {
          id
          like
        }
        review {
          id
          comment
          rating
        }
        createdAt
        updatedAt
      }
    } 
`;

export const JOB_BY_ID = gql`
    query Job($jobId: ID!) {
        job(id: $jobId) {
            id
            title
            createdAt
            updatedAt
            location
            education {
              id
              degree
              speciality
              startDate
            }
            employment_type {
              id
              type
            } 
            experience {
              duration
              max
              min
            }
            job_description
            objectives
            resource_pay { 
              currency_type
              min
              max
              currency
            }
            key_skills {
              id
              skill
            }
            desired_skills
            responsibilities {
              id
              responsibility
            }
        }
    }
`;


export const ADD_ALL_JOBS_MUTATION = gql`
    mutation addJobs($input: [JobInput]) {
        addJobs(input: $input) {
            id
            title 
        }
    }
`;

export const ADD_JOB_MUTATION = gql`
    mutation addJob($input: JobInput) {
        addJob(input: $input) {
            id
            title 
        }
    }
`;
export const UPDATE_JOB_MUTATION = gql`
    mutation updateJob($jobId: ID!, $input: JobInput) {
        updateJob(id: $jobId, input: $input) {
            id
            title
            education {
              degree
              endDate
            }
        }
    }
`;