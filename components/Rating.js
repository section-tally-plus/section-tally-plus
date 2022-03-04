import React from 'react'
import tw from 'twin.macro'

import Popover from 'react-bootstrap/Popover'

const width = 50

const ratingBar = tw.div`flex bg-blue-200 w-[${width}%]`

const Rating = (
    <Popover tw="absolute">
        <Popover.Header tw="flex px-2 py-0.5 bg-yellow-500 rounded-t-lg border-r-2 italic">Rate My Professors</Popover.Header>
        <Popover.Body tw="flex flex-row bg-gray-400 rounded-br-lg rounded-bl-lg border-r-2 border-t-2 w-full">
           <div>
                <div tw="flex flex-row inline-block min-h-full">
                    <div tw="absolute rounded-b-md rounded-r-md bg-green-300 h-2/5 w-3/4">75%</div>
                </div>
           </div> 
        </Popover.Body>
    </Popover>    
);

export default Rating