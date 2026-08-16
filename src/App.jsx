import { ThemeProvider } from './context/ThemeContext'
import SmoothScroll from './components/SmoothScroll'
import Header from './components/Header'
import Hero from './components/Hero'
import FeaturedWork from './components/FeaturedWork'
import Playground from './components/Playground'
import About from './components/About'
import ExperienceTimeline from './components/ExperienceTimeline'
import Skills from './components/Skills'
import ContactCTA from './components/ContactCTA'
import Footer from './components/Footer'

function App() {
  return (
    <ThemeProvider>
      <SmoothScroll />
      <div className="min-h-screen bg-bg text-text-primary">
        <Header />
        <main>
          <Hero />
          <FeaturedWork />
          <Playground />
          <About />
          <ExperienceTimeline />
          <Skills />
        </main>
        <Footer />
        <ContactCTA />
      </div>
    </ThemeProvider>
  )
}

export default App
