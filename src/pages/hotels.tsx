import { useEffect } from 'react'
import { observer } from 'mobx-react-lite'
import { HotelList } from '@/components/hotel-list/hotel-list.tsx'
import { hotelStore } from '@/stores/hotel-store.ts'

export const Hotels = observer(() => {
  useEffect(() => {
    hotelStore.loadHotels()
  }, [])

  return (
    <div className="p-8 flex-1">
      <h2 className="text-xl font-semibold mb-4">All Hotels</h2>
      <HotelList />
    </div>
  )
})
