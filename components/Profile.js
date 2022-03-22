import React, { useEffect } from 'react'
import tw, { styled } from 'twin.macro'
import axios from 'axios'
import { useUser } from '@auth0/nextjs-auth0'

const Section = styled.section(({ showSidebar }) => [
  tw` relative top-0 right-0 flex flex-col w-full px-8 py-12 ml-auto mr-0 transition-all duration-500 ease-in-out`,
  showSidebar && tw`w-[calc(100% - 20rem)]`,
])

const post = (user) => {
  axios
    .put(`http://localhost:3000/api/users/${user}`, {
      course: '345345',
    })
    .catch((error) => {
      console.log(error)
    })
}

const Profile = ({ ...rest }) => {
  const { user, error, isLoading } = useUser()
  console.log(user)
  const { given_name, family_name, email } = user

  useEffect(() => {
    if (user != undefined) {
      axios
        .get(`http://localhost:3000/api/users/${user.name}`)
        .then((result) => {
          console.log(result.data[0].watchlist)
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }, [user])

  return (
    <Section {...rest}>
      <div tw="flex flex-col">
        <p>{`First Name: ${given_name}`}</p>
        <p>{`Last Name: ${family_name}`}</p>
        <p>{`Email: ${email}`}</p>
      </div>

      <div tw="mt-4">
        <h3>Favorites 🌟</h3>
        <ul></ul>
      </div>

      <div tw="mt-4">
        <h3>Classes Taken 📚</h3>
        <ul></ul>
      </div>

      <div tw="mt-4">
        <button
          tw="bg-green-300"
          onClick={() => {
            post(user.name)
          }}
        >
          Zach's Button
        </button>
      </div>
    </Section>
  )
}

export default Profile
