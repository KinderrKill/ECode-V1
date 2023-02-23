import { ReactNode, useEffect, useRef } from 'react'

type LayoutProps = {
  components: ReactNode
}

export default function Layout({ components }: LayoutProps) {
  return (
    <>
      <div>{components}</div>
    </>
  )
}
