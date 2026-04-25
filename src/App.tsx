"use client";

import { useRef, useState } from "react";
import {
  motion,
  useInView,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";

// ─── Types ───────────────────────────────────────────────────────────────────

interface NavItem {
  label: string;
  href: string;
}

interface StatItem {
  value: string;
  label: string;
}

interface ServiceCard {
  icon: string;
  title: string;
  description: string;
  color: string;
}

interface Industry {
  name: string;
  size: "sm" | "md" | "lg";
}

interface FaqItem {
  question: string;
  answer: string;
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "#" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

const STATS: StatItem[] = [
  {
    value: "100%",
    label: "Strategies for Business Growth and Market Expansion",
  },
  { value: "90%", label: "Global Corporations and Multinational Enterprises" },
  {
    value: "10k",
    label: "Companies collaborate to achieve goals and innovate.",
  },
];

const SERVICES: ServiceCard[] = [
  {
    icon: "📊",
    title: "Data Analytics Deep Insights",
    description:
      "Our team offers data analytics and insights for your business. We use tools to turn raw data into strategies that drive growth.",
    color: "from-rose-500/20 to-rose-500/5",
  },
  {
    icon: "🚀",
    title: "Product Innovation",
    description:
      "Our team offers data analytics and insights for your business. We use tools to turn raw data into strategies that drive growth.",
    color: "from-emerald-500/20 to-emerald-500/5",
  },
  {
    icon: "🤖",
    title: "AI Strategy Pro Consulting",
    description:
      "Our team offers data analytics and insights for your business. We use tools to turn raw data into strategies that drive growth.",
    color: "from-sky-500/20 to-sky-500/5",
  },
  {
    icon: "💬",
    title: "Consultation AI Chatbots",
    description:
      "Our team offers data analytics and insights for your business. We use tools to turn raw data into strategies that drive growth.",
    color: "from-violet-500/20 to-violet-500/5",
  },
];

const INDUSTRIES: Industry[] = [
  { name: "Logistics & Transportation", size: "md" },
  { name: "Food & Beverage", size: "sm" },
  { name: "Agriculture & Plantation", size: "lg" },
  { name: "Design & Creative", size: "sm" },
  { name: "Information Technology", size: "md" },
];

const FAQ_ITEMS: FaqItem[] = [
  {
    question: "What is the AutoBiz.ai?",
    answer:
      "AutoBiz.ai is an innovative AI solution designed to assist your business in achieving significant growth. By leveraging advanced algorithms and data analytics, Walawé provides actionable insights and strategies that empower you to reveal trends and optimize engagement. With Walawé you can uncover new opportunities and drive your business forward.",
  },
  {
    question: "How does Walawé work?",
    answer:
      "Walawé uses cutting-edge machine learning models to analyze your business data and deliver personalized growth strategies in real time.",
  },
  {
    question: "Can Walawé improve customer service?",
    answer:
      "Yes — Walawé's AI chatbots handle queries 24/7, reducing response times and improving customer satisfaction scores significantly.",
  },
  {
    question: "How can Walawé find new opportunities?",
    answer:
      "By processing market signals, competitor data, and internal KPIs, Walawé identifies untapped segments and emerging trends before your competitors.",
  },
  {
    question: "What benefits does Walawé offer businesses?",
    answer:
      "From automated reporting to predictive analytics and AI-driven consulting, Walawé delivers measurable ROI across every business function.",
  },
];

const FOOTER_LINKS: Record<string, string[]> = {
  Product: ["AI Business", "Business Consultation", "Auto Grow", "Pricing"],
  Resources: ["Help Center", "Tutorials", "Community", "API Documentation"],
  Support: ["FAQ", "Feedback", "Handbook"],
  "Social Media": ["Twitter", "LinkedIn", "Instagram", "Facebook"],
};

// ─── Sub-components ───────────────────────────────────────────────────────────

function FadeUp({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function Navbar() {
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();
  const bg = useTransform(
    scrollY,
    [0, 80],
    ["rgba(10,10,10,0)", "rgba(10,10,10,0.92)"],
  );

  return (
    <motion.header
      style={{ backgroundColor: bg }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm border-b border-white/5"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <motion.span
            whileHover={{ rotate: 90 }}
            transition={{ duration: 0.4 }}
            className="text-teal-400 text-2xl font-bold"
          >
            ✳
          </motion.span>
          <span className="text-white font-semibold tracking-tight text-lg">
            AutoBiz.ai
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-white/60 hover:text-white text-sm transition-colors duration-200"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <motion.button
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          className="hidden md:flex items-center gap-2 bg-teal-400 text-black text-sm font-semibold px-5 py-2.5 rounded-full"
        >
          Free Consultation
        </motion.button>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-white"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <div className="space-y-1.5">
            <span
              className={`block w-6 h-0.5 bg-white transition-transform ${open ? "rotate-45 translate-y-2" : ""}`}
            />
            <span
              className={`block w-6 h-0.5 bg-white transition-opacity ${open ? "opacity-0" : ""}`}
            />
            <span
              className={`block w-6 h-0.5 bg-white transition-transform ${open ? "-rotate-45 -translate-y-2" : ""}`}
            />
          </div>
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden bg-[#0a0a0a] border-t border-white/10"
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-white/70 text-sm"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <button className="mt-2 bg-teal-400 text-black text-sm font-semibold px-5 py-2.5 rounded-full w-fit">
                Free Consultation
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#0a0a0a]">
      {/* Gradient blob */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.08, 1], opacity: [0.6, 0.8, 0.6] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 left-0 w-[70%] h-[90%] bg-gradient-to-br from-teal-500/40 via-emerald-600/30 to-transparent rounded-full blur-[120px]"
        />
        <div className="absolute bottom-0 right-0 w-[40%] h-[50%] bg-gradient-to-tl from-teal-800/20 to-transparent blur-[80px]" />
      </div>

      {/* Grain overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 pt-32 pb-24 grid md:grid-cols-2 gap-16 items-center">
        {/* Left */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 text-xs text-teal-300 border border-teal-400/30 rounded-full px-3 py-1 mb-8 bg-teal-400/5"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse" />
            Top AI for Grow Business
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.05] tracking-tight mb-8"
          >
            Automate &amp;{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-emerald-400">
              manage
            </span>{" "}
            your business with ease
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="text-white/50 text-base leading-relaxed mb-10 max-w-md"
          >
            Discover cutting-edge AI solutions designed to elevate your business
            to new heights and drive sustainable growth in today's competitive
            landscape.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex items-center gap-4 flex-wrap"
          >
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 30px rgba(52,211,153,0.4)",
              }}
              whileTap={{ scale: 0.97 }}
              className="bg-white text-black font-semibold text-sm px-6 py-3 rounded-full"
            >
              Free Consultation
            </motion.button>

            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                {["🧑", "👩", "🧔"].map((emoji, i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-sm"
                  >
                    {emoji}
                  </div>
                ))}
              </div>
              <div className="text-sm">
                <span className="text-teal-400 font-semibold">★ 4.8</span>
                <span className="text-white/40 ml-1">Trust Score</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right — decorative grid card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="hidden md:grid grid-cols-2 gap-4"
        >
          {[
            {
              label: "Growth Rate",
              value: "+128%",
              sub: "YoY revenue increase",
            },
            {
              label: "Automation",
              value: "10k+",
              sub: "Tasks automated daily",
            },
            { label: "AI Models", value: "24/7", sub: "Continuous monitoring" },
            {
              label: "Satisfaction",
              value: "98%",
              sub: "Client happiness score",
            },
          ].map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 + i * 0.1 }}
              whileHover={{ y: -4, borderColor: "rgba(52,211,153,0.4)" }}
              className="bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-sm transition-colors duration-300"
            >
              <p className="text-white/40 text-xs mb-3">{card.label}</p>
              <p className="text-white text-3xl font-bold mb-1">{card.value}</p>
              <p className="text-white/40 text-xs">{card.sub}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/20 text-xs"
      >
        <span>Scroll</span>
        <span>↓</span>
      </motion.div>
    </section>
  );
}

function AboutSection() {
  return (
    <section id="about" className="bg-white py-24 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-start">
        <FadeUp>
          <h2 className="text-4xl md:text-5xl font-bold text-black leading-tight">
            How can we help your business
          </h2>
        </FadeUp>

        <FadeUp delay={0.15}>
          <div className="space-y-5 text-black/60 text-[15px] leading-relaxed">
            <p>
              At AutoBiz, we warmly invite you to arrange an in-depth
              consultation designed to thoroughly examine the intricacies of
              your business. In this extensive session, we will dive into a
              multitude of topics, including cutting-edge growth strategies
              specifically crafted for your industry, detailed financial
              planning that aligns seamlessly with your objectives, and
              innovative approaches to boost operational efficiency.
            </p>
            <p>
              Our team of highly experienced professionals is committed to
              delivering tailored advice that addresses your distinct needs and
              ambitions. We aim to ensure that you depart with not only
              actionable insights but also a clear roadmap to drive your
              business toward success.
            </p>

            <motion.button
              whileHover={{ x: 4 }}
              className="inline-flex items-center gap-2 text-black font-semibold text-sm mt-2 group"
            >
              Learn More
              <span className="group-hover:translate-x-1 transition-transform">
                →
              </span>
            </motion.button>
          </div>
        </FadeUp>
      </div>

      {/* Stats */}
      <div className="max-w-7xl mx-auto mt-20 grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-black/10">
        {STATS.map((stat, i) => (
          <FadeUp
            key={i}
            delay={i * 0.1}
            className="px-8 py-6 first:pl-0 last:pr-0"
          >
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 + i * 0.1 }}
              className="text-6xl font-bold text-black tracking-tight mb-3"
            >
              {stat.value}
            </motion.p>
            <p className="text-black/50 text-sm leading-snug max-w-[160px]">
              {stat.label}
            </p>
          </FadeUp>
        ))}
      </div>
    </section>
  );
}

function ServicesSection() {
  return (
    <section id="services" className="bg-[#f8f8f6] py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <FadeUp className="text-center mb-4">
          <h2 className="text-4xl md:text-5xl font-bold text-black">
            AI-Powered Growth Bots
          </h2>
        </FadeUp>
        <FadeUp delay={0.1} className="text-center mb-14">
          <p className="text-black/50 text-sm">
            Harnessing the Power of AI for Unmatched Business Precision and
            Efficiency
          </p>
        </FadeUp>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {SERVICES.map((service, i) => (
            <FadeUp key={i} delay={i * 0.08}>
              <motion.div
                whileHover={{
                  y: -6,
                  boxShadow: "0 20px 50px rgba(0,0,0,0.08)",
                }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-2xl p-6 border border-black/5 h-full flex flex-col gap-4"
              >
                <div
                  className={`w-10 h-10 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center text-lg`}
                >
                  {service.icon}
                </div>
                <h3 className="font-bold text-black text-[15px] leading-snug">
                  {service.title}
                </h3>
                <p className="text-black/50 text-sm leading-relaxed flex-1">
                  {service.description}
                </p>
              </motion.div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

function IndustriesSection() {
  const SIZE_MAP: Record<Industry["size"], string> = {
    sm: "text-2xl md:text-3xl",
    md: "text-3xl md:text-4xl",
    lg: "text-4xl md:text-5xl font-extrabold",
  };

  return (
    <section className="bg-[#0d0d0d] py-24 px-6 relative overflow-hidden">
      {/* BG texture */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 50% 50%, #1a1a1a 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="max-w-5xl mx-auto relative">
        <FadeUp className="text-center mb-2">
          <p className="text-white/40 text-sm uppercase tracking-widest">
            Delving Deep into the Wide Array of Industries
          </p>
        </FadeUp>
        <FadeUp delay={0.05} className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            What Industries We Served
          </h2>
        </FadeUp>

        <div className="flex flex-col items-center gap-5">
          {INDUSTRIES.map((industry, i) => (
            <FadeUp key={i} delay={i * 0.07} className="w-full text-center">
              <motion.p
                whileHover={{ color: "#34d399", x: 4 }}
                transition={{ duration: 0.2 }}
                className={`${SIZE_MAP[industry.size]} font-bold text-white/80 cursor-default transition-colors`}
              >
                {industry.name}
              </motion.p>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-start">
        <FadeUp>
          <h2 className="text-4xl md:text-5xl font-bold text-black leading-tight">
            Frequently Asked Question
          </h2>
          <p className="text-black/50 text-sm mt-4">
            Here are some frequently asked questions with answers to clarify
            doubts.
          </p>
        </FadeUp>

        <div className="space-y-3">
          {FAQ_ITEMS.map((faq, i) => (
            <FadeUp key={i} delay={i * 0.05}>
              <div className="border border-black/10 rounded-xl overflow-hidden">
                <button
                  onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
                  className="w-full flex items-center justify-between px-5 py-4 text-left"
                >
                  <span className="font-medium text-black text-sm">
                    {faq.question}
                  </span>
                  <motion.span
                    animate={{ rotate: openIndex === i ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-black/40 ml-4 flex-shrink-0"
                  >
                    ∨
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {openIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="px-5 pb-5 text-sm text-black/50 leading-relaxed">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

function CtaSection() {
  return (
    <section className="bg-[#0a0a0a] py-24 px-6 relative overflow-hidden">
      <motion.div
        animate={{ scale: [1, 1.1, 1], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-teal-500/20 blur-[100px] rounded-full pointer-events-none"
      />
      <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <FadeUp>
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            Let's Build The Future Together
          </h2>
          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 30px rgba(52,211,153,0.4)",
            }}
            whileTap={{ scale: 0.97 }}
            className="mt-8 inline-flex items-center gap-2 bg-teal-400 text-black font-semibold text-sm px-6 py-3 rounded-full"
          >
            Get in Touch ↗
          </motion.button>
        </FadeUp>

        <FadeUp delay={0.15} className="grid grid-cols-2 gap-8">
          {Object.entries(FOOTER_LINKS).map(([category, links]) => (
            <div key={category}>
              <p className="text-white text-sm font-semibold mb-4">
                {category}
              </p>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-white/40 text-xs hover:text-white transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </FadeUp>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-[#0a0a0a] border-t border-white/10 py-10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <span className="text-teal-400 text-5xl font-black leading-none">
            ✳
          </span>
          <span className="text-white text-4xl font-black tracking-tight">
            AutoBiz
          </span>
        </div>
        <div className="flex items-center gap-6 text-white/30 text-xs">
          <span>© AutoBiz 2026</span>
          <a href="#" className="hover:text-white transition-colors">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-white transition-colors">
            Terms Condition
          </a>
        </div>
      </div>
    </footer>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

export default function AutoBizLanding() {
  return (
    <div className="font-sans antialiased">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=DM+Sans:wght@300;400;500;600&display=swap');
        body { font-family: 'DM Sans', sans-serif; }
        h1, h2, h3, h4 { font-family: 'Syne', sans-serif; }
      `}</style>

      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <IndustriesSection />
      <FaqSection />
      <CtaSection />
      <Footer />
    </div>
  );
}
