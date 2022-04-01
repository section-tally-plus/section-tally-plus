import React, { useContext, useEffect, useState } from 'react'
import tw, { styled } from 'twin.macro'
import AppContext from './AppContext'

import UserInfo from './UserInfo'
import UserCourseList from './UserCourseList'

const Section = styled.section(({ showSidebar }) => [
  tw`relative top-0 right-0 flex flex-col w-full px-8 py-12 ml-auto mr-0 transition-all duration-500 ease-in-out `,
  showSidebar && tw`w-[calc(100% - 20rem)]`,
])

const Profile = ({ ...rest }) => {
  const { user, watchlist } = useContext(AppContext)

  return (
    <Section {...rest}>
      <UserInfo {...user} />

      <div tw="flex flex-row w-full mt-12 flex-wrap relative justify-evenly">
        <UserCourseList title="Favorites 🌟" classes={watchlist} user={user} />
        <UserCourseList title="Courses Taken 📚" />
      </div>
    </Section>
  )
}

export default Profile
