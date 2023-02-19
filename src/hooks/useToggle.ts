import { useState } from 'react'

export default function useToggle(defaultValue: boolean) {
  const [value, setValue] = useState<boolean>(defaultValue)

  function toggle(state?: boolean) {
    setValue((prevValue) => (typeof state === 'boolean' ? state : !prevValue))
  }

  return { value, toggle }
}
