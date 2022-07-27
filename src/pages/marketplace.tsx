export default function Marketplace() {
  return (
    <>
      <section className="bg-white ">
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="mr-auto place-self-center lg:col-span-7">
            <div className="max-w-sm bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                <img
                  className="p-8 rounded-t-lg"
                  src="https://static.wikia.nocookie.net/minecraft_ru_gamepedia/images/6/6c/%D0%A2%D0%BE%D1%82%D0%B5%D0%BC_%D0%B1%D0%B5%D1%81%D1%81%D0%BC%D0%B5%D1%80%D1%82%D0%B8%D1%8F.png/"
                  alt="product image"
                />
              </a>
              <div className="px-7 pb-10">
                <a href="#">
                  <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                    Тотем бессмертия
                  </h5>
                </a>
                <div className="flex justify-between items-center">
                  <p className="bg-blue-100 text-blue-800 text-xs font-semibold rounded dark:bg-blue-200 dark:text-blue-800">
                    10 в наличии
                  </p>
                  <span className="text-3xl font-bold text-gray-900 dark:text-white">
                    1 АР
                  </span>
                  <a
                    href="#"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    В корзину
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
