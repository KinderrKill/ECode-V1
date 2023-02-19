import pocketBase from '../lib/pocketBase'
import { useEffect, useState } from 'react'

import { BaseDataOptions, CollectionDataResult, DefaultState } from '../utils/typings/globalTypes'

export default function useFetch<T>({
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
    async function fetchData() {
      try {
        const collection: any = pocketBase.collection(collectionName)

        if (!(method in collection)) {
          console.error(`Method ${method} is not available in ${collectionName} collection !`)
          setState((prevState) => ({
            ...prevState,
            loading: false,
          }))
        }

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
