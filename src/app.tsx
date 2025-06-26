import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from '@/pages/home.tsx'
import { Hotels } from '@/pages/hotels.tsx'
import { HotelDetails } from '@/pages/hotel-details.tsx'
import { Sidebar } from '@/components/sidebar'
import { ErrorBoundary } from '@/components/error-boundary'

export default function App() {
  return (
    <BrowserRouter>
      <div className="flex h-screen bg-gray-100">
        <Sidebar />
        <ErrorBoundary>
          <div className="flex-1 overflow-auto">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/hotels" element={<Hotels />} />
              <Route path="/hotels/:id" element={<HotelDetails />} />
            </Routes>
          </div>
        </ErrorBoundary>
      </div>
    </BrowserRouter>
  )
}
