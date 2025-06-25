import type { Hotel } from '@/types/hotel.ts'
import { makeAutoObservable, runInAction } from 'mobx'
import { fetchHotels } from '@/api/hotels-api.ts'

class HotelStore {
  hotels: Hotel[] = []
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
        this.loading = false
      })
    } catch {
      runInAction(() => {
        this.error = 'Failed to select hotel'
        this.loading = false
      })
    }
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
