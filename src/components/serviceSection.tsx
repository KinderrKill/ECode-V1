import { useEffect } from 'react';
import SectionHeader from './shared/sectionHeader';

import reactIcon from '../assets/icons/react.svg';
import nextIcon from '../assets/icons/next.svg';
import backEndIcon from '../assets/icons/nodejs.svg';
import baasIcon from '../assets/icons/firebase.svg';
import javaIcon from '../assets/icons/java.svg';
import databaseIcon from '../assets/icons/database.svg';
import './_serviceSection.scss';

interface CardItem {
  icon: string;
  alt: string;
  title: string;
  subtitle: string;
  rounded?: boolean;
}

export default function ServiceSection() {
  const items: CardItem[] = [
    {
      icon: reactIcon,
      alt: 'Icône du framework React',
      title: 'Front-End',
      subtitle: 'React, Vue',
    },
    {
      icon: nextIcon,
      alt: 'Icône du framework Next',
      title: 'Front-End: Server side',
      subtitle: 'Next, Nuxt',
    },
    {
      icon: databaseIcon,
      alt: 'Icône de base de donnée',
      title: 'Base de donnée',
      subtitle: 'MongoDB, MySQL, SQLite, TypeORM',
    },
    {
      icon: backEndIcon,
      alt: 'Icône du framework Node.js',
      title: 'Back-End',
      subtitle: 'Node.js, Express, GraphQL, Rest, Nest',
    },
    {
      icon: baasIcon,
      alt: 'Icône du service Firebase',
      title: 'Services de Backend',
      subtitle: 'PocketBase, Firebase',
    },
    {
      icon: javaIcon,
      alt: 'Icône du langage java',
      title: 'Java',
      subtitle: 'JavaFX, Spring, Bukkit, MCP',
      rounded: true,
    },
  ];

  // Effect for flare effect
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
      <SectionHeader id='services' title='Mes compétences'>
        Découvrez mes diverses compétences avec un réel intêret pour les frameworks tels que React et Vue.js. <br></br>
        Je suis constamment à l'affût des nouvelles tendances et technologies pour offrir des solutions modernes et
        efficaces.
      </SectionHeader>
      <article className='service-section__display grid grid-cols-2 md:grid-cols-3 gap-5 cursor-none'>
        {items.map((item, index) => (
          <div className='card-content select-none' key={index}>
            <div className='card flex flex-col p-5'>
              <div className='z-10'>
                <img src={item.icon} alt='' className={'w-20 h-20 mb-5 ' + (item.rounded && 'rounded-full')} />
                <div className='w-full h-full flex flex-col whitespace-pre-wrap'>
                  <span className='text-2xl mb-5 underline text-gray-200'>{item.title}</span>
                  <p className='text-md'>{item.subtitle}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </article>
    </section>
  );
}
