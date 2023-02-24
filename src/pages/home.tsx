import './_home.scss'

import rocket from '../assets/images/header_rocket.webp'
import rocketSmoke from '../assets/images/header_rocket_smoke.webp'
import rocketWave from '../assets/images/header_wave.svg'
import mouseScroll from '../assets/icons/mouse_scroll.svg'

import { ConsoleCommand } from '../components/consoleCommand'
import ServiceSection from '../components/serviceSection'
import PresentationSection from '../components/presentationSection'
import PortfolioSection from '../components/portfolioSection'
import ContactSection from '../components/contactSection'

export default function HomePage() {
  return (
    <>
      <section className='section'>
        <article className='content-panel'>
          <ConsoleCommand />
        </article>
        <article className='rocket-panel'>
          <img className='smoke' src={rocketSmoke} alt='' />
          <img className='rocket' src={rocket} alt='' />
          <img className='wave' src={rocketWave} alt='' />
        </article>

        <img src={mouseScroll} alt='' className='mouse-scroll' />
      </section>
      <ServiceSection />
      <PresentationSection />
      <PortfolioSection />
      <ContactSection />
    </>
  )
}
