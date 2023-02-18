import { ReactNode, useEffect, useRef } from 'react';
import BlobCursor from '../../components/BlobCursor';

type LayoutProps = {
  components: ReactNode;
};

export default function Layout({ components }: LayoutProps) {
  return (
    <>
      <BlobCursor />
      <div>{components}</div>
    </>
  );
}
