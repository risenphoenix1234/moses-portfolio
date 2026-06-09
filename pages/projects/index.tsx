import Mainprojects from './Mainprojects'
import Navbar from '../../components/Navbar'
import Footer from './Footer'
import Testimonials from './Testimonials'

export default function Projects() {
  return (
    <>
      <Navbar />
      <main>
        <Mainprojects />
        <Testimonials />
      </main>
      <Footer />
    </>
  )
}