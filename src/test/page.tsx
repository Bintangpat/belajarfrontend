

import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import {
  Monitor,
  Smartphone,
  Palette,
  PenTool,
  Diamond,
  Globe,
  AppWindow,
  Box,
  Frame,
  Brush,
  Image as ImageIcon,
  Zap,
  ArrowRight,
} from "lucide-react";

// --- Data ---
const tagsTemplate = [
  { label: "Landing Pages", icon: Monitor },
  { label: "Social Media", icon: Smartphone },
  { label: "Product Design", icon: Palette },
  { label: "Copywriting", icon: PenTool },
  { label: "Logos", icon: Diamond },
  { label: "Websites", icon: Globe },
  { label: "Mobile Apps", icon: AppWindow },
  { label: "Digital Products", icon: Box },
  { label: "Branding", icon: Frame },
  { label: "UI/UX Design", icon: Brush },
  { label: "Illustrations", icon: ImageIcon },
  { label: "Motion Design", icon: Zap },
];

const plans = [
  {
    name: "Starter",
    price: "799",
    featured: false,
    features: [
      "Landing Page Design",
      "Mobile Responsive",
      "2 Revisions",
      "5-Day Delivery",
    ],
  },
  {
    name: "Most Popular",
    price: "1,999",
    featured: true,
    features: [
      "Full Website (5 pages)",
      "Webflow Development",
      "Unlimited Revisions",
      "SEO Optimized",
      "14-Day Delivery",
    ],
  },
  {
    name: "Enterprise",
    price: "4,999",
    featured: false,
    features: [
      "Custom Web App",
      "Brand Identity",
      "Design System",
      "Priority Support",
      "30-Day Delivery",
    ],
  },
];

// --- Animation Variants ---
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" as const },
  },
};

export default function MilarStudio() {
  const arenaRef = useRef<HTMLDivElement>(null);

  // State for randomized tag drop positions to avoid hydration mismatch
  const [scatteredTags, setScatteredTags] = useState<any[]>([]);

  useEffect(() => {
    // Generate random settling positions for the tags to simulate a physics drop
    const generated = tagsTemplate.map((tag, index) => ({
      ...tag,
      id: index,
      endX: Math.random() * 70 + 10, // 10% to 80% width
      endY: Math.random() * 50 + 30, // 30% to 80% height (bottom settling)
      rotation: Math.random() * 50 - 25, // -25deg to 25deg
      delay: index * 0.12,
    }));
    setScatteredTags(generated);
  }, []);

  return (
    <div className="bg-[#0a0a0a] text-white overflow-x-hidden selection:bg-[#2200FF] selection:text-white">
      {/* HERO SECTION */}
      <section className="min-h-screen bg-white text-[#0a0a0a] flex flex-col justify-center px-6 md:px-12 pt-32 pb-16 relative overflow-hidden">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="max-w-[1440px] mx-auto w-full"
        >
          <motion.p
            variants={fadeUp}
            className="text-[0.72rem] tracking-[0.25em] uppercase text-[#888888] mb-5"
          >
            UI/UX Designer & Developer
          </motion.p>

          <motion.h1
            variants={fadeUp}
            className="text-[clamp(5rem,14vw,13rem)] leading-[0.92] text-[#2200FF] uppercase font-black tracking-tighter relative z-10"
          >
            <span className="font-serif italic font-normal text-[#0a0a0a] text-[clamp(3.5rem,8vw,8rem)] normal-case tracking-normal">
              I'm a
            </span>
            <br />
            DESIGNER
          </motion.h1>

          <motion.div
            variants={fadeUp}
            className="mt-10 flex flex-col md:flex-row gap-6 md:gap-16 md:align-bottom md:items-end"
          >
            <p className="text-[0.82rem] leading-[1.7] text-[#888888] max-w-[200px] uppercase tracking-[0.05em] font-medium">
              Specialized in Web Design, UX/UI Webflow, and Front End
              Development.
            </p>
            <button className="group bg-[#2200FF] text-white border-none py-4 px-11 text-[0.82rem] tracking-[0.18em] uppercase rounded-full cursor-pointer transition-all duration-300 hover:scale-[1.04] hover:shadow-[0_8px_30px_rgba(34,0,255,0.4)] flex items-center justify-center gap-2">
              Let's Chat{" "}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <p className="text-[0.82rem] leading-[1.7] text-[#888888] max-w-[200px] uppercase tracking-[0.05em] font-medium md:text-right md:ml-auto">
              Build a credible, conversion-focused website that shows your ideal
              client exactly how you can help them.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* SERVICES — FALLING TAGS SECTION */}
      <section className="bg-[#2200FF] pt-20 px-6 md:px-12 relative overflow-hidden min-h-screen flex flex-col">
        <div className="max-w-[1440px] mx-auto w-full">
          <div className="flex flex-col md:flex-row justify-between items-start mb-8 gap-8">
            <div>
              <h2 className="text-[clamp(4rem,10vw,9rem)] leading-[0.9] text-white uppercase font-black tracking-tighter">
                ALL YOUR
                <br />
                <span className="font-serif italic font-normal text-[clamp(3rem,7vw,7rem)] normal-case tracking-normal">
                  design needs
                </span>
              </h2>
            </div>
            <div className="md:text-right max-w-[240px]">
              <p className="text-[0.8rem] leading-[1.7] text-white/70 mb-5">
                All type of services in one place with the assurance of highest
                excellence and usability
              </p>
              <button className="bg-transparent text-white border-[1.5px] border-white py-3 px-7 text-[0.75rem] tracking-[0.18em] uppercase rounded-full cursor-pointer transition-all duration-300 hover:bg-white hover:text-[#2200FF]">
                Book a Call
              </button>
            </div>
          </div>
        </div>

        {/* Tag drop zone */}
        <div
          ref={arenaRef}
          className="relative w-full h-[480px] mt-4 flex-grow overflow-hidden max-w-[1440px] mx-auto"
        >
          {scatteredTags.map((tag) => {
            const Icon = tag.icon;
            return (
              <motion.div
                key={tag.id}
                drag
                dragConstraints={arenaRef}
                whileDrag={{ scale: 1.1, zIndex: 50 }}
                initial={{
                  opacity: 0,
                  y: -300,
                  x: `${Math.random() * 80}%`,
                  rotate: tag.rotation - 30,
                }}
                whileInView={{
                  opacity: 1,
                  y: `${tag.endY}%`,
                  x: `${tag.endX}%`,
                  rotate: tag.rotation,
                }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{
                  type: "spring",
                  bounce: 0.4,
                  duration: 2,
                  delay: tag.delay,
                }}
                className="absolute bg-white text-[#0a0a0a] rounded-full py-2.5 px-6 font-serif italic text-[clamp(0.85rem,1.8vw,1.1rem)] whitespace-nowrap cursor-grab active:cursor-grabbing flex items-center gap-2.5 shadow-[0_4px_20px_rgba(0,0,0,0.15)] will-change-transform"
              >
                <Icon className="w-4 h-4 text-[#2200FF]" />
                {tag.label}
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* PRICING SECTION */}
      <section className="bg-white text-[#0a0a0a] pt-20 px-6 md:px-12 pb-24">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-[1440px] mx-auto w-full"
        >
          <motion.div
            variants={fadeUp}
            className="flex gap-2.5 items-baseline mb-14"
          >
            <h2 className="text-[clamp(3.5rem,8vw,7rem)] text-[#2200FF] font-black uppercase tracking-tighter leading-none">
              PRICING
            </h2>
            <span className="font-serif italic font-normal text-[clamp(2.5rem,6vw,5.5rem)] text-[#0a0a0a] leading-none">
              plan
            </span>
          </motion.div>

          <div className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-6">
            {plans.map((plan, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className={`border-[1.5px] rounded-[1.5rem] p-8 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_50px_rgba(34,0,255,0.08)] flex flex-col ${plan.featured
                    ? "bg-[#2200FF] text-white border-[#2200FF]"
                    : "border-black/12 hover:border-[#2200FF]"
                  }`}
              >
                <p
                  className={`text-[0.72rem] tracking-[0.2em] uppercase mb-2 ${plan.featured ? "opacity-70" : "opacity-60"}`}
                >
                  {plan.name}
                </p>
                <p className="font-black text-[3.5rem] leading-none tracking-tighter mb-4">
                  <sup className="text-[1.5rem] align-super font-medium mr-1">
                    $
                  </sup>
                  {plan.price}
                </p>
                <ul
                  className={`text-[0.83rem] leading-[2] mt-4 flex-grow ${plan.featured ? "opacity-85" : "opacity-75"}`}
                >
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-center gap-2">
                      <ArrowRight className="w-3 h-3 opacity-50" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  );
}
