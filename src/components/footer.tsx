
export default function Footer() {
  return (
    <>
      <footer className="bg-gray-50 p-4 md:items-center md:justify-between md:p-6">
        <div className="mx-auto max-w-screen-xl">
          <div className="md:flex md:justify-between">
            <div className="mb-6 md:mb-0">
              <a href="/" className="flex items-center">
                <img src="/d" className="mr-6 h-24" alt="Logo" />
              </a>
            </div>
            <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">
                  Контакты
                </h2>
                <ul className="text-gray-60">
                  <li className="mb-4">
                    <a
                      href="https://github.com/corruptmemry"
                      className="hover:underline "
                    >
                      Github
                    </a>
                  </li>
                  <li>
                      Discord (crptmemory#3878, карась#9083)
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">
                  Правовая информация
                </h2>
                <ul className="text-gray-600">
                  <li className="mb-4">
                    <a href="/info/policy" className="hover:underline">
                      Политика конфиденциальности
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
          <div className="sm:flex sm:items-center sm:justify-between">
            <span className="text-sm text-gray-500 sm:text-center">
              © 2022{" "}
              <a href="#" className="hover:underline">
                nnegative
              </a>{" "}
              * All Rights Reserved.
            </span>
          </div>
        </div>
      </footer>
    </>
  );
}
