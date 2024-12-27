import React, { createContext, useState } from 'react'


export const TabsContext = createContext()

const TabsProvider = ({children}) => {
     
     const [activeTab, setActiveTab] = useState(0)
     
     const changeTab = (tabIndex) => setActiveTab(tabIndex)

   
  return (
    <TabsContext.Provider 
        value={{
            activeTab,
            changeTab,
        }}>
        {children}
    </TabsContext.Provider>
  )
}

export default TabsProvider