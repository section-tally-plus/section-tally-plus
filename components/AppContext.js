import React, { createContext, useState } from 'react'
const AppContext = createContext({})

export const AppProvider = ({ children }) => {
  const [semester, setSemester] = useState('')

  return (
    <AppContext.Provider value={{ semester, setSemester }}>
      {children}
    </AppContext.Provider>
  )
}

export default AppContext
