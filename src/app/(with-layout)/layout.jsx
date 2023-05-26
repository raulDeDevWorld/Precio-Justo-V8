'use client'

import style from './Medico.module.css'

export default function Home({ children }) {

  return (
    <div className="pt-12 min-h-screen bg-gray-200">
      <nav
        className="fixed top-0 w-full bg-gray-200 border-gray-800 z-10"
      // className="bg-white border-gray-200 
      // dark:bg-gray-900"
      >
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="https://flowbite.com/" className="flex items-center">
            <img src="/logo-dark.svg" className="h-8 mr-3" alt="Flowbite Logo" />
            <span
              className="self-center text-blue-600 text-2xl font-semibold whitespace-nowrap"
            //   className="self-center text-2xl font-semibold whitespace-nowrap 
            //   dark:text-white"
            >Precio Justo</span>
          </a>
          <div className="flex items-center md:order-2">
            <button type="button" className="flex mr-3 text-sm bg-blue-600 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
              <span className="sr-only">Open user menu</span>
              <img className="w-7 h-7 rounded-full" src="/notification.svg" alt="user photo" />
            </button>
            <button type="button" className="flex mr-3 text-sm bg-blue-600 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
              <span className="sr-only">Open user menu</span>
              <img className="w-8 h-8 rounded-full" src="/user.svg" alt="user photo" />
            </button>







          </div>

        </div>
      </nav>

      <main className="p-5">
        {children}
      </main>
    </div>
  )
}



