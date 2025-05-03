import Hero from "@/components/hero"
import Vision from "@/components/vision"
import Problems from "@/components/problems"
import Solutions from "@/components/solutions"
import Technology from "@/components/technology"
import Team from "@/components/team"
import Company from "@/components/company"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Vision />
      <Problems />
      <Solutions />
      <Technology />
      <Team />
      <Company />
      <Contact />
      <Footer />
    </main>
  )
}
