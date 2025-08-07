"use client"

import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Palette, Component, Plus, BookOpen, Clock, ExternalLink, List } from 'lucide-react'

export default function Dashboard() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* ヘッダーセクション */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-foreground mb-4">UXラボ</h1>
        <p className="text-lg text-muted-foreground max-w-5xl mx-auto">
          UXデザイナーが効率的に作業できるように設計されたワークスペースです。
          <br />
          UIの試作・共有・運用ルールの確認をこの1箇所から行えます。
        </p>
      </div>

      {/* メインアクションカード */}
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* UI画面を作りたい */}
          <div className="flex flex-col justify-between rounded-lg border bg-card text-card-foreground shadow-sm">
            <div className="flex flex-col p-6 text-center pb-4">
              <div className="mx-auto mb-4 p-4 rounded-full w-fit bg-indigo-50">
                <List className="h-10 w-10 text-blue-500" />
              </div>
              <h3 className="text-2xl font-semibold leading-none tracking-tight mb-4">既存ページの一覧</h3>
              <p className="text-sm text-muted-foreground text-base text-left">
                すでに作成されたUI画面は以下のプロジェクトフォルダ内に格納されています。
                一覧から該当の画面を選んで、確認・編集・再利用にご活用ください。
              </p>
            </div>
            <div className="p-6 pt-0 space-y-4">
              <div className="space-y-2 mx-0 bg-gray-50 rounded-md px-4 py-3">
                <h4 className="font-medium text-sm text-muted-foreground">できること：</h4>
                <ul className="text-sm space-y-1 text-muted-foreground">
                  <li>• 新規ページの作成</li>
                  <li>• コンポーネントの組み合わせ</li>
                  <li>• レスポンシブデザインの実装</li>
                  <li>• インタラクティブな機能の追加</li>
                </ul>
              </div>
              <div className="space-y-3">
                <h4 className="font-medium text-sm text-muted-foreground">作成済みプロジェクトの画面一覧：</h4>
                <div className="grid gap-3">
                  <Link
                    href="/scout"
                    className="flex items-start gap-3 p-3 rounded-lg border border-gray-200 hover:border-blue-300 hover:bg-blue-50/50 transition-all group"
                  >
                    <div className="w-2 h-2 rounded-full bg-green-500 mt-2 flex-shrink-0"></div>
                    <div className="flex-1 min-w-0">
                      <div className="font-medium text-sm text-gray-900 group-hover:text-blue-700">スカウト管理システム</div>
                      <div className="text-xs text-gray-600 mt-1">求人候補者へのスカウト送信と管理、レポート機能</div>
                    </div>
                  </Link>

                  <Link
                    href="/new-page"
                    className="flex items-start gap-3 p-3 rounded-lg border border-gray-200 hover:border-blue-300 hover:bg-blue-50/50 transition-all group"
                  >
                    <div className="w-2 h-2 rounded-full bg-blue-500 mt-2 flex-shrink-0"></div>
                    <div className="flex-1 min-w-0">
                      <div className="font-medium text-sm text-gray-900 group-hover:text-blue-700">新規画面テンプレート</div>
                      <div className="text-xs text-gray-600 mt-1">UI画面作成のためのベーステンプレート、Header・Sidebar付き</div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* デザインシステムを確認したい */}
          <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
            <div className="flex flex-col space-y-1.5 p-6 text-center pb-4">
              <div className="mx-auto mb-4 p-4 rounded-full w-fit bg-indigo-50">
                <Palette className="h-10 w-10 text-blue-500" />
              </div>
              <h3 className="text-2xl font-semibold leading-none tracking-tight mb-4">デザインシステムを確認したい</h3>
              <p className="text-sm text-muted-foreground text-base text-left">
                現在のデザインシステムで使用できるUIコンポーネントやスタイルルールを確認するセクションです。
コンポーネントはshadcn/uiベースで管理し、カスタマイズされたものは design-system/components/ui にまとめています。
トークン類は design-tokens で視覚化されており、V0へのプロンプト設計にも活用できます。
              </p>
            </div>
            <div className="p-6 pt-0 space-y-4">
              <div className="space-y-2 px-4 py-3 bg-gray-50 rounded-md">
                <h4 className="font-medium text-sm text-muted-foreground">確認できるもの：</h4>
                <ul className="text-sm space-y-1 text-muted-foreground">
                  <li>• UIコンポーネント一覧</li>
                  <li>• カラーパレット・タイポグラフィ</li>
                  <li>• スペーシング・シャドウ</li>
                  <li>• 使用例とコードサンプル</li>
                </ul>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <Link
                  href="/ux-lab/design-system/components"
                  className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed h-[52px] px-12 gap-2 flex-shrink-0 bg-gradient-blue-primary text-primary-foreground shadow-blue-m rounded-s hover:opacity-90 hover:shadow-blue-m text-center"
                >
                  コンポーネント
                </Link>
                <Link
                  href="/ux-lab/design-system/designtokens"
                  className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed h-[52px] px-12 gap-2 flex-shrink-0 bg-gradient-blue-primary text-primary-foreground shadow-blue-m rounded-s hover:opacity-90 hover:shadow-blue-m text-center"
                >
                  デザイントークン
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* 追加情報セクション */}
        <div>

          {/* 使い方・ガイド */}
          <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
            <div className="flex flex-col space-y-1.5 p-6">
              <h3 className="text-lg font-semibold leading-none tracking-tight flex items-center">
                <BookOpen className="mr-2 h-5 w-5" />
                使い方ガイド
              </h3>
            </div>
            <div className="p-6 pt-0 space-y-3">
              <div className="space-y-2">
                <h4 className="font-medium text-m">UXデザイナー向け</h4>
                <p className="text-s text-muted-foreground mb-2">
                  V0を活用したUI試作からGitHubへの反映までのプロセス、および各種ルールのガイドラインをまとめています。
編集できる範囲や、shadcn/uiとの関係性などを明記しています。
詳細は別リポジトリで管理されている「UX運用ガイド」をご参照ください。
                </p>
              </div>

              <div className="p-4 bg-muted/50 rounded-lg">
                <h5 className="font-medium text-sm mb-2">許可されている編集範囲</h5>
                <ul className="text-xs text-muted-foreground space-y-1">
                  <li>• app/*/ ディレクトリ内の各ページやフロー（画面単位でのUI作成・検証用途）</li>
                  <li>• ページ単位の page.tsx、page.module.css（デザインや動作の確認・調整）</li>
                  <li>• 個別ページ用の補助コンポーネント（components/ 以下でページ専用に配置）</li>
                  <li>• design-system/ 以下のカスタムUIコンポーネント（shadcn/ui を拡張したもの）</li>
                  <li>※ 共通コンポーネントの追加や更新はルールに沿って行ってください</li>
                </ul>
              </div>

              <Link
                href="/ux-lab/guide"
                className="inline-flex items-center justify-center whitespace-nowrap text-m font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed h-[52px] gap-2 flex-shrink-0 text-primary underline-offset-4 bg-transparent hover:underline hover:text-primary/80 w-full justify-start px-0"
              >
                <ExternalLink className="mr-2 h-4 w-4" />
                詳細ガイドを見る
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
