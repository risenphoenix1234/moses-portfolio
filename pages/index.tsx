// pages/index.tsx
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Categories from '../components/Categories'
import HowItWorks from '../components/About'
import FreshListings from '../components/mydesign'
import Testimonials from '../components/Testimonials'
 
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Categories />
        <HowItWorks />
        <FreshListings />
        <Testimonials />
    
      </main>
      <Footer />
    </>
  )
}