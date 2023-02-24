import { useState } from 'react'
import './_portfolio.scss'
import './_3dCard.scss'

import imgTest1 from '../assets/bg_coc_test.png'
import imgTest2 from '../assets/logo_coc_test.png'
import imgTest3 from '../assets/model_coc_test.webp'

interface Test {
  label: string
  category: portfolioCategory
  images: {
    background: string
    logo: string
    character: string
  }
}

enum portfolioCategory {
  WEB = 'Web',
  JAVA = 'Java',
}

export default function PortfolioSection() {
  const [category, setCategory] = useState<portfolioCategory | null>(null)

  const projectItems = [
    {
      label: 'Kiddo',
      category: portfolioCategory.WEB,
      images: {
        background: imgTest1,
        logo: imgTest2,
        character: imgTest3,
      },
    },
    {
      label: 'Company Of Cube - Site',
      category: portfolioCategory.WEB,
      images: {
        background: imgTest1,
        logo: imgTest2,
        character: imgTest3,
      },
    },
    {
      label: 'Company Of Cube - Jeu',
      category: portfolioCategory.JAVA,
      images: {
        background: imgTest1,
        logo: imgTest2,
        character: imgTest3,
      },
    },
  ]

  function getListedItems() {
    return category != null ? projectItems.filter((item) => item.category === category) : projectItems
  }

  return (
    <>
      <div className='portfolio-section'>
        <section className='portfolio-section__title flex flex-col justify-start items-center gap-10 pt-10 '>
          <h2>Portfolio</h2>
          <p className='text-center'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br></br>
            Lorem Ipsum standard dummy text.
          </p>
        </section>
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
          <article className='grid grid-cols-3'>
            {getListedItems().map((item: Test, index: number) => {
              return (
                <a href='https://www.mythrillfiction.com/the-dark-rider' target='_blank'>
                  <div className='card-3d'>
                    <div className='wrapper'>
                      <img src={item.images.background} className='cover-image' />
                    </div>
                    <img src={item.images.logo} className='title' />
                    {/* <span className='title text-center'>TEST TITLE</span> */}
                    <img src={item.images.character} className='character' />
                  </div>
                </a>
              )
            })}
          </article>
        </section>
      </div>
    </>
  )
}
