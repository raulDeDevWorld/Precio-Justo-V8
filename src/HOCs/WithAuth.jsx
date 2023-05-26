'use client'

import Loader from '@/components/Loader'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation';
import { useUser } from '@/context/Context.js'
import { onAuth } from '@/supabase/utils'



export function WithAuth(Component) {
    return () => {
        const { user, setUserProfile, setUserData } = useUser()
        const router = useRouter()

        useEffect(() => {
            onAuth(setUserProfile, setUserData)
            if(user === null) router.push('/Login')
        }, [])
        
        return (
            <>
                {user === undefined && <Loader />}
                {user && <Component {...arguments} />}
            </>
        )
    }
}