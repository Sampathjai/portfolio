import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero3D } from './components/Hero3D';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Services } from './components/Services';
import { Process } from './components/Process';
import { FAQ } from './components/FAQ';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { AccessibilityToolbar } from './components/AccessibilityToolbar';
import { ProjectDetailPage } from './components/ProjectDetailPage';
import { PROJECTS } from './data/portfolioData';
import { Project } from './types';

export function App() {
  const [reducedMotion, setReducedMotion] = useState(false);
  const [highContrast, setHighContrast] = useState(false);
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  // Helper to parse project from URL hash or query param
  const parseProjectFromUrl = () => {
    const hash = window.location.hash;
    if (hash.includes('/projects/')) {
      const projId = hash.split('/projects/')[1]?.split('/')[0]?.split('?')[0];
      const found = PROJECTS.find(p => p.id === projId || p.id.replace('-crm', '') === projId);
      if (found) return found;
    }
    const params = new URLSearchParams(window.location.search);
    const qProj = params.get('project');
    if (qProj) {
      const found = PROJECTS.find(p => p.id === qProj);
      if (found) return found;
    }
    return null;
  };

  useEffect(() => {
    const handleUrlChange = () => {
      const found = parseProjectFromUrl();
      setActiveProject(found);
    };

    handleUrlChange();
    window.addEventListener('hashchange', handleUrlChange);
    window.addEventListener('popstate', handleUrlChange);

    return () => {
      window.removeEventListener('hashchange', handleUrlChange);
      window.removeEventListener('popstate', handleUrlChange);
    };
  }, []);

  const handleSelectProject = (project: Project) => {
    setActiveProject(project);
    window.location.hash = `#/projects/${project.id}`;
  };

  const handleBackToProjects = () => {
    setActiveProject(null);
    window.location.hash = '#projects';
    setTimeout(() => {
      const el = document.getElementById('projects');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const handleNavigateContact = () => {
    setActiveProject(null);
    window.location.hash = '#contact';
    setTimeout(() => {
      const el = document.getElementById('contact');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  if (activeProject) {
    return (
      <div className={`min-h-screen bg-[#090a0f] text-slate-100 ${highContrast ? 'contrast-125' : ''}`}>
        <ProjectDetailPage
          project={activeProject}
          onBack={handleBackToProjects}
          onNavigateContact={handleNavigateContact}
        />
        <Footer />
        <AccessibilityToolbar
          onToggleReducedMotion={(enabled) => setReducedMotion(enabled)}
          onToggleHighContrast={(enabled) => setHighContrast(enabled)}
        />
      </div>
    );
  }

  return (
    <div className={`min-h-screen bg-[#090a0f] text-slate-100 ${highContrast ? 'contrast-125' : ''}`}>
      {/* Navigation Header */}
      <Navbar />

      {/* Main Page Content */}
      <main id="main-content" tabIndex={-1}>
        <Hero3D reducedMotion={reducedMotion} />
        <About />
        <Projects onSelectProject={handleSelectProject} />
        <Services />
        <Process />
        <FAQ />
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
