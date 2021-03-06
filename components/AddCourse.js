import axios from 'axios'
import React, { useState, useContext, useEffect } from 'react'
import tw from 'twin.macro'
import AppContext from './AppContext'

const Form = tw.form`flex flex-row items-stretch justify-end gap-4`
const Title = tw.p`flex items-center font-bold capitalize`
const Input = tw.input`w-full bg-gray-300 text-center`
const Button = tw.button`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded`

const AddCourse = ({ type, addCourse, ...rest }) => {
  const { user, updateLists, setWatchlist, setTakenlist } =
    useContext(AppContext)
  const [course, setCourse] = useState('')
  const [Subj, setSubj] = useState('')
  const [listChange, setListChange] = useState('false')

  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/users/${user.email}/watchlist`)
      .then((result) => {
        setWatchlist(result.data)
      })
    axios
      .get(`http://localhost:3000/api/users/${user.email}/takenlist`)
      .then((result) => {
        setTakenlist(result.data)
      })
  }, [listChange])
  return (
    <Form {...rest}>
      <Title>{type}</Title>
      <Input
        tw="max-w-[4rem]"
        placeholder="Subj"
        onChange={(e) => {
          setSubj(e.target.value)
        }}
      />
      <Input
        tw="max-w-[10rem]"
        placeholder="Course No"
        onChange={(e) => {
          setCourse(e.target.value)
        }}
      />
      <Button
        onClick={(e) => {
          e.preventDefault()
          addCourse(user, Subj, course).then(() => {
            setListChange(!listChange)
          })
          // updateLists(user)
        }}
      >
        Add
      </Button>
    </Form>
  )
}

export default AddCourse
