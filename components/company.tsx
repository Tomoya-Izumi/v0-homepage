export default function Company() {
  return (
    <section id="company" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">会社概要</h2>

        <div className="max-w-3xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 border-b border-gray-200 py-4">
            <div className="font-semibold text-gray-700">会社名</div>
            <div className="md:col-span-3">株式会社 KIBAN</div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 border-b border-gray-200 py-4">
            <div className="font-semibold text-gray-700">所在地</div>
            <div className="md:col-span-3">〒152-0002 東京都渋谷区渋谷2-19-15 宮益坂ビルディング609</div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 border-b border-gray-200 py-4">
            <div className="font-semibold text-gray-700">代表者</div>
            <div className="md:col-span-3">代表取締役 和泉智也</div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 border-b border-gray-200 py-4">
            <div className="font-semibold text-gray-700">設立</div>
            <div className="md:col-span-3">2026年2月</div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 py-4">
            <div className="font-semibold text-gray-700">事業内容</div>
            <div className="md:col-span-3">
              <ul className="list-disc list-inside space-y-2">
                <li>ラボオートメーション受託</li>
                <li>化学・材料科学特化 AI 受託開発</li>
                <li>研究開発 DX コンサルティング</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
