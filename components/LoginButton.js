import React, { Fragment, useContext } from 'react'
import tw, { styled } from 'twin.macro'
import { useRouter } from 'next/router'
import { useUser } from '@auth0/nextjs-auth0'

import AppContext from './AppContext'
import { Menu, Transition } from '@headlessui/react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'

const Section = tw.div``

const ButtonStyles = () => [
  tw`bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 flex flex-row items-center justify-center w-full px-4 py-2 text-sm font-medium text-white bg-black rounded-md`,
]

const MenuButton = styled(Menu.Button)(ButtonStyles)
const SigninButton = styled.button(ButtonStyles)

const Item = styled(Menu.Item)``
const ItemButton = tw.button`flex text-black items-center w-full px-2 py-2 text-sm rounded-md`

const List = tw(
  Menu.Items
)`ring-black ring-opacity-5 focus:outline-none absolute right-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg`

const LoginButton = ({ ...rest }) => {
  const { user, error, isLoading } = useUser()
  const router = useRouter()
  const { toggleSidebar, toggleResults, toggleProfile } = useContext(AppContext)

  let Button = !!user ? MenuButton : SigninButton

  return (
    <Section {...rest}>
      <Menu as="div">
        {/* {!isLoading && !error && (
          <Menu.Button
            onClick={() => {
              !!user
                ? router.push('/api/auth/logout')
                : router.push('/api/auth/login')
            }}
          >
            {!!user ? 'Sign-out' : 'Sign-in'}
            <FontAwesomeIcon tw="ml-2" icon={faUserCircle} />
          </Menu.Button>
        )} */}

        <div>
          <Button
            onClick={(e) => {
              if (!user) {
                e.preventDefault()
                router.push('/api/auth/login')
              }
            }}
          >
            {!!isLoading || !!error ? '...' : !!user ? user.name : 'Sign-in'}
            <FontAwesomeIcon tw="ml-2" icon={faUserCircle} />
          </Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <List className="">
            <div className="px-1 py-1">
              <Item>
                <ItemButton
                  onClick={() => {
                    toggleSidebar(false)
                    toggleResults(false)
                    toggleProfile(true)
                  }}
                >
                  Profile
                </ItemButton>
              </Item>
            </div>
            <div className="px-1 py-1">
              <Item>
                <ItemButton
                  onClick={() => router.push('/api/auth/logout')}
                  className="button"
                >
                  Sign Out
                </ItemButton>
              </Item>
            </div>
          </List>
        </Transition>
      </Menu>
    </Section>
  )
}

export default LoginButton
