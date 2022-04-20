import React, { useEffect, useContext, useState } from 'react'
import tw, { styled } from 'twin.macro'
import AppContext from './AppContext'
import axios from 'axios'
const Section = tw.div`shadow-xl flex flex-col items-center min-w-[20rem] py-6 gap-4`
const Title = tw.h3`text-2xl font-oxygen font-bold `
const List = tw.ul`flex flex-col gap-1`

const Item = styled.li`
  ${tw`relative flex flex-row justify-end gap-4`}
`

const moveCourse = (Subj, course) => {
  console.log(
    'Placeholder. Will eventually move classes from favorites to the taken list.'
  )
}

const UserCourseList = ({ title, classes, deleteCourse, ...rest }) => {
  const { user, setWatchlist, setTakenlist } = useContext(AppContext)
  const [listChange, setListChange] = useState(false)
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
    <Section {...rest}>
      <Title>{title}</Title>
      <List>
        {!!classes &&
          classes.map(({ Subj, course }, i) => {
            if (!!Subj && course) {
              return (
                <Item key={i}>
                  <div tw="flex flex-row gap-4">
                    <p>{Subj}</p>
                    <p>{course}</p>
                  </div>
                  <div>
                    <button onClick={() => moveCourse(Subj, course)}>
                      move
                    </button>{' '}
                    /{' '}
                    <button
                      onClick={() => {
                        deleteCourse(user, Subj, course).then(() => {
                          setListChange(!listChange)
                        })
                      }}
                    >
                      delete
                    </button>
                  </div>
                </Item>
              )
            }
          })}
      </List>
    </Section>
  )
}

export default UserCourseList
