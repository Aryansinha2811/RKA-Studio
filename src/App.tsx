import Navbar from "./components/Navbar";
import CustomCursor from "./components/CustomCursor";
import Hero from "./components/Hero";
import Work from "./components/Work";
import Services from "./components/Services";
import About from "./components/About";

function App() {
  return (
    <>
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <Work />
        <Services />
        <About />
        {/* Services, About, Contact sections come next */}
      </main>
    </>
  );
}

export default App;