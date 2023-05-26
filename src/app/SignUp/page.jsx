'use client';
import { useUser } from '@/context/Context'
import { onAuth, signUpWithEmailAndPassword } from '@/supabase/utils'
import { useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import style from '@/app/page.module.css'
import Button from '@/components/Button'
import Input from '@/components/Input'
import { useRouter } from 'next/navigation';



export default function Home() {

  const { user, setUserProfile, setUserSuccess, success, setUserData, postsIMG, setUserPostsIMG } = useUser()
  const router = useRouter()

            
  const signUpHandler = (e) => {
    e.preventDefault()
    let email = e.target[0].value
    let password = e.target[1].value
    signUpWithEmailAndPassword(email, password)
  }

  useEffect(() => {
    onAuth(setUserProfile, setUserData, postsIMG, setUserPostsIMG)
    if (user) router.replace('/Register')
  }, [user]);

  return (

    <div className={style.container}>
      <header className={style.header}></header>
      <main className={style.main}>
        <Image src="/logo-main.svg" width="200" height="200" alt="User" />
        <br />
        <br />

        <div
          className="w-full max-w-sm p-0 bg-transparent rounded-lg shadow sm:p-6 md:p-8 "
        // className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 
        // dark:bg-gray-800 dark:border-gray-700"
        >
          <form className="space-y-6" onSubmit={signUpHandler} >
            <h5 className="text-xl font-medium text-gray-900 dark:text-white">Registrate</h5>
            <div>
              <label htmlFor="email" className="block mb-2 text-sm text-left font-medium text-gray-900 dark:text-white">Email</label>
              <Input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required />
            </div>
            <div>
              <label htmlFor="password" className="block mb-2 text-sm text-left  font-medium text-gray-900 dark:text-white">Contraseña</label>
              <Input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
            </div>
            <div className="flex items-start">
              <a href="#" className="ml-auto text-green-400 text-sm text-blue-700 hover:underline">Olvidaste tu contraseña?</a>
            </div>
            <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Continuar</button>
            <div className="text-sm font-medium text-gray-500 dark:text-gray-300">Ya tienes una cuenta? <Link href="/SignUp" className="text-green-400 hover:underline">Inicia Sessión</Link >
            </div>
          </form>
        </div>

      </main>
      {/* {success == false && <Error>ERROR: verifique e intente nuevamente</Error>}
        {success == 'complete' && <Error>Llene todo el formulario</Error>} */}
    </div>

  )
}
