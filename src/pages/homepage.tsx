export default function Homepage() {
  return (
    <>
      <section className="bg-white ">
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-left text-4xl font-extrabold font-mono leading-none md:text-5xl xl:text-6xl dark">
              Добро пожаловать!
            </h1>
            <p className="max-w-2xl mb-6 font-light font-mono text-gray-500 text-left lg:mb-8 md:text-lg lg:text-xl">
              nnegative - Площадка для игроков СПм, где они могут<br/>размещать на продажу вещи за АРы
            </p>
            <a
              href="https://nnegative.shop/api/redirect/marketplace"
              className="inline-flex justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900 left-button"
            >
              Перейти к товарам
              <svg
                className="w-5 h-5 ml-2 -mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </section>

      <section className="bg-gray-5 flex-grow">
        <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
          <div className="max-w-screen-md mb-8 lg:mb-16">
            <h2 className="mb-4 text-4xl font-mono font-extrabold text-gray-900">
              Наша команда
            </h2>
            <p className="text-gray-500 font-mono sm:text-xl">
              <strong>crptmemory</strong> - разработчик<br/>
              <strong>Kapac6_</strong> - хуй с горы
            </p>
          </div>
        </div>
      </section>

    </>
  );
}
