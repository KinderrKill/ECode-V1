import React, { useEffect, useRef, useState } from 'react';
import useFetch from '../hooks/useFetch';
import { COLLECTIONS, FETCH_METHOD } from '../utils/constants';
import { ContactFormRecord } from '../utils/typings/fetchingTypes';
import { FormData } from '../utils/typings/globalTypes';
import SectionHeader from './sectionHeader';

export default function ContactSection() {
  const submitButtonRef = useRef<HTMLButtonElement>(null);

  const [formData, setFormData] = useState<FormData>({});
  const { loading, error, data, fetchData } = useFetch<ContactFormRecord>({
    collectionName: COLLECTIONS.CONTACT_FORM,
    method: FETCH_METHOD.CREATE,
    params: [formData],
  });

  useEffect(() => {
    if (error) console.log('Error : ', error?.data);

    if (!error && data) {
      document.querySelectorAll('input').forEach((input) => {
        input.value = '';
      });

      const textArea = document.querySelector('textarea');
      if (textArea) textArea.value = '';
    }
  }, [loading, error, data]);

  function handleChange(value: string, key: string) {
    setFormData((prevData) => ({ ...prevData, [key]: value }));
  }

  function isFormComplete(): boolean {
    //const { name, email, subject, content } = formData;
    return true; //!!name && !!email && !!subject && !!content;
  }

  // useEffect for move button if form data is incomplete
  useEffect(() => {
    const submitButton = submitButtonRef.current;
    if (!submitButton) return;

    const moveButton = () => {
      if (!submitButton.style.right || submitButton.style.right === '0%') {
        submitButton.style.right = 'calc(100% - 128px)';
      } else {
        submitButton.style.right = '0%';
      }
    };

    if (!isFormComplete()) {
      submitButton.addEventListener('mouseenter', moveButton);
    }

    return () => {
      submitButton.removeEventListener('mouseenter', moveButton);
    };
  }, [isFormComplete()]);

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    event.persist();

    fetchData();
  }
  return (
    <>
      <div className='background-image'>
        <SectionHeader id='contactMe' title='Travaillons ensemble'>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br></br>
          Lorem Ipsum standard dummy text.
        </SectionHeader>
        {/* FORM */}
        <section className='pb-10'>
          <form
            onSubmit={handleSubmit}
            className='container mx-auto px-36 w-full flex flex-col items-start justify-start gap-5 pb-6'>
            <div className='w-full flex gap-5'>
              <input
                type='text'
                placeholder='Nom, pseudo ou organisme'
                onChange={(event) => handleChange(event.target.value, 'name')}
              />
              <input
                type='text'
                placeholder='Adresse email'
                onChange={(event) => handleChange(event.target.value, 'email')}
              />
            </div>
            <input
              type='text'
              placeholder='Sujet de votre message'
              onChange={(event) => handleChange(event.target.value, 'subject')}
            />
            <textarea
              name='message'
              id='message'
              cols={30}
              rows={10}
              placeholder='Message'
              onChange={(event) => handleChange(event.target.value, 'content')}
            />
            <div className='w-full relative'>
              <button
                ref={submitButtonRef}
                type='submit'
                className={
                  'w-32 absolute right-0 text-white transition-all ' +
                  (isFormComplete() ? 'bg-green-700 hover:bg-third' : 'bg-red-900')
                }>
                {isFormComplete() ? (loading ? 'En cours' : 'Envoyer') : 'Incomplet'}
              </button>
            </div>
          </form>
        </section>
      </div>
    </>
  );
}
