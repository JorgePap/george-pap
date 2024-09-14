import * as yup from 'yup'

// Create a schema for the form
export const validationSchema = yup.object({
    name: yup.string().required('Name is required'),
    email: yup.string().email('Invalid email foramt').required('Email is required'),
    subject: yup.string().required('Subject is required'),
    message: yup.string().required('Message is required'),
});