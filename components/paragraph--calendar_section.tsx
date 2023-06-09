import { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import { Section } from 'components/section';
import { DrupalParagraph } from 'next-drupal';
import { useTranslation } from 'next-i18next';

import { ViewEventsListing } from 'components/view--events_listing';

interface Event {
    id: string;
    name: string;
    street: string;
    locality: string;
    date: string;
    image: string;
}

interface View {
    name: string;
    events: Event[];
}

interface ParagraphProps {
    paragraphType: DrupalParagraph;
}

export function ParagraphCalendarSection({ paragraphType }: ParagraphProps) {
    const { t } = useTranslation();
    const router = useRouter();
    const { locale } = router;
    const [view, setView] = useState<View | null>(null);

    useEffect(() => {
        axios
            .get(`${process.env.NEXT_PUBLIC_DRUPAL_BASE_URL}/${locale}/api/dmo-events/jetioguz`, {
                headers: {
                    Accept: "application/json",
                },
            })
            .then((response) => {
                const events = response.data.map((event) => {
                    const parser = new DOMParser();
                    const dateHTML = parser.parseFromString(event.date, "text/html");
                    const datetime = dateHTML.querySelector("time").getAttribute('datetime');

                    const dateObj = new Date(datetime);

                    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
                    const monthName = months[dateObj.getMonth()];

                    const day = dateObj.getDate();

                    const year = dateObj.getFullYear();

                    const hours = dateObj.getHours() > 12 ? dateObj.getHours() - 12 : dateObj.getHours();
                    const minutes = (dateObj.getMinutes() < 10 ? '0' : '') + dateObj.getMinutes();
                    const ampm = dateObj.getHours() >= 12 ? 'PM' : 'AM';

                    const formattedDate = `${day} ${monthName} ${year} at ${hours}:${minutes} ${ampm}`;

                    const decodedName = parser.parseFromString(event.name, "text/html").body.textContent || "";

                    return {
                        ...event,
                        name: decodedName,
                        date: formattedDate,
                        image: `${process.env.NEXT_PUBLIC_DRUPAL_BASE_URL}` + event.image,
                    };
                });

                setView({
                    name: "dmo_events",
                    events: events
                });
            })
            .catch((error) => {
                console.error("Error fetching API data: ", error);
            });
    }, [locale]);

    if (!view) {
        return <p>Loading...</p>;
    }

    return (
        <Section>
            <div className="bg-white">
                <div className="mx-auto max-w-2xl px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8">
                    <div className="max-w-3xl">
                        <h2 className="mt-2 text-3xl font-heading font-bold tracking-tight text-gray-900 sm:text-4xl">
                            {paragraphType.field_headline}
                        </h2>
                        <p className="mt-4 text-gray-500">
                            {paragraphType.field_tagline}
                        </p>
                    </div>

                    <div className='mt-16'>
                        <h2 className="text-base font-semibold leading-6 text-gray-900">
                            {t('upcoming-events')}
                        </h2>
                        <div className="lg:grid lg:grid-cols-12 lg:gap-x-16">
                            <ViewEventsListing events={view?.events} />
                        </div>
                    </div>

                </div>
            </div>
        </Section>
    );
}
