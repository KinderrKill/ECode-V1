import './_home.scss'

import rocket from '../assets/images/header_rocket.webp'
import rocketSmoke from '../assets/images/header_rocket_smoke.webp'
import rocketWave from '../assets/images/header_wave.svg'

import { ConsoleCommand } from '../components/consoleCommand'
import ProjectSection from '../components/projectSection'
import PresentationSection from '../components/presentationSection'
import Portfolio from '../components/portfolio'
import ContactSection from '../components/contactSecion'

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
      </section>
      <ProjectSection />
      <PresentationSection />
      <Portfolio />
      <ContactSection />
    </>
  )
}
