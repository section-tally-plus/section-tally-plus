import React from 'react'
import tw from 'twin.macro'

const width = 100

const ratingBar = tw.div`flex bg-blue-200 w-[${width}%]`

const Rating = ({...rest}) => {
    return (
    <div tw="w-10 bg-red-100">
        <div tw="m-1 w-[${width}%] bg-blue-200">Testing</div>
    </div>
    )
}

export default Rating