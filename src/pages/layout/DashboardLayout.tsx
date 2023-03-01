import React, { ReactNode, useEffect, useRef, useState } from 'react';

import RocketIcon from '../../assets/rocket.webp';
import { Link, useNavigate } from 'react-router-dom';
import useAuthContext from '../../hooks/useAuthContext';

import 'remixicon/fonts/remixicon.css';

type LayoutProps = {
  components: ReactNode;
};

type NavbarItem = {
  label: string;
  link: string;
  icon: string;
};

export default function DashboardLayout({ components }: LayoutProps) {
  const navigate = useNavigate();
  const authContext = useAuthContext();

  const [selectedNavItem, setSelectedNavItem] = useState(0);

  const buttonRef = useRef<HTMLButtonElement>(null);

  function scrollToTop(event: React.MouseEvent) {
    event.preventDefault();
    window.scrollTo(0, 0);
  }

  function toggleScrollToTopButton() {
    if (!buttonRef.current) return;

    const button = buttonRef.current;
    if (window.pageYOffset > document.documentElement.clientHeight) {
      button.style.bottom = '1.5rem';
    } else {
      button.style.bottom = '-5rem';
    }
  }

  useEffect(() => {
    if (!buttonRef.current) return;
    window.addEventListener('scroll', toggleScrollToTopButton);
    return () => window.removeEventListener('scroll', toggleScrollToTopButton);
  }, [buttonRef]);

  // Disconnection
  useEffect(() => {
    if (!authContext.connected) navigate('./login');
  }, []);

  function handleLogout() {
    authContext.logout();
    navigate('/');
  }

  const leftNavItems: NavbarItem[] = [
    {
      label: 'Accueil',
      link: '/dashboard',
      icon: 'ri-home-6-line',
    },
    {
      label: 'Messagerie',
      link: '/dashboard/contact',
      icon: 'ri-mail-fill',
    },
  ];

  return (
    <>
      {/* <div className='fixed top-0 left-0 bg-black p-2 z-10 flex flex-col'>
        <span className='text-red-500 2xl:text-green-500'>DEBUG 2XL</span>
        <span className='text-red-500 xl:text-green-500'>DEBUG XL</span>
        <span className='text-red-500 lg:text-green-500'>DEBUG LG</span>
        <span className='text-red-500 md:text-green-500'>DEBUG MD</span>
        <span className='text-red-500 sm:text-green-500'>DEBUG SM</span>
      </div> */}

      <section className='w-screen h-screen bg-[#15232e] flex'>
        <nav className='w-72 h-full bg-[#1f2935] border-r border-gray-500 pt-14'>
          <ul className='w-full flex flex-col'>
            {leftNavItems.map((item, index) => (
              <Link
                onClick={() => setSelectedNavItem(index)}
                to={item.link}
                key={index}
                className={
                  'w-full py-3 px-5 hover:bg-[#15232e] transition-colors ' +
                  (selectedNavItem === index && 'bg-[#15232e]')
                }>
                <i className={item.icon}></i>
                <span className='ml-2'>{item.label}</span>
              </Link>
            ))}
          </ul>
        </nav>

        <article className='w-screen h-full  overflow-hidden'>
          <nav className=' h-14 bg-[#1f2935] border-b border-gray-500 flex justify-end items-center px-5'>
            <ul>
              <li>
                <button onClick={handleLogout}>Se déconnecter</button>
              </li>
            </ul>
          </nav>

          <div className='w-full h-full'>
            <div className='m-10 h-5/6 pt-5 bg-[#1f2935] rounded-md shadow-md shadow-black'>{components}</div>
          </div>
        </article>
      </section>

      <span
        ref={buttonRef}
        className='fixed hidden sm:block -bottom-20 right-3 z-10 w-10 hover:animate-pulse cursor-pointer hover:scale-110 transition-all'
        onClick={(event) => scrollToTop(event)}>
        <img src={RocketIcon} className='-rotate-45' alt='Rocket icons created by Freepik - Flaticon' />
      </span>
    </>
  );
}
