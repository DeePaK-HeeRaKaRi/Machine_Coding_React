import React, { useContext, useMemo } from 'react'
import { TabsContext } from './TabsProvider'
import { formConfig } from '../Data/FormConfigData'
import '../Styles/Tabs.css'

const TabNavigation = React.memo(() => {
    const {activeTab, changeTab} = useContext(TabsContext)
    // console.log('-----------active Tab',activeTab)
    // console.log('-active',prev)
    const handleTabChange = (e,index) => {
        e.preventDefault()
        changeTab(index)
    }

    const tabs = useMemo(() => Object.keys(formConfig),[formConfig])

  return (
    <div className='tabNavigation_Container'>
        {
           tabs.map((tab,index) => {
                return (
                    <div 
                        className={`tab ${index === activeTab ? 'active-tab' : ''}`}
                        key={tab}
                        onClick={(e) => handleTabChange(e,index)}
                    >
                        {tab}
                    </div>
                )
           })
        }
    </div>
  )
})

export default TabNavigation