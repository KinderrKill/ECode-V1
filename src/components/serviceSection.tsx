import { useEffect } from 'react';
import SectionHeader from './shared/sectionHeader';
import './_serviceSection.scss';

export default function ServiceSection() {
  useEffect(() => {
    function handleOnMouseMove(event: MouseEvent, card: HTMLDivElement) {
      const rect = card.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;

      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
    }

    for (const card of document.querySelectorAll('.card')) {
      const cardElement = card as HTMLDivElement;
      cardElement.onmousemove = (e) => handleOnMouseMove(e, cardElement);
    }
  }, []);
  return (
    <section className='w-screen h-auto bg-primary service-section flex flex-col justify-start items-center gap-10 pb-20'>
      <SectionHeader id='services' title='Mes services'>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br></br>
        Lorem Ipsum standard dummy text.
      </SectionHeader>
      <article className='service-section__display grid grid-cols-2 md:grid-cols-3 gap-5'>
        <div className='card-content'>
          <div className='card'></div>
        </div>
        <div className='card-content'>
          <div className='card'></div>
        </div>
        <div className='card-content'>
          <div className='card'></div>
        </div>
        <div className='card-content'>
          <div className='card'></div>
        </div>
        <div className='card-content'>
          <div className='card'></div>
        </div>
        <div className='card-content'>
          <div className='card'></div>
        </div>
      </article>
    </section>
  );
}
