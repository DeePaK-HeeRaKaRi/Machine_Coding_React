import React, { useContext, useMemo } from 'react'
import { TabsContext } from './TabsProvider'
import { formConfig } from '../Data/FormConfigData'
import { FormContext } from './FormProvider'

const RenderForm = React.memo(() => {
    const { formState,handleInputChange,handleSubmit } = useContext(FormContext)
    const { activeTab } = useContext(TabsContext)
    console.log('--form State',formState)
    const formConfigKeys = useMemo(() => Object.keys(formConfig),[formConfig])

    const currFormConfig = formConfig[formConfigKeys[activeTab]]
    // console.log('currFormConfig',currFormConfig)
  return (
    <div>
        <form onSubmit={handleSubmit}>
            {
                currFormConfig.map((config,index) => {
                    return (<div key={config.name}>
                        <label htmlFor={config.label}>{config.label}:</label>
                        <input 
                            id={config.name}
                            placeholder={config.placeholder}
                            type={config.type} 
                            value={formState[config.name]}
                            onChange={(e)=>handleInputChange(config.name,e.target.value)}
                        />
                    </div>)
                })
            }
            {activeTab === formConfigKeys.length-1 && (
                <button type='submit'>Submit</button>)
            }
        </form>
       
    </div>
  )
})

export default RenderForm