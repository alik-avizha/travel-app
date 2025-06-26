import { observer } from 'mobx-react-lite'
import { hotelStore } from '@/stores'
import { HotelCard } from '@/components/hotel-card'
import { MAX_HOTELS_COUNT } from '@/constants'

export const HotelList = observer(() => {
  if (hotelStore.loading) return <div>Загрузка...</div>
  if (hotelStore.error) return <div>{hotelStore.error}</div>

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {hotelStore.filteredHotels.slice(0, MAX_HOTELS_COUNT).map(hotel => (
        <HotelCard key={hotel.id} hotel={hotel} />
      ))}
    </div>
  )
})
