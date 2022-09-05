import { useEffect, useState } from 'react'
import Card from './Card'

const Main = ({ numberOfEvents }) => {
  const [error, setError] = useState(false)
  const [eventData, setEventData] = useState([])
  const [loading, setLoading] = useState(true)

  const getNameMonth = (month) =>
    [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ][month]

  const getDayOfWeek = (weekday) =>
    ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][weekday]

  const isAM = (hour) => hour < 12
  const getHour = (hour) => (hour <= 12 ? hour : hour - 12)
  const getMinute = (minute) => (minute === 0 ? '00' : minute)

  const processDate = (date) => {
    const hour =
      getHour(date.getHours()) === 0 ? false : getHour(date.getHours())
    const minute = getMinute(date.getMinutes())
    const timeSuffix = `${isAM(date.getHours()) ? 'am' : 'pm'}`
    const time = hour && `${hour}:${minute}${timeSuffix}`

    return {
      month: getNameMonth(date.getMonth()),
      weekday: getDayOfWeek(date.getDay()),
      time,
      date: date.getDate(),
    }
  }

  const mapEventObject = (event) => {
    const startDate = event.start.dateTime
      ? processDate(new Date(event.start.dateTime))
      : processDate(new Date(`${event.start.date}T00:00:00`))
    const endDate = event.end.dateTime
      ? processDate(new Date(event.end.dateTime))
      : processDate(new Date(`${event.end.date}T00:00:00`))

    let dateRange
    if (startDate.date !== endDate.date) {
      dateRange = `${startDate.month} ${startDate.date}—${endDate.month} ${endDate.date}`
    } else if (!startDate.time) {
      dateRange = `${startDate.month} ${startDate.date}`
    } else {
      dateRange = `${startDate.weekday}, ${startDate.time}—${endDate.time} `
    }

    return {
      name: event.summary,
      description: event.description,
      location: event.location,
      start: startDate,
      end: endDate,
      dateRange,
      link: event.htmlLink,
    }
  }

  useEffect(() => {
    const loadEvents = async () => {
      try {
        const endpoint = await fetch(
          `./.netlify/functions/calendarFetch?maxResults=${numberOfEvents}`
        )
        const data = await endpoint.json()
        const processedEvents = data.items.map((e) => mapEventObject(e))
        setEventData(processedEvents)
        setLoading(false)
      } catch (error) {
        setError(true)
        console.log(error)
      }
    }

    loadEvents()
  }, [numberOfEvents])

  if (error) {
    return (
      <p className="text-center text-3xl">uh oh, error fetching events...</p>
    )
  }

  if (loading) {
    return (
      

      <div className="flex gap-3 items-center text-blue-500 mx-auto h-10 mt-10">
      <svg className="h-16 w-16 width='20' animate-spin"viewBox="0 0 155 155" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle className="opacity-25" cx="77.5" cy="77.5" r="60" stroke="currentColor" stroke-width="15"/>
        <path className="opacity-75" d="M120.329 35.48a59.998 59.998 0 0 1 6.712 75.868" stroke="currentColor" stroke-width="15"/>
      </svg>
      <p className='text-center text-3xl animate-pulse'>Loading Events...</p>
    </div>
     
    )
  }

  return (
    <main className="max-w-6xl w-full mx-auto">
      <section
        className="grid gap-4 md:gap-6 lg:gap-8 items-start grid-cols-cards"
        id="events-container"
      >
        {eventData.map((event, index) => {
          return <Card event={event} key={index} index={index}/>
        })}
      </section>
    </main>
  )
}
export default Main
