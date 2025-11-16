import Navbar from "./components/Navbar";
import About from "./sections/About";
import Hero from "./sections/Hero";
import Tech from "./sections/Tech";
import Project from "./sections/Project";
import Contact from "./sections/Contact"; 


function App() {
  return (

    <div className="bg-primary relative z-0 overflow-x-hidden">
    <div className="bg-hero-pattern bg-cover bg-center bg-no-repeat">
      <Navbar />
      <Hero />
    </div>

   
    <About/>
    <Tech/>
    <Project/>
    <Contact/>

    </div>
   
        
     


  );
}

export default App;
