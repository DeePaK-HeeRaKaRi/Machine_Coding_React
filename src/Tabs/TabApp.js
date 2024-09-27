import React, { useContext, useState } from 'react'
import { TabComponent, TabComponentContent, TabComponentItem, TabContext } from './Component/TabComponent'
import './Component/TabStyle.css'

const TabApp = () => {
  const [currentIndex, setIndex] = useState(0)

  const handleChange = (newIndex) => {
    setIndex(newIndex);
  }

  return (
    <>
      <TabComponent value={currentIndex} onChange={handleChange}>
        <TabComponent.Heads>
          <TabComponentItem label={"Tab1"} index={0} />
          <TabComponentItem label={"Tab2"} index={1} />
          <TabComponentItem label={"Tab3"} index={2} />
        </TabComponent.Heads>
        <TabComponent.ContentWrapper>
          <TabComponentContent index={0}>
            <h1>Iam Content 1</h1>
          </TabComponentContent>
          <TabComponentContent index={1}>
            <h1>Iam Content 2</h1>
          </TabComponentContent>
          <TabComponentContent index={2}>
            <h1>Iam Content 3</h1>
          </TabComponentContent>
        </TabComponent.ContentWrapper>
      </TabComponent>
    </>
  );
}

export default TabApp
