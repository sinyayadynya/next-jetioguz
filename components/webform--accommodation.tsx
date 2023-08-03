import { useState } from 'react';
import { useTranslation } from "next-i18next"
import { Switch } from '@headlessui/react';
import SuccessMessage from 'components/success-message';
import { QuestionMarkCircleIcon, ExclamationCircleIcon } from '@heroicons/react/20/solid';

function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
}

export default function AccommodationForm({ productName = '', handleClose }) {
    const { t } = useTranslation()

    const [agreed, setAgreed] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);
    const [accommodation, setAccommodation] = useState(productName);
    const [arrival, setCheckin] = useState('');
    const [departure, setCheckout] = useState('');
    const [pax, setPax] = useState('');
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [submitted, setSubmitted] = useState(false); // New state variable

    // Check if the form is valid
    const isFormValid =
        accommodation && arrival && departure && pax && name && email && phone && agreed;

    async function handleSubmit(event) {
        event.preventDefault();

        setSubmitted(true); // Set submitted to true when the form is submitted

        // If the form is not valid, return early
        if (!isFormValid) {
            return;
        }

        try {
            const response = await fetch(
                `${process.env.NEXT_PUBLIC_DRUPAL_BASE_URL}/webform_rest/submit`,
                {
                    method: 'POST',
                    body: JSON.stringify({
                        webform_id: 'accommodation_rest_jetioguz',
                        accommodation: event.target.accommodation.value,
                        arrival: event.target.arrival.value,
                        departure: event.target.departure.value,
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
                setAgreed(false);

                // Close the slide-over panel
                handleClose();
            }

            // Handle error.
        } catch (error) {
            // console.error(error);
            alert('An error occurred, please try again later.');
        }
    }

    const [open, setOpen] = useState(true);

    // Compute the input class names
    const inputClass = (value) => {
        const baseClass = "block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6";
        const errorClass = "text-red-900 ring-red-300 placeholder:text-red-300 focus:ring-red-500";

        // Apply the error class only if the form has been submitted and the field's value is empty
        return submitted && !value ? `${baseClass} ${errorClass}` : baseClass;
    };

    // Compute the switch class names
    const switchClass = (value) => {
        const baseClass = "flex w-8 flex-none cursor-pointer rounded-full p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600";
        const errorClass = "ring-red-500 bg-red-500";

        // Apply the error class only if the form has been submitted and the switch is not checked
        return submitted && !value ? `${baseClass} ${errorClass}` : value ? 'bg-primary-600' : 'bg-gray-200';
    };

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
                                {t('webform-accommodation-name')}
                            </label>
                        </div>
                        <div className="sm:col-span-2">
                            <input
                                type="text"
                                name="accommodation"
                                id="accommodation"
                                value={accommodation}
                                readOnly
                                className={`${inputClass(accommodation)} cursor-not-allowed bg-gray-50 text-gray-500 ring-gray-200`}
                            />
                        </div>
                    </div>

                    {/* Check in */}
                    <div className="space-y-2 px-4 sm:grid sm:grid-cols-3 sm:items-center sm:gap-4 sm:space-y-0 sm:px-6 sm:py-5">
                        <div>
                            <label
                                htmlFor="arrival"
                                className="block text-sm font-medium leading-6 text-gray-900 sm:mt-1.5"
                            >
                                {t('webform-checkin-label')}
                            </label>
                        </div>
                        <div className="sm:col-span-2">
                            <input
                                type="date"
                                name="arrival"
                                id="arrival"
                                onChange={(e) => setCheckin(e.target.value)}
                                className={inputClass(arrival)}
                            />
                        </div>
                        {submitted && !arrival && ( // Only render the text if the form has been submitted and the field's value is empty
                            <p className="mt-2 text-sm text-red-600 sm:col-start-2 sm:col-span-2" id="arrival-error">
                                {t('please-enter-a-valid-value')}
                            </p>
                        )}
                    </div>

                    {/* Check out */}
                    <div className="space-y-2 px-4 sm:grid sm:grid-cols-3 sm:items-center sm:gap-4 sm:space-y-0 sm:px-6 sm:py-5">
                        <div>
                            <label
                                htmlFor="departure"
                                className="block text-sm font-medium leading-6 text-gray-900 sm:mt-1.5"
                            >
                                {t('webform-checkout-label')}
                            </label>
                        </div>
                        <div className="sm:col-span-2">
                            <input
                                type="date"
                                name="departure"
                                id="departure"
                                onChange={(e) => setCheckout(e.target.value)}
                                className={inputClass(departure)}
                            />
                        </div>
                        {submitted && !departure && ( // Only render the text if the form has been submitted and the field's value is empty
                            <p className="mt-2 text-sm text-red-600 sm:col-start-2 sm:col-span-2" id="departure-error">
                                {t('please-enter-a-valid-value')}
                            </p>
                        )}
                    </div>

                    {/* Pax */}
                    <div className="space-y-2 px-4 sm:grid sm:grid-cols-3 sm:items-center sm:gap-4 sm:space-y-0 sm:px-6 sm:py-5">
                        <div>
                            <label
                                htmlFor="pax"
                                className="block text-sm font-medium leading-6 text-gray-900 sm:mt-1.5"
                            >
                                {t('webform-pax-label')}
                            </label>
                        </div>
                        <div className="relative sm:col-span-2">
                            <input
                                type="number"
                                name="pax"
                                id="pax"
                                onChange={(e) => setPax(e.target.value)}
                                className={inputClass(pax)}
                            />
                            {submitted && !pax && ( // Only render the icon if the form has been submitted and the field's value is empty
                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                                    <ExclamationCircleIcon className="h-5 w-5 text-red-500" aria-hidden="true" />
                                </div>
                            )}
                        </div>
                        {submitted && !pax && ( // Only render the text if the form has been submitted and the field's value is empty
                            <p className="mt-2 text-sm text-red-600 sm:col-start-2 sm:col-span-2" id="pax-error">
                                {t('please-enter-a-valid-value')}
                            </p>
                        )}
                    </div>

                    {/* Name */}
                    <div className="space-y-2 px-4 sm:grid sm:grid-cols-3 sm:items-center sm:gap-4 sm:space-y-0 sm:px-6 sm:py-5">
                        <div>
                            <label
                                htmlFor="name"
                                className="block text-sm font-medium leading-6 text-gray-900 sm:mt-1.5"
                            >
                                {t('webform-name-label')}
                            </label>
                        </div>
                        <div className="relative sm:col-span-2">
                            <input
                                type="text"
                                name="name"
                                id="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                autoComplete="name"
                                className={inputClass(name)}
                            />
                            {submitted && !name && ( // Only render the icon if the form has been submitted and the field's value is empty
                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                                    <ExclamationCircleIcon className="h-5 w-5 text-red-500" aria-hidden="true" />
                                </div>
                            )}
                        </div>
                        {submitted && !name && ( // Only render the text if the form has been submitted and the field's value is empty
                            <p className="mt-2 text-sm text-red-600 sm:col-start-2 sm:col-span-2" id="name-error">
                                {t('please-enter-a-valid-value')}
                            </p>
                        )}
                    </div>

                    {/* Mobile */}
                    <div className="space-y-2 px-4 sm:grid sm:grid-cols-3 sm:items-center sm:gap-4 sm:space-y-0 sm:px-6 sm:py-5">
                        <div>
                            <label
                                htmlFor="phone"
                                className="block text-sm font-medium leading-6 text-gray-900 sm:mt-1.5"
                            >
                                {t('webform-phone-label')}
                            </label>
                        </div>
                        <div className="relative sm:col-span-2">
                            <input
                                type="text"
                                name="phone"
                                id="phone"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                autoComplete="tel"
                                className={inputClass(phone)}
                            />
                            {submitted && !phone && ( // Only render the icon if the form has been submitted and the field's value is empty
                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                                    <ExclamationCircleIcon className="h-5 w-5 text-red-500" aria-hidden="true" />
                                </div>
                            )}
                        </div>
                        {submitted && !phone && ( // Only render the text if the form has been submitted and the field's value is empty
                            <p className="mt-2 text-sm text-red-600 sm:col-start-2 sm:col-span-2" id="phone-error">
                                {t('please-enter-a-valid-value')}
                            </p>
                        )}
                    </div>

                    {/* Email */}
                    <div className="space-y-2 px-4 sm:grid sm:grid-cols-3 sm:items-center sm:gap-4 sm:space-y-0 sm:px-6 sm:py-5">
                        <div>
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium leading-6 text-gray-900 sm:mt-1.5"
                            >
                                {t('webform-email-label')}
                            </label>
                        </div>
                        <div className="relative sm:col-span-2">
                            <input
                                type="email"
                                name="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                autoComplete="email"
                                className={inputClass(email)}
                            />
                            {submitted && !email && ( // Only render the icon if the form has been submitted and the field's value is empty
                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                                    <ExclamationCircleIcon className="h-5 w-5 text-red-500" aria-hidden="true" />
                                </div>
                            )}
                        </div>
                        {submitted && !email && ( // Only render the text if the form has been submitted and the field's value is empty
                            <p className="mt-2 text-sm text-red-600 sm:col-start-2 sm:col-span-2" id="email-error">
                                {t('please-enter-a-valid-value')}
                            </p>
                        )}
                    </div>

                    {/* Privacy */}
                    <div className="space-y-2 px-4 sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:space-y-0 sm:px-6 sm:py-5">
                        <legend className="sr-only">Privacy</legend>
                        <div
                            className="text-sm font-medium leading-6 text-gray-900"
                            aria-hidden="true"
                        >
                            {t('webform-privacy-label')}
                        </div>
                        <div className="space-y-5 sm:col-span-2">
                            <Switch.Group as="div" className="flex gap-x-4 sm:col-span-2">
                                <div className="flex h-6 items-center">
                                    <Switch
                                        checked={agreed}
                                        onChange={setAgreed}
                                        className={classNames(
                                            switchClass(agreed),
                                            'flex w-8 flex-none cursor-pointer rounded-full p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600'
                                        )}
                                    >
                                        <span className="sr-only">Agree to policies</span>
                                        <span
                                            aria-hidden="true"
                                            className={classNames(
                                                agreed ? 'translate-x-3.5' : 'translate-x-0',
                                                'h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out'
                                            )}
                                        />
                                    </Switch>
                                </div>
                                <Switch.Label className="text-sm leading-6 text-gray-600">
                                    {t('webform-policy-text')}{' '}
                                    <a href="#" className="font-semibold text-primary-600">{t('webform-policy-link')}</a>.
                                </Switch.Label>
                            </Switch.Group>
                            {submitted && !agreed && ( // Only render the icon if the form has been submitted and the field's value is empty
                                <p className="mt-2 text-sm text-red-600" id="agreed-error">
                                    {t('please-agree-to-our-privacy-policy')}
                                </p>
                            )}
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
                                        <span>{t('webform-accommodation-info')}</span>
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
                            onClick={handleClose}
                        >
                            {t('cancel')}
                        </button>

                        <button
                            type="submit"
                            className="inline-flex justify-center rounded-md bg-primary-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {t('book-now')}
                        </button>
                    </div>
                </div>
            </form>

            <SuccessMessage open={showSuccess} setOpen={setShowSuccess} />

        </div>
    );
}
