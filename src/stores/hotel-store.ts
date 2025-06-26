import { makeAutoObservable, runInAction } from 'mobx'
import { fetchHotels } from '@/api'
import type { Hotel } from '@/types'

class HotelStore {
  hotels: Hotel[] = []
  filteredHotels: Hotel[] = []
  selectedHotel: Hotel | null = null
  loading = false
  error: string | null = null

  constructor() {
    makeAutoObservable(this)
  }

  async loadHotels() {
    this.loading = true
    try {
      const data = await fetchHotels()
      runInAction(() => {
        this.hotels = data
        this.filteredHotels = data
        this.loading = false
      })
    } catch {
      runInAction(() => {
        this.error = 'Failed to select hotel'
        this.loading = false
      })
    }
  }

  searchHotels(query: string) {
    if (!query.trim()) {
      this.filteredHotels = this.hotels
      return
    }

    const lowerQuery = query.toLowerCase()
    this.filteredHotels = this.hotels.filter(
      hotel =>
        hotel.name.toLowerCase().includes(lowerQuery) ||
        hotel.location.toLowerCase().includes(lowerQuery)
    )
  }

  async selectHotel(id: string) {
    this.loading = true
    try {
      const hotel = this.hotels.find(h => h.id === id) || null

      runInAction(() => {
        this.selectedHotel = hotel
        this.loading = false
      })
    } catch {
      runInAction(() => {
        this.error = 'Failed to select hotel'
        this.loading = false
      })
    }
  }

  clearSelectedHotel() {
    this.selectedHotel = null
  }
}

export const hotelStore = new HotelStore()
