import React, { createContext, useState } from 'react'
const AppContext = createContext({})

export const AppProvider = ({ children }) => {
  const [semester, setSemester] = useState('')
  const [showSidebar, toggleSidebar] = useState(true)
  const [showResults, toggleResults] = useState(false)

  return (
    <AppContext.Provider
      value={{
        semester,
        setSemester,
        showSidebar,
        toggleSidebar,
        showResults,
        toggleResults,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export default AppContext
