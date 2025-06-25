import { observer } from 'mobx-react-lite'
import { HotelCard } from '@/components/hotel-card/hotel-card.tsx'
import { hotelStore } from '@/stores/hotel-store.ts'

export const HotelList = observer(() => {
  if (hotelStore.loading) return <div>Загрузка...</div>
  if (hotelStore.error) return <div>{hotelStore.error}</div>

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {hotelStore.hotels.slice(0, 16).map(hotel => (
        <HotelCard key={hotel.id} hotel={hotel} />
      ))}
    </div>
  )
})
