import React from 'react'

const Category = ({category}) => {
  return (
<>
<div className='px-6 flex items-center gap-12 py-2'>
      <p className='text-nowrap dark:text-white'>{category}</p>
      <p className='dark:text-white'>|</p>
    </div>
    
</>
  )
}

export default Category