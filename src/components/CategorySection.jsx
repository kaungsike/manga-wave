import React from 'react'
import Container from '../template/Container'
import Category from '../utils/Category';

const CategorySection = () => {

  const manhwaCategories = [
    "Action",
    "Romance",
    "Fantasy",
    "Comedy",
    "Drama",
    "School Life"
  ];
  

  return (
    <section className='border-b border-b-gray-500 pb-2'>
      <Container>
        <div className='w-full flex items-center justify-center overflow-x-scroll lg:overflow-auto mt-2 '>
          {manhwaCategories.map((category,index) => <Category key={index} category={category}/> )}
        </div>
      </Container>
    </section>
  )
}

export default CategorySection