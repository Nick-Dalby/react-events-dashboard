import Card from "./Card"
import { useEffect } from "react"

const Main = ({ numberOfEvents }) => {

// useEffect(() => {
//   const loadEvents = async () => {
//     try {
//       const endpoint = await fetch(`./.netlify/functions/calendarFetch?maxResults=${numberOfEvents}`)
//       // const data = await endpoint.json()
//       console.log(endpoint);
//       // console.log(numberOfEvents);
//     } catch (error) {
//       console.log(error);
//     }
//   }

//   loadEvents()

// },[])



  return (
    <main className="max-w-6xl w-full mx-auto">
    <section
      className="grid gap-4 md:gap-6 lg:gap-8 items-start grid-cols-cards"
      id="events-container"
    >
      <Card />
    </section>
  </main>
  )
}
export default Main