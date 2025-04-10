
import { Link, useNavigate } from "react-router-dom";
import { AlertTriangle, Sun, CloudRain, ArrowRight, Menu, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CornIcon } from "@/components/CropIcons";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import FarmSidebar from "@/components/FarmSidebar";

const MobileDashboardPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <header className="bg-white border-b p-4">
        <div className="flex justify-between items-center">
          <div className="text-lg font-bold text-farm-green-dark">SMART FARM ADVISOR</div>
          <div className="flex gap-3">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm">
                  <Menu size={20} />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="p-0">
                <div className="pt-2">
                  <FarmSidebar />
                </div>
              </SheetContent>
            </Sheet>
            <Button variant="ghost" size="sm" onClick={() => navigate("/profile")}>
              <User size={20} />
            </Button>
          </div>
        </div>
      </header>

      <div className="p-4 space-y-6">
        <Card className="bg-white shadow-sm">
          <CardContent className="p-4">
            <h2 className="text-sm font-medium mb-2 text-muted-foreground">CURRENT WEATHER</h2>
            <div className="flex items-center">
              <Sun size={32} className="text-yellow-500 mr-3" />
              <div>
                <div className="text-xl font-semibold">24°C</div>
                <div className="text-sm text-muted-foreground">Partly cloudy</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div>
          <h2 className="text-sm font-medium mb-2 text-muted-foreground">ALERTS:</h2>
          <div className="space-y-2">
            <div className="alert-item !p-2 !mb-1">
              <AlertTriangle size={16} className="text-farm-alert" />
              <p className="text-sm">Rain in 2 days</p>
            </div>
            <div className="alert-item !p-2 !mb-1">
              <AlertTriangle size={16} className="text-farm-alert" />
              <p className="text-sm">Planting window</p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-sm font-medium mb-2 text-muted-foreground">CROP RECOMMENDATIONS:</h2>
          <div className="space-y-3">
            <Link to="/crops/corn">
              <div className="flex items-center justify-between bg-white p-3 rounded-lg border">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-farm-green-light flex items-center justify-center mr-3">
                    <CornIcon />
                  </div>
                  <div>
                    <div className="font-medium">CORN</div>
                    <div className="text-xs text-farm-green">92% match</div>
                  </div>
                </div>
                <ArrowRight size={16} className="text-muted-foreground" />
              </div>
            </Link>
            
            <Link to="/crops/soybeans">
              <div className="flex items-center justify-between bg-white p-3 rounded-lg border">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-farm-green-light flex items-center justify-center mr-3">
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      width="24" 
                      height="24" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      className="text-farm-green"
                    >
                      <path d="M12 7c.5-1.5 1.5-3 4-3 2 0 3 1 3 3s-.5 3-2 4c-1.5 1-4 1-6 0-2-1-3-3-3-6 0-2 1-3 3-3 2.5 0 3.5 1.5 4 3" />
                      <path d="M3 15c1-1 2-2 3-1.5 1.5 .4 1 3 .5 4.5-1.5 5 6 7 11.5-1.5" />
                      <path d="M17 19c.9-2.3 1.2-5 .5-7" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-medium">SOYBEANS</div>
                    <div className="text-xs text-farm-green">87% match</div>
                  </div>
                </div>
                <ArrowRight size={16} className="text-muted-foreground" />
              </div>
            </Link>
          </div>
        </div>

        <div>
          <h2 className="text-sm font-medium mb-2 text-muted-foreground">QUICK ACTIONS:</h2>
          <div className="grid grid-cols-2 gap-3">
            <Link to="/weather">
              <Button variant="outline" className="w-full justify-start">
                <CloudRain size={18} className="mr-2 text-farm-sky" />
                Weather
              </Button>
            </Link>
            <Link to="/crops">
              <Button variant="outline" className="w-full justify-start">
                <CornIcon />
                Crops
              </Button>
            </Link>
            <Link to="/calendar">
              <Button variant="outline" className="w-full justify-start">
                <CalendarIcon size={18} className="mr-2 text-farm-earth" />
                Calendar
              </Button>
            </Link>
            <Link to="/soil">
              <Button variant="outline" className="w-full justify-start">
                <SoilIcon size={18} className="mr-2 text-farm-earth-dark" />
                Soil
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

const CalendarIcon = ({ size, className }: { size: number; className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </svg>
);

const SoilIcon = ({ size, className }: { size: number; className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M2 22 9 3l7 19" />
    <path d="M15 3h7v12h-7" />
    <path d="M12 12c-1 1-2 1-2 1" />
  </svg>
);

export default MobileDashboardPage;
