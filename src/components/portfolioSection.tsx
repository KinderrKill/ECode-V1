import { useState } from 'react';
import './_portfolio.scss';
import './_3dCard.scss';

import cocBackground from '../assets/portfolio/coc_bg.png';
import cocLogo from '../assets/portfolio/coc_logo.png';
import cocCharacter from '../assets/portfolio/coc_character.webp';
import kiddoBackground from '../assets/portfolio/kiddo_bg.png';
import kiddoLogo from '../assets/portfolio/kiddo_logo.png';
import kiddoCharacter from '../assets/portfolio/kiddo_character.png';
import bmsBackground from '../assets/portfolio/bms_bg.png';
import bmsLogo from '../assets/portfolio/bms_logo.png';
import bmsCharacter from '../assets/portfolio/bms_character.png';

import fakeDiscussionBackground from '../assets/portfolio/fake_chat_bg.png';
import minecraftLauncherBackground from '../assets/portfolio/minecraft_launcher_bg.png';
import minecraftLauncherLogo from '../assets/portfolio/minecraft_launcher_logo.png';

import jsonGeneratorBackground from '../assets/portfolio/json_generator_bg.png';

import baseLogo from '../assets/portfolio/base_logo.png';
import baseCharacter from '../assets/portfolio/base_character.png';

import SectionHeader from './shared/sectionHeader';

interface ProjectCard {
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
  BOTH = 'BOTH',
}

export default function PortfolioSection() {
  const [category, setCategory] = useState<portfolioCategory | null>(null);

  const projectItems = [
    {
      label: 'Company Of Cube',
      category: portfolioCategory.BOTH,
      link: 'https://companyofcube.fr/',
      images: {
        background: cocBackground,
        logo: cocLogo,
        character: cocCharacter,
      },
    },
    {
      label: 'Projet Kiddo',
      category: portfolioCategory.WEB,
      link: 'https://kiddo-front-la-passerelle.netlify.app/',
      images: {
        background: kiddoBackground,
        logo: kiddoLogo,
        character: kiddoCharacter,
      },
    },
    {
      label: 'Store BMS',
      category: portfolioCategory.WEB,
      link: 'http://www.store-bms.fr/',
      images: {
        background: bmsBackground,
        logo: bmsLogo,
        character: bmsCharacter,
      },
    },
    {
      label: 'Installeur Minecraft moddé',
      category: portfolioCategory.JAVA,
      link: 'https://github.com/KinderrKill/Minecraft-Installer',
      images: {
        background: minecraftLauncherBackground,
        logo: minecraftLauncherLogo,
        character: baseCharacter,
      },
    },
    {
      label: 'Minecraft JSON Generator',
      category: portfolioCategory.JAVA,
      link: 'https://github.com/KinderrKill/Minecraft-Json-Generator',
      images: {
        background: jsonGeneratorBackground,
        logo: baseLogo,
        character: baseCharacter,
      },
    },
    {
      label: 'Fake Discussion',
      category: portfolioCategory.WEB,
      link: 'https://fake-discussion.netlify.app/',
      images: {
        background: fakeDiscussionBackground,
        logo: baseLogo,
        character: baseCharacter,
      },
    },
  ];

  function getListedItems() {
    return category != null
      ? projectItems.filter((item) => item.category === category || item.category === portfolioCategory.BOTH)
      : projectItems;
  }

  return (
    <>
      <div className='portfolio-section'>
        <SectionHeader id='portfolio' title='Portfolio'>
          Vous pouvez retrouver ci-dessous quelqu'une de mes principales créations.<br></br>
          N'hésitez pas à consulter mon{' '}
          <a className='font-bold' href='https://github.com/KinderrKill' target='_blank'>
            Github
          </a>{' '}
          pour trouver d'autres projets.
        </SectionHeader>

        <section className='flex flex-col items-center justify-center mt-10'>
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
            {getListedItems().map((item: ProjectCard, index: number) => {
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
