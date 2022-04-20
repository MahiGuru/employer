import moment from 'moment';

export const date = {
    getDateDifference : (startDate=moment(), endDate, diffIn) => {
        const sDate = moment(startDate);
        var eDate = moment(endDate, 'DD/MM/YYYY');
        return sDate.diff(eDate, diffIn);
    },
    getDateWithFormat : (date=moment(), format='DD/MM/YYYY hh:mm A') => {
        return moment(date).format(format);
    }

}