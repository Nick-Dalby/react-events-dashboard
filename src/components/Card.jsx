const Card = () => {
  return (
    <article className="bg-white dark:bg-gray-800 shadow-xl shadow-gray-200 dark:shadow-gray-800 rounded-lg">
        <div className="p-3 shadow bg-indigo-500 text-indigo-50 uppercase grid place-items-center rounded-t-lg">
          <div className="text-sm">Feb</div>
          <div className="text-3xl font-bold">5</div>
        </div>
        <div className="p-4 md:p-6 lg:p-8 grid gap-4 md:gap-6">
          <div className="grid gap-1">
            <p className="text-gray-400 text-sm">Feb 03-Feb 05</p>
            <h2 className="font-bold text-2xl">
              <a href="#">cool event</a>
            </h2>
            <div className="grid gap-1">
              <button className="text-gray-400 flex gap-1 items-center cursor-pointer" aria-expanded="false" aria-controls="details-1" id="btn-1">
                <p className="pointer-events-none">see info</p>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4 pointer-events-none transition-transform">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </button>
                <div className="grid gap-1" id="details-1" aria-labelledby="btn-1">
                  <p className="text-gray-400">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto cum, fuga dolor voluptate perspiciatis ab accusantium officiis esse recusandae labore odit ratione eius facilis optio quas! Expedita, nostrum? Id, fugiat.
                  </p>
                </div>
            </div>
          </div>
          <a href="#" className="bg-indigo-500 rounded-md px-4 py-2 text-indigo-50 shadow-2xl shadow-indigo-200 dark:shadow-none text-center font-bold hover:shadow-none ring ring-offset-0 ring-indigo-500 focus:outline-none focus:ring-offset-2 transition-all">view event</a>
        </div>
      </article>
  )
}
export default Card