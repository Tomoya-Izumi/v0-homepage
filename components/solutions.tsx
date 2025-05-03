"use client"
import { SplineIcon as BezierCurve, Dna, ArrowRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function Solutions() {
  return (
    <section id="solutions" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">提供ソリューション</h2>

        <div className="max-w-4xl mx-auto space-y-16">
          {/* ラボオートメーション受託 */}
          <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <BezierCurve className="h-10 w-10 text-emerald-600 mr-4 flex-shrink-0" />
                <h3 className="text-2xl font-semibold">ラボオートメーション受託</h3>
              </div>

              <h4 className="text-xl font-medium mb-4">研究フローに合わせた"カスタム自動化"をワンストップで</h4>

              <p className="text-gray-700 mb-8">
                エッジ＋LLM制御／ロボット選定／レイアウト最適化まで一貫支援。既存装置を流用し、予算・スペースにフィットした自動化ラインを設計・実装します。
              </p>

              <div className="mt-8 border-t pt-6">
                <h5 className="text-lg font-medium mb-4">サービス導入フローの例</h5>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="font-medium px-3 py-1 bg-emerald-100 text-emerald-800 rounded-full">ヒアリング</span>
                  <ArrowRight className="h-4 w-4 text-gray-400" />
                  <span className="font-medium px-3 py-1 bg-emerald-100 text-emerald-800 rounded-full">実地調査</span>
                  <ArrowRight className="h-4 w-4 text-gray-400" />
                  <span className="font-medium px-3 py-1 bg-emerald-100 text-emerald-800 rounded-full">
                    HW選定 & レイアウト設計
                  </span>
                  <ArrowRight className="h-4 w-4 text-gray-400" />
                  <span className="font-medium px-3 py-1 bg-emerald-100 text-emerald-800 rounded-full">
                    開発 / 導入
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* 化学・材料科学特化 AI 受託開発 */}
          <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <Dna className="h-10 w-10 text-emerald-600 mr-4 flex-shrink-0" />
                <h3 className="text-2xl font-semibold">化学・材料科学特化 AI 受託開発</h3>
              </div>

              <h4 className="text-xl font-medium mb-4">実験データ整備から RAG/MI モデル開発まで</h4>

              <p className="text-gray-700 mb-8">
                GPTでデータを構造化し、社内RAG・マテリアルズインフォマティクス環境を短期間で立ち上げ。ドメイン知識 × AI
                で研究効率を最大化します。
              </p>

              <div className="mt-8 border-t pt-6">
                <h5 className="text-lg font-medium mb-4">サービス導入フローの例</h5>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="font-medium px-3 py-1 bg-emerald-100 text-emerald-800 rounded-full">ヒアリング</span>
                  <ArrowRight className="h-4 w-4 text-gray-400" />
                  <span className="font-medium px-3 py-1 bg-emerald-100 text-emerald-800 rounded-full">
                    課題整理・要件定義
                  </span>
                  <ArrowRight className="h-4 w-4 text-gray-400" />
                  <span className="font-medium px-3 py-1 bg-emerald-100 text-emerald-800 rounded-full">PoC</span>
                  <ArrowRight className="h-4 w-4 text-gray-400" />
                  <span className="font-medium px-3 py-1 bg-emerald-100 text-emerald-800 rounded-full">性能確認</span>
                  <ArrowRight className="h-4 w-4 text-gray-400" />
                  <span className="font-medium px-3 py-1 bg-emerald-100 text-emerald-800 rounded-full">本開発</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
