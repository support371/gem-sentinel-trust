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
