import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { CloudSun } from "lucide-react";

export default function RegisterForm() {
  return (
    <div
      className="min-h-screen w-full flex items-center justify-center p-4"
      style={{
        backgroundColor: "#FF3CAC",
        backgroundImage:
          "linear-gradient(225deg, #FF3CAC 0%, #784BA0 50%, #2B86C5 100%)",
      }}
    >
      <Card
        className="w-full max-w-md opacity-100"
        style={{
          backgroundImage: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
        }}
      >
        <CardHeader className="space-y-1 flex flex-col items-center">
          <div className="w-12 h-12 rounded-full bg-sky-100 flex items-center justify-center mb-2">
            <CloudSun className="w-8 h-8 text-yellow-400" />
          </div>
          <CardTitle className="text-2xl">Join Us!!</CardTitle>
          <h2 className="text-3xl font-bold">Register</h2>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="firstName">First Name</Label>
            <Input id="firstName" placeholder="John" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="lastName">Last Name</Label>
            <Input id="lastName" placeholder="Doe" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="username">Username</Label>
            <Input id="username" placeholder="johndoe" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">Phone</Label>
            <Input id="phone" type="tel" placeholder="+1 234 567 8900" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="john@example.com" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" />
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="terms" />
            <label
              htmlFor="terms"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              agree to the terms & conditions
            </label>
          </div>
          <Button
            className="w-full"
            style={{
              backgroundImage:
                "linear-gradient(to right, #000000 0%, #53346D  51%, #000000  100%)",
              backgroundSize: "200% auto",
              transition: "0.5s",
              boxShadow: "0 0 20px #eee",
              textTransform: "uppercase",
              padding: "15px 45px",
            }}
            onMouseOver={(e) =>
              (e.currentTarget.style.backgroundPosition = "right center")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundPosition = "left center")
            }
          >
            Register
          </Button>
          <div className="text-center space-y-4">
            <p className="text-sm text-gray-600">or continue with</p>
            <div className="flex justify-center space-x-4">
              <Button variant="outline" className="w-12 h-12 p-0">
                <img
                  src="https://www.google.com/favicon.ico"
                  alt="Google"
                  className="w-5 h-5"
                />
              </Button>
              <Button variant="outline" className="w-12 h-12 p-0">
                <img
                  src="https://www.apple.com/favicon.ico"
                  alt="Apple"
                  className="w-5 h-5"
                />
              </Button>
              <Button variant="outline" className="w-12 h-12 p-0">
                <img
                  src="https://www.facebook.com/favicon.ico"
                  alt="Facebook"
                  className="w-5 h-5"
                />
              </Button>
            </div>
            <p className="text-sm">
              Already have an account?{" "}
              <a href="/login" className="text-blue-700 hover:underline">
                Login
              </a>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
