import { HomeIcon, HotelsIcon } from '@/assets'

export const BASE_URL = 'https://travel-api-node-js.vercel.app'

export const NAVIGATION_LINKS = [
  { to: '/', icon: HomeIcon, label: 'Home' },
  { to: '/hotels', icon: HotelsIcon, label: 'Hotels' },
]

export const MAX_HOTELS_COUNT = 16
