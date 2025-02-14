import React from "react";
import { ArrowLeft, ShoppingCart } from "lucide-react";
import { motion } from "framer-motion";

const Checkout = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="flex justify-center items-center min-h-screen bg-blue-500 p-4"
    >
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg w-full max-w-4xl relative"
      >
        {/* Header Icons */}
        <motion.div
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.3 }}
          className="absolute top-4 left-4 flex items-center space-x-4 text-white text-xl mb-6"
        >
          <ArrowLeft className="cursor-pointer" />
          <ShoppingCart className="cursor-pointer" />
        </motion.div>

        {/* Left Panel */}
        <div className="bg-blue-400 text-white p-8 md:w-1/2 rounded-t-lg md:rounded-l-lg md:rounded-tr-none">
          <h2 className="text-2xl font-bold mt-6">You're paying</h2>
          <p className="text-4xl font-extrabold my-2">
            $96.00 <span className="text-lg">Per year</span>
          </p>
          <div className="border-t border-white/50 my-4"></div>
          <div className="flex justify-between text-lg">
            <span>Platform advance</span>
            <span>$96.00</span>
          </div>
          <div className="border-t border-white/50 my-4"></div>
          <div className="flex justify-between text-lg">
            <span>Subtotal</span>
            <span>$96.00</span>
          </div>
          <div className="flex justify-between text-lg">
            <span>Tax</span>
            <span>$0.00</span>
          </div>
          <div className="border-t border-white/50 my-4"></div>
          <div className="flex justify-between text-lg font-bold">
            <span>Total due today</span>
            <span>$96.00</span>
          </div>
        </div>

        {/* Right Panel */}
        <div className="p-8 md:w-1/2">
          <h2 className="text-lg font-semibold mb-4">Contact information</h2>
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 border rounded-lg mb-4"
          />

          <h2 className="text-lg font-semibold mb-4">Payment method</h2>
          <input
            type="text"
            placeholder="Full name on card"
            className="w-full p-3 border rounded-lg mb-4"
          />
          <input
            type="text"
            placeholder="Card number"
            className="w-full p-3 border rounded-lg mb-4"
          />
          <div className="flex space-x-4">
            <input
              type="text"
              placeholder="MM / YY"
              className="w-1/2 p-3 border rounded-lg mb-4"
            />
            <input
              type="text"
              placeholder="CVC"
              className="w-1/2 p-3 border rounded-lg mb-4"
            />
          </div>

          <h2 className="text-lg font-semibold mb-4">Billing Address</h2>
          <input
            type="text"
            placeholder="Address line 1"
            className="w-full p-3 border rounded-lg mb-4"
          />
          <input
            type="text"
            placeholder="Address line 2"
            className="w-full p-3 border rounded-lg mb-4"
          />
          <input
            type="text"
            placeholder="Country"
            className="w-full p-3 border rounded-lg mb-4"
          />
          <div className="flex space-x-4">
            <input
              type="text"
              placeholder="City"
              className="w-1/2 p-3 border rounded-lg mb-4"
            />
            <input
              type="text"
              placeholder="Postal code"
              className="w-1/2 p-3 border rounded-lg mb-4"
            />
          </div>
          <input
            type="text"
            placeholder="State"
            className="w-full p-3 border rounded-lg mb-4"
          />

          <button
            className="w-full text-white p-3 rounded-lg text-lg font-bold animate-gradient"
            style={{
              backgroundSize: "200% auto",
              backgroundImage:
                "linear-gradient(to right, #4776E6 0%, #8E54E9  51%, #4776E6  100%)",
              transition: "0.5s",
              boxShadow: "0 0 20px #eee",
            }}
            onMouseOver={(e) =>
              (e.currentTarget.style.backgroundPosition = "right center")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundPosition = "left center")
            }
          >
            Pay
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Checkout;
