// pages/index.tsx
import Navbar from '../../components/Navbar'
import Hero from './Hero'
import Testimonials from './Testimonials'

 
 
import Footer from './Footer'
import AboutExtended from './AboutExtended'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <AboutExtended/>
         <Testimonials />
    
    
      </main>
      <Footer />
    </>
  )
}