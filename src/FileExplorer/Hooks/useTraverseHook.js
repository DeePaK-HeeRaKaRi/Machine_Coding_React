const useTraverseHook = () => {
  const insertNode = (tree, folderId, item, isFolder) => {
    console.log("---- calling ", tree, folderId, item, isFolder);
    let flag = false;
    if (tree.id === folderId) {
      console.log("yes", folderId);
      tree.items.unshift({
        id: new Date().getTime(),
        name: item,
        isFolder: isFolder,
        items: [],
      });
      flag = true;
      return tree;
    }
    if (!flag) {
      let latestNode = [];
      latestNode = tree.items.map((obj) => {
        console.log("--------obj", obj);
        return insertNode(obj, folderId, item, isFolder);
      });

      return { ...tree, items: latestNode };
    }
  };
  return { insertNode };
};

export default useTraverseHook;

// const useTraverseHook = () => {
//   const insertNode = (tree, folderId, item, isFolder) => {
//     console.log("----", tree, folderId, item, isFolder);
//     let flag = false;

//     if (tree.id === folderId) {
//       console.log("yes", folderId);
//       tree.items.unshift({
//         id: new Date().getTime(),
//         name: item,
//         isFolder: isFolder,
//         items: [],
//       });
//       flag = true;
//     }

//     if (!flag) {
//       let latestNode = [];
//       latestNode = tree.items.map((obj) => {
//         console.log("--------obj", obj);
//         return insertNode(obj, folderId, item, isFolder);
//       });

//       return { ...tree, items: latestNode };
//     }

//     return tree;
//   };

//   return { insertNode };
// };

// export default useTraverseHook;
