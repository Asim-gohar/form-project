'use client'

import Button from './components/button';
import React, { useState } from 'react';
import * as yup from 'yup'
import Link from 'next/link';
import { errorType, formDataType, handleChangeType } from './types/types';
import Display_contact from './components/Display_contact';
import StudentHandler from './studentsHandler/page';

const ContactForm = () => {
  const [formData, setFormData] = useState<formDataType>({
    name: '',
    email: '', 
    phone: NaN,
    message: '',
    address: '',
    subject: '',
    company: '',
    jobTitle: '',
    website: '',
    additionalInfo: '',
  });

const [errors , setErrors] = useState<string[]>([])

const formDataSchema = yup.object().shape({
  name: yup.string().required().min(5).max(15),
  email: yup.string().required(),
  phone: yup.number().required(),
  message: yup.string().notRequired(),
  address: yup.string().required(),
  subject: yup.string().required(),
  company: yup.string().required(),
  jobTitle: yup.string().required(),
  website: yup.string().required(),
  additionalInfo: yup.string().required(),
});

  const [formDataList , setFormDataList] = useState<formDataType[]>([])
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const userDetail = {
      ...formData,
      [e.target.name]: e.target.value,
    };
    console.log(userDetail);
    setFormData(userDetail);
  };
  const onClickHandler =async () => {
    try {
      const result = await formDataSchema.validate(formData, { abortEarly: false }); // Pass formData directly
      console.log('Validation passed' , result);
       
      if(!result){
        return
      }
     
    let newFormData : formDataType[] = [...formDataList , formData]
    setFormDataList(newFormData);
    console.log("New form Data" , newFormData);
    
    setFormData({
      name: '',
    email: '',
    phone: NaN,
    message: '',
    address: '',
    subject: '',
    company: '',
    jobTitle: '',
    website: '',
    additionalInfo: '',
  })
    } catch (error:any) {
      setErrors(error.errors);
      console.log('Validation error:', error.name, error.errors);
    }
  }
  
 
  return (   
    <div >
      <h1 className="text-2xl font-semibold mb-4">Contact Form</h1>
      <form>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="mt-1 p-2 border rounded-md w-full"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="mt-1 p-2 border rounded-md w-full"
          />
        </div>
        {/* Add more fields similar to the examples above */}
        {/* Example: Phone */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Phone</label>
          <input
            type="tel"
            name="phone"
            value={isNaN(formData.phone) ? '' : formData.phone}
            onChange={handleChange}
            placeholder="+92"
            className="mt-1 p-2 border rounded-md w-full"
          />
        </div>
       <div>
       <label className="block text-sm font-medium text-gray-700">Address</label>
          <input
            type='text'
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="Your address"
            className="mt-1 p-2 border rounded-md w-full"
          />
       </div>
       <div>
       <label className="block text-sm font-medium text-gray-700">Subject</label>
          <input
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Your subject"
            className="mt-1 p-2 border rounded-md w-full"
          />
       </div>
       <div>
       <label className="block text-sm font-medium text-gray-700">Company</label>
          <input
            name="company"
            value={formData.company}
            onChange={handleChange}
            placeholder="Your company name"
            className="mt-1 p-2 border rounded-md w-full"
          />
       </div>
       <div>
       <label className="block text-sm font-medium text-gray-700">Job title</label>
          <input
            name="jobTitle"
            value={formData.jobTitle}
            onChange={handleChange}
            placeholder="Your job title"
            className="mt-1 p-2 border rounded-md w-full"
          />
       </div>
       <div>
       <label className="block text-sm font-medium text-gray-700">Website</label>
          <input
            name="website"
            value={formData.website}
            onChange={handleChange}
            placeholder="Your website"
            className="mt-1 p-2 border rounded-md w-full"
          />
       </div>
       <div>
       <label className="block text-sm font-medium text-gray-700">Additional Info</label>
          <input
            name="additionalInfo"
            value={formData.additionalInfo}
            onChange={handleChange}
            placeholder="Your additionalInfo"
            className="mt-1 p-2 border rounded-md w-full"
          />
       </div>
       <div>
       <label className="block text-sm font-medium text-gray-700">Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your message"
            className="mt-1 p-2 border rounded-md w-full"
          />
       </div>
       {errors.map((item) => {
        return(
          <div style={{color:'Red'}}>
            <h1>{item}</h1>
            </div>
        )
       })}
       <br />
       <button
          onClick={onClickHandler}
          type="button"
          className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition duration-300"
        >
          Submit
        </button>
        <br />
{/* <p>Name: {formData.name}</p>
<p>Email: {formData.email}</p> */}
<br />
<Display_contact formData={formDataList}/>
      </form>
      <br /> 
      <div>
         <h1 className='font-bold text-3xl text-center text-blue-500'><Link href='studentsHandler'>Please also view previous Assignment click here</Link></h1> 
        </div>
    </div>
  );
};

export default ContactForm;
// name: '',
// email: '',
// phone: '',
// message: '',
// address: '',
// subject: '',
// company: '',
// jobTitle: '',
// website: '',
// additionalInfo: '',