"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Menu, Bell, MoreVertical } from 'lucide-react'

interface NavigationItem {
  title: string
  url: string
  isActive: boolean
}

interface HeaderProps {
  navigationItems: NavigationItem[]
  currentPageTitle?: string
  logoSrc?: string
  logoAlt?: string
  userName?: string
  userRole?: string
  userAvatar?: string
  notificationCount?: number
}

export default function Header({
  navigationItems,
  currentPageTitle = "新規画面",
  logoSrc = "/images/logo.png",
  logoAlt = "イサイエージェント",
  userName = "テスト太郎",
  userRole = "作業社1",
  userAvatar = "/placeholder.svg?height=32&width=32",
  notificationCount = 1
}: HeaderProps) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex h-16 items-center justify-between border-b bg-white rounded-bl-[24px] px-4 sm:px-6 overflow-hidden ml-5">
      <div className="flex items-center gap-4 relative z-10">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="p-0 w-80">
            <div className="p-4">
              <div className="text-2xl font-bold text-gray-800 mb-6">{logoAlt}</div>
              <nav className="space-y-2">
                {navigationItems.map((item) => (
                  <a
                    key={item.title}
                    href={item.url}
                    className={`block px-3 py-2 rounded-md hover:bg-gray-100 ${
                      item.isActive ? "text-blue-600 font-medium" : ""
                    }`}
                  >
                    {item.title}
                  </a>
                ))}
              </nav>
            </div>
          </SheetContent>
        </Sheet>
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <img src={logoSrc || "/placeholder.svg"} alt={logoAlt} className="h-8 w-auto" />
          </div>
          <nav className="hidden lg:flex items-center gap-6 bg-slate-50 rounded-full px-3 py-1">
            <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors text-sm">
              Home
            </a>
            <a href="#" className="text-blue-600 font-medium text-sm">
              {currentPageTitle}
            </a>
          </nav>
        </div>
      </div>
      <div className="flex items-center gap-2 sm:gap-4">
        <Button variant="ghost" size="sm" className="text-gray-600 hidden sm:flex">
          設定
        </Button>
        <Button variant="ghost" size="icon" className="relative">
          <Bell className="h-5 w-5" />
          {notificationCount > 0 && (
            <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center text-xs bg-red-500">
              {notificationCount}
            </Badge>
          )}
        </Button>
        <div className="flex items-center gap-2">
          <div className="text-right hidden sm:block">
            <div className="text-sm font-medium">{userName}</div>
            <div className="text-xs text-gray-500">{userRole}</div>
          </div>
          <Avatar className="h-8 w-8">
            <AvatarImage src={userAvatar || "/placeholder.svg"} />
            <AvatarFallback>{userName.charAt(0)}</AvatarFallback>
          </Avatar>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon">
              <MoreVertical className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>プロフィール</DropdownMenuItem>
            <DropdownMenuItem>設定</DropdownMenuItem>
            <DropdownMenuItem>ログアウト</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  )
}
