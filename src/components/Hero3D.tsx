import React, { useRef, useMemo, Component, ReactNode } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Float, Box, Cylinder, Plane } from '@react-three/drei';
import * as THREE from 'three';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Github, Linkedin, MessageSquare, Database, CheckCircle, Terminal, Cpu, Code } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface Hero3DProps {
  reducedMotion?: boolean;
}

// -----------------------------------------------------------------------------
// REACT ERROR BOUNDARY FOR 3D CANVAS (Prevents blank page if WebGL fails)
// -----------------------------------------------------------------------------
interface ErrorBoundaryProps {
  children: ReactNode;
  fallback?: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class ThreeErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  public state: ErrorBoundaryState = {
    hasError: false
  };

  public static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.warn('3D Canvas Exception Caught:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return this.props.fallback || (
        <div className="w-full h-full flex items-center justify-center bg-[#090a0f] p-8 text-center">
          <div className="p-6 rounded-2xl glass-card border border-white/10 max-w-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 flex items-center justify-center mx-auto">
              <Terminal className="w-5 h-5" />
            </div>
            <h4 className="text-sm font-bold text-white">Interactive Developer Workstation</h4>
            <p className="text-xs text-slate-400 font-mono">Sampath Kumar J • Senior Web & 3D Interactive Developer</p>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

// -----------------------------------------------------------------------------
// LIVE ANIMATED CODING MONITOR SCREEN (Synchronous CanvasTexture)
// -----------------------------------------------------------------------------

const CODE_LINES = [
  "import { ReactThreeFiber } from '@react-three/fiber';",
  "import { CustomCRM } from './services/OmniCRM';",
  "import { StockSync } from './services/Inventory';",
  "",
  "// Sampath Kumar J - Senior Web & 3D Interactive Developer",
  "class DeveloperPortfolio {",

  "  public async initializeSystem() {",
  "    const crm = new CustomCRM({ status: 'ACTIVE' });",
  "    const inventory = new StockSync({ multiWarehouse: true });",
  "    const canvas3D = new WebGLRenderingEngine({ fps: 60 });",
  "",
  "    await crm.connectSalesPipeline();",
  "    await inventory.syncRealtimeStock();",
  "    console.log('⚡ All Systems 100% Operational');",
  "  }",
  "}",
  "",
  "export default new DeveloperPortfolio();"
];

const LiveCodeMonitorScreen: React.FC<{ reducedMotion?: boolean }> = ({ reducedMotion }) => {
  const stateRef = useRef({ lineIdx: 0, charIdx: 0, lastTime: 0 });

  // Synchronous canvas & texture creation with useMemo (Guarantees zero null texture render)
  const { canvas, texture } = useMemo(() => {
    const c = document.createElement('canvas');
    c.width = 1024;
    c.height = 576;

    const t = new THREE.CanvasTexture(c);
    t.minFilter = THREE.LinearFilter;
    t.magFilter = THREE.LinearFilter;
    return { canvas: c, texture: t };
  }, []);

  useFrame((state) => {
    if (!canvas || !texture) return;

    const now = state.clock.getElapsedTime();
    if (!reducedMotion && now - stateRef.current.lastTime > 0.04) {
      stateRef.current.lastTime = now;

      const currentLine = CODE_LINES[stateRef.current.lineIdx];
      if (currentLine !== undefined) {
        if (stateRef.current.charIdx < currentLine.length) {
          stateRef.current.charIdx += 2;
        } else {
          stateRef.current.charIdx = 0;
          stateRef.current.lineIdx = (stateRef.current.lineIdx + 1) % CODE_LINES.length;
        }
      }
    }

    const ctx = canvas.getContext('2d');
    if (ctx) {
      ctx.fillStyle = '#0d1117';
      ctx.fillRect(0, 0, 1024, 576);

      ctx.fillStyle = '#161b22';
      ctx.fillRect(0, 0, 1024, 45);

      ctx.fillStyle = '#ff5f56'; ctx.beginPath(); ctx.arc(25, 22, 6, 0, Math.PI * 2); ctx.fill();
      ctx.fillStyle = '#ffbd2e'; ctx.beginPath(); ctx.arc(45, 22, 6, 0, Math.PI * 2); ctx.fill();
      ctx.fillStyle = '#27c93f'; ctx.beginPath(); ctx.arc(65, 22, 6, 0, Math.PI * 2); ctx.fill();

      ctx.fillStyle = '#0d1117';
      ctx.fillRect(100, 8, 220, 37);
      ctx.fillStyle = '#58a6ff';
      ctx.font = '14px "Fira Code", monospace';
      ctx.fillText('⚡ SampathPortfolio.tsx', 120, 31);

      ctx.fillStyle = '#161b22';
      ctx.fillRect(0, 45, 180, 531);
      ctx.fillStyle = '#8b949e';
      ctx.font = '12px "Fira Code", monospace';
      ctx.fillText('EXPLORER', 15, 75);
      ctx.fillStyle = '#58a6ff'; ctx.fillText('📄 OmniCRM.ts', 25, 105);
      ctx.fillStyle = '#3fb950'; ctx.fillText('📄 Inventory.ts', 25, 130);
      ctx.fillStyle = '#bc8cff'; ctx.fillText('📄 Hero3D.tsx', 25, 155);

      ctx.font = '16px "Fira Code", "Consolas", monospace';
      
      const lineLimit = stateRef.current.lineIdx;
      for (let i = 0; i <= Math.min(lineLimit, CODE_LINES.length - 1); i++) {
        const yPos = 85 + i * 26;
        const lineText = (i === lineLimit) ? CODE_LINES[i].substring(0, stateRef.current.charIdx) : CODE_LINES[i];
        
        ctx.fillStyle = '#484f58';
        ctx.fillText(String(i + 1).padStart(2, ' '), 200, yPos);

        if (lineText.startsWith('import')) {
          ctx.fillStyle = '#ff7b72';
          ctx.fillText(lineText, 240, yPos);
        } else if (lineText.startsWith('//')) {
          ctx.fillStyle = '#8b949e';
          ctx.fillText(lineText, 240, yPos);
        } else if (lineText.includes('class') || lineText.includes('function')) {
          ctx.fillStyle = '#d2a8ff';
          ctx.fillText(lineText, 240, yPos);
        } else if (lineText.includes('console.log') || lineText.includes('await')) {
          ctx.fillStyle = '#79c0ff';
          ctx.fillText(lineText, 240, yPos);
        } else {
          ctx.fillStyle = '#e6edf3';
          ctx.fillText(lineText, 240, yPos);
        }
      }

      const currentY = 85 + lineLimit * 26;
      const currentLineText = CODE_LINES[lineLimit]?.substring(0, stateRef.current.charIdx) || '';
      const textWidth = ctx.measureText(currentLineText).width;
      ctx.fillStyle = '#58a6ff';
      if (Math.floor(now * 3) % 2 === 0) {
        ctx.fillRect(240 + textWidth, currentY - 14, 8, 18);
      }

      texture.needsUpdate = true;
    }
  });

  return (
    <Plane args={[4.2, 2.3]} position={[0, 0.35, 0.06]}>
      <meshBasicMaterial map={texture} />
    </Plane>
  );
};

// -----------------------------------------------------------------------------
// 3D DESKTOP WORKSTATION PROCEDURAL SCENE
// -----------------------------------------------------------------------------

const DeskSurface: React.FC = () => {
  return (
    <group position={[0, -1.2, 0]}>
      <Box args={[7.5, 0.25, 4]} position={[0, 0, 0]}>
        <meshStandardMaterial color="#0f111a" roughness={0.3} metalness={0.4} />
      </Box>

      <Box args={[7.52, 0.04, 0.05]} position={[0, 0.11, 2.01]}>
        <meshStandardMaterial color="#06b6d4" emissive="#06b6d4" emissiveIntensity={0.8} />
      </Box>

      <Cylinder args={[0.06, 0.06, 2.5]} position={[-3.4, -1.25, -1.6]}>
        <meshStandardMaterial color="#1e293b" metalness={0.8} roughness={0.2} />
      </Cylinder>
      <Cylinder args={[0.06, 0.06, 2.5]} position={[3.4, -1.25, -1.6]}>
        <meshStandardMaterial color="#1e293b" metalness={0.8} roughness={0.2} />
      </Cylinder>
      <Cylinder args={[0.06, 0.06, 2.5]} position={[-3.4, -1.25, 1.6]}>
        <meshStandardMaterial color="#1e293b" metalness={0.8} roughness={0.2} />
      </Cylinder>
      <Cylinder args={[0.06, 0.06, 2.5]} position={[3.4, -1.25, 1.6]}>
        <meshStandardMaterial color="#1e293b" metalness={0.8} roughness={0.2} />
      </Cylinder>
    </group>
  );
};

const DeveloperMonitor: React.FC<{ reducedMotion?: boolean }> = ({ reducedMotion }) => {
  return (
    <group position={[0, 0.2, -0.8]}>
      <Cylinder args={[0.5, 0.6, 0.05, 32]} position={[0, -1.05, 0]}>
        <meshStandardMaterial color="#334155" metalness={0.9} roughness={0.2} />
      </Cylinder>
      
      <Box args={[0.15, 1.2, 0.15]} position={[0, -0.45, -0.1]}>
        <meshStandardMaterial color="#334155" metalness={0.9} roughness={0.2} />
      </Box>

      <Box args={[4.4, 2.5, 0.1]} position={[0, 0.35, 0]}>
        <meshStandardMaterial color="#090a0f" roughness={0.4} />
      </Box>

      <LiveCodeMonitorScreen reducedMotion={reducedMotion} />
    </group>
  );
};

const DeveloperLaptop: React.FC = () => {
  return (
    <group position={[-2.3, -0.9, 0.6]} rotation={[0, 0.35, 0]}>
      <Box args={[1.6, 0.05, 1.1]} position={[0, 0, 0]}>
        <meshStandardMaterial color="#334155" metalness={0.8} roughness={0.3} />
      </Box>
      
      <Box args={[0.5, 0.01, 0.35]} position={[0, 0.03, 0.3]}>
        <meshStandardMaterial color="#1e293b" metalness={0.5} />
      </Box>

      <Box args={[1.4, 0.02, 0.55]} position={[0, 0.03, -0.15]}>
        <meshStandardMaterial color="#0f172a" emissive="#3b82f6" emissiveIntensity={0.4} />
      </Box>

      <group position={[0, 0.025, -0.55]} rotation={[-0.3, 0, 0]}>
        <Box args={[1.6, 1.1, 0.04]} position={[0, 0.55, 0]}>
          <meshStandardMaterial color="#1e293b" metalness={0.9} roughness={0.2} />
        </Box>
        <Plane args={[1.5, 1.0]} position={[0, 0.55, 0.025]}>
          <meshStandardMaterial color="#0d1117" emissive="#06b6d4" emissiveIntensity={0.6} />
        </Plane>
      </group>
    </group>
  );
};

const KeyboardAndMouse: React.FC = () => {
  return (
    <group position={[0.1, -1.02, 0.8]}>
      <Box args={[1.8, 0.06, 0.6]} position={[0, 0, 0]}>
        <meshStandardMaterial color="#1e293b" metalness={0.7} roughness={0.3} />
      </Box>
      <Box args={[1.7, 0.02, 0.52]} position={[0, 0.04, 0]}>
        <meshStandardMaterial color="#0f172a" emissive="#8b5cf6" emissiveIntensity={0.5} />
      </Box>

      <group position={[1.5, 0, 0.1]} rotation={[0, -0.15, 0]}>
        <Box args={[0.3, 0.12, 0.5]} position={[0, 0.04, 0]}>
          <meshStandardMaterial color="#334155" metalness={0.8} roughness={0.2} />
        </Box>
        <Box args={[0.04, 0.03, 0.15]} position={[0, 0.11, -0.1]}>
          <meshStandardMaterial color="#06b6d4" emissive="#06b6d4" emissiveIntensity={1} />
        </Box>
      </group>
    </group>
  );
};

const DeskLamp: React.FC = () => {
  return (
    <group position={[2.6, -1.02, -0.4]} rotation={[0, -0.5, 0]}>
      <Cylinder args={[0.35, 0.4, 0.06, 32]} position={[0, 0, 0]}>
        <meshStandardMaterial color="#f59e0b" metalness={0.8} roughness={0.2} />
      </Cylinder>

      <Cylinder args={[0.04, 0.04, 1.4]} position={[-0.2, 0.65, 0]} rotation={[0, 0, -0.35]}>
        <meshStandardMaterial color="#475569" metalness={0.9} roughness={0.2} />
      </Cylinder>

      <group position={[-0.45, 1.3, 0]} rotation={[0.4, 0, 0.6]}>
        <Cylinder args={[0.15, 0.35, 0.45, 32]}>
          <meshStandardMaterial color="#f59e0b" metalness={0.8} roughness={0.2} />
        </Cylinder>

        <spotLight
          position={[0, -0.1, 0]}
          target-position={[0, -2, 0]}
          color="#fbbf24"
          intensity={4.5}
          distance={6}
          angle={0.7}
          penumbra={0.6}
        />
      </group>
    </group>
  );
};

const CameraRig: React.FC<{ reducedMotion?: boolean }> = ({ reducedMotion }) => {
  useFrame((state) => {
    if (!reducedMotion) {
      const targetX = state.pointer.x * 0.4;
      const targetY = state.pointer.y * 0.25;
      
      state.camera.position.x = THREE.MathUtils.lerp(state.camera.position.x, targetX, 0.05);
      state.camera.position.y = THREE.MathUtils.lerp(state.camera.position.y, 0.6 + targetY, 0.05);
      state.camera.lookAt(0, 0, 0);
    }
  });

  return null;
};

// -----------------------------------------------------------------------------
// MAIN HERO SECTION COMPONENT (PROTECTED BY THREE ERROR BOUNDARY)
// -----------------------------------------------------------------------------

export const Hero3D: React.FC<Hero3DProps> = ({ reducedMotion }) => {
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 400], [0, 60]);

  return (
    <section id="home" className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden">
      {/* 3D Desktop Monitor Live Code Canvas Background */}
      <div className="absolute inset-0 z-0 opacity-90 pointer-events-auto">
        <ThreeErrorBoundary>
          <Canvas camera={{ position: [0, 0.6, 5.2], fov: 48 }}>
            <ambientLight intensity={0.8} />
            <directionalLight position={[10, 12, 6]} intensity={1.5} color="#60a5fa" />
            <pointLight position={[-8, -5, -5]} intensity={1.2} color="#a78bfa" />
            <pointLight position={[3, 4, 3]} intensity={1} color="#06b6d4" />
            
            <Float speed={reducedMotion ? 0 : 0.8} rotationIntensity={reducedMotion ? 0 : 0.15} floatIntensity={reducedMotion ? 0 : 0.2}>
              <group position={[0, 0.1, 0]} rotation={[0.08, -0.05, 0]}>
                <DeskSurface />
                <DeveloperMonitor reducedMotion={reducedMotion} />
                <DeveloperLaptop />
                <KeyboardAndMouse />
                <DeskLamp />
              </group>
            </Float>
            
            <CameraRig reducedMotion={reducedMotion} />
            <OrbitControls enableZoom={false} enablePan={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 3} />
          </Canvas>
        </ThreeErrorBoundary>
      </div>

      {/* Background Glow Gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-purple-600/15 rounded-full blur-[120px] pointer-events-none" />

      {/* Optimized Hero Content Overlay */}
      <motion.div style={{ y: heroY }} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Main Hero Text */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="lg:col-span-8 space-y-6"
          >
            {/* Status Pill */}
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-700/80 backdrop-blur-md text-xs font-mono text-cyan-400 shadow-md">
              <Terminal className="w-3.5 h-3.5 animate-pulse text-cyan-400" />
              <span>{PERSONAL_INFO.status}</span>
            </div>

            {/* Main Punchy Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.1]">
              Building <span className="text-gradient">3D Web Apps</span>, Custom CRMs & Inventory Systems.
            </h1>

            {/* Clear Sub-headline / Value proposition */}
            <p className="text-lg sm:text-xl text-slate-300 max-w-2xl font-light leading-relaxed">
              Hi, I'm <strong className="text-white font-semibold">{PERSONAL_INFO.name}</strong>. I engineer high-performing 3D WebGL experiences and custom enterprise software—including tailored CRMs and real-time inventory management platforms for fast-growing businesses.
            </p>

            {/* Call To Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="group px-7 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-bold text-sm shadow-lg shadow-cyan-500/25 flex items-center space-x-2 transition-all hover:scale-105 active:scale-95 cursor-pointer"
              >
                <span>Explore Projects & CRMs</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#contact"
                className="px-7 py-3.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-200 hover:text-white border border-slate-700/80 font-bold text-sm backdrop-blur-md flex items-center space-x-2 transition-all hover:border-slate-500 cursor-pointer"
              >
                <MessageSquare className="w-4 h-4 text-cyan-400" />
                <span>Let's Discuss Your Project</span>
              </a>
            </div>

            {/* Core Capability Badges */}
            <div className="pt-6 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-4 text-slate-400 text-xs font-mono">
              <div className="flex items-center space-x-4">
                <span className="text-slate-500 uppercase tracking-wider flex items-center gap-1">
                  <Cpu className="w-3.5 h-3.5 text-cyan-400" /> Core Tech:
                </span>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-2.5 py-1 bg-slate-800/80 rounded border border-slate-700 text-cyan-300 font-semibold">Custom Business CRMs</span>
                  <span className="px-2.5 py-1 bg-slate-800/80 rounded border border-slate-700 text-emerald-300 font-semibold">Inventory Systems</span>
                  <span className="px-2.5 py-1 bg-slate-800/80 rounded border border-slate-700 text-blue-300 font-semibold">Live Coding 3D Display</span>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 bg-slate-900/80 hover:bg-slate-800 text-slate-300 hover:text-white rounded-xl border border-slate-800 transition-colors cursor-pointer"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 bg-slate-900/80 hover:bg-slate-800 text-slate-300 hover:text-white rounded-xl border border-slate-800 transition-colors cursor-pointer"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Floating Live Terminal Status Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-4 hidden lg:block"
          >
            <div className="glass-card p-6 rounded-2xl border border-white/10 space-y-6 relative overflow-hidden shadow-2xl">
              <div className="flex items-center space-x-3 pb-4 border-b border-white/10">
                <div className="p-2.5 bg-cyan-500/10 rounded-xl border border-cyan-500/20 text-cyan-400">
                  <Database className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-white">Web & 3D Architecture</h3>
                  <p className="text-xs text-slate-400 font-mono">CRMs • Inventory • Live Coding 3D</p>
                </div>
              </div>


              <div className="space-y-3.5 text-xs font-mono text-slate-300">
                <div className="flex justify-between items-center bg-slate-950/60 p-3 rounded-lg border border-slate-800">
                  <span className="text-slate-400">Custom Business CRM</span>
                  <span className="text-emerald-400 font-bold flex items-center gap-1">
                    <CheckCircle className="w-3.5 h-3.5" /> Active
                  </span>
                </div>
                <div className="flex justify-between items-center bg-slate-950/60 p-3 rounded-lg border border-slate-800">
                  <span className="text-slate-400">Inventory & Warehouse</span>
                  <span className="text-cyan-400 font-bold flex items-center gap-1">
                    <CheckCircle className="w-3.5 h-3.5" /> Real-time
                  </span>
                </div>
                <div className="flex justify-between items-center bg-slate-950/60 p-3 rounded-lg border border-slate-800">
                  <span className="text-slate-400">3D Live Code Canvas</span>
                  <span className="text-purple-400 font-bold flex items-center gap-1">
                    <Code className="w-3.5 h-3.5" /> 60FPS WebGL
                  </span>
                </div>
              </div>

              <div className="p-4 bg-gradient-to-r from-blue-900/30 to-purple-900/30 rounded-xl border border-blue-500/30 text-xs text-slate-300">
                <p className="italic">"Solving real business problems with tailored CRM workflows and live interactive graphics."</p>
              </div>
            </div>
          </motion.div>

        </div>
      </motion.div>
    </section>
  );
};
