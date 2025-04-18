import { Button } from '@material-tailwind/react'
import React from 'react'

const App = () => {
  return (
    <div className='w-full h-screen flex items-center justify-center'>
    <div className="flex w-max gap-4">
      <Button variant="filled">filled</Button>
      <Button variant="gradient">gradient</Button>
    </div>
    </div>
  )
}

export default App