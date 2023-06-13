import { useState } from 'react';
import { Switch } from '@headlessui/react';
import SuccessMessage from 'components/success-message';

function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
}

export default function ContactForm() {
    const [agreed, setAgreed] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    // Check if the form is valid
    const isFormValid = firstname && lastname && phone && message && agreed;

    async function handleSubmit(event) {
        event.preventDefault();

        try {
            const response = await fetch(
                `${process.env.NEXT_PUBLIC_DRUPAL_BASE_URL}/webform_rest/submit`,
                {
                    method: 'POST',
                    body: JSON.stringify({
                        webform_id: 'contact_rest_jetioguz',
                        firstname: event.target.firstname.value,
                        lastname: event.target.lastname.value,
                        email: event.target.email.value,
                        phone: event.target.phone.value,
                        object: event.target.object.value,
                        message: event.target.message.value,
                    }),
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }
            );

            if (response.ok) {
                setShowSuccess(true);
                // Reset form
                setFirstname('');
                setLastname('');
                setPhone('');
                setEmail('');
                setMessage('');
                setAgreed(false);
            }

            // Handle error.
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div id="write" className="mx-auto max-w-7xl -mt-16 py-16 px-6 border-t border-gray-100 lg:px-8">
            <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-3">
                <div>
                    <h2 className="text-3xl font-heading font-bold tracking-tight text-gray-900">
                        Send us a message
                    </h2>
                    <p className="mt-4 leading-7 text-gray-600">
                        Your input helps shape a meaningful experience and improve our services. Please share your thoughts.
                    </p>
                </div>
                <div className="grid grid-cols-1 gap-6 lg:col-span-2 lg:gap-8">
                    <div className="rounded-2xl bg-gray-50 p-10">
                        <form
                            onSubmit={handleSubmit}
                            className="mx-auto mt-4 max-w-xl"
                        >
                            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                                <div>
                                    <label
                                        htmlFor="first-name"
                                        className="block text-sm font-semibold leading-6 text-gray-900"
                                    >
                                        First name
                                    </label>
                                    <div className="mt-2.5">
                                        <input
                                            type="text"
                                            name="firstname"
                                            id="firstname"
                                            value={firstname}
                                            onChange={(e) =>
                                                setFirstname(e.target.value)
                                            }
                                            autoComplete="given-name"
                                            className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label
                                        htmlFor="last-name"
                                        className="block text-sm font-semibold leading-6 text-gray-900"
                                    >
                                        Last name
                                    </label>
                                    <div className="mt-2.5">
                                        <input
                                            type="text"
                                            name="lastname"
                                            id="lastname"
                                            value={lastname}
                                            onChange={(e) =>
                                                setLastname(e.target.value)
                                            }
                                            autoComplete="family-name"
                                            className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>
                                <div className="sm:col-span-2">
                                    <label
                                        htmlFor="phone"
                                        className="block text-sm font-semibold leading-6 text-gray-900"
                                    >
                                        Phone number
                                    </label>
                                    <div className="mt-2.5">
                                        <input
                                            type="text"
                                            name="phone"
                                            id="phone"
                                            value={phone}
                                            onChange={(e) =>
                                                setPhone(e.target.value)
                                            }
                                            autoComplete="tel"
                                            className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>
                                <div className="sm:col-span-2">
                                    <label
                                        htmlFor="email"
                                        className="block text-sm font-semibold leading-6 text-gray-900"
                                    >
                                        Email
                                    </label>
                                    <div className="mt-2.5">
                                        <input
                                            type="email"
                                            name="email"
                                            id="email"
                                            value={email}
                                            onChange={(e) =>
                                                setEmail(e.target.value)
                                            }
                                            autoComplete="email"
                                            className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>
                                <div className="sm:col-span-2">
                                    <label
                                        htmlFor="company"
                                        className="block text-sm font-semibold leading-6 text-gray-900"
                                    >
                                        Object
                                    </label>
                                    <div className="mt-2.5">
                                        <input
                                            type="text"
                                            name="object"
                                            id="object"
                                            className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>
                                <div className="sm:col-span-2">
                                    <label
                                        htmlFor="message"
                                        className="block text-sm font-semibold leading-6 text-gray-900"
                                    >
                                        Message
                                    </label>
                                    <div className="mt-2.5">
                                        <textarea
                                            name="message"
                                            id="message"
                                            rows={4}
                                            value={message}
                                            onChange={(e) =>
                                                setMessage(e.target.value)
                                            }
                                            className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
                                            defaultValue={''}
                                        />
                                    </div>
                                </div>
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
                            </div>
                            <div className="mt-10">
                                <button
                                    type="submit"
                                    disabled={!isFormValid}
                                    className="block w-full rounded-md bg-primary-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white enabled:shadow-sm enabled:hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600 disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    Let's talk
                                </button>
                            </div>
                        </form>
                        <SuccessMessage
                            open={showSuccess}
                            setOpen={setShowSuccess}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
