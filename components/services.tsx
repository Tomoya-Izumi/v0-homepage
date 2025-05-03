import { ArrowRight } from "lucide-react"

export default function Services() {
  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">サービス導入フロー</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* ラボオートメーション */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-6">ラボオートメーション</h3>
            <div className="flex items-center mb-4">
              <ArrowRight className="h-5 w-5 text-emerald-600 mr-2 flex-shrink-0" />
              <div className="flex items-center">
                <span className="font-medium mr-2">ヒアリング</span>
                <ArrowRight className="h-4 w-4 text-gray-400 mx-2" />
                <span className="font-medium mr-2">実地調査</span>
                <ArrowRight className="h-4 w-4 text-gray-400 mx-2" />
                <span className="font-medium mr-2">HW選定 & レイアウト設計</span>
                <ArrowRight className="h-4 w-4 text-gray-400 mx-2" />
                <span className="font-medium">開発 / 導入</span>
              </div>
            </div>
          </div>

          {/* AI 受託開発 */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-6">AI 受託開発</h3>
            <div className="flex items-center mb-4">
              <ArrowRight className="h-5 w-5 text-emerald-600 mr-2 flex-shrink-0" />
              <div className="flex items-center">
                <span className="font-medium mr-2">ヒアリング</span>
                <ArrowRight className="h-4 w-4 text-gray-400 mx-2" />
                <span className="font-medium mr-2">課題整理・要件定義</span>
                <ArrowRight className="h-4 w-4 text-gray-400 mx-2" />
                <span className="font-medium mr-2">PoC</span>
                <ArrowRight className="h-4 w-4 text-gray-400 mx-2" />
                <span className="font-medium mr-2">性能確認</span>
                <ArrowRight className="h-4 w-4 text-gray-400 mx-2" />
                <span className="font-medium">本開発</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
