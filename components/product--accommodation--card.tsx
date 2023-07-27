// ./components/product--accommodation--card.tsx

import Link from "next/link"
import Image from "next/image"

interface AccommodationProps {
  accommodation: {
    id: string,
    product_id: string,
    name: string,
    type: string,
    url: string,
    image: string,
    locality: string,
    area: string,
    location: string
  }
}

export function ProductAccommodationCard({ accommodation }: AccommodationProps) {
    console.log(accommodation); // Add this line

  const imageUrl = accommodation && accommodation.image ? process.env.NEXT_PUBLIC_DRUPAL_BASE_URL + accommodation.image : '';

  return (
    <div className="group relative">
        {imageUrl && (
            <div className="h-56 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:h-72 xl:h-80">
                <Image
                    src={imageUrl}
                    alt={accommodation.name}
                    width={688}
                    height={930}
                    className="h-full w-full object-cover object-center"
                />
            </div>
        )}
        <h4 className="mt-4 text-sm text-gray-700">
            <Link href={`/accommodation/${accommodation.id}`} passHref>
                <span className="absolute inset-0"></span>
                {accommodation.name}
            </Link>
        </h4>
        <p className="mt-1 text-sm text-gray-500">
            {accommodation.type}
        </p>
        <p className="mt-1 text-sm font-medium text-gray-900">
            {accommodation.location}
        </p>
    </div>
  )
}
