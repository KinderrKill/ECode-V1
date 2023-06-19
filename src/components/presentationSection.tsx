import { useEffect, useState } from 'react';
import SectionHeader from './shared/sectionHeader';
import { userOnMobile } from '@/utils/constants';
import './_presentationSection.scss';

export default function PresentationSection() {
  useEffect(() => {
    if (userOnMobile()) return;

    const blob = document.querySelector('.cursor-blob');
    if (!blob) return;

    const handlePointerMove = (event: PointerEvent) => {
      const { clientX, clientY } = event;
      blob.animate(
        {
          left: `${clientX}px`,
          top: `${clientY}px`,
        },
        { duration: 2000, fill: 'forwards' }
      );
    };

    document.addEventListener('pointermove', handlePointerMove);

    return () => {
      document.removeEventListener('pointermove', handlePointerMove);
    };
  }, []);

  return (
    <>
      <div className='presentation-section overflow-hidden relative shadow-md shadow-black'>
        <div className='cursor-blob overflow-hidden z-0'></div>
        <div className='cursor-blob__blur overflow-hidden z-0'></div>

        <SectionHeader id='aboutMe' title='À propos de moi'>
          Découvrez qui je suis et ce qui me passionne. <br></br>Cette section vous présente un aperçu de mon parcours
          <br></br>et de mes aspirations dans le domaine du développement
        </SectionHeader>

        <section className='presentation-section__display container mx-auto flex flex-col sm:flex-row justify-center items-center gap-10 pb-10'>
          <article className='w-full sm:w-1/3 flex justify-center sm:justify-end'>
            <div className='presentation-section__card'>
              <div className='presentation-section__card--title'>
                <span>
                  Etienne<br></br>Sauvage
                </span>
              </div>
            </div>
          </article>
          <article className='w-full sm:w-1/2 px-5 sm:px-0'>
            <h4 className='font-bold mb-5'>Bonjour !</h4>
            <p>
              Passionné par le développement java depuis plus de 10 ans, j'ai effectué une reconversion professionnelle
              dans le développement Web afin d'associer passion et travail sans pour autant mélanger les langages.
              <br></br>
              <br></br>
              J'ai effectué une formation de développeur full-stack JavaScript en 2022 qui m'a permis de décrocher la
              certification de Concepteur développeur application et depuis je peux dire que je suis épanoui tant dans
              la vie personnelle et professionnelle.
            </p>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-5 mt-7'>
              <div className='flex flex-col'>
                <span className='text-ecRed font-bold underline text-lg'>Email :</span>
                <a href='mailto:ecode@gmail.com'>sauvage-etienne@hotmail.com</a>
              </div>
              <div className='flex flex-col'>
                <span className='text-ecRed font-bold underline text-lg'>LinkedIn :</span>
                <a href='https://www.linkedin.com/in/etienne-sauvage/'>linkedin.com/etienne-sauvage</a>
              </div>
              <div className='flex flex-col'>
                <span className='text-ecRed font-bold underline text-lg'>Github :</span>
                <a href='https://github.com/KinderrKill'>github.com/KinderrKill</a>
              </div>
              <div className='flex flex-col'>
                <span className='text-ecRed font-bold underline text-lg'>Youtube :</span>
                <a href='https://www.youtube.com/@KinderrKill'>youtube.com/@KinderrKill</a>
              </div>
            </div>
          </article>
        </section>
      </div>
    </>
  );
}
