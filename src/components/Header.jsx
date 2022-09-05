
const Header = ({ title, getNumberOfEvents, numberOfEvents }) => {

  return (
    <header className="text-center grid p-4 place-items-center content-center">

    <h1 className="text-3xl sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-br pb-4 md:pb-6 from-blue-500 to-violet-700 dark:from-blue-400 dark:to-violet-700 ">{title}</h1>

    <label htmlFor="eventAmount">Events to display</label>
    <input onChange={(e) => getNumberOfEvents(e.target.value)} type="range" id="eventAmount" min="1" value={numberOfEvents} max="21" className="accent-blue-600 cursor-grab" />
  </header>
  )
}
export default Header