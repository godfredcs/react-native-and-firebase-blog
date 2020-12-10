import moment from 'moment';

export default {
    formattedDate(date) {
        if (!date) {
            return moment().format('Do MMMM YYYY');
        }

        return moment(date).format('Do MMMM YYYY');
    },

    formattedDateTime(date) {
        if (!date) {
            return moment().format('Do MMMM YYYY, h:mm:ss a');
        }

        return moment(date).format('Do MMMM YYYY, h:mm:ss a');
    },

    formattedDateWithoutYear(date) {
        return moment(date).format('Do MMMM');
    },

    capitalize(word) {
        if (typeof word !== 'string') {
            return '';
        }

        return word.charAt(0).toUpperCase() + word.slice(1);
    },

    /**
     * Method for building error messages.
     *
     * @param {Object} errors
     * @return {String}
     */
    buildErrorMessage(errors) {
        if (typeof errors === 'string') {
            return errors;
        }

        let built_error = '';

        for (let error in errors) {
            if (Array.isArray(errors[error])) {
                for (let err of errors[error]) {
                    if (built_error) {
                        built_error += '\n';
                    }

                    if (errors[error].indexOf(err) !== errors[error].length - 1) {
                        built_error += `${err}\n`;
                    } else {
                        built_error += err;
                    }
                }
            } else if (typeof errors[error] === 'string') {
                built_error += `${errors[error]}\n`;
            }
        }

        return built_error;
    },
};
