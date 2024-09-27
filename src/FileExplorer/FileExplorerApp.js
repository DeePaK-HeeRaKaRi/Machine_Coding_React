import React, { useState } from 'react'
import FileComponent from './Component/FileComponent';
import explorer from './Data/FileData';
import useTraverseHook from './Hooks/useTraverseHook';

const FileExplorerApp = () => {
  const [explorerData, setExplorerData] = useState(explorer);
  const {insertNode} = useTraverseHook()

  const handleInsertNode =(folderId,item,isFolder) =>{
    const finalTree = insertNode(explorerData,folderId,item,isFolder)
    // setExplorerData(finalTree)
  }
  return (
    <div className="App">
      <FileComponent handleInsertNode={handleInsertNode} explorer={explorerData} />
    </div>
  );
}

export default FileExplorerApp
