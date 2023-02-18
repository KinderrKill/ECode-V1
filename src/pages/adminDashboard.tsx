import { useEffect, useState } from 'react'
import useAuthContext from '../hooks/useAuthContext'
import pocketBase from '../lib/pocketBase'
import { useNavigate } from 'react-router-dom'
import { TestCollection } from '../utils/types/typings'

export function Dashboard() {
  const navigate = useNavigate()
  const authContext = useAuthContext()

  useEffect(() => {
    if (!authContext.connected) {
      navigate('/login/admin')
    }
  }, [])

  const [testData, setTestData] = useState<TestCollection>()

  useEffect(() => {
    if (authContext.connected) fetch()
  }, [])

  async function fetch() {
    const result = await pocketBase.collection('test').getFullList<TestCollection>()
    setTestData(result[0])
  }

  async function update() {
    if (!testData) return

    const modifiedData = testData
    modifiedData.text = `Modified by Ecode, last modification ${modifiedData.updated}`

    await pocketBase
      .collection('test')
      .update(testData?.id, modifiedData)
      .then(() => {
        fetch()
      })
      .catch((err) => {
        console.error('ERROR ', err)
      })
  }

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

        <div className='mt-5'>
          <label className='mr-5'>Get from API : </label>
          <span>{testData ? testData.text : 'Chargement...'}</span>
        </div>

        <div className='mt-5'>
          <button onClick={update}>Send to API</button>
        </div>
      </div>
    </>
  )
}
