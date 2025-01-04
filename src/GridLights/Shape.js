import React, { useEffect, useMemo, useRef, useState } from 'react'
import './style.css'
/*
Create a shape based on the 2D array
// Empty box where value ==1
when value == 0 then render nohing
we can select a box and change bg color to green
deselect in the order of selection
and deselect is non interruptable. > i.e., you not e able to click on it again

*/
const Shape = ({data}) => {
    // To maintain insertion order we can use Set or Map . But Mpa is a key value pair. So we can use Set

    const [selected, setSelected] = useState(new Set())
    const [deSelecting, setDeselecting] = useState(false)
    const timerRef = useRef(null)

    const countVisibleBoxes = useMemo(() => { 
        return data.reduce((count, row) => 
            count + row.reduce((prev, curr) => prev + (curr === 1 ? 1 : 0), 0), 0);
    }, [data]);

    console.log({countVisibleBoxes})

    const removeSelectedBoxes = () => {
        setDeselecting(true)
        //Remove boxes for every 500 ms
        const keys = Array.from(selected)
        console.log({keys})
        const removeNextKey =() => {
            if(keys.length) {
                const key = keys.shift()
                setSelected((prev) => {
                    const updatedKeys = new Set(prev)
                    updatedKeys.delete(key)
                    return updatedKeys
                })
                timerRef.current = setTimeout(() => removeNextKey(), 500)
            }
            else {
                setDeselecting(false)
                console.log({timerRef})
                clearTimeout(timerRef.current)
            }    
        }
        timerRef.current = setTimeout(() => removeNextKey(), 500)
    }

    useEffect(() => {
        console.log({selected})
        if(selected.size >= countVisibleBoxes) {
            removeSelectedBoxes()
        }
    },[selected])

    const handleClick = (e) => {
        // console.log({e})
        const {target} = e
        let status = target.getAttribute('data-status')
        let id = target.id
        const [row,col] = id.split('_').map(Number)
        if(status == 'hidden' || selected.has(id) || deSelecting) {
            return null
        }
      
       setSelected((prev) => {
        const newSet = new Set(prev) // here the reference will cahnage, to detect the changes 
        newSet.add(id)
        return newSet
       })
        console.log({status, id})
    }

    //Clear Timeout on Unmount:
    useEffect(() => {
        return () => {
            if (timerRef.current) {
                clearTimeout(timerRef.current); // Cleanup on unmount
            }
        };
    }, []);
   
  return (
    <div className='shape-container' onClick={handleClick}>
        {
          data.map((row,row_index) => {
           return (<div key={row_index} className={`row row_${row_index}`}>
                {
                    row.map((col,col_index) => {
                        const status = data[row_index][col_index] == 1 ? 'visible' : 'hidden'
                        const curr_col = `${row_index}_${col_index}`
                        const isSelected = selected.has(curr_col) ? 'selected' : ''
                        const isDeSelecting = deSelecting ? 'deselecting' : ''
                        return ( 
                            <div key={curr_col} 
                             id={curr_col} 
                            className={`col col_${row_index}_${col_index} ${status} ${isSelected} ${isDeSelecting}`}
                            data-status = {status}
                            // onClick={handleClick}   remove from here, if one box is clicked all the boxes gets event so keep in pparent. > reduces memory usage
                            > 
                            </div>
                        )
                    })
                }
            </div>)
          })
        }
    </div>
  )
}

export default Shape