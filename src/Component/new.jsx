import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star } from "lucide-react";

// ✅ IMPORT IMAGES
import webImg from "./assets/man.png";
import appImg from "./assets/man.png";
import uiuxImg from "./assets/man.png";
import softwareImg from "./assets/man.png";

// ================= DATA =================
const navItems = ["About", "Services", "Projects", "Contact"];

const services = [
  {
    title: "Web Development",
    desc: "Modern responsive websites using React, Tailwind & latest tech.",
    img: webImg,
  },
  {
    title: "Mobile Apps",
    desc: "Android & iOS apps with smooth performance and UI.",
    img: appImg,
  },
  {
    title: "UI/UX Design",
    desc: "Clean, modern, and user-friendly interface designs.",
    img: uiuxImg,
  },
  {
    title: "Software Solutions",
    desc: "Custom software for business automation and growth.",
    img: softwareImg,
  },
];

const whyItems = [
  "High Quality Development",
  "Affordable Pricing",
  "Fast Delivery",
  "24/7 Support",
];

const testimonials = [
  { name: "Arun Kumar", role: "Startup Founder" },
  { name: "Priya Sharma", role: "Business Owner" },
];

// ================= COMPONENT =================
export default function App() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % services.length);
  const prev = () => setIndex((prev) => (prev - 1 + services.length) % services.length);

  return (
    <div className="bg-[#07081a] text-white overflow-x-hidden">

      {/* ================= NAVBAR ================= */}
      <nav className="flex justify-between items-center px-10 py-6">
        <h1 className="text-xl font-bold">Ran Software Solutions</h1>

        <ul className="hidden md:flex gap-8 text-gray-300">
          {navItems.map((item, i) => (
            <li key={i} className="relative group cursor-pointer">
              {item}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-yellow-400 group-hover:w-full transition-all"></span>
            </li>
          ))}
        </ul>

        <button className="bg-yellow-400 text-black px-5 py-2 rounded-full font-semibold hover:scale-105 transition">
          Get Quote
        </button>
      </nav>

      {/* ================= HERO ================= */}
      <section className="text-center px-6 py-20">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-bold leading-tight"
        >
          Build Your Business with <br />
          <span className="text-yellow-400">Ran Software Solutions</span>
        </motion.h1>

        <p className="text-gray-400 mt-6 max-w-xl mx-auto">
          We create modern websites, apps, and software to grow your business digitally.
        </p>

        <div className="flex justify-center gap-4 mt-8">
          <button className="bg-indigo-500 px-6 py-3 rounded-full hover:scale-105 transition">
            Our Services
          </button>
          <button className="border px-6 py-3 rounded-full hover:bg-white hover:text-black transition">
            Contact Us
          </button>
        </div>

        {/* ===== BIG 3D SERVICES CARD ===== */}
       <div className="mt-24 flex justify-center relative h-[450px] perspective-[1200px]">
  <AnimatePresence>
    {services.map((card, i) => {
      const pos = (i - index + services.length) % services.length;

      return (
        <motion.div
          key={i}
          drag="x"
          whileHover={{ rotateY: 10, rotateX: 5 }}
          onDragEnd={(e, info) => {
            if (info.offset.x < -100) next();
            if (info.offset.x > 100) prev();
          }}
          animate={{
            scale: pos === 0 ? 1 : 0.8,
            x: pos * 100,
            y: pos * -40,
            opacity: pos === 0 ? 1 : 0.3,
            zIndex: 10 - pos,
          }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          className="absolute w-[95%] md:w-[70%] lg:w-[55%] h-[400px] rounded-3xl 
          backdrop-blur-xl bg-white/5 border border-white/10 
          shadow-[0_0_40px_rgba(99,102,241,0.3)] 
          overflow-hidden flex flex-col justify-between group"
        >
          {/* 🔥 GLOW BORDER */}
          <div className="absolute inset-0 rounded-3xl border border-transparent group-hover:border-indigo-400 transition duration-500"></div>

          {/* CONTENT */}
          <div className="p-6 z-10">
            <h3 className="text-2xl font-bold group-hover:text-yellow-400 transition">
              {card.title}
            </h3>
            <p className="text-gray-400 mt-2">{card.desc}</p>
          </div>

          {/* IMAGE WITH OVERLAY */}
          <div className="relative flex-1 overflow-hidden">
            <img
              src={card.img}
              alt={card.title}
              className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
            />

            {/* GRADIENT OVERLAY */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

            {/* FLOATING TEXT */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileHover={{ opacity: 1, y: 0 }}
              className="absolute bottom-4 left-4 text-sm text-white"
            >
              Explore Service →
            </motion.div>
          </div>

          {/* 🔥 BOTTOM GLOW BAR */}
          <motion.div
            animate={{ x: ["-100%", "100%"] }}
            transition={{ repeat: Infinity, duration: 3 }}
            className="h-[2px] bg-gradient-to-r from-transparent via-indigo-400 to-transparent"
          />
        </motion.div>
      );
    })}
  </AnimatePresence>
</div>
      </section>

      {/* ================= WHY ================= */}
      <section className="px-6 py-20">
        <h2 className="text-center text-3xl font-bold">
          Why Choose <span className="text-yellow-400 italic">Us?</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-6 mt-12 max-w-5xl mx-auto">
          {whyItems.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="bg-[#12143a] p-6 rounded-xl border border-white/20 shadow-lg"
            >
              <h3 className="font-semibold text-lg">{item}</h3>
              <p className="text-gray-400 text-sm mt-2">
                We ensure top-notch service and customer satisfaction.
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= TESTIMONIALS ================= */}
      <section className="px-6 py-20 text-center">
        <h2 className="text-3xl font-bold">
          Client <span className="text-yellow-400 italic">Feedback</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-6 mt-12 max-w-4xl mx-auto">
          {testimonials.map((user, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-br from-[#1a1d4d] to-[#0e1030] p-6 rounded-xl border border-white/20"
            >
              <div className="flex justify-center gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} className="text-yellow-400 fill-yellow-400" />
                ))}
              </div>

              <p className="text-gray-400 text-sm">
                Excellent service and professional team. Highly recommended!
              </p>

              <h4 className="mt-4 font-semibold">{user.name}</h4>
              <p className="text-xs text-gray-500">{user.role}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="px-6 py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-pink-500/20 blur-3xl opacity-30"></div>

        <motion.div className="relative max-w-6xl mx-auto bg-[#12143a] p-10 rounded-3xl flex flex-col md:flex-row justify-between items-center gap-10">
          <div>
            <h2 className="text-3xl font-bold">
              Start Your Project Today 🚀
            </h2>
            <p className="text-gray-400 mt-2">
              Let’s build something amazing together.
            </p>
            <button className="mt-4 bg-yellow-400 text-black px-6 py-3 rounded-full">
              Get Started
            </button>
          </div>

         <motion.div
  animate={{ y: [0, -15, 0] }}
  transition={{ repeat: Infinity, duration: 4 }}
  className="w-[300px] h-[180px] bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center overflow-hidden"
>
  
  <motion.h2
    className="text-2xl font-extrabold tracking-wide"
    animate={{
      scale: [1, 1.2, 1],
      opacity: [0.6, 1, 0.6],
    }}
    transition={{
      repeat: Infinity,
      duration: 2,
    }}
  >
     Launch Your Idea
  </motion.h2>

</motion.div>
        </motion.div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="px-10 py-10 border-t border-gray-800 text-gray-400 text-sm"> <div className="flex flex-col md:flex-row justify-between gap-6"> <div> <h1 className="text-white font-bold">Ran Software Solutions</h1> <p className="mt-2">© 2026 Ran Software Solutions</p> </div> <div> <h4 className="text-white">Services</h4> <ul className="mt-2 space-y-1"> <li>Web Development</li> <li>Mobile Apps</li> <li>UI/UX</li> </ul> </div> <div> <h4 className="text-white">Contact</h4> <p className="mt-2">ran@software.com</p> </div> </div> </footer>
    </div>
  );
}