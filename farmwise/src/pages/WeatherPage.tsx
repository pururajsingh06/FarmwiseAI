
import FarmLayout from "@/components/FarmLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AlertTriangle, Download, Sun, Cloud, CloudRain } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const WeatherPage = () => {
  const { toast } = useToast();

  const handleDownloadReport = () => {
    toast({
      title: "Report Generated",
      description: "Your detailed weather report is ready for download.",
    });
  };

  return (
    <FarmLayout>
      <h1 className="text-2xl font-bold mb-4">Weather Forecast & Farm Impact</h1>
      <p className="mb-6">
        <span className="font-medium">YOUR LOCATION:</span> Greenfield County
      </p>

      <Card className="mb-8">
        <CardHeader className="pb-2">
          <CardTitle className="text-lg">Weekly Weather Forecast</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="weather-chart">
            {/* Weather chart visualization */}
            <div className="grid grid-cols-7 gap-2 text-center">
              {[
                { day: "Mon", icon: Sun, temp: "24°C" },
                { day: "Tue", icon: Sun, temp: "25°C" },
                { day: "Wed", icon: CloudRain, temp: "22°C" },
                { day: "Thu", icon: CloudRain, temp: "21°C" },
                { day: "Fri", icon: Cloud, temp: "23°C" },
                { day: "Sat", icon: Sun, temp: "26°C" },
                { day: "Sun", icon: Sun, temp: "27°C" },
              ].map((day) => (
                <div key={day.day} className="flex flex-col items-center p-2 border rounded-lg">
                  <div className="text-sm font-medium">{day.day}</div>
                  <div className="my-2">
                    <day.icon 
                      size={24} 
                      className={
                        day.icon === Sun 
                          ? "text-yellow-500" 
                          : day.icon === CloudRain 
                            ? "text-farm-sky" 
                            : "text-gray-400"
                      } 
                    />
                  </div>
                  <div className="text-sm">{day.temp}</div>
                </div>
              ))}
            </div>
            <div className="mt-4">
              <div className="h-16 rounded-md bg-gradient-to-r from-farm-sky-light via-farm-green-light to-yellow-100"></div>
              <div className="flex justify-between text-xs text-muted-foreground mt-1">
                <span>Precipitation</span>
                <span>Clear</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="bg-white p-4 rounded-lg border mb-6">
        <h2 className="text-lg font-semibold mb-3">FARMING RECOMMENDATIONS:</h2>
        <ul className="space-y-2">
          <li className="flex items-start">
            <span className="font-medium mr-2">• Today:</span>
            <span>Ideal conditions for field work</span>
          </li>
          <li className="flex items-start">
            <span className="font-medium mr-2">• Tomorrow:</span>
            <span>Similar conditions continue</span>
          </li>
          <li className="flex items-start">
            <span className="font-medium mr-2">• Day 3-4:</span>
            <span>Light rain (0.3") expected</span>
          </li>
          <li className="flex items-start">
            <span className="font-medium mr-2">• Day 5-7:</span>
            <span>Warming trend, good for germination</span>
          </li>
        </ul>
      </div>

      <div className="mb-8">
        <h2 className="text-lg font-semibold mb-3">ALERTS:</h2>
        <div className="alert-item">
          <AlertTriangle size={18} className="text-farm-alert" />
          <p>Rain in 3 days may delay planting</p>
        </div>
        <div className="alert-item">
          <AlertTriangle size={18} className="text-farm-alert" />
          <p>Consider irrigation planning for weeks 3-4 (drier forecast)</p>
        </div>
      </div>

      <div className="flex justify-center">
        <Button onClick={handleDownloadReport}>
          <Download size={16} className="mr-2" />
          DOWNLOAD DETAILED WEATHER REPORT
        </Button>
      </div>
    </FarmLayout>
  );
};

export default WeatherPage;
