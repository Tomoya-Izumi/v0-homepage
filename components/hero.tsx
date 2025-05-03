"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { FlaskRoundIcon as Flask, BotIcon as Robot } from "lucide-react"

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact")
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-16"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), url('/placeholder.svg?height=1080&width=1920')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        filter: "grayscale(100%)",
      }}
    >
      <div className="container mx-auto px-4 py-20" style={{ filter: "none" }}>
        <div
          className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
            物理世界にAIのイノベーションをもたらす。
          </h1>

          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            MI・AI創薬を真に機能させる DX 基盤の整備とラボオートメーションの壁を、私たちは一括で打破します。
          </p>

          <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-12">
            <div className="flex items-center gap-2 text-white">
              <Flask className="h-6 w-6 text-emerald-400" />
              <p className="text-lg">研究データを"生きた資産"に変える。</p>
            </div>
            <div className="flex items-center gap-2 text-white">
              <Robot className="h-6 w-6 text-emerald-400" />
              <p className="text-lg">多様な実験機器を AI で自律協調させる。</p>
            </div>
          </div>

          <div className="mt-10">
            <Button
              onClick={scrollToContact}
              size="lg"
              className="text-lg px-8 py-6 bg-emerald-600 hover:bg-emerald-700 text-white"
            >
              お問い合わせ（3営業日以内に返信）
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
