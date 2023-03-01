import { useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import { COLLECTIONS, FETCH_METHOD } from '../../utils/constants';
import { ContactFormRecord } from '../../utils/typings/fetchingTypes';

export default function ContactPage() {
  const navigate = useNavigate();

  const { id } = useParams();

  const { data, loading, error } = useFetch<ContactFormRecord>({
    collectionName: COLLECTIONS.CONTACT_FORM,
    method: FETCH_METHOD.GET_ONE,
    fetchOnLoad: true,
    params: [id],
  });

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
  });

  function handleRemove() {
    removeData();
  }

  useEffect(() => {
    if (deleteData) navigate('/dashboard/contact');
    if (deleteError) console.error(deleteError);
  }, [deleteData, deleteLoading, deleteError]);

  return (
    <div className='w-full h-full'>
      <Link to='/dashboard/contact' className='m-2 bg-secondary p-3 rounded-md'>
        Retour aux messages...
      </Link>

      <section className='flex flex-col w-full h-full gap-5 px-10 mt-20'>
        {!data ? (
          <>
            <p className='text-xl'>
              {loading ? 'Chargement du message...' : `Erreur lors du chargement du message : ${error}`}
            </p>
          </>
        ) : (
          <>
            <p className='text-xl'>
              Message (id: {data.id}) <br></br>
              le {new Date(data.created).toLocaleString().replace(' ', ' à ')}
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
              Contenu :<textarea defaultValue={data.content}></textarea>
            </label>

            <button className={'self-end ' + (deleteLoading ? 'animate-pulse' : '')} onClick={handleRemove}>
              {deleteLoading ? 'Suppression en cours' : deleteError ? 'Erreur...' : 'Supprimer le message'}
            </button>
          </>
        )}
      </section>
    </div>
  );
}
