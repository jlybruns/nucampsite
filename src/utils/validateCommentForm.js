export const validateCommentForm = (values) => {
    const errors = {};

    if(!values.rating) {
        errors.rating = 'Required';
    } 
    if(values.author.length < 2) {
        errors.author = 'Name must be at least two characters long';
    } else if (values.author.length > 15) {
        errors.author = 'Must 15 characters or less';
    } 
    
    return errors;
}