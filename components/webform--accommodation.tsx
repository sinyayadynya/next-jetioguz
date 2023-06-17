import { useState } from 'react';
import { useTranslation } from "next-i18next"
import { Switch } from '@headlessui/react';
import SuccessMessage from 'components/success-message';

import { QuestionMarkCircleIcon } from '@heroicons/react/20/solid';

function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
}

export default function AccommodationForm() {
    const { t } = useTranslation()

    const [agreed, setAgreed] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);
    const [accommodation, setAccommodation] = useState('');
    const [checkin, setCheckin] = useState('');
    const [checkout, setCheckout] = useState('');
    const [pax, setPax] = useState('');
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');

    // Check if the form is valid
    const isFormValid =
        accommodation && checkin && checkout && pax && name && email && phone;

    async function handleSubmit(event) {
        event.preventDefault();

        try {
            const response = await fetch(
                `${process.env.NEXT_PUBLIC_DRUPAL_BASE_URL}/webform_rest/submit`,
                {
                    method: 'POST',
                    body: JSON.stringify({
                        webform_id: 'accommodation_rest_jetioguz',
                        accommodation: event.target.accommodation.value,
                        checkin: event.target.checkin.value,
                        checkout: event.target.checkout.value,
                        pax: event.target.pax.value,
                        name: event.target.name.value,
                        email: event.target.email.value,
                        phone: event.target.phone.value,
                    }),
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }
            );

            if (response.ok) {
                setShowSuccess(true);
                // Reset form
                setAccommodation('');
                setCheckin(''), setCheckout(''), setPax(''), setName('');
                setEmail('');
                setPhone('');
            }

            // Handle error.
        } catch (error) {
            // console.error(error);
            alert('An error occurred, please try again later.');
        }
    }

    const [open, setOpen] = useState(true);

    return (
        <div>
            <form onSubmit={handleSubmit}>
                {/* Divider container */}
                <div className="space-y-6 py-6 sm:space-y-0 sm:divide-y sm:divide-gray-200 sm:py-0">
                    {/* Accommodation name */}
                    <div className="space-y-2 px-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:space-y-0 sm:px-6 sm:py-5">
                        <div>
                            <label
                                htmlFor="accommodation"
                                className="block text-sm font-medium leading-6 text-gray-900 sm:mt-1.5"
                            >
                                Accommodation name
                            </label>
                        </div>
                        <div className="sm:col-span-2">
                            <input
                                type="text"
                                name="accommodation"
                                id="accommodation"
                                value={accommodation}
                                onChange={(e) =>
                                    setAccommodation(e.target.value)
                                }
                                autoComplete="given-name"
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>

                    {/* Check in */}
                    <div className="space-y-2 px-4 sm:grid sm:grid-cols-3 sm:items-center sm:gap-4 sm:space-y-0 sm:px-6 sm:py-5">
                        <div>
                            <label
                                htmlFor="checkin"
                                className="block text-sm font-medium leading-6 text-gray-900 sm:mt-1.5"
                            >
                                Check in
                            </label>
                        </div>
                        <div className="sm:col-span-2">
                            <input
                                type="date"
                                name="checkin"
                                id="checkin"
                                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6
                invalid:border-red-500 invalid:text-red-600 focus:invalid:border-red-500 focus:invalid:ring-red-500"
                            />
                        </div>
                    </div>

                    {/* Check out */}
                    <div className="space-y-2 px-4 sm:grid sm:grid-cols-3 sm:items-center sm:gap-4 sm:space-y-0 sm:px-6 sm:py-5">
                        <div>
                            <label
                                htmlFor="checkout"
                                className="block text-sm font-medium leading-6 text-gray-900 sm:mt-1.5"
                            >
                                Check out
                            </label>
                        </div>
                        <div className="sm:col-span-2">
                            <input
                                type="date"
                                name="checkout"
                                id="checkout"
                                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6
            invalid:border-red-500 invalid:text-red-600 focus:invalid:border-red-500 focus:invalid:ring-red-500"
                            />
                        </div>
                    </div>

                    {/* Pax */}
                    <div className="space-y-2 px-4 sm:grid sm:grid-cols-3 sm:items-center sm:gap-4 sm:space-y-0 sm:px-6 sm:py-5">
                        <div>
                            <label
                                htmlFor="pax"
                                className="block text-sm font-medium leading-6 text-gray-900 sm:mt-1.5"
                            >
                                Pax
                            </label>
                        </div>
                        <div className="sm:col-span-2">
                            <input
                                type="number"
                                name="pax"
                                id="pax"
                                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6
            invalid:border-red-500 invalid:text-red-600 focus:invalid:border-red-500 focus:invalid:ring-red-500"
                            />
                        </div>
                    </div>

                    {/* Name */}
                    <div className="space-y-2 px-4 sm:grid sm:grid-cols-3 sm:items-center sm:gap-4 sm:space-y-0 sm:px-6 sm:py-5">
                        <div>
                            <label
                                htmlFor="name"
                                className="block text-sm font-medium leading-6 text-gray-900 sm:mt-1.5"
                            >
                                Name
                            </label>
                        </div>
                        <div className="sm:col-span-2">
                            <input
                                type="text"
                                name="name"
                                id="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                autoComplete="full-name"
                                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6
            invalid:border-red-500 invalid:text-red-600 focus:invalid:border-red-500 focus:invalid:ring-red-500"
                            />
                        </div>
                    </div>

                    {/* Mobile */}
                    <div className="space-y-2 px-4 sm:grid sm:grid-cols-3 sm:items-center sm:gap-4 sm:space-y-0 sm:px-6 sm:py-5">
                        <div>
                            <label
                                htmlFor="phone"
                                className="block text-sm font-medium leading-6 text-gray-900 sm:mt-1.5"
                            >
                                Mobile number
                            </label>
                        </div>
                        <div className="sm:col-span-2">
                            <input
                                type="text"
                                name="phone"
                                id="phone"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                autoComplete="tel"
                                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6
            invalid:border-red-500 invalid:text-red-600 focus:invalid:border-red-500 focus:invalid:ring-red-500"
                            />
                        </div>
                    </div>

                    {/* Email */}
                    <div className="space-y-2 px-4 sm:grid sm:grid-cols-3 sm:items-center sm:gap-4 sm:space-y-0 sm:px-6 sm:py-5">
                        <div>
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium leading-6 text-gray-900 sm:mt-1.5"
                            >
                                Email
                            </label>
                        </div>
                        <div className="sm:col-span-2">
                            <input
                                type="email"
                                name="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                autoComplete="email"
                                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6
            invalid:border-red-500 invalid:text-red-600 focus:invalid:border-red-500 focus:invalid:ring-red-500"
                            />
                        </div>
                    </div>

                    {/* Privacy */}
                    <div className="space-y-2 px-4 sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:space-y-0 sm:px-6 sm:py-5">
                        <legend className="sr-only">Privacy</legend>
                        <div
                            className="text-sm font-medium leading-6 text-gray-900"
                            aria-hidden="true"
                        >
                            Privacy
                        </div>
                        <div className="space-y-5 sm:col-span-2">
                            <Switch.Group
                                as="div"
                                className="flex gap-x-4 sm:col-span-2"
                            >
                                <div className="flex h-6 items-center">
                                    <Switch
                                        checked={agreed}
                                        onChange={setAgreed}
                                        className={classNames(
                                            agreed
                                                ? 'bg-primary-600'
                                                : 'bg-gray-200',
                                            'flex w-8 flex-none cursor-pointer rounded-full p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600'
                                        )}
                                    >
                                        <span className="sr-only">
                                            Agree to policies
                                        </span>
                                        <span
                                            aria-hidden="true"
                                            className={classNames(
                                                agreed
                                                    ? 'translate-x-3.5'
                                                    : 'translate-x-0',
                                                'h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out'
                                            )}
                                        />
                                    </Switch>
                                </div>
                                <Switch.Label className="text-sm leading-6 text-gray-600">
                                    By selecting this, you agree to our{' '}
                                    <a
                                        href="#"
                                        className="font-semibold text-primary-600"
                                    >
                                        privacy&nbsp;policy
                                    </a>
                                    .
                                </Switch.Label>
                            </Switch.Group>
                            <hr className="border-gray-200" />
                            <div className="flex flex-col items-start space-y-4 sm:flex-row sm:items-center sm:justify-between sm:space-y-0">
                                <div>
                                    <a
                                        href="#"
                                        className="group flex items-center space-x-2.5 text-sm text-gray-500 hover:text-gray-900"
                                    >
                                        <QuestionMarkCircleIcon
                                            className="h-5 w-5 text-gray-400 group-hover:text-gray-500"
                                            aria-hidden="true"
                                        />
                                        <span>Learn more about booking accommodation</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Action buttons */}
                <div className="flex-shrink-0 border-t border-gray-200 px-4 py-5 sm:px-6">
                    <div className="flex justify-end space-x-3">
                        <button
                            type="button"
                            className="rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                            onClick={() => setOpen(false)}
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            disabled={!isFormValid}
                            className="inline-flex justify-center rounded-md bg-primary-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            Book now
                        </button>
                    </div>
                </div>
            </form>

            <SuccessMessage open={showSuccess} setOpen={setShowSuccess} />
        </div>
    );
}
