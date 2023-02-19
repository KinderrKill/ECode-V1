import { ReactNode, useEffect, useRef } from 'react'
import BlobCursor from '../../components/blobCursor'

type LayoutProps = {
  components: ReactNode
}

export default function Layout({ components }: LayoutProps) {
  return (
    <>
      {/* <BlobCursor /> */}
      <div>{components}</div>
    </>
  )
}
