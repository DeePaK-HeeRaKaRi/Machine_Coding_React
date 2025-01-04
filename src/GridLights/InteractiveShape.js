import React from 'react'
import Shape from './Shape'

// https://devtools.tech/questions/s/how-to-create-an-interactive-shape-based-ui-uber-frontend-interview-question-or-javascript-or-react-js---qid---6FVH1ZMWMXd4uZ8WAGEi
const InteractiveShape = () => {
   let BOX_DATA = [[1,1,1],
                   [1,0,0],
                   [1,1,1]]

    BOX_DATA = [[1,0,1,0,0,1],
    [0,0,0,1,0,1],
    [1,1,1,0,1,1],
    [1,0,1,1,0,1],]

  return (
    <>
        <Shape data={BOX_DATA}/>
    </>
  )
}

export default InteractiveShape