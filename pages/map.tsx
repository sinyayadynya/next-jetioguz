// ./pages/map.tsx
import { useEffect, useState } from 'react';
import { getGlobalElements } from "lib/get-global-elements"
import { Header, HeaderProps } from "components/header"
import MapComponent from '../components/MapComponent';

export default function MapPage() {
  return (
    <div>
        <div className="absolute top-0 inset-x-0 z-[999]">
            <Header />
        </div>
        <MapComponent />
    </div>
  )
}

export async function getServerSideProps(context) {
    return {
      props: {
        ...(await getGlobalElements(context)),
        // You can include other props here as well.
      },
    };
  }
