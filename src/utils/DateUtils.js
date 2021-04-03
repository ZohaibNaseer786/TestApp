import moment from 'moment'

class DateUtils {

    static getdate(dateObject, format) {
        const showDate = moment(dateObject).format(format)
        return showDate
    }

}

export default DateUtils
