import React, { useEffect, useState } from 'react'

const Game = ({data}) => {
    const [originalData,setOriginalData] = useState(data)
    const [shuffledData, setShuffledData] = useState([])
    const [selectedOptions, setSelectedOptions] = useState([])
    const [correctOptions, setCorrectOptions] = useState([])

    useEffect(() => {
        const dataArray = Object.entries(originalData).flat()
        for(let i=dataArray.length - 1; i>=0 ; i--) {
            const j= Math.floor(Math.random() * i)
            const temp = dataArray[i];
            dataArray[i] = dataArray[j];
            dataArray[j] = temp;
        }
        setShuffledData(dataArray)
    }, [])

    useEffect(() => {
        if(selectedOptions.length == 2) {
            const [first,second] = selectedOptions
            if(originalData[first] == second || originalData[second] == first) {
                setCorrectOptions(selectedOptions)
                setTimeout(() => {
                    // remove the correct options
                    const updateShuffledData = shuffledData && shuffledData.length > 0 && shuffledData.filter(item => item!=first && item!=second);
                    setShuffledData(updateShuffledData)
                    setCorrectOptions([])
                    setSelectedOptions([])
                },3000)
            }else{ 
                setTimeout(() => {
                    setSelectedOptions([])
                },3000)
            }
        }
    },[selectedOptions])

    const clickHandler = (event) => {
        const tagName = event.target.tagName;
        const className = event.target.className.split(" ");
        if(tagName == 'BUTTON' && className[0] == 'shuffledDataItem') {
            const selectedValue = event.target.innerText;
            setSelectedOptions([...selectedOptions,selectedValue])
        }
    }
    
  return (
    <div className='shuffledDataContainer' onClick={(event) => clickHandler(event)}>
        {shuffledData && shuffledData.length > 0 ? shuffledData.map((item,index) => {
            const isSelected = selectedOptions.includes(item);
            const isCorrectOption = correctOptions.length == 2 && correctOptions.includes(item);
            const isIncorrectOption = isSelected && selectedOptions.length == 2 && !isCorrectOption
            let condition = isCorrectOption ? 'correctOption' : isIncorrectOption ? 'incorrectOption' : isSelected ? 'selectedOption' : 'default';

            return <button type='button' key={item} className={`shuffledDataItem ${condition}`} id={`item_${index}`}>{item}</button>
        }) : <h1>Congratulations!</h1>
        }
        
    </div>
  )
}

export default Game

