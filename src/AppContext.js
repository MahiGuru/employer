import * as React from 'react'
import { jobsData } from './utils/shared/dummy_data/jobs_data';

export const AppContext = React.createContext();

const appReducer = (state, action) => {
    switch(action.type) {
        case 'JOB_LIST':
            return {...state, jobs: jobsData};
        case 'CREATE_FORM':
            console.log("INSIDE REDUCER CREATE_FORM : ", action.payload);
            return {...state, newJob: action.payload}
        case 'FILTERS':
            return {...state, filters: action.payload}
        case 'FILTER_BTN_CLICK':
            return {
                ...state, 
                filters: action.payload,
                interviewers: action.payload.interviewers,
            }
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