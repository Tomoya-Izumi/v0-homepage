"use client"

import { useEffect, useState } from "react"
import { ArrowDown } from "lucide-react"

export default function Vision() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 },
    )

    const section = document.getElementById("vision")
    if (section) {
      observer.observe(section)
    }

    return () => {
      if (section) {
        observer.unobserve(section)
      }
    }
  }, [])

  return (
    <section id="vision" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Vision</h2>

        <div
          className={`max-w-5xl mx-auto transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* 背景 */}
          <div className="relative bg-white p-8 rounded-lg shadow-md mb-12">
            <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-emerald-600 text-white px-6 py-2 rounded-full text-lg font-semibold">
              背景
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-center pt-4">AI技術の進化と化学業界の変革</h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              マテリアルズインフォマティクスやAI創薬など、AI技術の進化は化学業界に大きな変革をもたらそうとしています。
              これらの技術は、新素材や新薬の発見を加速し、研究開発のプロセスを根本から変える可能性を秘めています。
            </p>
          </div>

          {/* 中央の矢印 */}
          <div className="flex justify-center mb-12">
            <ArrowDown className="h-12 w-12 text-emerald-600 animate-bounce" />
          </div>

          {/* 課題（障壁） */}
          <div className="relative bg-white p-8 rounded-lg shadow-md mb-12">
            <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-red-500 text-white px-6 py-2 rounded-full text-lg font-semibold">
              課題（障壁）
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-center pt-4">物理空間とデータ管理の2つの障壁</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
              <div className="border-l-4 border-red-500 pl-4">
                <h4 className="text-xl font-medium mb-2">物理空間での実験の遅さ</h4>
                <p className="text-gray-700">
                  どれだけAIが優れた予測をしても、実際の検証には時間がかかります。実験の自動化が進んでいないため、研究のボトルネックとなっています。
                </p>
              </div>

              <div className="border-l-4 border-red-500 pl-4">
                <h4 className="text-xl font-medium mb-2">整備されていないデータ管理</h4>
                <p className="text-gray-700">
                  過去の実験データが適切に構造化されていなければ、AIはその潜在能力を発揮できません。データの散在や非構造化が大きな障害となっています。
                </p>
              </div>
            </div>
          </div>

          {/* 中央の矢印 */}
          <div className="flex justify-center mb-12">
            <ArrowDown className="h-12 w-12 text-emerald-600 animate-bounce" />
          </div>

          {/* 解決アプローチ */}
          <div className="relative bg-white p-8 rounded-lg shadow-md">
            <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-emerald-600 text-white px-6 py-2 rounded-full text-lg font-semibold">
              解決アプローチ
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-center pt-4">KIBANの解決アプローチ</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
              <div className="bg-emerald-50 p-6 rounded-lg border-b-4 border-emerald-600 h-full flex flex-col justify-between">
                <div>
                  <h4 className="text-xl font-medium mb-4 text-center">実験機器制御・ロボティクス</h4>
                  <p className="text-gray-700 text-center">
                    実験の自動化によって物理的な検証を加速し、研究開発のスピードを向上させます。
                  </p>
                </div>
              </div>

              <div className="bg-emerald-50 p-6 rounded-lg border-b-4 border-emerald-600 h-full flex flex-col justify-between">
                <div>
                  <h4 className="text-xl font-medium mb-4 text-center">生成AI活用</h4>
                  <p className="text-gray-700 text-center">
                    既存データの構造化と活用を促進し、研究開発から製造までの一貫したデジタルトランスフォーメーションを実現します。
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 text-center">
              <p className="text-lg font-semibold text-emerald-700">
                化学産業におけるイノベーションの速度を劇的に向上させます
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
