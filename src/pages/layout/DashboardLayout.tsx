import { useEffect, useState } from 'react';

import { Link, NavigateFunction, useNavigate } from 'react-router-dom';
import useAuthContext from '../../hooks/useAuthContext';

import 'remixicon/fonts/remixicon.css';
import { AuthContextType, FunctionChildComponent } from '../../utils/typings/globalTypes';
import pocketBase from '../../lib/pocketBase';

type NavbarItem = {
  label: string;
  link: string;
  icon: string;
};

export default function DashboardLayout({ components }: FunctionChildComponent) {
  const navigate = useNavigate();
  const authContext = useAuthContext();

  redirectIfUserNotLoggedIn(navigate, authContext);

  const [selectedNavItem, setSelectedNavItem] = useState(0);

  const [messageAmount, setMessageAmount] = useState(0);

  useEffect(() => {
    async function getMessages() {
      const resultList = await pocketBase.collection('contact_form').getFullList();

      setMessageAmount(resultList.length);
    }

    getMessages();
  }, []);

  const leftNavItems: NavbarItem[] = [
    {
      label: 'Accueil',
      link: '/dashboard',
      icon: 'ri-home-6-line',
    },
    {
      label: `Messagerie (${messageAmount})`,
      link: '/dashboard/contact',
      icon: 'ri-mail-fill',
    },
  ];

  return (
    <>
      <section className='w-screen h-screen bg-[#15232e] flex'>
        <nav className='w-52 h-full bg-[#1f2935] border-r border-gray-500 flex flex-col items-center justify-between'>
          <ul className='w-52 flex flex-col px-2'>
            <div className='h-20 text-center flex justify-center items-center font-primary font-bold text-2xl border-b border-gray-500'>
              <span>E-Code</span>
            </div>
            {leftNavItems.map((item, index) => (
              <Link
                onClick={() => setSelectedNavItem(index)}
                to={item.link}
                key={index}
                className={
                  'w-full py-3 px-5 hover:bg-[#15232e] rounded my-1 transition-colors ' +
                  (selectedNavItem === index && 'bg-[#15232e]')
                }>
                <i className={item.icon}></i>
                <span className='ml-2'>{item.label}</span>
              </Link>
            ))}
          </ul>
          <div className=' border-t border-gray-500 pt-5 w-full flex justify-center mb-5'>
            <button onClick={() => disonnectUser(navigate, authContext)}>Se déconnecter</button>
          </div>
        </nav>

        <div className='w-full h-full mx-10 pt-5 bg-[#1f2935] rounded-md shadow-md shadow-black'>{components}</div>
      </section>
    </>
  );
}

function redirectIfUserNotLoggedIn(navigate: NavigateFunction, authContext: AuthContextType) {
  useEffect(() => {
    if (!authContext.connected) navigate('/dashoard/login');
  }, [authContext.connected, navigate]);
}

function disonnectUser(navigate: NavigateFunction, authContext: AuthContextType) {
  authContext.logout();
  navigate('/');
}
