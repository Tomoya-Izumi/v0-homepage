import { UserCircle, GraduationCap } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const teamMembers = [
  {
    image: "/placeholder.svg?height=300&width=300",
    name: "CEO / 飯田 夏生",
    description: "東京大学情報理工学系研究科所属。ソフトウェアエンジニアに従事後、2023年にAIスタートアップを創業。会社経営・ソフトウェア開発・上場企業とのAI開発の推進などをこれまで経験。2025年にKIBANを創業。",
    icon: <UserCircle className="h-5 w-5 text-emerald-600" />,
  },
  {
    image: "/placeholder.svg?height=300&width=300",
    name: "氏名",
    description: "有機合成×データサイエンスの研究者",
    icon: <GraduationCap className="h-5 w-5 text-emerald-600" />,
  },
  // {
  //   image: "/placeholder.svg?height=300&width=300",
  //   name: "顧問 / 東京大学 教授",
  //   description: "ラボオートメーション研究 20年",
  //   icon: <GraduationCap className="h-5 w-5 text-emerald-600" />,
  // },
]

export default function Team() {
  return (
    <section id="team" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">チーム</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {teamMembers.map((member, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="aspect-square w-full overflow-hidden bg-gray-100">
                <img
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center mb-2">
                  {member.icon}
                  <h3 className="text-xl font-semibold ml-2">{member.name}</h3>
                </div>
                <p className="text-gray-700">{member.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
