import './App.css'
import { About } from './components/About'
import { ContactBanner } from './components/ContactBanner'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Plans } from './components/Plans'
import { Services } from './components/Services'

function App() {
  return (
    <div className="site-shell">
      <Header />
      <main>
        <Hero />
        <Services />
        <Plans />
        <About />
        <ContactBanner />
      </main>
      <Footer />
    </div>
  )
}

export default App
