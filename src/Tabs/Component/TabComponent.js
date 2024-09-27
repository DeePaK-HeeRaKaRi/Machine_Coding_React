import React, { createContext, useContext } from "react";
import "./TabStyle.css";

const TabContext = createContext();

export const TabComponent = ({ children, value, onChange }) => {
  return (
    <div className="TabsContainer">
      <TabContext.Provider value={{ value, onChange }}>
        {children}
      </TabContext.Provider>
    </div>
  );
};

TabComponent.Heads = ({ children }) => {
  return <div className="heads">{children}</div>;
};

export const TabComponentItem = ({ label, index, children }) => {
  const { value, onChange } = useContext(TabContext);
  const handleClick=(index)=>{
    onChange(index)
  }
  return (
    <div onClick={() =>handleClick(index)} className={`item ${index === value ? "active" : null}`}>{label}</div>
  );
};
TabComponent.ContentWrapper = ({ children }) => {
  return <div className="contentWraper">{children}</div>;
};

export const TabComponentContent = ({ index, children }) => {
 
  const { value } = useContext(TabContext);
  return value === index ? <div>{children}</div> : <></>;
};

 