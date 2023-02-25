import pocketBase from '../../lib/pocketBase';

export interface DefaultState {
  loading: boolean;
  error: string | undefined;
}

export interface AuthData {
  email: string | null;
  password: string | null;
}

export interface AuthContextType {
  connected: boolean;
  token: string | null;
  login: () => void;
  logout: () => void;
}

export interface FormData {
  name?: string;
  email?: string;
  subject?: string;
  content?: string;
}

// PocketBase
export interface CollectionDataResult<T> {
  loading: boolean;
  error: { [key: string]: any } | undefined;
  data: T | null;
  fetchData: () => Promise<void>;
}

export interface BaseDataOptions<T> {
  collectionName: string;
  method: string;
  fetchOnLoad?: boolean;
  params?: any[];
}

export interface PBResponseError {
  url: string;
  status: number;
  data: { [key: string]: any };
  isAbort: boolean;
  originalError: any;
}
