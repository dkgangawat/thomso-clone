import React from 'react'
import Header from './components/Header'
import EventPage from './components/EventPage'
import "./App.css"
import { ContextController } from './api/context'
const App = () => {
  return (
    <>
    <ContextController>
        <div className='event-hero'>
      <Header/>
    <EventPage/>
    </div>
    </ContextController>
  
    
    </>
  )
}

export default App