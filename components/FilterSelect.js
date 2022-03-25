import React, { useState, useContext, useEffect } from 'react'
import tw from 'twin.macro'
import { MultiSelect } from 'react-multi-select-component'
import AppContext from './AppContext'

const Select = tw.div``
const Header = tw.h3`text-white font-bold mb-1`
const List = tw.ul`ml-4`
const Item = tw.li`text-white opacity-30`

const FilterSelect = ({ title, abv, options, ...rest }) => {
  const { selectedFilters, setSelectedFilters } = useContext(AppContext)
  const [selected, setSelected] = useState([])

  useEffect(() => {
    let newSelectedFilters = selectedFilters
    newSelectedFilters[abv] = selected
    setSelectedFilters(newSelectedFilters)
  }, [selected])

  return (
    <Select {...rest}>
      <Header>{title}</Header>
      <MultiSelect
        options={options}
        value={selected}
        onChange={setSelected}
        hasSelectAll={false}
        isCreatable={true}
      />
      <List>
        {selected.map((item, i) => (
          <Item key={i}>{item.label}</Item>
        ))}
      </List>
    </Select>
  )
}

export default FilterSelect
