import * as React from 'react'
import { jobsData } from './utils/shared/dummy_data/old_jobs_data';

export const AppContext = React.createContext();

const appReducer = (state, action) => {
    switch(action.type) {
        case 'CREATE_FORM':
            console.log("INSIDE REDUCER CREATE_FORM : ", action.payload);
            return {...state, newJob: action.payload}
        
        /** JOB Reducers */
        case 'JOB_LIST':
            return {...state, job_list: action.payload}
        case 'JOB_DETAIL':
            return {...state, job_detail: action.payload}
        case 'CREATE_JOB':
            return {...state, create_job: action.payload}

        /** FIRM Reducers */
        case 'FIRM_LIST':
            return {...state, firm_list: action.payload}
        case 'FIRM_DETAIL':
            return {...state, firm_detail: action.payload}
        case 'CREATE_FIRM':
            return {...state, create_firm: action.payload}

        /** INTERVIEWER Reducers */
        case 'INTERVIEWER_LIST':
            return {...state, interviewer_list: action.payload}
        case 'INTERVIEWER_DETAIL':
            return {...state, interviewer_detail: action.payload}
        case 'CREATE_INTERVIEWER':
            return {...state, create_interviewer: action.payload}

        /** RECRUITER Reducers */
        case 'RECRUITER_LIST':
            return {...state, recruiter_list: action.payload}
        case 'RECRUITER_DETAIL':
            return {...state, recruiter_detail: action.payload}
        case 'CREATE_RECRUITER':
            return {...state, create_recruiter: action.payload}

        /** SKILL Reducers */
        case 'SKILL_LIST':
            return {...state, skills_list: action.payload}

        /** EDUCATION Reducers */    
        case 'EDUCATION_LOADING':
            return {...state, education_list: action.payload}
        case 'EDUCATION_ERROR':
            return {...state, education_list: action.payload}
        case 'EDUCATION_LIST':
            return {...state, education_list: action.payload}
        case 'EDUCATION_DETAIL':
            return {...state, education_detail: action.payload}
        
        /** FILTER Reducers */    
        case 'FILTER_BTN_CLICK':
            return {
                ...state, 
                filters: action.payload,
                interviewers: action.payload.interviewers,
            }
        
        case 'FILTERS':
            return {...state, filters: action.payload}

        default:
            throw new Error(`Unhandled action type: ${action.type}`)
    }
}

const initialState = {
    jobs: jobsData,
    job_id: null,
    default_job_status: 'Active',
    filters: {},
    
}

const AppProvider = ({children}) => {
    const [state, dispatch] = React.useReducer(appReducer, initialState)

    const value = {state, dispatch};

    return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

export default AppProvider;