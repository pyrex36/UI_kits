import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CloudSun } from "lucide-react";

export default function LoginForm() {
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
          <CardTitle className="text-2xl">Welcome Back!</CardTitle>
          <h2 className="text-3xl font-bold">Login</h2>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="john@example.com" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" />
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
            Login
          </Button>
          <div className="text-center space-y-4">
            <p className="text-sm text-gray-600">or continue with</p>
            <div className="flex justify-center space-x-4">
              <Button
                className="w-15 h-15 flex items-center justify-center"
                style={{
                  backgroundImage:
                    "linear-gradient(to right, #000000 0%, #53346D 51%, #000000 100%)",
                  backgroundSize: "200% auto",
                  transition: "0.5s",
                  boxShadow: "0 0 20px #eee",
                  borderRadius: "10px",
                  margin: "10px",
                }}
                onMouseOver={(e) =>
                  (e.currentTarget.style.backgroundPosition = "right center")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundPosition = "left center")
                }
              >
                <img
                  src="https://www.google.com/favicon.ico"
                  alt="Google"
                  className="w-5 h-5"
                />
              </Button>
              <Button
                className="w-15 h-15 flex items-center justify-center"
                style={{
                  backgroundImage:
                    "linear-gradient(to right, #000000 0%, #53346D 51%, #000000 100%)",
                  backgroundSize: "200% auto",
                  transition: "0.5s",
                  boxShadow: "0 0 20px #eee",
                  borderRadius: "10px",
                  margin: "10px",
                }}
                onMouseOver={(e) =>
                  (e.currentTarget.style.backgroundPosition = "right center")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundPosition = "left center")
                }
              >
                <img
                  src="https://www.apple.com/favicon.ico"
                  alt="Apple"
                  className="w-5 h-5"
                />
              </Button>
              <Button
                className="w-15 h-15 flex items-center justify-center"
                style={{
                  backgroundImage:
                    "linear-gradient(to right, #000000 0%, #53346D 51%, #000000 100%)",
                  backgroundSize: "200% auto",
                  transition: "0.5s",
                  boxShadow: "0 0 20px #eee",
                  borderRadius: "10px",
                  margin: "10px",
                }}
                onMouseOver={(e) =>
                  (e.currentTarget.style.backgroundPosition = "right center")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundPosition = "left center")
                }
              >
                <img
                  src="https://www.facebook.com/favicon.ico"
                  alt="Facebook"
                  className="w-5 h-5"
                />
              </Button>
            </div>
            <p className="text-sm">
              Don't have an account?{" "}
              <a href="/register" className="text-blue-700 hover:underline">
                Register
              </a>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
