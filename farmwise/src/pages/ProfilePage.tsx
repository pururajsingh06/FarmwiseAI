
import FarmLayout from "@/components/FarmLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { CornIcon } from "@/components/CropIcons";
import { Calendar, MapPin, Edit, MessagesSquare, Award, Settings } from "lucide-react";

const ProfilePage = () => {
  return (
    <FarmLayout>
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-6 mb-6">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
            <Avatar className="h-24 w-24">
              <AvatarImage src="/placeholder.svg" alt="User Profile" />
              <AvatarFallback>JS</AvatarFallback>
            </Avatar>
            <div className="text-center md:text-left">
              <div className="flex items-center gap-2">
                <h1 className="text-2xl font-bold">John Smith</h1>
                <Badge variant="outline" className="bg-farm-green-light text-farm-green">Verified Farmer</Badge>
              </div>
              <p className="text-muted-foreground flex items-center justify-center md:justify-start gap-1 mt-1">
                <MapPin size={14} className="text-muted-foreground" />
                Greenfield County, CA
              </p>
              <p className="text-sm mt-2">Member since April 2024</p>
            </div>
          </div>
          
          <div className="flex gap-2">
            <Button size="sm" variant="outline">
              <Edit size={16} className="mr-2" />
              Edit Profile
            </Button>
            <Button size="sm" variant="outline">
              <Settings size={16} className="mr-2" />
              Settings
            </Button>
          </div>
        </div>
        
        <Tabs defaultValue="farm" className="mb-6">
          <TabsList className="grid grid-cols-4 mb-4">
            <TabsTrigger value="farm">My Farm</TabsTrigger>
            <TabsTrigger value="crops">My Crops</TabsTrigger>
            <TabsTrigger value="activity">Activity</TabsTrigger>
            <TabsTrigger value="community">Community</TabsTrigger>
          </TabsList>
          
          <TabsContent value="farm" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Farm Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
                  <div className="bg-muted rounded-md p-4">
                    <p className="text-sm text-muted-foreground">Farm Name</p>
                    <p className="font-medium">Green Valley Farm</p>
                  </div>
                  <div className="bg-muted rounded-md p-4">
                    <p className="text-sm text-muted-foreground">Total Area</p>
                    <p className="font-medium">25 acres</p>
                  </div>
                  <div className="bg-muted rounded-md p-4">
                    <p className="text-sm text-muted-foreground">Primary Soil Type</p>
                    <p className="font-medium">Loamy</p>
                  </div>
                  <div className="bg-muted rounded-md p-4">
                    <p className="text-sm text-muted-foreground">Climate Zone</p>
                    <p className="font-medium">Mediterranean</p>
                  </div>
                  <div className="bg-muted rounded-md p-4">
                    <p className="text-sm text-muted-foreground">Annual Rainfall</p>
                    <p className="font-medium">25-30 inches</p>
                  </div>
                  <div className="bg-muted rounded-md p-4">
                    <p className="text-sm text-muted-foreground">Farming Method</p>
                    <p className="font-medium">Organic</p>
                  </div>
                </div>
                
                <Separator />
                
                <div className="pt-4">
                  <h3 className="text-lg font-medium mb-3">Infrastructure</h3>
                  <div className="space-y-2">
                    <div className="bg-muted rounded-md p-3 flex justify-between">
                      <p>Irrigation System</p>
                      <Badge variant="outline" className="bg-green-50 text-green-700">Available</Badge>
                    </div>
                    <div className="bg-muted rounded-md p-3 flex justify-between">
                      <p>Weather Station</p>
                      <Badge variant="outline" className="bg-green-50 text-green-700">Available</Badge>
                    </div>
                    <div className="bg-muted rounded-md p-3 flex justify-between">
                      <p>Soil Sensors</p>
                      <Badge variant="outline" className="bg-red-50 text-red-700">Not Available</Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="crops" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Current Crops</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  <div className="border rounded-lg p-4 flex items-center gap-3">
                    <div className="h-12 w-12 rounded-full bg-farm-green-light flex items-center justify-center">
                      <CornIcon />
                    </div>
                    <div>
                      <h4 className="font-medium">Corn</h4>
                      <div className="flex items-center gap-2 text-sm">
                        <Badge variant="secondary">10 acres</Badge>
                        <span className="text-muted-foreground flex items-center gap-1">
                          <Calendar size={12} />
                          Planted: Apr 15
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="border rounded-lg p-4 flex items-center gap-3">
                    <div className="h-12 w-12 rounded-full bg-farm-green-light flex items-center justify-center">
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
                      <h4 className="font-medium">Soybeans</h4>
                      <div className="flex items-center gap-2 text-sm">
                        <Badge variant="secondary">8 acres</Badge>
                        <span className="text-muted-foreground flex items-center gap-1">
                          <Calendar size={12} />
                          Planted: May 2
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-4">
                  <Button variant="outline" className="w-full">
                    View All Crop Details
                  </Button>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Crop History</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium">2023 Season</h4>
                      <p className="text-sm text-muted-foreground">Wheat, Corn, Alfalfa</p>
                    </div>
                    <Button variant="ghost" size="sm">View Details</Button>
                  </div>
                  
                  <Separator />
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium">2022 Season</h4>
                      <p className="text-sm text-muted-foreground">Soybeans, Barley</p>
                    </div>
                    <Button variant="ghost" size="sm">View Details</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="activity" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    {
                      action: "Updated soil test results",
                      date: "2 hours ago",
                      icon: <Edit size={16} className="text-blue-500" />
                    },
                    {
                      action: "Added new crop: Soybeans",
                      date: "2 days ago",
                      icon: <CornIcon />
                    },
                    {
                      action: "Posted in Sustainable Farming group",
                      date: "1 week ago",
                      icon: <MessagesSquare size={16} className="text-green-500" />
                    },
                    {
                      action: "Earned 'Soil Expert' badge",
                      date: "2 weeks ago",
                      icon: <Award size={16} className="text-yellow-500" />
                    }
                  ].map((item, index) => (
                    <div key={index} className="flex gap-3">
                      <div className="mt-0.5">{item.icon}</div>
                      <div>
                        <p className="font-medium">{item.action}</p>
                        <p className="text-sm text-muted-foreground">{item.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="community" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Community Engagement</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-medium mb-2">Groups</h3>
                  <div className="space-y-2">
                    {["Sustainable Farming", "Organic Certification", "Local Farmers Network"].map((group, index) => (
                      <div key={index} className="flex items-center justify-between p-2 border rounded-md">
                        <p>{group}</p>
                        <Badge variant="outline">Member</Badge>
                      </div>
                    ))}
                  </div>
                </div>
                
                <Separator />
                
                <div>
                  <h3 className="font-medium mb-2">Contribution Statistics</h3>
                  <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
                    <div className="bg-muted rounded-md p-3 text-center">
                      <p className="text-2xl font-semibold">24</p>
                      <p className="text-sm text-muted-foreground">Posts</p>
                    </div>
                    <div className="bg-muted rounded-md p-3 text-center">
                      <p className="text-2xl font-semibold">108</p>
                      <p className="text-sm text-muted-foreground">Comments</p>
                    </div>
                    <div className="bg-muted rounded-md p-3 text-center">
                      <p className="text-2xl font-semibold">3</p>
                      <p className="text-sm text-muted-foreground">Badges</p>
                    </div>
                    <div className="bg-muted rounded-md p-3 text-center">
                      <p className="text-2xl font-semibold">Top 5%</p>
                      <p className="text-sm text-muted-foreground">Contributor</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </FarmLayout>
  );
};

export default ProfilePage;
