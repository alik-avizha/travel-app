import { Link, useLocation } from 'react-router-dom'
import { NAVIGATION_LINKS } from '@/constants'

export function Sidebar() {
  const location = useLocation()

  return (
    <aside className="flex flex-col items-center py-10 px-4 rounded-tr-3xl rounded-br-3xl border-2 border-white  h-full min-w-[60px] shadow-md">
      <img src="/logo.png" alt="Logo" className="w-8 mb-20" />
      {NAVIGATION_LINKS.map(link => (
        <Link
          key={link.to}
          to={link.to}
          className={`mb-6 p-2 rounded-full ${
            location.pathname === link.to ? 'bg-black text-white' : 'text-black'
          }`}
        >
          {<link.icon />}
        </Link>
      ))}
    </aside>
  )
}
