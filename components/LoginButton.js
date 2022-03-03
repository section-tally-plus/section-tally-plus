import React, { Fragment } from 'react'
import tw from 'twin.macro'
import { Menu, Transition } from '@headlessui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'
import { Router, useRouter } from 'next/router'

const Section = tw.div``



const LoginButton = ({ ...rest }) => {
  const router = useRouter();
  return (
    <Section {...rest}>
      <Menu as="div">
        <div>
          <button onClick={() => {router.push('/api/auth/login')}} >
            Sign-in
            <FontAwesomeIcon tw="ml-2" icon={faUserCircle} />
          </button>
        </div>
     
      </Menu>
    </Section>
  )
}

export default LoginButton
