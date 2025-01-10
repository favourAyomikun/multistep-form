import React from 'react'
import { useForm } from '../context/FormsContext';
import { FormLayout } from './FormLayout';

export const Form = () => {
    const {
        name,
        phone,
        email,
        handleName,
        handlePhone,
        handleEmail,
        nameError,
        phoneError,
        emailError,
      } = useForm();
  return (
    
    <FormLayout>
         <h1 className="text-[3.2rem] font-bold text-denim sma:text-[2.4rem]">
        Personal info
      </h1>
      <h2 className="text-grey text-[1.6rem] leading-[2.5rem] mb-[3.5rem]">
        Please provide your name, email address, and phone number.
      </h2>
      
    </FormLayout>
    
  )
}
