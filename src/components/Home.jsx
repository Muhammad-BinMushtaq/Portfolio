
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
      <Projects />
      <section id="projects"><ProjectsDetails /></section>
      <section id="about"><About /></section>
      <section id="techstack"><Techstack /></section>
      <section id="contact"><Contact/></section>
      <Footer/>

     





    </div>
  )
}

export default Home



