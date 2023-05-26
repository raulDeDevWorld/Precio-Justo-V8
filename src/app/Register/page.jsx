'use client'
import { writeUserData } from '@/supabase/utils'
import { useUser } from '@/context/Context'
import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import style from '../page.module.css'
import Button from '../../components/Button'
import Input from '@/components/Input'
import Select from '@/components/Select'
import { WithAuth } from '@/HOCs/WithAuth'


import { useRouter } from 'next/navigation';

function Home() {

    const { user, setUserProfile, setUserSuccess, success, setUserData } = useUser()
    const router = useRouter()

    const [rol, setRol] = useState('Cliente')
    const [ciudad, setCiudad] = useState('La paz')


    const onClickHandler = (name, value) => {
        setRol(value)
    }
    const onClickHandlerCity = (name, value) => {
        setCiudad(value)
    }
    const registerHandler = (e) => {
        e.preventDefault()
        let nombre = e.target[0].value

        writeUserData('Users', { id: user.id, nombre, rol, ciudad })
    }

    console.log(user)

    return (

        <div className={style.container}>
            <header className={style.header}></header>
            <main className={style.main}>
                <Image src="/logo-main.svg" width="200" height="200" alt="User" />
                <br />
                <br />






                <div
                    class="w-full max-w-sm p-0 bg-transparent rounded-lg shadow sm:p-6 md:p-8 "
                // class="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 
                // dark:bg-gray-800 dark:border-gray-700"
                >
                    <form class="space-y-6" onSubmit={registerHandler} >
                        <h5 class="text-xl font-medium text-gray-900 dark:text-white">Registrate</h5>
                        <div>
                            <label for="email" class="block mb-2 text-sm text-left font-medium text-gray-900 dark:text-white">Nombre</label>
                            <Input type="text" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="" required />
                        </div>
                        <div>
                            <label for="email" class="block mb-2 text-sm text-left font-medium text-gray-900 dark:text-white">Tipo de cuenta</label>
                            <Select arr={['Cliente', 'Medico', 'Clinica', 'Distribuidor']} name='rol' click={onClickHandler} />
                        </div>
                        <div>
                            <label for="password" class="block mb-2 text-sm text-left  font-medium text-gray-900 dark:text-white">Ciudad</label>
                            <Select arr={['La Paz', 'Cochabamba', 'Santa Cruz']} name='Ciudad' click={onClickHandlerCity} />
                        </div>
                        <div class="flex items-start">
                            <div class="flex items-start">
                                <div class="flex items-center h-5">
                                    <input id="remember" type="checkbox" value="" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
                                </div>
                                <label for="remember" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Políticas de Servicio</label>
                            </div>
                            <a href="#" class="ml-auto text-green-400 text-sm text-blue-700 hover:underline">Olvidaste tu contraseña?</a>
                        </div>
                        <button type="submit" class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Continuar</button>
                        <div class="text-sm font-medium text-gray-500 dark:text-gray-300">Ya tienes una cuenta? <Link href="/SignUp" class="text-green-400 hover:underline">Inicia Sessión</Link >
                        </div>
                    </form>
                </div>
            </main>
            {/* {success == false && <Error>ERROR: verifique e intente nuevamente</Error>}
        {success == 'complete' && <Error>Llene todo el formulario</Error>} */}
        </div>

    )
}


export default  WithAuth(Home)