import React, { useMemo, useState } from 'react'
import ProgressBar from './ProgressBar'
import { FormDataFields } from './FormDataFields'
import './Form.css'

const ProgressBarForm = () => {
    const [value,setValue] = useState(0)
    const [formState, setFormState] = useState({})

    const totalFormFields = useMemo(() => FormDataFields.length,FormDataFields)

    const handleChange = (e) => {
        const {name, value} = e.target
        if(value!='') {
            setFormState((prev) => ({...prev, [name]: value}))
        }
        else {
            setFormState((prev) => {
                const updatedState = {...prev}
                if(updatedState.hasOwnProperty(name)) {
                    delete updatedState[name]
                }
                return updatedState
            })
            
        }
    }

    const handleBlur = (e) => {
        const {name, value} = e.target

        const currentFormLength = Object.keys(formState).length
        console.log({name,value},formState,totalFormFields, currentFormLength)
        setValue(Math.floor((currentFormLength / totalFormFields) * 100))
    }
    // console.log(formState)
  return (
    <>
    <ProgressBar bgColor={'#0ff345'} value={value}/>  
        <div className='input-field-container'>
        {
            FormDataFields.map((field) => {
                return (
                    <div key = {field.name} className='input-field'>
                        <label>{field.label}</label>
                        <input 
                            id = {field.name}
                            name = {field.name}
                            type = {field.type}
                            placeholder={field.placeholder}
                            value = {formState.value}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                    </div>
                )
            })
        }
        </div>
    </>
  )
}

export default ProgressBarForm