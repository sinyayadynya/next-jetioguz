import React from "react"
import { Section } from "components/section"

export function ViewOffersListing({ offers, ...props }) {
  if (!offers) return null;

  return (
    <Section {...props}>
      {offers.map((offer, index) => (
        <div key={index} className="flex flex-col-reverse">

            <div className="mt-6">
                <h3 className="text-sm font-medium text-gray-900">{offer.name}</h3>
                <p className="mt-2 text-sm text-gray-500">{offer.type} - {offer.area}</p>
            </div>

            <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100">
                <img src={offer.image} alt={offer.name} className="object-cover object-center" />
            </div>
        </div>
      ))}
    </Section>
  )
}
