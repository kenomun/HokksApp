import { useState } from 'react'
import { UserContext } from './UserContext'

 // const user = {
   //    name: 'keno',
   //    eamail: 'kenos@gmail.com'
   // }

export const UserProvider = ({ children }) => {
   
  const [user, setUser] = useState();

  
   return (
     <UserContext.Provider value={{ user, setUser }}>
        { children }
     </UserContext.Provider>
   )
}
