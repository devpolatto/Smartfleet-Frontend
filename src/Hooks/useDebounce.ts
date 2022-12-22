import { useCallback, useRef } from "react"

export const useDebounce = (delay:number = 500, startDelay: boolean = true) => {

     const debouncing = useRef<NodeJS.Timeout>()
     const isFirstTime = useRef(startDelay)

     const debounce = useCallback((func: () => void) => {

          if(isFirstTime.current) {
               isFirstTime.current = false
               func();
          } else {
               if(debouncing.current) {
                    clearTimeout(debouncing.current)
               }
               debouncing.current = setTimeout(() => { func(); }, delay);
          }

     }, [delay])    

     return {debounce}
}