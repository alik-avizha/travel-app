import { useParams, Link } from 'react-router-dom'
import { useEffect } from 'react'
import { observer } from 'mobx-react-lite'
import { hotelStore } from '@/stores'

export const HotelDetails = observer(() => {
  const { id } = useParams<{ id: string }>()

  useEffect(() => {
    if (id) hotelStore.selectHotel(id)
    return () => hotelStore.clearSelectedHotel()
  }, [id])

  const hotel = hotelStore.selectedHotel
  if (hotelStore.loading) return <div>Загрузка...</div>
  if (!hotel) return <div>Отель не найден</div>

  return (
    <div className="p-8 flex-1">
      <Link to="/hotels" className="text-orange-500 mb-4 inline-block">
        ← Назад к списку
      </Link>
      <div className="flex flex-col md:flex-row gap-8">
        <img
          src={hotel.image}
          alt={hotel.name}
          className="w-full md:w-1/2 rounded-xl object-cover"
        />
        <div>
          <h1 className="text-3xl font-bold mb-2">{hotel.name}</h1>
          <p className="text-gray-500 mb-2">{hotel.location}</p>
          <div className="flex items-center mb-4">
            <span className="text-yellow-400 mr-1">★</span>
            <span>{hotel.rating}</span>
            <span className="text-gray-400 ml-2">
              ({hotel.reviews} reviews)
            </span>
          </div>
          <div className="font-bold text-2xl mb-4">${hotel.price}</div>
          <p className="mb-4">{hotel.description}</p>
        </div>
      </div>
    </div>
  )
})
