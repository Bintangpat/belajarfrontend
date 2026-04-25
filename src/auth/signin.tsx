import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Step = {
  id: number;
  label: string;
};

const steps: Step[] = [
  { id: 1, label: "Sign up your account" },
  { id: 2, label: "Set up your workspace" },
  { id: 3, label: "Set up your profile" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.08,
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
};

const inputVariants = {
  rest: { scale: 1, boxShadow: "0 0 0 1px rgba(255,255,255,0.08)" },
  focus: { scale: 1.005, boxShadow: "0 0 0 2px rgba(167,139,250,0.5)" },
};

export default function SignUpPage() {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [activeInput, setActiveInput] = useState<string | null>(null);
  const [currentStep] = useState<number>(1);

  return (
    <div
      style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}
      className="min-h-screen bg-[#0a0a0a] flex items-center justify-center p-4"
    >
      <div className="w-full max-w-5xl rounded-2xl overflow-hidden flex shadow-2xl border border-white/[0.06]">
        {/* LEFT PANEL */}
        <div className="relative w-[42%] min-h-[680px] flex-shrink-0 overflow-hidden bg-black">
          {/* Gradient blob */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="absolute inset-0"
          >
            <div className="absolute top-[-10%] left-[-10%] w-[120%] h-[70%] rounded-full bg-gradient-radial from-violet-600 via-purple-800/70 to-transparent blur-2xl opacity-90" />
            <div className="absolute top-[10%] right-[-20%] w-[80%] h-[60%] rounded-full bg-gradient-radial from-purple-500/40 to-transparent blur-3xl" />
          </motion.div>

          {/* Noise overlay */}
          <div
            className="absolute inset-0 opacity-[0.15]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
              backgroundRepeat: "repeat",
              backgroundSize: "128px",
            }}
          />

          {/* Content */}
          <div className="relative z-10 h-full flex flex-col justify-end p-10 pb-12">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="absolute top-10 left-10 flex items-center gap-2"
            >
              <div className="w-5 h-5 rounded-full border-2 border-white/80 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-white" />
              </div>
              <span className="text-white/90 text-sm font-medium tracking-tight">
                OnlyPipe
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.3,
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="text-white text-[2rem] font-bold leading-tight tracking-tight mb-3"
            >
              Get Started
              <br />
              with Us
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-white/50 text-sm leading-relaxed mb-8 max-w-[220px]"
            >
              Complete these easy steps to register your account.
            </motion.p>

            {/* Steps */}
            <div className="flex flex-col gap-2.5">
              {steps.map((step, i) => {
                const isActive = step.id === currentStep;
                const isDone = step.id < currentStep;
                return (
                  <motion.div
                    key={step.id}
                    custom={i}
                    initial="hidden"
                    animate="visible"
                    variants={fadeUp}
                    className={`flex items-center gap-3 px-4 py-3.5 rounded-xl text-sm font-medium transition-all duration-300 ${
                      isActive
                        ? "bg-white text-black"
                        : "bg-white/[0.06] text-white/40 hover:bg-white/[0.1] cursor-pointer"
                    }`}
                  >
                    <span
                      className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 ${
                        isActive
                          ? "bg-black text-white"
                          : isDone
                            ? "bg-violet-500 text-white"
                            : "bg-white/10 text-white/40"
                      }`}
                    >
                      {isDone ? "✓" : step.id}
                    </span>
                    {step.label}
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* RIGHT PANEL */}
        <div className="flex-1 bg-[#111111] flex flex-col justify-center px-12 py-14">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="mb-8"
          >
            <h2 className="text-white text-2xl font-bold tracking-tight mb-1.5">
              Sign In Account
            </h2>
            <p className="text-white/40 text-sm">
              Enter your personal data to create your account.
            </p>
          </motion.div>

          {/* OAuth Buttons */}
          <motion.div
            custom={0}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="flex gap-3 mb-6"
          >
            {[
              {
                label: "Google",
                icon: (
                  <svg width="16" height="16" viewBox="0 0 24 24">
                    <path
                      fill="#EA4335"
                      d="M5.27 9.77A7.18 7.18 0 0 1 12 4.8c1.73 0 3.29.63 4.52 1.66L19.9 3.1A11.95 11.95 0 0 0 12 .05C7.31.05 3.26 2.89 1.28 6.99l3.99 2.78z"
                    />
                    <path
                      fill="#34A853"
                      d="M16.04 18.01A7.18 7.18 0 0 1 12 19.2c-3.34 0-6.18-2.28-7.17-5.39l-4 2.77A11.95 11.95 0 0 0 12 24c3.24 0 5.99-1.18 8.05-3.14l-4.01-2.85z"
                    />
                    <path
                      fill="#FBBC05"
                      d="M4.83 13.81A7.25 7.25 0 0 1 4.8 12c0-.62.1-1.22.24-1.8L1.05 7.42A11.95 11.95 0 0 0 .05 12c0 1.62.33 3.16.92 4.58l3.86-2.77z"
                    />
                    <path
                      fill="#4285F4"
                      d="M12 4.8c1.73 0 3.29.63 4.52 1.66l3.38-3.36A11.95 11.95 0 0 0 12 .05c-4.61 0-8.59 2.77-10.56 6.8l3.99 2.78A7.17 7.17 0 0 1 12 4.8z"
                    />
                    <path
                      fill="#4285F4"
                      d="M23.49 12.27c0-.79-.07-1.55-.2-2.27H12v4.51h6.47a5.54 5.54 0 0 1-2.43 3.63l4.01 2.85c2.33-2.14 3.44-5.29 3.44-8.72z"
                    />
                  </svg>
                ),
              },
              {
                label: "Github",
                icon: (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                  </svg>
                ),
              },
            ].map(({ label, icon }) => (
              <motion.button
                key={label}
                whileHover={{
                  scale: 1.02,
                  backgroundColor: "rgba(255,255,255,0.07)",
                }}
                whileTap={{ scale: 0.98 }}
                className="flex-1 flex items-center justify-center gap-2.5 bg-white/[0.04] border border-white/[0.08] text-white/80 text-sm font-medium py-3 rounded-xl hover:border-white/[0.16] transition-colors duration-200"
              >
                {icon}
                {label}
              </motion.button>
            ))}
          </motion.div>

          {/* Divider */}
          <motion.div
            custom={1}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="flex items-center gap-4 mb-6"
          >
            <div className="flex-1 h-px bg-white/[0.08]" />
            <span className="text-white/30 text-xs">Or</span>
            <div className="flex-1 h-px bg-white/[0.08]" />
          </motion.div>

          {/* Form Fields */}
          <div className="space-y-4">
            {/* First / Last Name */}
            <motion.div
              custom={2}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="grid grid-cols-2 gap-3"
            >
              {[
                {
                  id: "firstName",
                  label: "First Name",
                  placeholder: "eg. John",
                },
                {
                  id: "lastName",
                  label: "Last Name",
                  placeholder: "eg. Francisco",
                },
              ].map(({ id, label, placeholder }) => (
                <div key={id}>
                  <label className="block text-white/60 text-xs font-medium mb-2">
                    {label}
                  </label>
                  <motion.div
                    animate={activeInput === id ? "focus" : "rest"}
                    variants={inputVariants}
                    className="rounded-xl overflow-hidden"
                  >
                    <input
                      type="text"
                      placeholder={placeholder}
                      onFocus={() => setActiveInput(id)}
                      onBlur={() => setActiveInput(null)}
                      className="w-full bg-white/[0.05] text-white/80 text-sm px-4 py-3 outline-none placeholder:text-white/20 rounded-xl border border-transparent focus:border-violet-500/30 transition-colors duration-200"
                    />
                  </motion.div>
                </div>
              ))}
            </motion.div>

            {/* Email */}
            <motion.div
              custom={3}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
            >
              <label className="block text-white/60 text-xs font-medium mb-2">
                Email
              </label>
              <motion.div
                animate={activeInput === "email" ? "focus" : "rest"}
                variants={inputVariants}
                className="rounded-xl overflow-hidden"
              >
                <input
                  type="email"
                  placeholder="eg. johnfrans@gmail.com"
                  onFocus={() => setActiveInput("email")}
                  onBlur={() => setActiveInput(null)}
                  className="w-full bg-white/[0.05] text-white/80 text-sm px-4 py-3 outline-none placeholder:text-white/20 rounded-xl border border-transparent focus:border-violet-500/30 transition-colors duration-200"
                />
              </motion.div>
            </motion.div>

            {/* Password */}
            <motion.div
              custom={4}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
            >
              <label className="block text-white/60 text-xs font-medium mb-2">
                Password
              </label>
              <motion.div
                animate={activeInput === "password" ? "focus" : "rest"}
                variants={inputVariants}
                className="rounded-xl overflow-hidden"
              >
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    onFocus={() => setActiveInput("password")}
                    onBlur={() => setActiveInput(null)}
                    className="w-full bg-white/[0.05] text-white/80 text-sm px-4 py-3 pr-12 outline-none placeholder:text-white/20 rounded-xl border border-transparent focus:border-violet-500/30 transition-colors duration-200"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((p) => !p)}
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-white/30 hover:text-white/60 transition-colors"
                  >
                    <AnimatePresence mode="wait">
                      <motion.span
                        key={showPassword ? "eye" : "eyeoff"}
                        initial={{ opacity: 0, scale: 0.7 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.7 }}
                        transition={{ duration: 0.15 }}
                      >
                        {showPassword ? (
                          <svg
                            width="16"
                            height="16"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                          >
                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                            <circle cx="12" cy="12" r="3" />
                          </svg>
                        ) : (
                          <svg
                            width="16"
                            height="16"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                          >
                            <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94" />
                            <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19" />
                            <line x1="1" y1="1" x2="23" y2="23" />
                          </svg>
                        )}
                      </motion.span>
                    </AnimatePresence>
                  </button>
                </div>
              </motion.div>
              <p className="text-white/25 text-xs mt-2">
                Must be at least 8 characters.
              </p>
            </motion.div>
          </div>

          {/* Sign Up Button */}
          <motion.div
            custom={5}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mt-6"
          >
            <motion.button
              whileHover={{ scale: 1.015, backgroundColor: "#f5f5f5" }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-white text-black text-sm font-semibold py-3.5 rounded-xl transition-colors duration-200 tracking-tight"
            >
              Sign Up
            </motion.button>
          </motion.div>

          {/* Login Link */}
          <motion.p
            custom={6}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="text-center text-white/35 text-xs mt-5"
          >
            Already have an account?{" "}
            <button className="text-white font-semibold hover:text-violet-400 transition-colors duration-200 underline underline-offset-2">
              Log in
            </button>
          </motion.p>
        </div>
      </div>
    </div>
  );
}
