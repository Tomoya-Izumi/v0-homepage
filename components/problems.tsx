import { Book, Repeat, Cpu, Grid } from "lucide-react"

export default function Problems() {
  return (
    <section id="problems" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">我々が取り組む業界の課題</h2>

        <div className="max-w-5xl mx-auto">
          {/* 課題1: データ管理の問題 */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold mb-6 text-center">
              1. 社内の研究データの規格化やデータベースの整備がされていない
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100">
                <div className="flex flex-col items-center text-center">
                  <Book className="h-10 w-10 text-red-500 mb-4" />
                  <h4 className="text-xl font-semibold mb-3">紙ノート・散在データ</h4>
                  <p className="text-gray-600">実験ノートが紙・Excelのまま。形式がバラバラで再利用不能。</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100">
                <div className="flex flex-col items-center text-center">
                  <Repeat className="h-10 w-10 text-red-500 mb-4" />
                  <h4 className="text-xl font-semibold mb-3">データ連携の欠如</h4>
                  <p className="text-gray-600">
                    ラボデータがプラントに継承されず、スケールアップで手戻り。パイロットスケールや量産時に失敗する。
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* 課題2: ラボオートメーションの問題 */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-center">2. ラボオートメーションの開発コストが高い</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100">
                <div className="flex flex-col items-center text-center">
                  <Cpu className="h-10 w-10 text-red-500 mb-4" />
                  <h4 className="text-xl font-semibold mb-3">既存装置の繋ぎ込みが難しい</h4>
                  <p className="text-gray-600">既存装置ごとに制御プログラムを開発し、コストと納期が膨張。</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100">
                <div className="flex flex-col items-center text-center">
                  <Grid className="h-10 w-10 text-red-500 mb-4" />
                  <h4 className="text-xl font-semibold mb-3">レイアウト設計に手間がかかる</h4>
                  <p className="text-gray-600">機器配置・動線・干渉を人手で試行錯誤。設計だけで数か月。</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
