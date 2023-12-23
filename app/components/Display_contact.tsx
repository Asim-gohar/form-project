import React from 'react'
import Link from 'next/link'
import { formDataType } from '../types/types'
import ContactForm from '../page'
import DataHandler from '../DataHandler/dataHandler'

function Display_contact(props: { formData: formDataType[] }) {
    return (
      <section>

        <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Name</th>
            <th className="py-2 px-4 border-b">Email</th>
            <th className="py-2 px-4 border-b">Phone</th>
            <th className="py-2 px-4 border-b">Address</th>
            <th className="py-2 px-4 border-b">Subject</th>
            <th className="py-2 px-4 border-b">Company</th>
            <th className="py-2 px-4 border-b">Job Title</th>
            <th className="py-2 px-4 border-b">Website</th>
            <th className="py-2 px-4 border-b">Additional Info</th>
            <th className="py-2 px-4 border-b">Message</th>
          </tr>
        </thead>
        <tbody>
          {props.formData.map((item, index) => (
             
            <tr key={index} className={index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}>
              <td className="py-2 px-4 border-b">{item.name}</td>
              <td className="py-2 px-4 border-b">{item.email}</td>
              <td className="py-2 px-4 border-b">{item.phone}</td>
              <td className="py-2 px-4 border-b">{item.address}</td>
              <td className="py-2 px-4 border-b">{item.subject}</td>
              <td className="py-2 px-4 border-b">{item.company}</td>
              <td className="py-2 px-4 border-b">{item.jobTitle}</td>
              <td className="py-2 px-4 border-b">{item.website}</td>
              <td className="py-2 px-4 border-b">{item.additionalInfo}</td>
              <td className="py-2 px-4 border-b">{item.message}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </section>
    )}
        
            
    

export default Display_contact
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