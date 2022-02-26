import React, { useContext, useState } from 'react'
import tw, { styled, css } from 'twin.macro'
import AnimateHeight from 'react-animate-height'

import Item from './DropdownItem'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'

const Section = tw.div`flex flex-col relative w-full`

const TopItem = tw.div`flex items-center justify-between flex-row relative pr-4 bg-white w-full font-bold pl-8 py-2 cursor-pointer after:(content[''] w-full bg-black h-px absolute bottom-0 left-0)`

const Dropdown = tw.ul`relative  w-full flex-col justify-end flex z-30 bg-white`

const DropdownList = ({ options, title, ...rest }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [listHeight, setListHeight] = useState(0)
  const [heights, setHeights] = useState(new Array(options.length).fill(0))
  const [filters, setFilters] = useState([])

  const choiceSelect = (value, i, itemHeight) => {
    let newHeights = heights
    if (filters.includes(value)) {
      setListHeight(listHeight - itemHeight)
      setFilters(filters.filter((item) => item !== value))

      for (let j = 0; j < newHeights.length; j++) {
        if (j < i) {
          newHeights[j] = newHeights[j] - itemHeight
        }
      }
    } else {
      setListHeight(listHeight + itemHeight)
      setFilters([...filters, value])
      for (let j = 0; j < newHeights.length; j++) {
        if (j < i) {
          newHeights[j] = newHeights[j] + itemHeight
        }
      }
    }
    setHeights(newHeights)
  }

  return (
    <Section {...rest}>
      <TopItem onClick={() => setIsOpen(!isOpen)}>
        <span>{title}</span>
        <FontAwesomeIcon icon={faCaretDown} />
      </TopItem>
      <Dropdown>
        <AnimateHeight
          duration={500}
          height={isOpen ? 'auto' : listHeight}
          easing="ease-in-out"
        >
          {options.map(({ label, value }, i) => (
            <Item
              key={i}
              isSelected={filters.includes(value)}
              onClick={(e) => choiceSelect(value, i, e.target.offsetHeight)}
              bottom={heights[i]}
              value={value}
              label={label}
              menuOpen={isOpen}
            />
          ))}
        </AnimateHeight>
      </Dropdown>
    </Section>
  )
}

export default DropdownList
