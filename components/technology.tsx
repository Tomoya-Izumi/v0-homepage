"use client"

import { useState } from "react"
import { Cpu, SquareIcon as VectorSquare, Database, X } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "@/components/ui/dialog"

type Technology = {
  id: string
  icon: React.ReactNode
  title: string
  description: string
  image: string
  details: {
    title: string
    description: string
    features: string[]
  }
}

const technologies: Technology[] = [
  {
    id: "edge-llm",
    icon: <Cpu className="h-8 w-8 text-emerald-600" />,
    title: "エッジデバイス + LLM 装置制御コマンド生成",
    description: "多様な実験機器に対応したエッジデバイスと LLM による装置コマンドを⾃動生成で〈開発中〉",
    image: "/edge-device.png?height=400&width=600",
    details: {
      title: "Edge + LLM 制御システム",
      description:
        "実験機器の多様なインターフェースを統一的に制御するためのエッジコンピューティングプラットフォームです。Raspberry Piをベースとした低コストなハードウェアで、RS-232、USB、Ethernet、GPIOなど様々な接続方式に対応します。大規模言語モデル（LLM）を活用して、機器固有のコマンドを自動生成し、異なるメーカーの装置間でもシームレスな連携を実現します。",
      features: [
        "多様なインターフェース（RS-232、USB、Ethernet、GPIO）に対応",
        "LLMによる機器コマンド自動生成",
        "低コストなRaspberry Piベースのハードウェア",
        "クラウドとエッジの連携による柔軟な制御",
        "既存装置の流用による投資効率の最大化",
      ],
    },
  },
  {
    id: "3d-layout",
    icon: <VectorSquare className="h-8 w-8 text-emerald-600" />,
    title: "3Dモデルとレイアウト生成 + 動線最適化",
    description: "ラボ内の実験機器やロボット CAD を AI がインポートし、レイアウトを提案〈開発中〉",
    image: "/simulation.png?height=400&width=600",
    details: {
      title: "3Dレイアウト&動線最適化システム",
      description:
        "研究室や実験施設の3Dモデルを活用し、AIによる最適なレイアウト設計を提案するシステムです。既存のCADデータをインポートし、機器の配置、研究者の動線、安全性などを考慮した最適なレイアウトを数分で生成します。従来、数ヶ月かかっていた設計プロセスを大幅に短縮し、効率的な研究環境の構築を支援します。",
      features: [
        "既存CADデータのインポートと解析",
        "AIによる最適レイアウト生成（数分で完了）",
        "研究者の動線分析と最適化",
        "安全性と効率性の両立",
        "VRによるレイアウトの事前確認",
      ],
    },
  },
  {
    id: "gpt-parse",
    icon: <Database className="h-8 w-8 text-emerald-600" />,
    title: "生成AIによる実験ノートなどの研究データの構造化",
    description: "紙・Excel・画像を生成AIにより構造化を行う〈開発中〉",
    image: "/gpt-structured.png?height=400&width=600",
    details: {
      title: "GPTパース + NoSQLシステム",
      description:
        "非構造化データを構造化し、検索可能なデータベースに変換するシステムです。紙の実験ノート、Excel、画像などの多様なフォーマットから情報を抽出し、JSON形式で統一的に管理します。大規模言語モデルを活用して高精度なデータ抽出を行い、NoSQLデータベースに格納することで、柔軟な検索や可視化を可能にします。",
      features: [
        "多様なフォーマット（紙、Excel、画像）からのデータ抽出",
        "GPTによる高精度なテキスト解析",
        "JSON形式での統一的なデータ管理",
        "RESTful APIによる簡単なデータアクセス",
        "カスタマイズ可能な可視化ダッシュボード",
      ],
    },
  },
]

export default function Technology() {
  const [selectedTech, setSelectedTech] = useState<Technology | null>(null)

  return (
    <section id="technology" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">コアテクノロジー</h2>
        <p className="text-xl text-center text-gray-600 mb-16 max-w-3xl mx-auto">
          最先端の技術で研究開発プロセスを革新します
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {technologies.map((tech, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer h-full"
              onClick={() => setSelectedTech(tech)}
            >
              <div className="w-full h-64 overflow-hidden bg-gray-100">
                <img src={tech.image || "/placeholder.svg"} alt={tech.title} className="w-full h-full object-cover" />
              </div>
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  {tech.icon}
                  <h3 className="text-xl font-semibold ml-3">{tech.title}</h3>
                </div>
                <p className="text-gray-700 text-lg">{tech.description}</p>
                <div className="mt-6 text-emerald-600 font-medium">詳細を見る →</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {selectedTech && (
        <Dialog open={!!selectedTech} onOpenChange={() => setSelectedTech(null)}>
          <DialogContent className="sm:max-w-3xl">
            <DialogHeader>
              <DialogTitle className="flex items-center text-2xl">
                <div className="mr-2">{selectedTech.icon}</div>
                {selectedTech.details.title}
              </DialogTitle>
              <DialogClose className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
                <X className="h-4 w-4" />
                <span className="sr-only">Close</span>
              </DialogClose>
            </DialogHeader>
            <div className="mt-4">
              <div className="aspect-video w-full overflow-hidden bg-gray-100 rounded-md mb-6">
                <img
                  src={selectedTech.image || "/placeholder.svg"}
                  alt={selectedTech.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <DialogDescription className="text-base text-gray-700 mb-6">
                {selectedTech.details.description}
              </DialogDescription>
              <div>
                <h4 className="font-semibold text-lg mb-3">主な特徴</h4>
                <ul className="space-y-2">
                  {selectedTech.details.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 mr-2 text-xs">
                        {idx + 1}
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </section>
  )
}
