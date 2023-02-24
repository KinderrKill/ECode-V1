import { useEffect } from 'react'

export default function BlobCursor() {
  useEffect(() => {
    const blob = document.querySelector('.cursor-blob')
    if (!blob) return

    const handlePointerMove = (event: PointerEvent) => {
      const { clientX, clientY } = event
      blob.animate(
        {
          left: `${clientX}px`,
          top: `${clientY}px`,
        },
        { duration: 2000, fill: 'forwards' }
      )
    }

    document.addEventListener('pointermove', handlePointerMove)

    return () => {
      document.removeEventListener('pointermove', handlePointerMove)
    }
  }, [])

  return (
    <>
      <div className='cursor-blob overflow-hidden'></div>
      <div className='cursor-blob__blur overflow-hidden'></div>
    </>
  )
}
