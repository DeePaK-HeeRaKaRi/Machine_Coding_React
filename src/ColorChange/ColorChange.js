 
import React, { useEffect, useState } from "react";
import './Style.css'

let order = 0;
let isAllClicked = false;
const ColorChange = () => {
   const [boxState, setBoxState] = useState(getBoxes("initial"));
   useEffect(() => {
     if (boxState.some((box) => !box.isClicked)) {
       isAllClicked = false;
     } else {
       isAllClicked = true;
     }

     if (isAllClicked) {
       boxState.forEach((item, index) => {
         return setTimeout(() => {
           let temp = [...boxState];
           temp[index].isClicked = false;
           setBoxState(temp);
         }, 1000 * (index + 1));
       });
     }
   }, [boxState]);
   function getBoxes(type) {
     let boxesData = [];
     const boxes = [0, 1, 2].map((i) => {
       return [0, 1, 2].map((j) => {
         if (!(i === 1 && j > 0)) {
           if (type === "initial") {
             return boxesData.push({ i, j, isClicked: false, order: null });
           }
           return (
             <div
               style={{
                 backgroundColor: boxState.find(
                   (item) => item.i === i && item.j === j
                 ).isClicked
                   ? "green"
                   : "white",
               }}
               className="box"
               onClick={() => changeColor(i, j)}
             ></div>
           );
         }
         return <div></div>;
       });
     });
     if (type === "initial") {
       return boxesData;
     }
     return boxes;
   }
   const changeColor = (i, j) => {
     // setBoxState([...boxState,{i:i,j:j,isClicked:true}])
     let temp = [...boxState];
     const selectedBox = temp.find((item) => item.i === i && item.j === j);
     selectedBox.isClicked = true;
     selectedBox.order = ++order;
     temp.sort((a, b) => (a.order > b.order ? 1 : -1));
     setBoxState(temp);
   };
   console.log("boxState", boxState);
   return (
     <div className="App1">
       <div className="boxContainer">{getBoxes()}</div>
     </div>
   );
}

export default ColorChange
