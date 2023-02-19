export interface AuthData {
  email: string | null
  password: string | null
}

export interface AuthContextType {
  connected: boolean
  token: string | null
  login: () => void
  logout: () => void
}

export interface DefaultState {
  loading: boolean
  error: string | undefined
}

// PocketBase
export interface CollectionDataResult<T> {
  data: T | null
  state: DefaultState
}

export interface BaseDataOptions<T> {
  collectionName: string
  method: string
  params?: any[]
}
