import React, { useContext } from 'react'
import tw from 'twin.macro'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import AppContext from './AppContext'

const Button = tw.button`hover:opacity-100 opacity-80 text-3xl text-white transition-all duration-300 ease-in-out`

const MenuButton = ({ ...rest }) => {
  const {
    showSidebar,
    toggleSidebar,
    semester,
    setSemester,
    showResults,
    toggleResults,
  } = useContext(AppContext)
  return (
    <Button
      {...rest}
      onClick={() => {
        // this function is gross, but it think it works so I'm not going to touch it
        // unless someone proves me wrong
        if (!semester) {
          !showResults && toggleSidebar(true)
          toggleResults(!showResults)
        } else if (showResults) {
          toggleSidebar(!showSidebar)
        } else {
          toggleResults(true)
          toggleSidebar(true)
        }
      }}
    >
      <FontAwesomeIcon icon={faBars} />
    </Button>
  )
}

export default MenuButton
