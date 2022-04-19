import moment from 'moment';


export const getDateDifference = (startDate=moment(), endDate, diffIn) => {
    const sDate = moment(startDate);
    var eDate = moment(endDate, 'DD/MM/YYYY');
    return sDate.diff(eDate, diffIn);
}