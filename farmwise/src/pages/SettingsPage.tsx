
import FarmLayout from "@/components/FarmLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Switch } from "@/components/ui/switch";
import { Globe, Bell, Shield, Save, LogOut } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const SettingsPage = () => {
  return (
    <FarmLayout>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold mb-6">Settings</h1>
        
        <Tabs defaultValue="account" className="mb-6">
          <TabsList className="grid grid-cols-4 mb-4">
            <TabsTrigger value="account">Account</TabsTrigger>
            <TabsTrigger value="farm">Farm Profile</TabsTrigger>
            <TabsTrigger value="notifications">Notifications</TabsTrigger>
            <TabsTrigger value="language">Language & Region</TabsTrigger>
          </TabsList>
          
          <TabsContent value="account" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Account Information</CardTitle>
                <CardDescription>Manage your account details and preferences</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" defaultValue="John Smith" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" type="email" defaultValue="john@example.com" />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" type="tel" placeholder="Enter your phone number" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="role">User Role</Label>
                    <Input id="role" defaultValue="Farm Owner" disabled />
                  </div>
                </div>
                
                <Separator />
                
                <div className="space-y-2">
                  <Label>Password</Label>
                  <div className="grid grid-cols-2 gap-2">
                    <Input type="password" value="••••••••" disabled />
                    <Button variant="outline">Change Password</Button>
                  </div>
                </div>
                
                <div className="pt-4 flex justify-between">
                  <Button variant="destructive">
                    <LogOut className="mr-2 h-4 w-4" />
                    Logout
                  </Button>
                  <Button>
                    <Save className="mr-2 h-4 w-4" />
                    Save Changes
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="farm" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Farm Profile</CardTitle>
                <CardDescription>Update information about your farm</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="farm-name">Farm Name</Label>
                    <Input id="farm-name" defaultValue="Green Valley Farm" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="farm-location">Location</Label>
                    <Input id="farm-location" defaultValue="Greenfield County" />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="farm-size">Farm Size</Label>
                    <div className="flex space-x-2">
                      <Input id="farm-size" defaultValue="25" />
                      <Select defaultValue="acres">
                        <SelectTrigger className="w-24">
                          <SelectValue placeholder="Unit" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="acres">Acres</SelectItem>
                          <SelectItem value="hectares">Hectares</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="soil-type">Primary Soil Type</Label>
                    <Select defaultValue="loamy">
                      <SelectTrigger>
                        <SelectValue placeholder="Select soil type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="sandy">Sandy</SelectItem>
                        <SelectItem value="clay">Clay</SelectItem>
                        <SelectItem value="loamy">Loamy</SelectItem>
                        <SelectItem value="silty">Silty</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <Button className="mt-4">Save Farm Profile</Button>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="notifications" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Notification Settings</CardTitle>
                <CardDescription>Control how and when you receive alerts</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-4">
                  {[
                    "Weather alerts",
                    "Planting recommendations",
                    "Market price updates",
                    "Community messages",
                    "System updates"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">{item}</p>
                        <p className="text-sm text-muted-foreground">
                          Get notifications about {item.toLowerCase()}
                        </p>
                      </div>
                      <Switch />
                    </div>
                  ))}
                </div>
                
                <Separator className="my-4" />
                
                <div className="space-y-2">
                  <Label>Notification Methods</Label>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="flex items-center space-x-2">
                      <Switch id="email-notifications" />
                      <Label htmlFor="email-notifications">Email</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Switch id="sms-notifications" />
                      <Label htmlFor="sms-notifications">SMS</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Switch id="app-notifications" defaultChecked />
                      <Label htmlFor="app-notifications">In-App</Label>
                    </div>
                  </div>
                </div>
                
                <Button className="mt-4">Save Notification Settings</Button>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="language" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Language & Regional Settings</CardTitle>
                <CardDescription>Choose your preferred language and regional formats</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="language">Application Language</Label>
                  <Select defaultValue="en">
                    <SelectTrigger>
                      <SelectValue placeholder="Select language" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="en">English</SelectItem>
                      <SelectItem value="es">Español</SelectItem>
                      <SelectItem value="fr">Français</SelectItem>
                      <SelectItem value="hi">हिन्दी (Hindi)</SelectItem>
                      <SelectItem value="pa">ਪੰਜਾਬੀ (Punjabi)</SelectItem>
                      <SelectItem value="mr">मराठी (Marathi)</SelectItem>
                      <SelectItem value="te">తెలుగు (Telugu)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="units">Measurement Units</Label>
                  <Select defaultValue="imperial">
                    <SelectTrigger>
                      <SelectValue placeholder="Select unit system" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="imperial">Imperial (°F, in, lb)</SelectItem>
                      <SelectItem value="metric">Metric (°C, cm, kg)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="date-format">Date Format</Label>
                  <Select defaultValue="mdy">
                    <SelectTrigger>
                      <SelectValue placeholder="Select date format" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="mdy">MM/DD/YYYY</SelectItem>
                      <SelectItem value="dmy">DD/MM/YYYY</SelectItem>
                      <SelectItem value="ymd">YYYY/MM/DD</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="time-format">Time Format</Label>
                  <Select defaultValue="12h">
                    <SelectTrigger>
                      <SelectValue placeholder="Select time format" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="12h">12-hour (AM/PM)</SelectItem>
                      <SelectItem value="24h">24-hour</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <Button className="mt-4">
                  <Globe className="mr-2 h-4 w-4" />
                  Save Language & Regional Settings
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </FarmLayout>
  );
};

export default SettingsPage;
