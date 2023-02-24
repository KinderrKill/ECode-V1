import { ReactNode, useEffect, useRef } from 'react'
import Footer from '../../components/shared/footer'

type LayoutProps = {
  components: ReactNode
}

export default function Layout({ components }: LayoutProps) {
  return (
    <>
      <div>{components}</div>
      <Footer />
    </>
  )
}
