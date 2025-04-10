
import FarmLayout from "@/components/FarmLayout";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { MessageSquare, Heart, Share2, Users, Filter } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";

const CommunityPage = () => {
  const [postContent, setPostContent] = useState("");
  
  const handleSubmitPost = () => {
    // This would connect to a backend service in a real app
    console.log("Posted:", postContent);
    setPostContent("");
  };

  return (
    <FarmLayout>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold mb-6">Farmer Community</h1>
        
        <Tabs defaultValue="feed" className="mb-6">
          <TabsList className="grid grid-cols-3 mb-4">
            <TabsTrigger value="feed">Feed</TabsTrigger>
            <TabsTrigger value="discussions">Discussions</TabsTrigger>
            <TabsTrigger value="experts">Ask Experts</TabsTrigger>
          </TabsList>
          
          <TabsContent value="feed" className="space-y-4">
            <Card>
              <CardContent className="pt-4">
                <div className="flex items-start gap-3">
                  <Avatar>
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <Textarea 
                      placeholder="Share tips or ask questions..."
                      className="mb-3"
                      value={postContent}
                      onChange={(e) => setPostContent(e.target.value)}
                      rows={3}
                    />
                    <div className="flex justify-between items-center">
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline">
                          <Users size={16} className="mr-2" />
                          Tag Farmers
                        </Button>
                      </div>
                      <Button onClick={handleSubmitPost} disabled={!postContent.trim()}>
                        Post
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-medium">Recent Posts</h2>
              <Button variant="outline" size="sm">
                <Filter size={14} className="mr-1" />
                Filter
              </Button>
            </div>
            
            {/* Sample Posts */}
            <Card className="mb-4">
              <CardContent className="pt-4">
                <div className="flex gap-3">
                  <Avatar>
                    <AvatarImage src="/placeholder.svg" alt="FL" />
                    <AvatarFallback>FL</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-medium">Farmer Linda</div>
                    <div className="text-sm text-muted-foreground">2 hours ago</div>
                    <p className="mt-3 mb-3">Has anyone tried the new drought-resistant corn variety? Thinking about planting some next season.</p>
                    <div className="flex gap-4">
                      <Button variant="ghost" size="sm">
                        <Heart size={16} className="mr-1" />
                        24
                      </Button>
                      <Button variant="ghost" size="sm">
                        <MessageSquare size={16} className="mr-1" />
                        8 Comments
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Share2 size={16} className="mr-1" />
                        Share
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="mb-4">
              <CardContent className="pt-4">
                <div className="flex gap-3">
                  <Avatar>
                    <AvatarImage src="/placeholder.svg" alt="MJ" />
                    <AvatarFallback>MJ</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-medium">Mike Johnson</div>
                    <div className="text-sm text-muted-foreground">Yesterday</div>
                    <p className="mt-3 mb-3">Just finished soil testing on my southern fields. pH levels looking good this year! Happy to share results if anyone's interested.</p>
                    <div className="flex gap-4">
                      <Button variant="ghost" size="sm">
                        <Heart size={16} className="mr-1" />
                        36
                      </Button>
                      <Button variant="ghost" size="sm">
                        <MessageSquare size={16} className="mr-1" />
                        14 Comments
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Share2 size={16} className="mr-1" />
                        Share
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="discussions" className="space-y-4">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-medium mb-4">Discussion Groups</h3>
                <div className="space-y-4">
                  {["Sustainable Farming", "Crop Rotation Techniques", "Weather Patterns", "Market Prices"].map((group, index) => (
                    <div key={index} className="flex items-center justify-between p-3 border rounded-md">
                      <div>
                        <div className="font-medium">{group}</div>
                        <div className="text-sm text-muted-foreground">120+ members</div>
                      </div>
                      <Button>Join</Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="experts" className="space-y-4">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-medium mb-4">Ask an Agricultural Expert</h3>
                <p className="mb-4 text-muted-foreground">Get advice from certified agricultural experts about soil health, crop diseases, and more.</p>
                
                <div className="space-y-4">
                  <Input placeholder="Enter your farming question..." />
                  <div className="grid grid-cols-2 gap-2">
                    <Button>Ask Question</Button>
                    <Button variant="outline">Browse FAQs</Button>
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

export default CommunityPage;
