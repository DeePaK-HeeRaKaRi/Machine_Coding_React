 
import React from 'react'
import { Routes, Route, Link } from "react-router-dom";
import ColorChange from './ColorChange/ColorChange';
import AutoComplete from './AutoComplete/AutoComplete';
import Stepper from './Stepper/Stepper';
import TabApp from './Tabs/TabApp';
import FileExplorerApp from './FileExplorer/FileExplorerApp';
import TransferList from './TransferList/TransferListApp'
import TransferListAppModified from './transfer-list/TransferListAppModified';
import CountryCapitalGame from './CountryCapitalGame/CountryCapitalGame';
import MultiSelectInput from './MultiSelectInput/MultiSelectInput';
import UseMemoHook from './Polyfill - useMemo/UseMemoHook';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/matrix-Boxes" element={<ColorChange />}></Route>
        <Route path="/autocomplete-typehead" element={<AutoComplete />}></Route>
        <Route path="/stepper" element={<Stepper />}></Route>
        <Route path="/tabs" element={<TabApp />}/>
        <Route path='/fileExplorer' element={<FileExplorerApp/>} />
        <Route path='/transferList' element={<TransferList />} />
        <Route path='/TransferListAppModified' element={<TransferListAppModified />} />
        <Route path='/CountryCapitalGame' element={<CountryCapitalGame />}/>
        <Route path='/MultiSelectInput' element={<MultiSelectInput />} />
        <Route path='/UseMemoPolyfill' element={<UseMemoHook />} />
      </Routes>
    </div>
  );
}

export default App;
