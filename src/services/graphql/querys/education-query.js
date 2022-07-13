import gql from "graphql-tag";

export const EDUCATION_LIST_QUERY = gql` 
    query Educations {
        educations {
            id
            degree
            speciality
            startDate
            endDate
        }
    } 
`;

export const EDUCATION_BY_ID = gql`
    query Education($educationId: ID!) {
        education(id: $educationId) {
            id
            degree
            speciality
            startDate
            endDate
        }
    }
`;