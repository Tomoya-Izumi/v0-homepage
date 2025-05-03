"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MailIcon, PlaneIcon as PaperPlaneIcon } from "lucide-react"

export default function Contact() {
  const [formState, setFormState] = useState({
    company: "",
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // ここで実際のフォーム送信処理を行う
    // 例: await fetch('/api/contact', { method: 'POST', body: JSON.stringify(formState) })

    // 送信完了を模擬（実際の実装では適切なエラーハンドリングを行う）
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormState({
        company: "",
        name: "",
        email: "",
        phone: "",
        message: "",
      })
    }, 1000)
  }

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center mb-6">
          <MailIcon className="h-8 w-8 text-emerald-600 mr-3" />
          <h2 className="text-3xl md:text-4xl font-bold text-center">お問い合わせ</h2>
        </div>

        <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          フォームまたはメールでお気軽にご連絡ください。<strong>3営業日以内に返信し、オンラインでヒアリング</strong>
          させていただきます。
        </p>

        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-8">
          {isSubmitted ? (
            <div className="text-center py-8">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mb-4">
                <PaperPlaneIcon className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-semibold mb-2">お問い合わせありがとうございます</h3>
              <p className="text-gray-600">3営業日以内にご返信いたします。</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                    会社名
                  </label>
                  <Input id="company" name="company" value={formState.company} onChange={handleChange} required />
                </div>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    ご担当者
                  </label>
                  <Input id="name" name="name" value={formState.name} onChange={handleChange} required />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    メール
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formState.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    電話（任意）
                  </label>
                  <Input id="phone" name="phone" type="tel" value={formState.phone} onChange={handleChange} />
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  お問い合わせ内容（300字以内）
                </label>
                <Textarea
                  id="message"
                  name="message"
                  rows={5}
                  maxLength={300}
                  value={formState.message}
                  onChange={handleChange}
                  required
                  className="resize-none"
                />
              </div>

              <div className="text-center">
                <Button type="submit" disabled={isSubmitting} className="px-8 py-2 bg-emerald-600 hover:bg-emerald-700">
                  <PaperPlaneIcon className="h-4 w-4 mr-2" />
                  送信する
                </Button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
