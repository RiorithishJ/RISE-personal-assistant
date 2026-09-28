import Index from "./Index";

interface JarvisUIProps {
  currentMode: "jarvis" | "rise";
  onSwitchMode: (mode: "jarvis" | "rise") => void;
}

const JarvisUI = ({ currentMode, onSwitchMode }: JarvisUIProps) => (
  <div className="min-h-screen bg-[#05070d] text-white">
    <button
      onClick={() => window.location.assign("http://localhost:5174")}
      className="absolute right-4 top-4 z-20 rounded-full border border-white/20 bg-white/5 px-3 py-2 text-xs font-medium uppercase tracking-[0.2em] text-white backdrop-blur-sm transition hover:-translate-y-0.5"
    >
      Switch to Rise
    </button>
    <Index currentMode={currentMode} onModeChange={onSwitchMode} />
  </div>
);

export default JarvisUI;
