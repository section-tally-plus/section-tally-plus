import React, { useContext } from 'react'
import tw from 'twin.macro'
import AppContext from './AppContext'
import axios from 'axios'

const Button = tw.button`bg-blue-800 text-white rounded-md text-lg uppercase w-24 opacity-100 transition-colors ease-in-out duration-300 hover:(bg-blue-500 cursor-pointer)`

const BASE_URL = 'http://localhost:3000/'

const GoButton = ({ ...rest }) => {
  const {
    semester,
    selectedFilters,
    toggleResults,
    toggleSidebar,
    setSemesterData,
    toggleProfile,
  } = useContext(AppContext)

  return (
    <Button
      {...rest}
      onClick={async (e) => {
        e.preventDefault()

        if (!!semester) {
          // todo: impliment a check if results are already being shown
          toggleProfile(false)
          toggleResults(true)
          toggleSidebar(true)

          let endpoint = `${BASE_URL}api/courses?semester=${semester}`

          for (let abv in selectedFilters) {
            if (selectedFilters[abv].length > 0) {
              endpoint += `&${abv}=`
              selectedFilters[abv].forEach((filter) => {
                endpoint += `${filter.value},`
              })
              endpoint = endpoint.slice(0, -1)
            }
          }

          console.log({ endpoint })

          await axios
            .get(endpoint)
            .then((result) => {
              setSemesterData(result.data)
              console.log(result.data)
            })
            .catch((error) => console.log(error))
        }
      }}
    >
      Go
    </Button>
  )
}

export default GoButton