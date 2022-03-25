import React, { createContext, useState } from 'react'
import { filterOptions } from '../data/FilterData'

const AppContext = createContext({})

const filterABVS = []
filterOptions.forEach((item) => {
  filterABVS.push(item.abv)
})

export const AppProvider = ({ children }) => {
  const [semester, setSemester] = useState('')
  const [showSidebar, toggleSidebar] = useState(true)
  const [showResults, toggleResults] = useState(false)
  const [showProfile, toggleProfile] = useState(false)
  const [filters, setFilters] = useState(filterOptions) // used to build the sidebar
  const [semesterData, setSemesterData] = useState([]) // data returned from the api
  const [selectedFilters, setSelectedFilters] = useState({}) // used to filter the api data
  const [endpoint, setEndpoint] = useState(
    'http://localhost:3000/api/courses?semester='
  ) // used to build the api endpoint

  return (
    <AppContext.Provider
      value={{
        semester,
        setSemester,
        showSidebar,
        toggleSidebar,
        showResults,
        toggleResults,
        showProfile,
        toggleProfile,
        selectedFilters,
        setSelectedFilters,
        filters,
        setFilters,
        semesterData,
        setSemesterData,
        endpoint,
        setEndpoint,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export default AppContext
