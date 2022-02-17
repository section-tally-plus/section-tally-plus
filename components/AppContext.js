import React, { createContext, useState } from 'react'
const AppContext = createContext({})

export const AppProvider = ({ children }) => {
  const [semester, setSemester] = useState('')
  const [showSidebar, toggleSidebar] = useState('')

  return (
    <AppContext.Provider
      value={{ semester, setSemester, showSidebar, toggleSidebar }}
    >
      {children}
    </AppContext.Provider>
  )
}

export default AppContext
