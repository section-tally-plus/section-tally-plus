import React from 'react'
import tw from 'twin.macro'
import { addFavorite, addTaken } from '../library/Functions'
import AddCourse from './AddCourse'

const Section = tw.section`w-full flex flex-row items-center justify-between`
const List = tw.ul`flex flex-col gap-1 font-bold font-mont`
const Wrapper = tw.div`flex flex-row gap-4 items-center`
const AddCourses = tw.div`flex flex-col items-end gap-2`

const UserInfo = ({ name, email, picture, ...rest }) => {
  return (
    <Section {...rest}>
      <Wrapper>
        {!!picture && <img src={picture} tw="rounded-full" />}
        <List>
          <li>{`${name}`}</li>
          <li>{`${email}`}</li>
        </List>
      </Wrapper>
      <AddCourses>
        <AddCourse type="favorites" addCourse={addFavorite} />
        <AddCourse type="course taken" addCourse={addTaken} />
      </AddCourses>
    </Section>
  )
}

export default UserInfo
