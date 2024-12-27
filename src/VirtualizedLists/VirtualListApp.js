import React from 'react'
import ViewPort from './Component/ViewPort'

const VirtualListApp = () => {
    const dummyData = new Array(1000).fill(0).map((item,index) => `Item - ${index}`)

  return (
    <>
    <ViewPort itemHeight={50} data={dummyData}/>
    </>
  )
}

export default VirtualListApp