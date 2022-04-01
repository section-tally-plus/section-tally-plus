import React, { useEffect } from 'react'
import tw from 'twin.macro'
import Logo from './Logo'
import MenuButton from './MenuButton'
import LoginButton from './LoginButton'
import { useUser } from '@auth0/nextjs-auth0'
import axios from 'axios'
const Component = tw.header`fixed flex z-excessive items-center bg-gray-800 shadow-2xl justify-between w-full top-0 left-0 py-4 px-8 text-white h-[75px]`

const Left = tw.div`flex flex-row items-center gap-8`

const Header = ({ ...rest }) => {
  const { user, error, isLoading } = useUser()
  useEffect(() => {
    if (user != undefined) {
      axios
        .get(`http://localhost:3000/api/users/${user.email}`)
        .then((result) => {
          if (result.data.length == 0) {
            const newUser = {
              name: user.name,
              email: user.email,
              watchlist: [],
              takenlist: [],
            }

            axios.post(`http://localhost:3000/api/users`, newUser)
          }
        })
    }
  }, [user])

  return (
    <Component {...rest}>
      <Left>
        <MenuButton />
        <Logo />
      </Left>
      <LoginButton />
    </Component>
  )
}

export default Header
