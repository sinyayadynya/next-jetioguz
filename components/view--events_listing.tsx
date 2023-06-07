import React from "react"
import { Section } from "components/section"

import {
    CalendarIcon,
    MapPinIcon,
} from '@heroicons/react/20/solid'

export function ViewEventsListing({ events, ...props }) {
  if (!events) return null;

  return (
      <Section {...props}>
          {events.map((event) => (
              <li
                  key={event.id}
                  className="relative flex space-x-6 py-6 xl:static"
              >
                  <img src={event.image} alt={event.name} className="h-14 w-14 flex-none rounded-full object-cover" />
                  <div className="flex-auto">
                      <h3 className="pr-10 font-semibold text-gray-900 xl:pr-0">
                          {event.name}
                      </h3>
                      <dl className="mt-2 flex flex-col text-gray-500 xl:flex-row">
                          <div className="flex items-start space-x-3">
                              <dt className="mt-0.5">
                                  <span className="sr-only">Date</span>
                                  <CalendarIcon
                                      className="h-5 w-5 text-gray-400"
                                      aria-hidden="true"
                                  />
                              </dt>
                              <dd>
                                  <time dateTime={event.date}>
                                      {event.date}
                                  </time>
                              </dd>
                          </div>
                          <div className="mt-2 flex items-start space-x-3 xl:ml-3.5 xl:mt-0 xl:border-l xl:border-gray-400 xl:border-opacity-50 xl:pl-3.5">
                              <dt className="mt-0.5">
                                  <span className="sr-only">Location</span>
                                  <MapPinIcon
                                      className="h-5 w-5 text-gray-400"
                                      aria-hidden="true"
                                  />
                              </dt>
                              <dd>{event.locality}</dd>
                          </div>
                      </dl>
                  </div>
              </li>
          ))}
      </Section>
  );
}
