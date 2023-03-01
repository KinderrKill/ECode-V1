import { useState } from 'react';
import './_portfolio.scss';
import './_3dCard.scss';

import imgTest1 from '../assets/bg_coc_test.png';
import imgTest2 from '../assets/logo_coc_test.png';
import imgTest3 from '../assets/model_coc_test.webp';

import SectionHeader from './shared/sectionHeader';

interface Test {
  label: string;
  category: portfolioCategory;
  link: string;
  images: {
    background: string;
    logo: string;
    character: string;
  };
}

enum portfolioCategory {
  WEB = 'Web',
  JAVA = 'Java',
}

export default function PortfolioSection() {
  const [category, setCategory] = useState<portfolioCategory | null>(null);

  const projectItems = [
    {
      label: 'Projet Kiddo',
      category: portfolioCategory.WEB,
      link: 'https://kiddo-front-la-passerelle.netlify.app/',
      images: {
        background: imgTest1,
        logo: imgTest2,
        character: imgTest3,
      },
    },
    {
      label: 'Company Of Cube - Site',
      category: portfolioCategory.WEB,
      link: 'https://companyofcube.fr/',
      images: {
        background: imgTest1,
        logo: imgTest2,
        character: imgTest3,
      },
    },
    {
      label: 'Fake Discussion',
      category: portfolioCategory.WEB,
      link: 'https://fake-discussion.netlify.app/',
      images: {
        background: imgTest1,
        logo: imgTest2,
        character: imgTest3,
      },
    },
    {
      label: 'Store BMS',
      category: portfolioCategory.WEB,
      link: 'http://www.store-bms.fr/',
      images: {
        background: imgTest1,
        logo: imgTest2,
        character: imgTest3,
      },
    },
    {
      label: 'Company Of Cube - Jeu',
      category: portfolioCategory.JAVA,
      link: 'https://companyofcube.fr/',
      images: {
        background: imgTest1,
        logo: imgTest2,
        character: imgTest3,
      },
    },
    {
      label: 'Installeur Minecraft moddé',
      category: portfolioCategory.JAVA,
      link: 'https://github.com/KinderrKill/Minecraft-Installer',
      images: {
        background: imgTest1,
        logo: imgTest2,
        character: imgTest3,
      },
    },
    {
      label: 'Minecraft JSON Generator',
      category: portfolioCategory.JAVA,
      link: 'https://github.com/KinderrKill/Minecraft-Json-Generator',
      images: {
        background: imgTest1,
        logo: imgTest2,
        character: imgTest3,
      },
    },
  ];

  function getListedItems() {
    return category != null ? projectItems.filter((item) => item.category === category) : projectItems;
  }

  return (
    <>
      <div className='portfolio-section'>
        <SectionHeader id='portfolio' title='Portfolio'>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br></br>
          Lorem Ipsum standard dummy text.
        </SectionHeader>

        <section className='flex flex-col items-center justify-center mt-16'>
          <article>
            <div className='flex gap-5'>
              <button
                className={'portfolio-button ' + (category === null && ' selected')}
                onClick={() => setCategory(null)}>
                Tous
              </button>
              <button
                className={'portfolio-button ' + (category === portfolioCategory.WEB && ' selected')}
                onClick={() => setCategory(portfolioCategory.WEB)}>
                Web
              </button>
              <button
                className={'portfolio-button ' + (category === portfolioCategory.JAVA && ' selected')}
                onClick={() => setCategory(portfolioCategory.JAVA)}>
                Java
              </button>
            </div>
          </article>
          <article className='grid grid-cols-1 md:grid-cols-3'>
            {getListedItems().map((item: Test, index: number) => {
              return (
                <a key={index} href={item.link} target='_blank' className='mb-16'>
                  <div className='card-3d'>
                    <div className='wrapper'>
                      <img src={item.images.background} className='cover-image' />
                    </div>
                    <img src={item.images.character} className='character' />
                    <span className='title text-center'>
                      <img src={item.images.logo} />
                      {item.label}
                    </span>
                  </div>
                </a>
              );
            })}
          </article>
        </section>
      </div>
    </>
  );
}
