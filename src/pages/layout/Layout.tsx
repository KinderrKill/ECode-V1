import React, { ReactNode, useEffect, useRef } from 'react';
import Footer from '../../components/shared/footer';

import RocketIcon from '../../assets/rocket.webp';

type LayoutProps = {
  components: ReactNode;
};

export default function Layout({ components }: LayoutProps) {
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

  return (
    <>
      <div className='fixed top-0 left-0 bg-black p-2 z-10 flex flex-col'>
        <span className='text-red-500 2xl:text-green-500'>DEBUG 2XL</span>
        <span className='text-red-500 xl:text-green-500'>DEBUG XL</span>
        <span className='text-red-500 lg:text-green-500'>DEBUG LG</span>
        <span className='text-red-500 md:text-green-500'>DEBUG MD</span>
        <span className='text-red-500 sm:text-green-500'>DEBUG SM</span>
      </div>
      <div>{components}</div>
      <Footer />

      <span
        ref={buttonRef}
        className='fixed hidden sm:block -bottom-20 right-3 z-10 w-10 hover:animate-pulse cursor-pointer hover:scale-110 transition-all'
        onClick={(event) => scrollToTop(event)}>
        <img src={RocketIcon} className='-rotate-45' alt='Rocket icons created by Freepik - Flaticon' />
      </span>
    </>
  );
}
