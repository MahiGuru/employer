import { useQuery } from '@apollo/client';
import { useContext } from 'react';
import { Education } from './querys/education-query';
import { AppContext } from './../AppContext';
import { gql } from '@apollo/client';

export const EducationService = {
    List: () => {
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
        dispatch({type: 'EDUCATION_LIST', payload: data}); 
        
    },
    Detail: () => {
        const {dispatch} = useContext(AppContext);   
        const educationQuery = gql` 
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
        const { loading, error, data } = useQuery(educationQuery);
        console.log("EDU Detailssss ", loading, error, data);

        //dispatching all actions with payload
        dispatch({type: 'EDUCATION_DETAIL_LOADING', payload: loading}); 
        dispatch({type: 'EDUCATION_ERROR', payload: error}); 
        dispatch({type: 'EDUCATION_DETAIL', payload: data}); 
    },
    Update: () => {
        const {state, dispatch} = useContext(AppContext);    
        const { loading, error, data } = useQuery(Education);
        if(data && data.educations) {
            dispatch({type: 'EDUCATION_LIST', payload: data}); 
        }
    },
    Delete: () => {
        const {state, dispatch} = useContext(AppContext);    
        const { loading, error, data } = useQuery(Education);
        if(data && data.educations) {
            dispatch({type: 'EDUCATION_LIST', payload: data}); 
        }
    }
} 