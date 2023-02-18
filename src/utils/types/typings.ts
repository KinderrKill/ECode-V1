export type AuthData = {
  email: string | null
  password: string | null
}

export type AuthContextType = {
  connected: boolean
  token: string | null
  login: () => void
  logout: () => void
}

export type LoginState = {
  loading: boolean
  error: string | undefined
}

// PocketBase
export type TestCollection = {
  id: string
  collectionId: string
  collectionName: string
  created: string
  updated: string
  text: string
}
