import React, { createContext, useState } from 'react'

export const FormContext = createContext()

const FormProvider = ({children}) => {
    const [formState,setFormState] = useState({})

    const handleInputChange = (field, value) => {
        setFormState((prev) => ({...prev, [field]:value}))

    //    const formData = localStorage.getItem('formData')

    //    const updatedFormValues = formData ? JSON.parse({...formData,[field]:value}) : {[field]:value}

    //    localStorage.setItem('formData',updatedFormValues)


    // const formData = localStorage.getItem('formData');
    // const updatedFormData = formData
    //     ? { ...JSON.parse(formData), [field]: value }
    //     : { [field]: value };

    // // Update localStorage
    // localStorage.setItem('formData', JSON.stringify(updatedFormData));
     }

     const handleSubmit = (event) => {
        event.preventDefault()
        console.log(formState)
     }
  return (
    <FormContext.Provider value={{  
        formState,
        handleInputChange,
        handleSubmit
        }}>
        {children}
    </FormContext.Provider>
  )
}

export default FormProvider