interface ModeSelectorProps {
  onModeSelect: (mode: "jarvis" | "rise") => void;
}

const ModeSelector = ({ onModeSelect }: ModeSelectorProps) => {
  return (
    <div className="relative h-screen w-screen overflow-hidden bg-[#0a0d12] select-none">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.06),_transparent_55%)]" />

      <div className="relative flex h-full w-full">
        <button
          type="button"
          onClick={() => onModeSelect("jarvis")}
          className="group relative flex h-full flex-1 items-center justify-center overflow-hidden border-0 bg-[#080810] text-left transition-all duration-300 hover:bg-[#0c0f17] focus:outline-none"
          style={{ cursor: "crosshair" }}
        >
          <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{ background: "radial-gradient(circle at 50% 35%, rgba(0,212,255,0.18), transparent 38%)" }} />
          <div className="absolute inset-y-0 right-0 w-px bg-gradient-to-b from-[#00d4ff] via-[#00d4ff] to-[#e85d35] opacity-80 shadow-[0_0_18px_rgba(0,212,255,0.6)]" />
          <div className="relative z-10 flex flex-col items-center justify-center gap-5 text-center">
            <div className="relative flex h-36 w-36 items-center justify-center">
              <div className="absolute h-28 w-28 rounded-full border border-[#00d4ff]/30" style={{ boxShadow: "0 0 20px rgba(0,212,255,0.25)" }} />
              <div className="absolute h-28 w-28 rounded-full border-[2px] border-[#00d4ff]/60 [clip-path:polygon(50%_0%,_95%_22%,_95%_78%,_50%_100%,_5%_78%,_5%_22%)] animate-pulse" />
              <div className="absolute h-20 w-20 rounded-full border border-[#00d4ff]/40" />
              <div className="absolute h-32 w-32 rounded-full border border-[#00d4ff]/20" />
              <div className="absolute h-2 w-2 rounded-full bg-[#00d4ff] shadow-[0_0_14px_rgba(0,212,255,1)]" />
            </div>

            <div className="space-y-2">
              <div className="text-4xl font-black tracking-[0.35em] text-[#00d4ff]" style={{ fontFamily: "'Orbitron', 'Segoe UI', sans-serif" }}>
                JARVIS
              </div>
              <div className="text-[11px] uppercase tracking-[0.38em] text-[#7f8d9d]">System Interface / Secure Mode</div>
            </div>
          </div>
        </button>

        <div className="absolute left-1/2 top-0 z-20 flex h-full -translate-x-1/2 items-center justify-center">
          <div className="flex h-14 items-center justify-center rounded-full border border-white/20 bg-[#0a0d12]/90 px-4 text-[9px] font-medium tracking-[0.28em] text-[#d7dfe6] shadow-[0_0_24px_rgba(255,255,255,0.12)] backdrop-blur-sm">
            SELECT MODE
          </div>
        </div>

        <button
          type="button"
          onClick={() => onModeSelect("rise")}
          className="group relative flex h-full flex-1 items-center justify-center overflow-hidden border-0 bg-[#fafafa] text-left transition-all duration-300 hover:bg-[#fff7f2] focus:outline-none"
          style={{ cursor: "pointer" }}
        >
          <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{ background: "radial-gradient(circle at 50% 35%, rgba(232,93,53,0.12), transparent 38%)" }} />
          <div className="absolute inset-y-0 left-0 w-px bg-gradient-to-b from-[#00d4ff] via-[#e85d35] to-[#e85d35] opacity-80 shadow-[0_0_18px_rgba(232,93,53,0.4)]" />
          <div className="relative z-10 flex flex-col items-center justify-center gap-5 text-center">
            <div className="relative flex h-36 w-36 items-center justify-center rounded-full border border-[#e85d35]/20 bg-white shadow-[0_0_18px_rgba(232,93,53,0.1)] transition-transform duration-300 group-hover:scale-[1.04]">
              <div className="absolute h-24 w-24 rounded-full border-[2px] border-[#e85d35]/60" />
              <div className="absolute h-16 w-16 rounded-full border border-[#e85d35]/35" />
              <div className="absolute h-10 w-10 rounded-full bg-[#e85d35]/10" />
              <div className="text-3xl font-black tracking-[-0.08em] text-[#e85d35]" style={{ fontFamily: "'Inter', 'Segoe UI', sans-serif" }}>R</div>
            </div>

            <div className="space-y-2">
              <div className="text-4xl font-black tracking-[0.18em] text-[#e85d35]" style={{ fontFamily: "'Inter', 'Segoe UI', sans-serif" }}>
                RISE
              </div>
              <div className="text-[11px] uppercase tracking-[0.38em] text-[#8e8e8e]">Personal Dashboard / Your Space</div>
            </div>
          </div>
        </button>
      </div>
    </div>
  );
};

export default ModeSelector;
