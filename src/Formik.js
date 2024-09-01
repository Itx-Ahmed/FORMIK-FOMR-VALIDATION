import {useFormik} from 'formik';
import React, { act } from 'react'; 
import { FormSchema } from './FormSchema';

const Formik = () => {
 const formInitialValues = {
   name:'ahmed',
   email:'ahmadiqbal858687@gmail.com',
   age:'23'
 }
const {handleChange,handleSubmit,handleBlur, touched,values,errors} = useFormik({
   initialValues: formInitialValues,
   validationSchema: FormSchema,
   onSubmit: (values,action) => {
     console.log(values);
     console.log(values.name,values.email);
      action.resetForm()
   }
})
  return (
   
    <>
    <h1>Formik Yup with validation</h1>
    <form onSubmit={handleSubmit}>
      <label htmlFor=''> Enter your Name: </label>
      <input type='text'  name='name' onBlur={handleBlur} onChange={handleChange} value={values.name} />
        <br/>
         {errors.name && touched.name ? ( <span style={{color:'red'}}>{errors.name}</span>): null} 
      <br/><br/>
      <label htmlFor=''> Enter your Email: </label>
      <input type='text' name='email' onBlur={handleBlur}  onChange={handleChange} value={values.email}  />
        <br/>
        
         {errors.email && touched.email ? ( <span style={{color:'red'}}>{errors.email}</span>): null} 
        <br/><br/>

      <label htmlFor=''> Enter your Age: </label>
      <input type='text'  name='age' onBlur={handleBlur} onChange={handleChange} value={values.age} />
        <br/>
         {errors.age && touched.age ? ( <span style={{color:'red'}}>{errors.age}</span>): null} 
      <br/><br/>
      
     
       <button type='Submit' value='Submit'>Submit</button>
    </form>
  </>
  )
}

export default Formik