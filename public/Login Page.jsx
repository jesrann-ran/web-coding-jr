import React, { useState } from "react";
import { motion } from "framer-motion";

export default function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Logged in with:\nEmail: ${email}`);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-cyan-900">
      {/* Water Glow Background */}
      <div className="absolute w-[500px] h-[500px] bg-cyan-400 opacity-20 blur-3xl rounded-full top-10 left-10 animate-pulse"></div>
      <div className="absolute w-[400px] h-[400px] bg-blue-500 opacity-20 blur-3xl rounded-full bottom-10 right-10 animate-pulse"></div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative bg-white/10 backdrop-blur-xl shadow-2xl rounded-2xl p-8 w-80 border border-white/20"
      >
        {/* Logo + Title */}
        <div className="flex flex-col items-center mb-6">
          <div className="w-14 h-14 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 flex items-center justify-center text-white text-xl font-bold shadow-lg">
            Jr
          </div>
          <h1 className="text-2xl font-bold text-white mt-3">
             Login
          </h1>
          <p className="text-white/70 text-sm">Flow into your account</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="text-white text-sm">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full mt-1 px-3 py-2 rounded-lg bg-white/20 text-white placeholder-white/60 outline-none focus:ring-2 focus:ring-cyan-400 transition"
              required
            />
          </div>

          <div>
            <label className="text-white text-sm">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="w-full mt-1 px-3 py-2 rounded-lg bg-white/20 text-white placeholder-white/60 outline-none focus:ring-2 focus:ring-cyan-400 transition"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-2 top-2 text-cyan-200 text-sm hover:text-white transition"
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
          </div>

          {/*Water Button*/}
          <button type="submit"
          className="w-full py-2 rounded-lg font-semibold text-white bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-blue-500 hover:to-cyan-400 transition-all duration-300 shadow-lg hover:scale-105"
          >
            Sign In

          </button>

          
        </form>
        <p className="text-center text-white/80 text-sm mt-4">
        Don't have an account?{" "}
        <span className="underline cursor-pointer hover:text-cyan-300">
          Sign up

        </span>

        </p>

       
      </motion.div>
    </div>
  );
}