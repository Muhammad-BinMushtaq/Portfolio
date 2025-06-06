
import Navbar from './navbar'
import Hero from './hero'
import Projects from './projects'
import ProjectsDetails from './projectsDetails'
import About from './about'
import Techstack from './techstack'
import Contact from './contactForm'
import Footer from './footer'



const Home = () => {
  return (
    <div>

      <Navbar />
      <Hero />
      <Projects className='scroll-mt-30' />
      <section id="projects" ><ProjectsDetails /></section>
      <section id="about" className='scroll-mt-30'><About /></section>
      <section id="techstack" className='scroll-mt-30'><Techstack /></section>
      <section id="contact" className='scroll-mt-30'><Contact/></section>
      <Footer/>

     





    </div>
  )
}

export default Home



