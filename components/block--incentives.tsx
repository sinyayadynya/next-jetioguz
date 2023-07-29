// ./components/block--incentives.tsx

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useTranslation } from "next-i18next"

import IconFeatureCalendar from 'components/icons/icon-calendar';
import IconFeatureDelivery from 'components/icons/icon-delivery';
import IconFeatureGiftCard from 'components/icons/icon-gift-card';
import IconFeaturePlanet from 'components/icons/icon-planet';

export function BlockIncentives() {
  const [incentives, setIncentives] = useState([]);
  const { t, i18n } = useTranslation();
    const lang = i18n.language;
    const prefix = lang !== 'en' ? `/${lang}` : '';

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_DRUPAL_BASE_URL}/${lang}/api/jetioguz/incentives`)
      .then((response) => response.json())
      .then((data) => setIncentives(data));
  }, [lang]);

  const iconComponents = {
    'IconFeatureCalendar': IconFeatureCalendar,
    'IconFeatureDelivery': IconFeatureDelivery,
    'IconFeatureGiftCard': IconFeatureGiftCard,
    'IconFeaturePlanet': IconFeaturePlanet,
  };

  return (
    <div className="bg-gray-50">
        <div className="mx-auto max-w-2xl px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8">
            <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 lg:gap-x-8">
                {incentives.map((item, index) => {
                    const SelectedIconComponent = iconComponents[item.icon]; // Moved inside the map function

                    return (
                    <div key={index} className="">
                        <Link href={item?.link}>
                            <SelectedIconComponent className="h-24 w-auto" />
                            <h3 className="mt-6 text-sm font-medium text-gray-900">{item.label}</h3>
                            <p className="mt-2 text-sm text-gray-500">{item.text}</p>
                        </Link>
                    </div>
                    );
                })}
            </div>
        </div>
    </div>
  );
}
