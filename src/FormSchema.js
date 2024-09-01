import * as Yup from 'yup'; 
export const FormSchema = Yup.object({
    name:Yup.string().min(3,'too short').max(15,'too long').required('Name is Must'),
     email:Yup.string().email('invalid email').required('Email must be Valid'),
     age:Yup.number().min(10).max(50).required('Age is Must')
    })  
     