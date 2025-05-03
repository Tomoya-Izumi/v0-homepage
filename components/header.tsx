"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact")
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" })
    }
    setIsOpen(false)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold">
            <Image src="/logo_black.png" alt="logo" width={120} height={80} />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#vision" className="text-gray-700 hover:text-gray-900">
              Vision
            </Link>
            <Link href="#problems" className="text-gray-700 hover:text-gray-900">
              Problems
            </Link>
            <Link href="#solutions" className="text-gray-700 hover:text-gray-900">
              Solutions
            </Link>
            <Link href="#technology" className="text-gray-700 hover:text-gray-900">
              Technology
            </Link>
            <Link href="#team" className="text-gray-700 hover:text-gray-900">
              Team
            </Link>
            <Button onClick={scrollToContact} variant="default" className="bg-emerald-600 hover:bg-emerald-700">
              お問い合わせ
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)} aria-label="メニュー">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link href="#vision" className="text-gray-700 hover:text-gray-900 py-2" onClick={() => setIsOpen(false)}>
              Vision
            </Link>
            <Link href="#problems" className="text-gray-700 hover:text-gray-900 py-2" onClick={() => setIsOpen(false)}>
              Problems
            </Link>
            <Link href="#solutions" className="text-gray-700 hover:text-gray-900 py-2" onClick={() => setIsOpen(false)}>
              Solutions
            </Link>
            <Link
              href="#technology"
              className="text-gray-700 hover:text-gray-900 py-2"
              onClick={() => setIsOpen(false)}
            >
              Technology
            </Link>
            <Link href="#team" className="text-gray-700 hover:text-gray-900 py-2" onClick={() => setIsOpen(false)}>
              Team
            </Link>
            <Button onClick={scrollToContact} variant="default" className="w-full bg-emerald-600 hover:bg-emerald-700">
              お問い合わせ
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
