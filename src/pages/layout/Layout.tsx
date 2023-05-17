import React, { useEffect, useRef } from 'react';
import Footer from '../../components/shared/footer';

import RocketIcon from '../../assets/rocket.webp';
import { FunctionChildComponent } from '../../utils/typings/globalTypes';

export default function Layout({ components }: FunctionChildComponent) {
  const scrollToTopButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!scrollToTopButtonRef.current) return;

    window.addEventListener('scroll', () => displayScrollToTopButton(scrollToTopButtonRef.current));

    return () => {
      window.removeEventListener('scroll', () => displayScrollToTopButton(scrollToTopButtonRef.current));
    };
  }, [scrollToTopButtonRef]);

  return (
    <>
      {/* <ResponsiveDebugDisplay /> */}

      {/* Display child components */}
      <>{components}</>

      <Footer />

      {/* Scroll to top button */}
      <span
        ref={scrollToTopButtonRef}
        className='fixed sm:block -bottom-20 right-3 z-10 w-10 transition-all 
        hover:animate-pulse cursor-pointer hover:scale-110 '
        onClick={scrollToTop}>
        <img src={RocketIcon} className='-rotate-45' alt='Rocket icons created by Freepik - Flaticon' />
      </span>
    </>
  );
}

function scrollToTop(event: React.MouseEvent): void {
  event.preventDefault();
  window.scrollTo(0, 0);
}

function displayScrollToTopButton(button: HTMLButtonElement | null): void {
  if (!button) return;

  if (window.pageYOffset > document.documentElement.clientHeight) button.style.bottom = '1.5rem';
  else button.style.bottom = '-5rem';
}

// Utils for responsive design bases on Tailwind breakpoint
function ResponsiveDebugDisplay(): JSX.Element {
  return (
    <div className='fixed top-0 left-0 bg-black p-2 z-10 flex flex-col'>
      <span className='text-red-500 2xl:text-green-500'>DEBUG 2XL</span>
      <span className='text-red-500 xl:text-green-500'>DEBUG XL</span>
      <span className='text-red-500 lg:text-green-500'>DEBUG LG</span>
      <span className='text-red-500 md:text-green-500'>DEBUG MD</span>
      <span className='text-red-500 sm:text-green-500'>DEBUG SM</span>
    </div>
  );
}
