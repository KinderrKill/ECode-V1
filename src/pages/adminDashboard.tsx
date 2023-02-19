import { useNavigate } from 'react-router-dom'
import useAuthContext from '../hooks/useAuthContext'
import useFetch from '../hooks/useFetch'

import { COLLECTIONS, FETCH_METHOD } from '../utils/constants'
import { TestRecord } from '../utils/typings/fetchingTypes'

export function Dashboard() {
  const navigate = useNavigate()
  const authContext = useAuthContext()

  const { data, state } = useFetch<TestRecord>({
    collectionName: COLLECTIONS.TEST,
    method: FETCH_METHOD.GET_FULL_LIST,
  })

  console.log('Dashboard useFetch : ', data?.value)
  console.log(state)

  function handleLogout() {
    authContext.logout()
    navigate('/login/admin')
  }

  return (
    <>
      <div className='h-screen w-screen flex flex-col justify-center items-center'>
        <span className='text-3xl underline absolute top-10'>Tableau de bord administrateur</span>
        <button onClick={() => handleLogout()} className='absolute top-5 right-5 select-none'>
          Se déconnecter
        </button>
        {/* 
        <div className='mt-5'>
          <label className='mr-5'>Get from API : </label>
          <span>{testData ? testData.text : 'Chargement...'}</span>
        </div>

        <div className='mt-5'>
          <button onClick={update}>Send to API</button>
        </div> */}
      </div>
    </>
  )
}
