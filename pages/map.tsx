// ./pages/map.tsx
import { useEffect, useState } from 'react';
import { Layout, LayoutProps } from 'components/layout';
import { getGlobalElements } from "lib/get-global-elements"
import { Header, HeaderProps } from "components/header"
import MapComponent from '../components/MapComponent';
import { useTranslation } from "next-i18next"
import { t } from 'i18next';


export default function MapPage() {
    const { t } = useTranslation()

    return (
        <Layout
            meta={{ title: t('map') }}
            showFooter={false}
        >
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
