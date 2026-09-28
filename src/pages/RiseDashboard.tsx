import Index from "./Index";

interface RiseDashboardProps {
  currentMode: "jarvis" | "rise";
  onSwitchMode: (mode: "jarvis" | "rise") => void;
}

const RiseDashboard = ({ currentMode, onSwitchMode }: RiseDashboardProps) => (
  <div>
    <button
      onClick={() => window.location.assign("http://localhost:3000")}
      className="absolute right-4 top-4 z-20 rounded-full border border-border bg-background px-3 py-2 text-xs font-medium uppercase tracking-[0.2em] text-rise-text shadow-sm transition hover:-translate-y-0.5"
    >
      Switch to JARVIS
    </button>
    <Index currentMode={currentMode} onModeChange={onSwitchMode} />
  </div>
);

export default RiseDashboard;
