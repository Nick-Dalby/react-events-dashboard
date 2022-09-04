import { useState } from 'react'
import Header from './components/Header'
import Main from './components/Main'

function App() {
  const [numberOfEvents, setNumberOfEvents] = useState(9)

  const getNumberOfEvents = (num) => {
    setNumberOfEvents(num)
  }
  return (
    <div className="bg-gray-50 dark:bg-gray-700 p-4 md:p-6 lg:p-8 min-h-screen grid gap-4 md:gap-6 lg:gap-8 text-gray-600 dark:text-gray-300 grid-rows-auto1">
      <Header
        title={'Events'}
        getNumberOfEvents={getNumberOfEvents}
        numberOfEvents={numberOfEvents}
      />
    <Main numberOfEvents={numberOfEvents}/>
    </div>
  )
}

export default App
