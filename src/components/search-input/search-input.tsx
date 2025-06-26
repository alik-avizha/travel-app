import { SearchIcon } from '@/assets'
import { hotelStore } from '@/stores'
import { type ChangeEvent, useState } from 'react'

export const SearchInput = () => {
  const [query, setQuery] = useState('')

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setQuery(value)
    hotelStore.searchHotels(value)
  }

  return (
    <div className="relative w-[300px]">
      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none  h-[46px]">
        <SearchIcon className="w-4 h-4 text-gray-400" />
      </div>
      <input
        type="text"
        placeholder="Search hotels..."
        value={query}
        onChange={handleChange}
        className="
          rounded-2xl
          px-4
          pl-10
          py-2
          border-[1px]
          border-white
          h-[46px]
          w-full
          font-normal
          text-[13px]
          leading-[132%]
          tracking-[3%]
          text-black
        "
      />
    </div>
  )
}
