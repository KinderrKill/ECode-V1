import { useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import useFetch from '../../../hooks/useFetch';
import { COLLECTIONS, FETCH_METHOD } from '../../../utils/constants';
import { ContactFormRecord } from '../../../utils/typings/fetchingTypes';

export default function ContactPage() {
  const navigate = useNavigate();

  const { id } = useParams();

  const { data, loading, error } = useFetch<ContactFormRecord>({
    collectionName: COLLECTIONS.CONTACT_FORM,
    method: FETCH_METHOD.GET_ONE,
    fetchOnLoad: true,
    params: [id],
  }) as any;

  const {
    data: deleteData,
    loading: deleteLoading,
    error: deleteError,
    fetchData: removeData,
  } = useFetch<ContactFormRecord>({
    collectionName: COLLECTIONS.CONTACT_FORM,
    method: FETCH_METHOD.DELETE,
    fetchOnLoad: false,
    params: [id],
  }) as any;

  function handleRemove() {
    removeData();
  }

  useEffect(() => {
    if (deleteData) navigate('/dashboard/contact');
    if (deleteError) console.error(deleteError);
  }, [deleteData, deleteLoading, deleteError]);

  return (
    <section>
      <article className='flex flex-col gap-10 px-10'>
        {!data ? (
          <p className='text-xl'>
            {loading ? 'Chargement du message...' : `Erreur lors du chargement du message : ${error}`}
          </p>
        ) : (
          <>
            <p className='text-xl my-5'>
              Message (id: {data.id}) <br></br>
              Reçu le {new Date(data.created).toLocaleString().replace(' ', ' à ')}
            </p>
            <div className='w-full flex gap-5'>
              <label className='w-full'>
                Nom, pseudo ou organisation
                <input type='text' defaultValue={data.name} />
              </label>

              <label className='w-full'>
                Adresse email
                <input type='text' defaultValue={data.email} />
              </label>
            </div>

            <label>
              Sujet du message :
              <input type='text' defaultValue={data.subject} />
            </label>

            <label>
              Contenu :<textarea defaultValue={data.content} cols={10} rows={15}></textarea>
            </label>

            <button className={'self-end ' + (deleteLoading ? 'animate-pulse' : '')} onClick={handleRemove}>
              {deleteLoading ? 'Suppression en cours' : deleteError ? 'Erreur...' : 'Supprimer le message'}
            </button>
          </>
        )}
      </article>
    </section>
  );
}
