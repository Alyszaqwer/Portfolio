import Navbar from "./components/navbar";
import Intro from "./components/Intro/intro";
import About from "./components/About/About";
import Contact from './components/Contact/Contact';
import Work from './components/Work/Work';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <About/>
      <Work/>
      <Contact/>
    </div>
  );
}

export default App;
