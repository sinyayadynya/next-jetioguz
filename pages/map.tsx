// ./pages/map.tsx
import { useEffect, useState } from 'react';
import { Layout, LayoutProps } from 'components/layout';
import { getGlobalElements } from "lib/get-global-elements"
import { Header, HeaderProps } from "components/header"
import MapComponent from '../components/MapComponent';

export default function MapPage() {
  return (
    <Layout showFooter={false}>
        <MapComponent />
    </Layout>
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
