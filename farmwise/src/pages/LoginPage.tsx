
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import FarmHeader from "@/components/FarmHeader";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const LoginPage = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      toast({
        title: "Error",
        description: "Please enter both email and password",
        variant: "destructive",
      });
      return;
    }

    // In a real app, we would authenticate against a backend
    toast({
      title: "Login Successful",
      description: "Welcome back to Smart Farm Advisor!",
    });
    
    // Navigate to the dashboard
    setTimeout(() => navigate("/dashboard"), 1500);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <FarmHeader showUserMenu={false} />
      <div className="flex-1 flex items-center justify-center p-4">
        <div className="max-w-md w-full space-y-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-2">Login to Smart Farm Advisor</h1>
            <p className="text-gray-600">
              Access your personalized farming recommendations
            </p>
          </div>

          <form className="space-y-6" onSubmit={handleLogin}>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password">Password</Label>
                <Link
                  to="/forgot-password"
                  className="text-sm text-farm-green hover:underline"
                >
                  Forgot password?
                </Link>
              </div>
              <Input
                id="password"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <Button type="submit" className="w-full">
              LOGIN
            </Button>

            <div className="text-center">
              <p className="text-sm text-gray-600">
                Don't have an account?{" "}
                <Link to="/register" className="text-farm-green hover:underline">
                  Sign up
                </Link>
              </p>
            </div>
          </form>

          <div className="flex items-center justify-center">
            <Link to="/" className="text-sm text-farm-green hover:underline">
              Back to welcome page
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
