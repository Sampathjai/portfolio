import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero3D } from './components/Hero3D';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Services } from './components/Services';
import { Process } from './components/Process';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { AccessibilityToolbar } from './components/AccessibilityToolbar';

export function App() {
  const [reducedMotion, setReducedMotion] = useState(false);
  const [highContrast, setHighContrast] = useState(false);

  return (
    <div className={`min-h-screen bg-[#090a0f] text-slate-100 ${highContrast ? 'contrast-125' : ''}`}>
      {/* Navigation Header */}
      <Navbar />

      {/* Main Page Content */}
      <main id="main-content" tabIndex={-1}>
        <Hero3D reducedMotion={reducedMotion} />
        <About />
        <Projects />
        <Services />
        <Process />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Accessibility Floating Toolbar */}
      <AccessibilityToolbar
        onToggleReducedMotion={(enabled) => setReducedMotion(enabled)}
        onToggleHighContrast={(enabled) => setHighContrast(enabled)}
      />
    </div>
  );
}

export default App;
