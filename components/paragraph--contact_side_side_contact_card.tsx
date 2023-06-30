import { DrupalParagraph } from 'next-drupal';

export interface ContactCardProps {
    data: DrupalParagraph;
}

export function ContactCard({ data }: ContactCardProps) {
    return (
        <div className="rounded-2xl bg-gray-50 p-10">
            <h3 className="text-base font-semibold leading-7 text-gray-900">
                {data.field_label}
            </h3>
            <dl className="mt-3 space-y-1 text-sm leading-6 text-gray-600">
                <div>
                    <dt className="sr-only">Email</dt>
                    <dd>
                        <a
                            className="font-semibold text-primary-600"
                            href={`mailto:${data.field_email}`}
                        >
                            {data.field_email}
                        </a>
                    </dd>
                </div>
                <div className="mt-1">
                    <dt className="sr-only">
                        Phone number
                    </dt>
                    <dd>{data.field_phone}</dd>
                </div>
            </dl>
        </div>
    );
}
