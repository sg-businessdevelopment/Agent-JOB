"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Users, FileText, BarChart3, Settings, HelpCircle, Layout } from 'lucide-react'
import Header from "@/components/custom/Header"
import Sidebar from "@/components/custom/Sidebar"

const navigationItems = [
  { title: "スカウト管理", icon: Users, url: "/scout", isActive: false },
  { title: "レポート", icon: FileText, url: "/reports", isActive: false },
  { title: "分析", icon: BarChart3, url: "/analytics", isActive: false },
  { title: "UXラボ", icon: Layout, url: "/ux-lab/dashboard", isActive: true },
  { title: "設定", icon: Settings, url: "/settings", isActive: false },
  { title: "ヘルプ", icon: HelpCircle, url: "/help", isActive: false },
]

export default function NewPage() {
  return (
    <div 
      className="min-h-screen relative bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/images/background.jpeg')"
      }}
    >
      <Header 
        navigationItems={navigationItems}
        currentPageTitle="新規画面"
      />

      <Sidebar navigationItems={navigationItems} />

      {/* Main Content */}
      <main className="ml-32 max-w-7xl py-6 px-6 min-h-screen overflow-y-auto relative z-10 mt-16">
        <div className="mb-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">ページタイトル</h1>
              <p className="text-gray-600 mt-1">テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
