import { useEffect } from 'react'

//const LETTERS = 'abcdefghijklmnopqrstuvwxyz'

type propsType = {
  id: string
  value: string
}

export default function GlitchedTitle(props: propsType) {
  useEffect(() => {
    const text = document.getElementById(props.id)
    if (!text) return

    text.onmouseover = (event) => {
      if (!event.target) return

      const target = event.target as HTMLTitleElement

      let iterations = 0
      const interval = setInterval(() => {
        target.innerText = target.innerText
          .split('')
          .map((letter, index) => {
            if (index < iterations) return props.value[index]
            else return Math.random() < 0.5 ? '0' : '1'
            //LETTERS[Math.floor(Math.random() * LETTERS.length)]
          })
          .join('')

        if (iterations++ >= props.value.length) {
          clearInterval(interval)
        }
      }, 50)
    }
  }, [])
  return (
    <h2
      id={props.id}
      className='mb-9 text-3xl sm:text-5xl font-roboto font-semi-bold uppercase text-gray-300 hover:text-white hover:scale-105 transition-all hover-underline select-none'>
      {props.value}
    </h2>
  )
}
