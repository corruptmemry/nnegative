export default function Footer() {
  function toggleTheme(e: any) {
    e.preventDefault();
    var themeToggleDarkIcon = document.getElementById("theme-toggle-dark-icon");
    var themeToggleLightIcon = document.getElementById(
      "theme-toggle-light-icon"
    );

    // Change the icons inside the button based on previous settings
    if (
      localStorage.getItem("color-theme") === "dark" ||
      (!("color-theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      themeToggleLightIcon!.classList.remove("hidden");
    } else {
      themeToggleDarkIcon!.classList.remove("hidden");
    }

    var themeToggleBtn = document.getElementById("theme-toggle");
    themeToggleBtn!.addEventListener("click", function () {
      // toggle icons inside button
      themeToggleDarkIcon!.classList.toggle("hidden");
      themeToggleLightIcon!.classList.toggle("hidden");

      // if set via local storage previously
      if (localStorage.getItem("color-theme")) {
        if (localStorage.getItem("color-theme") === "light") {
          document.documentElement.classList.add("dark");
          localStorage.setItem("color-theme", "dark");
        } else {
          document.documentElement.classList.remove("dark");
          localStorage.setItem("color-theme", "light");
        }

        // if NOT set via local storage previously
      } else {
        if (document.documentElement.classList.contains("dark")) {
          document.documentElement.classList.remove("dark");
          localStorage.setItem("color-theme", "light");
        } else {
          document.documentElement.classList.add("dark");
          localStorage.setItem("color-theme", "dark");
        }
      }
    });
  }
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
                  <li>Discord (crptmemory#3878, карась#9083)</li>
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
            <button
              id="theme-toggle"
              type="button"
              onClick={toggleTheme}
              className="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5"
            >
              <svg
                id="theme-toggle-dark-icon"
                className="hidden w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
              </svg>
              <svg
                id="theme-toggle-light-icon"
                className="hidden w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </footer>
    </>
  );
}
