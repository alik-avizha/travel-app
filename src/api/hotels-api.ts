import type { Hotel } from '@/types'
import { BASE_URL } from '@/constants'

export async function fetchHotels(): Promise<Hotel[]> {
  try {
    const response = await fetch(`${BASE_URL}/hotels`)

    if (!response.ok) {
      throw new Error(`Ошибка сети: ${response.status}`)
    }

    return (await response.json()) as Hotel[]
  } catch (error) {
    console.error('Ошибка при запросе отелей:', error)

    return []
  }
}
