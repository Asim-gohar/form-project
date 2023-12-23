"use client"
import React from 'react'
import { ButtonProps } from '../types/types'

export default function Button(props:ButtonProps) {
  return (
    <div>
        <button onClick={props.onClickHandler} 
        className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition duration-300 block mx-auto">
          {props.title}</button>
    </div>
  )
}
