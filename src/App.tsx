import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/hooks/useAuth";
import Index from "./pages/Index";
import Services from "./pages/Services";
import SentinelX from "./pages/SentinelX";
import TrustCenter from "./pages/TrustCenter";
import RealEstate from "./pages/RealEstate";
import Contact from "./pages/Contact";
import Auth from "./pages/Auth";
import PortalDashboard from "./pages/portal/Dashboard";
import TaskBoard from "./pages/portal/TaskBoard";
import Incidents from "./pages/portal/Incidents";
import Team from "./pages/portal/Team";
import Activity from "./pages/portal/Activity";
import Settings from "./pages/portal/Settings";
import NotFound from "./pages/NotFound";
import BioVault from "./pages/products/BioVault";
import NeuralNet from "./pages/products/NeuralNet";
import QuantumGuard from "./pages/products/QuantumGuard";
import PlatformOverview from "./pages/PlatformOverview";
import SecurityCompliance from "./pages/SecurityCompliance";
import IncidentGovernance from "./pages/IncidentGovernance";
import InsightsDashboard from "./pages/InsightsDashboard";
import About from "./pages/About";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/services" element={<Services />} />
            <Route path="/sentinel-x" element={<SentinelX />} />
            <Route path="/trust-center" element={<TrustCenter />} />
            <Route path="/real-estate" element={<RealEstate />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/products/bio-vault" element={<BioVault />} />
            <Route path="/products/neural-net" element={<NeuralNet />} />
            <Route path="/products/quantum-guard" element={<QuantumGuard />} />
            <Route path="/platform" element={<PlatformOverview />} />
            <Route path="/security-compliance" element={<SecurityCompliance />} />
            <Route path="/incident-governance" element={<IncidentGovernance />} />
            <Route path="/insights" element={<InsightsDashboard />} />
            <Route path="/about" element={<About />} />
            <Route path="/portal" element={<PortalDashboard />} />
            <Route path="/portal/tasks" element={<TaskBoard />} />
            <Route path="/portal/incidents" element={<Incidents />} />
            <Route path="/portal/team" element={<Team />} />
            <Route path="/portal/activity" element={<Activity />} />
            <Route path="/portal/settings" element={<Settings />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
