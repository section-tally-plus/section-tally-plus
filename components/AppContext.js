import React, { createContext, useState, useEffect } from 'react'
import { filterOptions } from '../data/FilterData'
import { useUser } from '@auth0/nextjs-auth0'
import axios from 'axios'
import { getUserFromDB } from '../library/Functions'

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
  const [watchlist, setWatchlist] = useState([])
  const [takenlist, setTakenlist] = useState([])
  const { user, error, isLoading } = useUser()

  const updateLists = (user) => {
    console.log('updateLists')
    getUserFromDB(user)
      .then((result) => {
        const { watchlist, takenlist } = result
        watchlist && setWatchlist(watchlist)
        takenlist && setTakenlist(takenlist)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  useEffect(() => {
    if (!!user) {
      updateLists(user)
    }
  }, [user])

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
        watchlist,
        setWatchlist,
        takenlist,
        setTakenlist,
        user,
        error,
        isLoading,
        updateLists,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export default AppContext
