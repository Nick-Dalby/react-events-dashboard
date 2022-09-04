import Card from "./Card"
const Main = ({ numberOfEvents }) => {
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