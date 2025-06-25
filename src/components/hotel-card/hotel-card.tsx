import { Link } from 'react-router-dom'
import type { Hotel } from '@/types/hotel.ts'

type Props = {
  hotel: Hotel
}

export function HotelCard({ hotel }: Props) {
  return (
    <div className="bg-white rounded-xl shadow p-4 flex flex-col items-center transition hover:scale-105">
      <img
        src={hotel.image}
        alt={hotel.name}
        className="w-32 h-32 object-cover rounded-lg mb-2"
      />
      <h3 className="font-semibold text-lg">{hotel.name}</h3>
      <p className="text-gray-500 text-sm mb-2">{hotel.location}</p>
      <div className="flex items-center mb-2">
        <span className="text-yellow-400 mr-1">★</span>
        <span>{hotel.rating}</span>
        <span className="text-gray-400 ml-2">({hotel.reviews})</span>
      </div>
      <div className="font-bold text-xl mb-2">${hotel.price}</div>
      <Link
        to={`/hotels/${hotel.id}`}
        className="bg-orange-500 text-white px-4 py-1 rounded hover:bg-orange-600 transition"
      >
        Подробнее
      </Link>
    </div>
  )
}
