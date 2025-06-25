import { useEffect } from 'react'
import { HotelList } from '@/components/hotel-list/hotel-list.tsx'
import { observer } from 'mobx-react-lite'
import { hotelStore } from '@/stores/hotel-store.ts'
import { SearchInput } from '@/components/search-input/search-input.tsx'

export const Home = observer(() => {
  useEffect(() => {
    hotelStore.loadHotels()
  }, [])

  return (
    <div className="p-8 flex-1">
      <div className="flex justify-between mb-10">
        <div>
          <h1 className="text-2xl font-bold">Welcome 👋</h1>
          <p className="text-gray-500">Discover your perfect hotel</p>
        </div>
        <SearchInput />
      </div>

      <div className="mb-8">
        <img
          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80"
          className="rounded-xl w-full h-40 object-cover"
          alt="Banner"
        />
      </div>
      <h2 className="text-xl font-semibold mb-4">Popular Hotels</h2>
      <HotelList />
    </div>
  )
})
