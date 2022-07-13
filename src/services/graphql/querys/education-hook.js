import { useQuery } from '@apollo/client';
import { useContext } from 'react'; 
import { AppContext } from '../../../AppContext';
import { gql } from '@apollo/client';


export function useEducationQuery(query) {
    const educationQuery = gql` 
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
    return useQuery(educationQuery);
}


function Edu_list(){
    const {dispatch} = useContext(AppContext);  
    const educationQuery = gql` 
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
    const { loading, error, data } = useQuery(educationQuery);
    //dispatching all actions with payload
    dispatch({type: 'EDUCATION_LOADING', payload: loading}); 
    dispatch({type: 'EDUCATION_ERROR', payload: error}); 
    dispatch({type: 'EDUCATION_LIST', payload: data.educations});
}

function Edu_detail(){
    const {dispatch} = useContext(AppContext);  
    const educationDetailQuery = gql` 
        query Educations {
            education(id: $educationId) {
                id
                degree
                speciality
                startDate
                endDate
            }
        } 
    `; 
    const { loading, error, data } = useQuery(educationDetailQuery);
    console.log("EDU Detailssss ", loading, error, data);

    //dispatching all actions with payload
    dispatch({type: 'EDUCATION_DETAIL_LOADING', payload: loading}); 
    dispatch({type: 'EDUCATION_ERROR', payload: error}); 
    dispatch({type: 'EDUCATION_DETAIL', payload: data.educations});
}

export const useEducation = (action_type, options={}) => {
     
} 