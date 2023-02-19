import { createContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import useLogin from '../hooks/useLogin'
import pocketBase from '../lib/pocketBase'
import { AuthContextType } from '../utils/typings/globalTypes'

export const AuthContextSchema = createContext<AuthContextType>({
  connected: false,
  token: null,
  login: function () {},
  logout: function () {},
})

export default function AuthContext(components: any) {
  const [state, setState] = useState<AuthContextType>({
    connected: pocketBase.authStore.isValid,
    token: pocketBase.authStore.token,
    login: login,
    logout: logout,
  })

  function login() {
    setState((prevState) => ({
      ...prevState,
      connected: pocketBase.authStore.isValid,
      token: pocketBase.authStore.token,
    }))
  }

  function logout() {
    try {
      pocketBase.authStore.clear()
      setState((prevState) => ({
        ...prevState,
        connected: false,
        token: null,
      }))
    } catch (error) {
      console.error(`Erreur lors de la déconnexion ${error}`)
    }
  }

  return <AuthContextSchema.Provider value={state}>{components.children}</AuthContextSchema.Provider>
}
