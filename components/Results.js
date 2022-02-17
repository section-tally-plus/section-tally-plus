import React, { useContext } from 'react'
import tw, { styled } from 'twin.macro'
import AppContext from './AppContext'

const Section = styled.section(({ showSidebar }) => [
  tw`relative right-0 flex flex-col w-full px-8 py-12 ml-auto mr-0 transition-all duration-500 ease-in-out bg-green-300`,
  showSidebar && tw`w-[calc(100% - 25rem)]`,
])

const Results = ({ ...rest }) => {
  const { showSidebar } = useContext(AppContext)
  return (
    <Section showSidebar={showSidebar} {...rest}>
      Laboris consequat reprehenderit et qui anim proident. Eu pariatur
      consequat deserunt anim excepteur mollit mollit. Sint nulla sit do cillum
      cillum irure ad. Anim qui fugiat laborum irure aute id anim et consequat
      labore consectetur. Culpa eu voluptate aliqua proident enim ullamco aute
      enim commodo cupidatat eiusmod tempor. Amet fugiat nulla ut mollit eu
      officia labore aute dolore commodo commodo cupidatat. Culpa ad velit
      adipisicing pariatur eu ea. Veniam magna non officia tempor et consequat
      sint velit aute officia. Amet officia ea excepteur minim laboris commodo
      tempor deserunt exercitation cillum. Minim non tempor enim velit
      consectetur aliqua. Nulla eu dolore quis ut amet ullamco officia sunt
      labore adipisicing. Laboris ad excepteur duis consequat ea eu et sint
      tempor. Occaecat laborum sit elit minim deserunt fugiat irure Lorem est
      enim. Culpa elit anim labore deserunt non tempor enim. Nulla dolor aute
      tempor magna consequat eiusmod sit commodo minim mollit mollit quis sunt.
      Cupidatat dolore et ullamco qui sint est cillum non dolor. Veniam
      consequat nisi non est dolore esse ad. Incididunt labore esse ut magna
      enim cillum labore commodo ullamco cupidatat. Sit eu voluptate ipsum in
      laboris est laboris incididunt. Minim est eu magna Lorem laboris.
    </Section>
  )
}

export default Results
