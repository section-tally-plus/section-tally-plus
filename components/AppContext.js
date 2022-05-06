import React, { createContext, useState, useEffect } from 'react'
import { filterOptions } from '../data/FilterData'
import { useUser } from '@auth0/nextjs-auth0'
import { getUserFromDB, createUser } from '../library/Functions'

const AppContext = createContext({})

const filterABVS = []
filterOptions.forEach((item) => {
  filterABVS.push(item.abv)
})

export const AppProvider = ({ children }) => {
  const [semester, setSemester] = useState('')
  const [semesterTitle, setSemesterTitle] = useState('')
  const [showSidebar, toggleSidebar] = useState(true)
  const [showResults, toggleResults] = useState(false)
  const [showProfile, toggleProfile] = useState(false)
  const [allCollapsed, setAllCollapsed] = useState(false)
  const [filters, setFilters] = useState(filterOptions) // used to build the sidebar
  const [semesterData, setSemesterData] = useState([]) // data returned from the api
  const [selectedFilters, setSelectedFilters] = useState({}) // used to filter the api data
  const [mobileMenu, setMobileMenu] = useState(false)

  // used to build the api endpoint
  const [endpoint, setEndpoint] = useState(
    'http://localhost:3000/api/courses?semester='
  )

  const [watchlist, setWatchlist] = useState([])
  const [takenlist, setTakenlist] = useState([])
  const { user, error, isLoading } = useUser()

  const updateLists = (user) => {
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
  const filterOptionsContains = (filterOptions, filter) => {
    const found = filterOptions.some((option) => {
      return option.label === filter
    })
    return found
  }
  const addFilterValueIfNotExists = (newFilters, index, attribute) => {
    if (!filterOptionsContains(newFilters[index].options, attribute)) {
      newFilters[index].options.push({
        label: `${attribute}`,
        value: `${attribute}`,
      })
    }
  }
  useEffect(() => {
    const newFilters = [
      { abv: 'Subj', options: [], title: 'Subject' },
      { abv: 'sectionData.Prof', options: [], title: 'Professor' },
      { abv: 'sectionData.Campus', options: [], title: 'Campus' },
      { abv: 'sectionData.meetingData.day', options: [], title: 'Day' },
    ]

    semesterData.forEach((course) => {
      //course level filters
      addFilterValueIfNotExists(newFilters, 0, course.Subj)
      course.sectionData.forEach((section) => {
        //section level filters
        addFilterValueIfNotExists(newFilters, 1, section.Prof)
        addFilterValueIfNotExists(newFilters, 2, section.Campus)
        section.meetingData.forEach((meeting) => {
          // meeting level filters
          !!meeting.day && addFilterValueIfNotExists(newFilters, 3, meeting.day)
        })
      })
    })
    setFilters(newFilters)
  }, [semesterData])
  useEffect(() => {
    if (!!user) {
      createUser(user)
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
        allCollapsed,
        setAllCollapsed,
        mobileMenu,
        setMobileMenu,
        semesterTitle,
        setSemesterTitle,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export default AppContext
