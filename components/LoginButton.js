import React, { Fragment } from 'react'
import tw from 'twin.macro'
import { Menu, Transition } from '@headlessui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'

const Section = tw.div``

const TopItem = tw(
  Menu.Button
)`bg-opacity-20 relative hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 inline-flex justify-center items-center w-full px-4 py-2 text-white bg-blue-500 rounded-md`

const List = tw(
  Menu.Items
)`ring-1 ring-black ring-opacity-5 focus:outline-none absolute right-0 w-56 mt-2 mr-8 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg`

const MenuItems = [
  {
    label: 'Sign-in',
    icon: 'faSignInAlt',
    action: () => {
      console.log('Sign-in')
    },
  },
  {
    label: 'Create Account',
    icon: 'faPlus',
    action: () => {
      console.log('Create Account')
    },
  },
]

const LoginButton = ({ ...rest }) => {
  return (
    <Section {...rest}>
      <Menu as="div">
        <div>
          <TopItem>
            Sign-in
            <FontAwesomeIcon tw="ml-2" icon={faUserCircle} />
          </TopItem>
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
          <List>
            <div tw="p-1">
              {MenuItems.map((item, index) => (
                <Menu.Item key={index}>
                  <button
                    onClick={item.action}
                    tw="flex w-full items-center rounded-md gap-4 px-2 py-2 text-sm text-gray-900 hover:(bg-blue-500 text-white)"
                  >
                    <FontAwesomeIcon tw="flex relative" icon={item.icon} />
                    {item.label}
                  </button>
                </Menu.Item>
              ))}
            </div>
          </List>
        </Transition>
      </Menu>
    </Section>
  )
}

export default LoginButton
