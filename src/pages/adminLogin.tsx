import React, { useEffect, useState } from 'react';
import { AuthData } from '../utils/typings/globalTypes';
import useLogin from '../hooks/useLogin';
import { useNavigate } from 'react-router-dom';
import useAuthContext from '../hooks/useAuthContext';

export function AdminLogin() {
  const navigate = useNavigate();
  const authContext = useAuthContext();

  // Automatic redirection if user is already connected
  useEffect(() => {
    if (authContext.connected) navigate('/dashboard');
  }, []);

  const { login, loginState } = useLogin();

  const [data, setData] = useState<AuthData>({
    email: null,
    password: null,
  });

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>, key: string) {
    setData((prevData) => ({
      ...prevData,
      [key]: event.target.value,
    }));
  }

  async function handleConnection(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    // Prevents React from releasing event properties before async login() call.
    event.persist();

    await login(data, '/dashboard');
  }

  return (
    <>
      <p className='absolute top-1 left-1 font-painted text-sm select-none text-[#242424]'>
        Si tu n'est pas un administrateur, alors bravo, tu a trouvé cette page !<br />
        Par contre tu ne pourras pas allez plus loin... Désolé
      </p>
      <section className='h-auto w-[28rem] bg-gray-800 flex flex-col justify-center items-center rounded-t-lg shadow-black shadow-lg px-10 py-14 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
        <div className='w-full h-full'>
          <div className='flex items-center'>
            <span
              className='bg-white text-black px-2 py-1 mr-3 rounded-md font-bold select-none hover:bg-gray-400 transition-all cursor-pointer'
              onClick={() => navigate('/')}>
              &lt;
            </span>
            <span className='text-4xl font-secondary'>Administrateur</span>
          </div>

          <article className='mt-10 flex flex-col'>
            <div className='mb-10'>
              <label className='block mb-2 text-md font-medium text-gray-900 dark:text-white'>Adresse email</label>
              <div className='flex'>
                <span className='inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md select-none'>
                  @
                </span>
                <input
                  type='text'
                  className='rounded-none rounded-r-lg outline-none focus:outline-none bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5'
                  onChange={(event) => handleInputChange(event, 'email')}
                />
              </div>
            </div>
            <div>
              <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>Mot de passe</label>
              <div className='flex'>
                <span className='inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md select-none'>
                  *
                </span>
                <input
                  type='password'
                  className='rounded-none rounded-r-lg outline-none focus:outline-none bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5'
                  onChange={(event) => handleInputChange(event, 'password')}
                />
              </div>
            </div>
            <p
              className={
                'self-center mt-7 bg-red-700 text-white px-2 py-1 rounded-md ' + (!loginState.error && 'hidden')
              }>
              {loginState.error}
            </p>
          </article>

          <button
            className={'self-start mt-12 select-none ' + (loginState.loading && 'animate-pulse')}
            onClick={(event) => handleConnection(event)}>
            {loginState.loading ? 'Connexion' : 'Se connecter'}
          </button>
        </div>
      </section>
    </>
  );
}
