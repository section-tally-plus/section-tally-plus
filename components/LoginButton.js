import React, { Fragment } from 'react'
import tw from 'twin.macro'
import { Menu, Transition } from '@headlessui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'
import { Router, useRouter } from 'next/router'
import { useUser } from '@auth0/nextjs-auth0'

const Section = tw.div``

const LoginButton = ({ ...rest }) => {
  const { user, error, isLoading } = useUser()
  const router = useRouter()
  return (
    <Section {...rest}>
      <Menu as="div">
        {!isLoading && !error ? (
          <button
            onClick={() => {
              !!user
                ? router.push('/api/auth/logout')
                : router.push('/api/auth/login')
            }}
          >
            {!!user ? 'Sign-out' : 'Sign-in'}
            <FontAwesomeIcon tw="ml-2" icon={faUserCircle} />
          </button>
        ) : null}
      </Menu>
    </Section>
  )
}

export default LoginButton
