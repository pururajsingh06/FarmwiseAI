
import { useState } from "react";
import FarmLayout from "@/components/FarmLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CalendarDays, Plus, ArrowRight } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { CornIcon } from "@/components/CropIcons";

const FarmingCalendarPage = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  
  const calendarEvents = [
    { date: "2025-04-15", title: "Start Corn Planting", type: "planting" },
    { date: "2025-04-20", title: "Apply Fertilizer - North Field", type: "fertilizing" },
    { date: "2025-05-01", title: "Irrigation System Maintenance", type: "maintenance" },
    { date: "2025-05-10", title: "Complete Corn Planting", type: "planting" }
  ];

  return (
    <FarmLayout>
      <h1 className="text-2xl font-bold mb-6">Farming Calendar</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1">
          <Card className="mb-6">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">CALENDAR</CardTitle>
            </CardHeader>
            <CardContent>
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-md border"
              />
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">ADD TASK</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Task Title</label>
                  <input type="text" className="w-full p-2 border rounded" placeholder="Enter task name" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-1">Date</label>
                  <input type="date" className="w-full p-2 border rounded" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-1">Task Type</label>
                  <select className="w-full p-2 border rounded">
                    <option>Planting</option>
                    <option>Harvesting</option>
                    <option>Fertilizing</option>
                    <option>Pest Control</option>
                    <option>Maintenance</option>
                    <option>Other</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-1">Notes</label>
                  <textarea className="w-full p-2 border rounded" rows={3}></textarea>
                </div>
                
                <Button className="w-full">
                  <Plus size={16} className="mr-2" />
                  Add to Calendar
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="lg:col-span-2">
          <Card className="mb-6">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">UPCOMING TASKS</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {calendarEvents.map((event, index) => (
                  <div key={index} className="flex items-center border rounded-lg p-3">
                    <div className="w-10 h-10 rounded-full bg-farm-green-light flex items-center justify-center mr-3">
                      {event.type === "planting" ? (
                        <CornIcon />
                      ) : (
                        <CalendarDays size={20} className="text-farm-green" />
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="font-medium">{event.title}</div>
                      <div className="text-xs text-muted-foreground">{event.date}</div>
                    </div>
                    <ArrowRight size={16} className="text-muted-foreground" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">SEASONAL OVERVIEW</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="border rounded-md p-4">
                  <h3 className="font-medium text-lg mb-2">Spring (Current Season)</h3>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                    <li>Complete corn planting by May 10</li>
                    <li>Initial fertilizer application</li>
                    <li>Set up irrigation systems</li>
                  </ul>
                </div>
                
                <div className="border rounded-md p-4">
                  <h3 className="font-medium text-lg mb-2">Summer</h3>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                    <li>Regular irrigation monitoring</li>
                    <li>Secondary fertilizer application mid-July</li>
                    <li>Pest monitoring and control as needed</li>
                  </ul>
                </div>
                
                <div className="border rounded-md p-4">
                  <h3 className="font-medium text-lg mb-2">Fall</h3>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                    <li>Harvest corn (expected: late September)</li>
                    <li>Soil testing and amendments</li>
                    <li>Plant cover crops</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </FarmLayout>
  );
};

export default FarmingCalendarPage;
