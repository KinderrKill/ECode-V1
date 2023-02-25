import React, { ReactNode, useEffect, useRef } from 'react'
import Footer from '../../components/shared/footer'

import RocketIcon from '../../assets/rocket.webp'

type LayoutProps = {
  components: ReactNode
}

export default function Layout({ components }: LayoutProps) {
  const buttonRef = useRef<HTMLButtonElement>(null)

  function scrollToTop(event: React.MouseEvent) {
    event.preventDefault()
    window.scrollTo(0, 0)
  }

  function toggleScrollToTopButton() {
    if (!buttonRef.current) return

    const button = buttonRef.current
    if (window.pageYOffset > document.documentElement.clientHeight) {
      button.style.bottom = '1.5rem'
    } else {
      button.style.bottom = '-5rem'
    }
  }

  useEffect(() => {
    if (!buttonRef.current) return
    window.addEventListener('scroll', toggleScrollToTopButton)
    return () => window.removeEventListener('scroll', toggleScrollToTopButton)
  }, [buttonRef])

  return (
    <>
      <div>{components}</div>
      <Footer />

      <span
        ref={buttonRef}
        className='fixed hidden sm:block -bottom-20 right-3 z-10 w-10 hover:animate-pulse cursor-pointer hover:scale-110 transition-all'
        onClick={(event) => scrollToTop(event)}>
        <img src={RocketIcon} className='-rotate-45' alt='Rocket icons created by Freepik - Flaticon' />
      </span>
    </>
  )
}
