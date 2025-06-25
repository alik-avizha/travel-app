import type { Hotel } from '@/types/hotel.ts'

export async function fetchHotels(): Promise<Hotel[]> {
  try {
    const response = await fetch('https://travel-api-node-js.vercel.app/hotels')
    if (!response.ok) {
      throw new Error(`Ошибка сети: ${response.status}`)
    }
    return (await response.json()) as Hotel[]
  } catch (error) {
    console.error('Ошибка при запросе отелей:', error)
    return []
  }
}
