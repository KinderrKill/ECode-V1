import { useEffect, useState } from 'react'
import pocketBase from '../lib/pocketBase'

import { BaseDataOptions, CollectionDataResult, DefaultState } from './../utils/typings'

export default function useFetchPocketBase<T>({
  collectionName,
  method,
  params = [],
}: BaseDataOptions<T>): CollectionDataResult<T> {
  const [data, setData] = useState<T | null>(null)
  const [state, setState] = useState<DefaultState>({
    loading: true,
    error: undefined,
  })

  useEffect(() => {
    console.log('[useFetchPocketBase] UseEffect called ')
    async function fetchData() {
      try {
        const collection: any = pocketBase.collection(collectionName)
        const result = await collection[method](...params)

        setData(result)
        setState((prevState) => ({
          ...prevState,
          loading: false,
        }))
      } catch (error) {
        console.error(`Error fetching data in collection ${collectionName}, error ${error}`)
        setState((prevState) => ({
          ...prevState,
          loading: false,
        }))
      }
    }

    fetchData()
  }, [collectionName])

  return { data, state }
}
