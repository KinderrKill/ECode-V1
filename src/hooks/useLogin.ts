import pocketBase from '../lib/pocketBase'
import { useState } from 'react'

import { AuthData, DefaultState } from '../utils/typings/globalTypes'
import { useNavigate } from 'react-router-dom'
import useAuthContext from './useAuthContext'

function getModifiedState(loading: boolean, error?: string): DefaultState {
  return {
    loading,
    error,
  }
}

export default function useLogin() {
  const navigate = useNavigate()
  const authContext = useAuthContext()

  const [loginState, setLoginState] = useState<DefaultState>({
    loading: false,
    error: undefined,
  })

  async function login(data: AuthData, redirectPath: string) {
    setLoginState(getModifiedState(true))

    if (!data.email) {
      setLoginState(getModifiedState(false, 'Email manquant'))
      return
    } else if (!data.password) {
      setLoginState(getModifiedState(false, 'Mot de passe manquant'))
      return
    }

    try {
      await pocketBase.admins.authWithPassword(data.email, data.password)

      authContext.login()

      setTimeout(() => {
        navigate('/dashboard')
        setLoginState(getModifiedState(false))
      }, 100)
    } catch (error) {
      setLoginState(getModifiedState(false, `Erreur lors de l'authentification : ${error}`))
    }
  }

  return { login, loginState }
}
