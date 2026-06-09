// pages/index.tsx
import Navbar from '../../components/Navbar'
 
import Testimonials from './Testimonials'

 
 
import Footer from './Footer'
import LogaDash from './LogaDash'
import ProjectsSection from './ProjectsSection'
 

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
     <LogaDash/>
      <ProjectsSection/>
         <Testimonials />
        
    
    
      </main>
      <Footer />
    </>
  )
}