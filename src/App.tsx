import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TooltipProvider } from "@/components/ui/tooltip";
import { RISEContextProvider } from "@/contexts/RISEContext";
import ModeSelector from "./pages/ModeSelector.tsx";
import RiseDashboard from "./pages/RiseDashboard.tsx";

const queryClient = new QueryClient();

const AppContent = () => {
  const handleModeSelect = (selectedMode: "jarvis" | "rise") => {
    localStorage.setItem("appMode", selectedMode);
    const targetUrl = selectedMode === "jarvis" ? "http://localhost:3000" : "http://localhost:5175";
    window.location.assign(targetUrl);
  };

  const currentPort = typeof window !== "undefined" ? window.location.port : "";

  if (currentPort === "5175") {
    return <RiseDashboard currentMode="rise" onSwitchMode={handleModeSelect} />;
  }

  return <ModeSelector onModeSelect={handleModeSelect} />;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <RISEContextProvider>
        <AppContent />
      </RISEContextProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
