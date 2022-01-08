import React, { useState, useEffect } from 'react'
import { BugsChart } from './Charts/BugsChart'
import { Bug, getBugs } from './Charts/mockData'
import { Header } from './Header/Header'

const App = () => {
  const [bugs, setBugs] = useState<Bug[]>()

  useEffect(() => {
    getBugs().then(setBugs)
  }, [])

  return (
    <div className='min-h-screen'>
      <Header></Header>
      {bugs && (
        <div className='bg-gray-200 grid grid-cols-2 items-center gap-3 m-4'>
          <BugsChart bugsList={bugs}></BugsChart>
          <BugsChart bugsList={bugs}></BugsChart>
          <BugsChart bugsList={bugs}></BugsChart>
        </div>
      )}
    </div>
  )
}

export default App
