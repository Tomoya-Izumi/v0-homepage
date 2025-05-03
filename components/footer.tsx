import Link from "next/link"
import { Linkedin, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">株式会社KIBAN</h3>
            <p className="text-gray-400 mb-2">〒152-0002</p>
            <p className="text-gray-400 mb-2">東京都渋谷区渋谷2-19-15 宮益坂ビルディング609</p>
            <p className="text-gray-400">設立：2025年2月</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">リンク</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#vision" className="text-gray-400 hover:text-white transition-colors">
                  Vision
                </Link>
              </li>
              <li>
                <Link href="#solutions" className="text-gray-400 hover:text-white transition-colors">
                  Solutions
                </Link>
              </li>
              <li>
                <Link href="#technology" className="text-gray-400 hover:text-white transition-colors">
                  Technology
                </Link>
              </li>
              <li>
                <Link href="#team" className="text-gray-400 hover:text-white transition-colors">
                  Team
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">その他</h3>
            <div className="mt-8">
              <Link href="/privacy-policy" className="text-gray-400 hover:text-white transition-colors">
                プライバシーポリシー
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500">
          <p>© 2025 KIBAN, Inc.</p>
        </div>
      </div>
    </footer>
  )
}
