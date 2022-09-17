import Navbar from "./components/Navbar"
import Home from "./components/Home"
import Education from "./components/Education"
import Contact from "./components/Contact"
import Work from "./components/Work"
import Footer from "./components/Footer"
import Skills from "./components/skills"
import About from "./components/About"

function App() {
  return (
    <div className="flex flex-col space-y-2">

      <Navbar />
      <Home />
      <About/>
      <Education />
      <Work />
      <Skills/>
      <Contact />
      <Footer/>
    

    </div>
  );
}

export default App;
