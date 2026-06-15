import { AGENT_URL } from './constants';

export default function App() {
  return (
    <div className="w-screen h-screen bg-theme-bg overflow-hidden relative">
      <div className="fixed inset-0 z-0 bg-theme-bg overflow-hidden">
        <div className="relative w-full h-full">
           {/* Agent Iframe - Scaled and positioned to crop bottom branding */}
           <div className="absolute w-[200%] h-[180%] top-[-12%] left-[-50%] md:w-[150%] md:h-[180%] md:top-[-18%] md:left-[-25%] scale-[0.73] origin-top">
            <iframe 
              src={AGENT_URL}
              className="w-full h-full border-none pointer-events-auto"
              allow="camera; microphone; clipboard-write; display-capture"
              title="Agent"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
