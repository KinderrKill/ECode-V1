import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import { COLLECTIONS, FETCH_METHOD } from '../../utils/constants';
import { ContactFormRecord } from '../../utils/typings/fetchingTypes';

export default function Contact() {
  const { data, loading, error } = useFetch<ContactFormRecord[]>({
    collectionName: COLLECTIONS.CONTACT_FORM,
    method: FETCH_METHOD.GET_FULL_LIST,
    fetchOnLoad: true,
  });

  return (
    <div className='relative w-auto flex flex-col justify-center items-center m-5'>
      <span className='text-center text-3xl underline mb-10'>
        {loading
          ? 'Chargement des messages...'
          : error
          ? 'Erreur lors du chargement des messages !'
          : `Message (${data?.length})`}
      </span>
      <table className='w-full text-sm text-left text-gray-400'>
        <thead className='text-xs  uppercase :bg-gray-700 dark:text-gray-400'>
          <tr>
            <th scope='col' className='w-1/2 px-6 py-3 text-ellipsis'>
              Message
            </th>
            <th scope='col' className='w-1/4 px-6 py-3'>
              Sujet
            </th>
            <th scope='col' className='w-1/4 px-6 py-3'>
              Email
            </th>
            <th scope='col' className='w-3/4 px-6 py-3 text-center'>
              Consulter
            </th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map((item, index) => (
              <tr key={index} className='border-b bg-gray-800 border-gray-700'>
                <td className='w-1/2 px-6 py-4 font-medium text-white'>
                  <p className='w-full text-ellipsis overflow-hidden'>{item.content}</p>
                </td>
                <td className='w-1/4 px-6 py-4'>{item.subject}</td>
                <td className='w-1/4 px-6 py-4'>{item.email}</td>
                <td className='w-3/4 px-6 py-4 text-center'>
                  <Link to={'./' + item.id} className='cursor-pointer bg-purple-600 px-3 py-2 rounded-md'>
                    Consulter
                  </Link>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
