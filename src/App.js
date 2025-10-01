
import './App.css';
import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import DesignSection from './components/DesignSection';
import HighlightSection from './components/HighlightSection';
import IndustriesSection from './components/Industries';
import HowItWorksSection from './components/How_it_workds';
import PageLoader from './components/PageLoader';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate initial page load
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // 2 seconds for initial load

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <PageLoader />;
  }

  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <HighlightSection text="AI decision agent for Enterprise" />
      <DesignSection />
      <IndustriesSection />
      <HighlightSection text='Time to add a brain to your tech stack' />
      <HowItWorksSection />
    </div>
  );
}

export default App;
