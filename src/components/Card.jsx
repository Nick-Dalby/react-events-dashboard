import { useState } from "react"

const Card = ({ event, index }) => {
  const [ariaExpanded, setAriaExpanded] = useState(false)

  const { name, description, location, start, end, dateRange, link } = event

  const getRandomNumBetween = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min 

  const colors = ['blue', 'indigo', 'amber', 'rose', 'pink']

  const colorScheme = colors[getRandomNumBetween(0, colors.length - 1)]
  
  const handleClick = () => {
    setAriaExpanded(!ariaExpanded)
  }


  return (
    <article className="bg-white dark:bg-gray-800 shadow-xl shadow-gray-200 dark:shadow-gray-800 rounded-lg">
      <div className={`p-3 shadow bg-${colorScheme}-500 text-indigo-50 uppercase grid place-items-center rounded-t-lg`}>
        <div className="text-sm">{start.month}</div>
        <div className="text-3xl font-bold">{start.date}</div>
      </div>
      <div className="p-4 md:p-6 lg:p-8 grid gap-4 md:gap-6">
        <div className="grid gap-0">
          <p className="text-gray-400 text-sm">{dateRange}</p>
          <h2 className="font-bold text-2xl">
            <a href={link} target="_blank" rel="noopener noreferrer">
              {name}
            </a>
          </h2>
          {location ? (
            <div className="">
              <p className="text-gray-400 text-sm">{location}</p>
            </div>
          ) : (
            <div className="h-4"></div>
          )}
          {description ? (
            <div className="grid gap-1 ">
              <button
                className="text-gray-400 flex gap-1 items-center cursor-pointer"
                aria-expanded={ariaExpanded}
                aria-controls={`details-${1}`}
                id={`btn-${index}`}
                onClick={() => handleClick()}
              >
                <p className="pointer-events-none">see info</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className={`w-4 h-4 pointer-events-none transition-transform ${ariaExpanded ? 'rotate-180' : ''}`}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </button>
              <div
                className={`grid gap-1 ${ariaExpanded ? '' : 'hidden'}`}
                id={`details-${1}`}
                aria-labelledby={`btn-${index}`}
              >
                <p className="text-gray-400">{description}</p>
              </div>
            </div>
          ) : (
            <div className="h-6"></div>
          )}
        </div>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className={`bg-${colorScheme}-500 rounded-md px-4 py-2 text-${colorScheme}-50 shadow-2xl shadow-${colorScheme}-200 dark:shadow-none text-center font-bold hover:shadow-none ring ring-offset-0 ring-${colorScheme}-500 focus:outline-none focus:ring-offset-2 transition-all`}
        >
          view event
        </a>
      </div>
    </article>
  )
}
export default Card
