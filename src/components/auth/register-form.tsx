import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { CloudSun } from "lucide-react";
import { motion } from "framer-motion";

export default function RegisterForm() {
  return (
    <div
      className="min-h-screen w-full flex items-center justify-center p-4 animate-gradient"
      style={{
        backgroundSize: "400% 400%",
        backgroundImage:
          "linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Card
          className="w-full max-w-md opacity-100 shadow-2xl hover:shadow-3xl transition-shadow duration-300"
          style={{
            backgroundImage:
              "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
          }}
        >
          <CardHeader className="space-y-1 flex flex-col items-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
              className="w-12 h-12 rounded-full bg-sky-100 flex items-center justify-center mb-2"
            >
              <CloudSun className="w-8 h-8 text-yellow-400" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <CardTitle className="text-2xl text-center">Join Us!!</CardTitle>
              <h2 className="text-3xl font-bold">Register</h2>
            </motion.div>
          </CardHeader>
          <CardContent className="space-y-4">
            {[
              { id: "firstName", label: "First Name", placeholder: "John" },
              { id: "lastName", label: "Last Name", placeholder: "Doe" },
              { id: "username", label: "Username", placeholder: "johndoe" },
              {
                id: "phone",
                label: "Phone",
                placeholder: "+1 234 567 8900",
                type: "tel",
              },
              {
                id: "email",
                label: "Email",
                placeholder: "john@example.com",
                type: "email",
              },
              { id: "password", label: "Password", type: "password" },
            ].map((field, index) => (
              <motion.div
                key={field.id}
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="space-y-2"
              >
                <Label htmlFor={field.id}>{field.label}</Label>
                <Input
                  id={field.id}
                  type={field.type}
                  placeholder={field.placeholder}
                />
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.9 }}
              className="flex items-center space-x-2"
            >
              <Checkbox id="terms" />
              <label
                htmlFor="terms"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                agree to the terms & conditions
              </label>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0 }}
            >
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
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1 }}
              className="text-center space-y-4"
            >
              <p className="text-sm text-gray-600">or continue with</p>
              <div className="flex justify-center space-x-4">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
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
                      (e.currentTarget.style.backgroundPosition =
                        "right center")
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
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
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
                      (e.currentTarget.style.backgroundPosition =
                        "right center")
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
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
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
                      (e.currentTarget.style.backgroundPosition =
                        "right center")
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
                </motion.div>
              </div>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
                className="text-sm"
              >
                Already have an account?{" "}
                <a href="/login" className="text-blue-700 hover:underline">
                  Login
                </a>
              </motion.p>
            </motion.div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
