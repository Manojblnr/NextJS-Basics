import React from 'react'

const page = ({params}) => {
  return (
    <div>
        Test
        <h4>url:{params.slug[0]} / {params.slug[1]}</h4>
    </div>
  )
}

export default page