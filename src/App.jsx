import { ThemeProvider } from './context/ThemeContext'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import ExperienceTimeline from './components/ExperienceTimeline'
import FeaturedWork from './components/FeaturedWork'
import Skills from './components/Skills'
import ContactCTA from './components/ContactCTA'
import Footer from './components/Footer'

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-bg text-text-primary">
        <Header />
        <main>
          <Hero />
          <About />
          <ExperienceTimeline />
          <FeaturedWork />
          <Skills />
        </main>
        <Footer />
        <ContactCTA />
      </div>
    </ThemeProvider>
  )
}

export default App
