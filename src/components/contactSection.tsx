import React, { useEffect, useRef, useState } from 'react';
import useFetch from '../hooks/useFetch';
import { COLLECTIONS, FETCH_METHOD } from '../utils/constants';
import { ContactFormRecord } from '../utils/typings/fetchingTypes';
import { FormData } from '../utils/typings/globalTypes';
import SectionHeader from './shared/sectionHeader';

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

      window.alert('Formulaire envoyé avec succès !');
    }
  }, [loading, error, data]);

  function handleChange(value: string, key: string) {
    setFormData((prevData) => ({ ...prevData, [key]: value }));
  }

  function isFormComplete(): boolean {
    const { name, email, subject, content } = formData;
    return !!name && !!email && !!subject && !!content;
  }

  // useEffect for move button if form data is incomplete
  useEffect(() => {
    const userAgent = navigator.userAgent.toLowerCase();
    const isMobile = /iphone|ipod|ipad|android/.test(userAgent);

    if (isMobile) return;

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
          Je suis disponible pour discuter de tout type de projet, de la création de sites web à la conception
          d'applications mobiles. Je suis impatient de travailler avec vous et de vous aider à réaliser votre projet
          avec succès
        </SectionHeader>
        {/* FORM */}
        <section className='pb-10'>
          <form
            onSubmit={handleSubmit}
            className='container mx-auto px-5 xl:px-36 w-full flex flex-col items-start justify-start gap-5 pb-6'>
            <div className='w-full flex flex-col sm:flex-row gap-5'>
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
                  (isFormComplete() ? 'bg-green-700 hover:bg-third' : 'bg-red-900 cursor-default')
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
