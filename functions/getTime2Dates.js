export const getTime2Dates = (date_begin, date_end) => {
    const time_text = ["Days", "Month", "Months", "Year", "Years"];
    const time_days = (new Date(date_end).valueOf() - new Date(date_begin).valueOf())/ (1000 * 60 * 60 * 24);
    if (time_days / 365 > 2) {
        return Math.round(time_days / 365) + " Years";
    } else
    if (time_days / 365 > 1) {
        return "1 Year"
    } else
    if (time_days / 30.5 > 2) {
        return Math.round(time_days / 30.5) + " Months";
    } else
    if (time_days / 30.5 > 1) {
        return '1 Month'
    }
    else return Math.round(time_days) + " Days"
}