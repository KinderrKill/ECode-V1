import React from 'react'
import './_contactSection.scss'

export default function ContactSection() {
  function handleSubmit(event: React.FormEvent) {
    event.preventDefault()
    event.persist()

    console.log('Submit')
  }
  return (
    <>
      <div className='contact-section'>
        <section className='contact-section__title flex flex-col justify-start items-center gap-10 pt-10'>
          <h2>Travaillons ensemble</h2>
          <p className='text-center'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br></br>
            Lorem Ipsum standard dummy text.
          </p>
        </section>

        <section>
          <form
            onSubmit={(event) => handleSubmit(event)}
            className='container mx-auto flex flex-col mt-10 w-full gap-5'>
            <div className='w-full flex gap-5'>
              <input type='text' placeholder='Nom, pseudo ou organisme' />
              <input type='text' placeholder='Adresse email' />
            </div>
            <input type='text' placeholder='Sujet de votre message' />
            <textarea name='' id='' cols={30} rows={10} placeholder='Message'></textarea>
            <button type='submit'>Envoyer</button>
          </form>
        </section>
      </div>
    </>
  )
}
