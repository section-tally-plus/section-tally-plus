import React, { useContext } from 'react'
import tw, { styled } from 'twin.macro'

import Collapsible from 'react-collapsible'

const CourseDisplay = ({ ...rest }) => {
    const title = "Intro Bus/Analytcs Fin Info"
    const subject = "ACC"
    const courseNum = "01350"
    const creditHours = "3.0"

    const crn = "44236"
    const partTerm = "Full Term 06-SEP to 21-DEC"
    const section = "1"
    const prof = "Lin, Tony"
    const session = "Day"
    const day = "TR"
    const start = "1100"
    const end = "1215"
    const build = "BUSN"
    const room = "103"
    const campus = "Main"

    

    return (
        <div>
            <header tw="flex justify-center bg-gray-800 text-white rounded-lg">
                <ul tw="flex gap-4 text-lg">
                    <li><b>Course Title:</b> {title}</li>
                    <li><b>Subject: </b>{subject}</li>
                    <li><b>Course Number: </b>{courseNum}</li>
                    <li><b>Credit Hours: </b>{creditHours}</li>
                </ul>
            </header>
            <Collapsible trigger="Expand (+)" triggerWhenOpen="Collapse (-)" tw="bg-white rounded-md">
                <body tw="flex justify-center bg-white rounded-md border-2"> 
                    <ul tw="flex place-content-center grid grid-cols-2">
                        <li><b>CRN:</b> {crn}</li>
                        <li><b>Part of Term:</b> {partTerm}</li>
                        <li><b>Section:</b> {section}</li>
                        <li><b>Professor:</b> {prof}</li>

                        <Collapsible trigger="Meeting Info (+)" triggerWhenOpen="Meeting Info (-)" tw="font-bold">
                            <ul tw="scale-75 bg-gray-300 rounded-md border-2 border-gray-800">
                                <li>Day: {day}</li>
                                <li>Start Time: {start}</li>
                                <li>End Time: {end}</li>
                            </ul>
                        </Collapsible>

                        <Collapsible trigger="Location (+)" triggerWhenOpen="Location (-)" tw="font-bold">
                            <ul tw="scale-75 bg-gray-300 rounded-md border-2 border-gray-800">
                                <li>Campus: {campus}</li>
                                <li>Building: {build}</li>
                                <li>Room: {room}</li>
                            </ul>
                        </Collapsible>
                    </ul>
                </body>
            </Collapsible> 
        </div> 
    )
}

export default CourseDisplay