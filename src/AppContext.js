import * as React from 'react'
import { jobsData } from './utils/shared/dummy_data/jobs_data';

export const AppContext = React.createContext();

const appReducer = (state, action) => {
    switch(action.type) {
        case 'JOB_LIST':
            return {...state, jobs: jobsData};
        case 'FILTERBY_STATUS':
            return {...state, filterby_status: action.payload}
        case 'FILTERBY_DAYS':
            return {...state, filterby_days: action.payload}
        case 'FILTERBY_RECRUITER':
            return {...state, filterby_recruiters: action.payload}
        case 'FILTERBY_INTERVIEWER':
            return {...state, filterby_interviewers: action.payload}
        case 'FILTER_BTN_CLICK':
            return {
                ...state, 
                filterby_status: action.payload.status,
                filterby_days: action.payload.days,
                filterby_recruiters: action.payload.recruiters,
                interviewers: action.payload.interviewers,
            }
        default:
            throw new Error(`Unhandled action type: ${action.type}`)
    }
}

const initialState = {
    jobs: jobsData,
    job_id: null,
    filterby_status: null,
    filterby_days: null
    
}

const AppProvider = ({children}) => {
    const [state, dispatch] = React.useReducer(appReducer, initialState)

    const value = {state, dispatch};

    return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

export default AppProvider;