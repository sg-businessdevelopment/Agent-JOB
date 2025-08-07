"use client"

import { type LucideIcon } from 'lucide-react'

interface NavigationItem {
  title: string
  icon: LucideIcon
  url: string
  isActive: boolean
}

interface SidebarProps {
  navigationItems: NavigationItem[]
}

export default function Sidebar({ navigationItems }: SidebarProps) {
  return (
    <div
      className="fixed left-5 top-6 z-40 rounded-[24px] w-20 pb-[116px] h-fit pt-[116px] my-0 mt-20"
      style={{
        background: "linear-gradient(179deg, #56C2FF 0.26%, #0B40DD 99.76%)",
        boxShadow: "0px 24px 32px -16px rgba(34, 78, 195, 0.60)",
      }}
    >
      <div className="p-3">
        <nav className="space-y-3">
          {navigationItems.map((item) => (
            <div key={item.title} className="relative group">
              <button
                className={
                  item.isActive
                    ? "w-14 h-14 shrink-0 bg-white border-0 justify-center transition-all duration-200 leading-7 mx-0 rounded-3xl flex items-center hover:bg-white/90"
                    : "w-14 h-14 shrink-0 hover:bg-white/20 text-white border-0 justify-center transition-all duration-200 leading-7 mx-0 rounded-3xl flex items-center"
                }
                style={{
                  color: item.isActive ? "#0040FF" : "white",
                }}
                title={item.title}
                onClick={() => window.location.href = item.url}
              >
                <item.icon className="flex justify-center items-center gap-[11px] shrink-0 size-[30px] w-6" />
              </button>
              <div className="absolute left-full ml-2 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-50">
                {item.title}
              </div>
            </div>
          ))}
        </nav>
      </div>
    </div>
  )
}
