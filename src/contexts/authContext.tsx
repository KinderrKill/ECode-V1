import { createContext, useEffect, useState } from 'react';
import pocketBase from '../lib/pocketBase';
import { AuthContextType } from '../utils/typings/globalTypes';

type ContextComponents = {
  children: React.ReactNode;
};
export const AuthContextSchema = createContext<AuthContextType>({
  connected: false,
  token: null,
  login: function () {},
  logout: function () {},
});

export default function AuthContext(components: ContextComponents) {
  const [state, setState] = useState<AuthContextType>({
    connected: pocketBase.authStore.isValid,
    token: pocketBase.authStore.token,
    login: login,
    logout: logout,
  });

  function login() {
    setState((prevState) => ({
      ...prevState,
      connected: pocketBase.authStore.isValid,
      token: pocketBase.authStore.token,
    }));
  }

  function logout() {
    try {
      pocketBase.authStore.clear();
      setState((prevState) => ({
        ...prevState,
        connected: false,
        token: null,
      }));
    } catch (error) {
      console.error(`Erreur lors de la déconnexion ${error}`);
    }
  }

  return <AuthContextSchema.Provider value={state}>{components.children}</AuthContextSchema.Provider>;
}
