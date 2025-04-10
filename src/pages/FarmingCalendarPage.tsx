import { useState, useEffect } from "react";
import FarmLayout from "@/components/FarmLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CalendarDays, Plus, ArrowRight, Wrench, Bug, Leaf, Sun } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { CornIcon } from "@/components/CropIcons";

const FarmingCalendarPage = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());

  const [calendarEvents, setCalendarEvents] = useState([
    { date: "2025-04-15", title: "Start Corn Planting", type: "planting" },
    { date: "2025-04-20", title: "Apply Fertilizer - North Field", type: "fertilizing" },
    { date: "2025-05-01", title: "Irrigation System Maintenance", type: "maintenance" },
    { date: "2025-05-10", title: "Complete Corn Planting", type: "planting" }
  ]);

  const [newTask, setNewTask] = useState({
    title: "",
    date: "",
    type: "Planting",
    notes: ""
  });

  const [message, setMessage] = useState("");

  const handleAddTask = () => {
    if (!newTask.title || !newTask.date) {
      setMessage("Please enter a title and date.");
      return;
    }

    const newEvent = {
      title: newTask.title,
      date: newTask.date,
      type: newTask.type.toLowerCase()
    };

    setCalendarEvents([...calendarEvents, newEvent]);
    setNewTask({ title: "", date: "", type: "Planting", notes: "" });
    setMessage("Task added to calendar!");
    setTimeout(() => setMessage(""), 3000);
  };

  const getTaskIcon = (type: string) => {
    switch (type) {
      case "planting":
        return <CornIcon />;
      case "fertilizing":
        return <Leaf size={20} className="text-green-600" />;
      case "pest control":
        return <Bug size={20} className="text-red-600" />;
      case "maintenance":
        return <Wrench size={20} className="text-blue-600" />;
      case "harvesting":
        return <Sun size={20} className="text-yellow-600" />;
      default:
        return <CalendarDays size={20} className="text-muted-foreground" />;
    }
  };

  const selectedDateStr = date?.toISOString().split("T")[0];
  const selectedEvents = calendarEvents.filter(
    (event) => event.date === selectedDateStr
  );

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
                  <input
                    type="text"
                    value={newTask.title}
                    onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
                    className="w-full p-2 border rounded"
                    placeholder="Enter task name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">Date</label>
                  <input
                    type="date"
                    value={newTask.date}
                    onChange={(e) => setNewTask({ ...newTask, date: e.target.value })}
                    className="w-full p-2 border rounded"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">Task Type</label>
                  <select
                    value={newTask.type}
                    onChange={(e) => setNewTask({ ...newTask, type: e.target.value })}
                    className="w-full p-2 border rounded"
                  >
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
                  <textarea
                    value={newTask.notes}
                    onChange={(e) => setNewTask({ ...newTask, notes: e.target.value })}
                    className="w-full p-2 border rounded"
                    rows={3}
                  ></textarea>
                </div>

                <Button className="w-full" onClick={handleAddTask}>
                  <Plus size={16} className="mr-2" />
                  Add to Calendar
                </Button>

                {message && <p className="text-sm text-green-600">{message}</p>}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="lg:col-span-2">
          <Card className="mb-6">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">
                {selectedDateStr ? `TASKS ON ${selectedDateStr}` : "UPCOMING TASKS"}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {selectedEvents.length > 0 ? (
                  selectedEvents.map((event, index) => (
                    <div key={index} className="flex items-center border rounded-lg p-3">
                      <div className="w-10 h-10 rounded-full bg-farm-green-light flex items-center justify-center mr-3">
                        {getTaskIcon(event.type)}
                      </div>
                      <div className="flex-1">
                        <div className="font-medium">{event.title}</div>
                        <div className="text-xs text-muted-foreground">{event.date}</div>
                      </div>
                      <ArrowRight size={16} className="text-muted-foreground" />
                    </div>
                  ))
                ) : (
                  <p className="text-muted-foreground">No tasks for this date.</p>
                )}
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
