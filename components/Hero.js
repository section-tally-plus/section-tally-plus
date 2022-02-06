import React from 'react'
import tw, { styled } from 'twin.macro'

const Section = tw.div`flex flex-col w-full h-screen relative`

const ImageWrapper = styled.div`
  ${tw`h-2/3 relative top-0 flex items-center justify-center w-full shadow-xl`}

  & > img {
    ${tw`absolute object-cover w-full h-full`}
    object-postion: 50% 50%;
  }
`

const SemesterBar = tw.form`flex flex-row absolute gap-12`
const Select = styled.select`
  ${tw`w-[20rem] text-2xl py-2 px-4 bg-gray-100 rounded-md text-gray-800`}
`
const Submit = tw.input`bg-blue-800 text-white rounded-md text-lg uppercase w-24 opacity-100 transition-colors ease-in-out duration-300 hover:(bg-blue-500 cursor-pointer)`

const Hero = ({ ...rest }) => {
  return (
    <Section {...rest}>
      <ImageWrapper>
        <img src={'/lake.jpg'} alt="Lake" />
        <SemesterBar
          onSubmit={(e) => (e.preventDefault(), console.log('submit'))}
        >
          <Select placeholder="Semester" required>
            <option value="" disabled selected hidden>
              Select a Semester
            </option>
            <option value="spring2022">Spring 2022</option>
            <option value="summer2022">Summer 2022</option>
            <option value="fall2022">Fall 2022</option>
          </Select>
          <Submit type="submit" submit value="Go" />
        </SemesterBar>
      </ImageWrapper>
    </Section>
  )
}

export default Hero
