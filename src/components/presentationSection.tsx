import BlobCursor from './shared/blobCursor'
import './_presentationSection.scss'

export default function PresentationSection() {
  return (
    <>
      <div className='presentation-section'>
        <BlobCursor />
        <section className='presentation-section__title flex flex-col justify-start items-center gap-10 pt-10 '>
          <h2>À propos de moi</h2>
          <p className='text-center'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br></br>
            Lorem Ipsum standard dummy text.
          </p>
        </section>
        <section className='presentation-section__display container mx-auto flex gap-10'>
          <article className='w-1/3 flex justify-end'>
            <div className='presentation-section__card'>
              <div className='presentation-section__card--title'>
                <span>
                  Etienne<br></br>Sauvage
                </span>
              </div>
            </div>
          </article>
          <article className='w-1/2'>
            <h4 className='font-bold mb-5'>Bonjour !</h4>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui, veniam reprehenderit reiciendis sapiente
              voluptate debitis dolor sequi consequatur cupiditate maiores minima esse ex sint exercitationem aliquam
              rem provident eum natus!<br></br>
              <br></br>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, porro! Laudantium officiis reiciendis
              dignissimos eveniet? Cumque consectetur minima placeat autem deleniti laudantium. Ipsa non quia labore
              mollitia harum sed accusamus.
            </p>
            <div className='grid grid-cols-2 gap-5 mt-7'>
              <div className='flex flex-col'>
                <span className='text-secondary font-bold underline text-lg'>Email :</span>
                <a href='mailto:ecode@gmail.com'>ecode@gmail.com</a>
              </div>
              <div className='flex flex-col'>
                <span className='text-secondary font-bold underline text-lg'>LinkedIn :</span>
                <a href='https://www.linkedin.com/in/etienne-sauvage/'>linkedin.com/etienne-sauvage</a>
              </div>
              <div className='flex flex-col'>
                <span className='text-secondary font-bold underline text-lg'>Github :</span>
                <a href='https://github.com/KinderrKill'>github.com/KinderrKill</a>
              </div>
              <div className='flex flex-col'>
                <span className='text-secondary font-bold underline text-lg'>Youtube :</span>
                <a href='https://www.youtube.com/@KinderrKill'>youtube.com/@KinderrKill</a>
              </div>
            </div>
          </article>
        </section>
      </div>
    </>
  )
}
