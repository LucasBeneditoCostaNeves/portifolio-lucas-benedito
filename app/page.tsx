import { Nav } from '@/components/Nav'
import { Hero } from '@/components/sections/Hero'
import { About } from '@/components/sections/About'
import { Skills } from '@/components/sections/Skills'
import { Experience } from '@/components/sections/Experience'
import { Education } from '@/components/sections/Education'
import { Recognitions } from '@/components/sections/Recognitions'
import { Contact } from '@/components/sections/Contact'
import { Footer } from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Education />
        <Recognitions />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
