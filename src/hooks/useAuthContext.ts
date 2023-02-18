import { useContext } from 'react'
import { AuthContextSchema } from '../contexts/authContext'

export default function useAuthContext() {
  const context = useContext(AuthContextSchema)

  if (context === undefined) throw new Error('AuthContext is undefinde !')
  else return context
}
