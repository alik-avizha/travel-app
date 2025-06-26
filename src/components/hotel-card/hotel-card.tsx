import { Link } from 'react-router-dom'
import type { Hotel } from '@/types'

type Props = {
  hotel: Hotel
}

export function HotelCard({
  hotel: { image, name, location, reviews, price, id, rating },
}: Props) {
  return (
    <div className="bg-white rounded-xl shadow p-4 flex flex-col items-center transition hover:scale-105">
      <img
        src={image}
        alt={name}
        className="w-32 h-32 object-cover rounded-lg mb-2"
      />
      <h3 className="font-semibold text-lg">{name}</h3>
      <p className="text-gray-500 text-sm mb-2">{location}</p>
      <div className="flex items-center mb-2">
        <span className="text-yellow-400 mr-1">★</span>
        <span>{rating}</span>
        <span className="text-gray-400 ml-2">({reviews})</span>
      </div>
      <div className="font-bold text-xl mb-2">${price}</div>
      <Link
        to={`/hotels/${id}`}
        className="bg-orange-500 text-white px-4 py-1 rounded hover:bg-orange-600 transition"
      >
        Подробнее
      </Link>
    </div>
  )
}
