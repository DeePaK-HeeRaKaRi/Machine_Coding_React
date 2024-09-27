import { memo, useEffect, useRef } from "react"

 

const areEqual = (prevDeps, currDeps) => {
        if(prevDeps == null) return false
        if(prevDeps.length != currDeps.length) return false

        for(let i=0;i<prevDeps.length;i++) {
            if(prevDeps[i] !== currDeps[i]) {
                return false
            }
        }
        return true
}
const useCustomMemo = (cb,deps) => {
        // Variable or state -> cached value

        // Whatever you stored inside a useRef its memory persists throught the life cycle  of your component. 
        // No Matter how many times the component rerenders 
        const memoizedRef = useRef(null);  
        console.log('--------',memoizedRef.current)
        // Changes in deps

        // !memoizedRef.current > for first time calculate the value
        if(!memoizedRef.current || !areEqual(memoizedRef.current.deps,deps)) {
            // Store prev value and deps so you can compare in next iteration
           memoizedRef.current = {
            value: cb(),
            deps
           } 
        }

        // cleanup the logic  when the component unmounts
        useEffect(() => {
            // like removeEventListener()
            // So if our component is removed from the dom just remove
            return () => {
                memoizedRef.current = null
            }
        },[])

        // return the memoized value
        return memoizedRef.current.value
}

export default useCustomMemo
  