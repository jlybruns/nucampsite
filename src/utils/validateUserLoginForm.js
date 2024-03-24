export const validateUserLoginForm = (values) => {
    const errors = {};

    if(!values.username) {
        errors.username = 'You must input a username.';
    } else if(values.username.length < 6) {
        errors.username = 'Your username must be 6 characters or more.';
    }else if (values.username.length > 15) {
        errors.username = 'Username cannot be more than 15 characters.';
    }
    if(!values.password) {
        errors.password = 'Required';
    } else if (values.password.length < 8) {
        errors.password = 'Password must be 8 characters or longer.';
    }
    return errors;
}