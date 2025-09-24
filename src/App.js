
import './App.css';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import DesignSection from './components/DesignSection';
import HighlightSection from './components/HighlightSection';
import IndustriesSection from './components/Industries';
import HowItWorksSection from './components/How_it_workds';
function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <HighlightSection text="AI decision agent for Enterprise" />
      <DesignSection/>
      <IndustriesSection/>
      <HighlightSection text='Time to add a brain to your tech stack'></HighlightSection>
      <HowItWorksSection></HowItWorksSection>
    </div>
  );
}

export default App;
