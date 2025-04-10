
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./pages/NotFound";
import WelcomePage from "./pages/WelcomePage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import DashboardPage from "./pages/DashboardPage";
import CropsPage from "./pages/CropsPage";
import CropDetailPage from "./pages/CropDetailPage";
import WeatherPage from "./pages/WeatherPage";
import MobileDashboardPage from "./pages/MobileDashboardPage";
import SoilHealthPage from "./pages/SoilHealthPage";
import FarmingCalendarPage from "./pages/FarmingCalendarPage";
import CommunityPage from "./pages/CommunityPage";
import SettingsPage from "./pages/SettingsPage";
import ProfilePage from "./pages/ProfilePage";
import { useIsMobile } from "./hooks/use-mobile";
import { LanguageProvider } from "./contexts/LanguageContext";

const queryClient = new QueryClient();

const App = () => {
  const isMobile = useIsMobile();

  return (
    <QueryClientProvider client={queryClient}>
      <LanguageProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<WelcomePage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/dashboard" element={isMobile ? <MobileDashboardPage /> : <DashboardPage />} />
              <Route path="/crops" element={<CropsPage />} />
              <Route path="/crops/:cropId" element={<CropDetailPage />} />
              <Route path="/weather" element={<WeatherPage />} />
              <Route path="/soil" element={<SoilHealthPage />} />
              <Route path="/calendar" element={<FarmingCalendarPage />} />
              <Route path="/community" element={<CommunityPage />} />
              <Route path="/settings" element={<SettingsPage />} />
              <Route path="/profile" element={<ProfilePage />} />
              {/* Catch-all route */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </LanguageProvider>
    </QueryClientProvider>
  );
};

export default App;
