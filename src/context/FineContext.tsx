import { createContext, ReactNode, useState } from 'react'

import {IFine} from '../@types'

interface IFineContext {
     children?: ReactNode;
     rows?: IFine[];
     setRows?: (rows: IFine[] ) => void;
     totalCount: number;
     setTotalCount?: (rows: number) => void;
}    

export const FineContext = createContext<IFineContext>({} as IFineContext);

export const FineProvider = ({children}: IFineContext) => {

     const [rows, setRows] = useState<IFine[]>([])
     const [totalCount, setTotalCount] = useState(0)

     return(
          <FineContext.Provider value={{
               rows, setRows, totalCount, setTotalCount
          }}>
               {children}
          </FineContext.Provider>
     )
}