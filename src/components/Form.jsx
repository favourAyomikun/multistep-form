import React from 'react'
import { useForm } from '../context/FormsContext';

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
    <div></div>
  )
}
