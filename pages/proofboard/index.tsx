// pages/index.tsx
import Navbar from '../../components/Navbar'
 
import Testimonials from './Testimonials'

 import ProjectsSection from './ProjectsSection'
 
import Footer from './Footer'
import LogaDash from './LogaDash'
 

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