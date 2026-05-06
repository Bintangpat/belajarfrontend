
import { motion } from 'framer-motion';

export default function SmashBookPage() {
  // Animasi untuk Framer Motion
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8 } }
  };

  const slideUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  return (
    <>
      {/* Pastikan Anda telah mengimpor font berikut di index.html (Vite) atau layout.tsx (Next.js):
        <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;600;700&family=Inter:wght@400;500&display=swap" rel="stylesheet"/>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet"/>
      */}
      <div className="bg-[#131313] text-[#e5e2e1] font-['Inter'] min-h-screen flex flex-col">

        {/* TopAppBar */}
        <motion.header
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="fixed top-0 w-full z-50 bg-black border-b border-white/10 flex justify-between items-center px-6 h-16 text-white/70"
        >
          <div className="flex items-center gap-4">
            <span className="text-2xl font-black text-[#CCFF00] italic font-['Space_Grotesk']">SMASHBOOK</span>
          </div>
          <div className="flex items-center gap-6 font-['Space_Grotesk'] uppercase tracking-tight text-sm font-bold">
            <a className="text-[#CCFF00] hover:text-[#CCFF00] transition-colors active:scale-95 duration-200" href="#">HOME</a>
            <a className="hover:text-[#CCFF00] transition-colors active:scale-95 duration-200" href="#">COURTS</a>
            <a className="hover:text-[#CCFF00] transition-colors active:scale-95 duration-200" href="#">TOURNAMENTS</a>
          </div>
          <div className="flex items-center gap-4">
            <span className="material-symbols-outlined hover:text-[#CCFF00] transition-colors cursor-pointer">notifications</span>
            <span className="material-symbols-outlined hover:text-[#CCFF00] transition-colors cursor-pointer">settings</span>
            <img
              alt="User avatar"
              className="w-8 h-8 rounded-full border border-white/20 object-cover"
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=100&q=80"
            />
          </div>
        </motion.header>

        <main className="flex-grow pt-16">
          {/* Hero Section */}
          <section className="relative h-[819px] flex items-center justify-center overflow-hidden">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              className="absolute inset-0 z-0"
            >
              <img
                alt="Badminton Court"
                className="w-full h-full object-cover opacity-40"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAElUd3aE9zl15U3P6hFG95zlfEuFTL4PPtenBxAzs0JXDb-oVVKxVbx40ekAr86MOU8XI19u0EUVXm6OPRdMEFqNw2S_yWc3Mt29a6LgObgUrmkuBTM8UWMY_GduGN_KVR44QgJnzCkRJTL2i6kKwThEZByiaT-K-xetk56dQvCuCpbhBVMXzHd35CviFGGl54dVGu4WPYVoQLqaHNL90GlXGyi51dgushEA0gsNyCiUqWxHMcGUvX3vHpuEhpBQqglKMe71CU9TfY"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-[#131313]/80 via-[#131313]/60 to-[#131313]"></div>
            </motion.div>

            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="relative z-10 text-center px-4 max-w-4xl mx-auto flex flex-col items-center gap-6"
            >
              <motion.h1
                variants={slideUp}
                className="font-['Space_Grotesk'] text-[48px] leading-[1.1] font-bold text-white tracking-tighter uppercase"
              >
                DOMINATE THE COURT
              </motion.h1>
              <motion.p
                variants={slideUp}
                className="text-[18px] text-[#c4c9ac] max-w-2xl leading-[1.6]"
              >
                Secure prime court time instantly. Built for elite players who demand speed, precision, and zero friction in their booking experience.
              </motion.p>
              <motion.div variants={slideUp} className="mt-8">
                <button className="bg-[#c3f400] text-[#161e00] font-['Space_Grotesk'] text-[14px] font-bold px-8 py-4 rounded-[0.125rem] uppercase tracking-widest shadow-[0_0_8px_rgba(195,244,0,0.3)] hover:bg-[#abd600] hover:shadow-[0_0_16px_rgba(195,244,0,0.6)] transition-all duration-300">
                  BOOK YOUR SLOT
                </button>
              </motion.div>
            </motion.div>
          </section>

          {/* Stats Bar */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="border-y border-white/10 bg-[#201f1f] py-6"
          >
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-white/10">
              <div className="flex flex-col items-center justify-center pt-4 md:pt-0">
                <span className="font-['Space_Grotesk'] text-[32px] font-bold text-[#c3f400]">50+</span>
                <span className="font-['Space_Grotesk'] text-[14px] font-bold text-[#c4c9ac] mt-2 uppercase tracking-wider">Elite Courts</span>
              </div>
              <div className="flex flex-col items-center justify-center pt-4 md:pt-0">
                <span className="font-['Space_Grotesk'] text-[32px] font-bold text-[#c3f400]">10k+</span>
                <span className="font-['Space_Grotesk'] text-[14px] font-bold text-[#c4c9ac] mt-2 uppercase tracking-wider">Active Players</span>
              </div>
              <div className="flex flex-col items-center justify-center pt-4 md:pt-0">
                <span className="font-['Space_Grotesk'] text-[32px] font-bold text-[#c3f400]">24/7</span>
                <span className="font-['Space_Grotesk'] text-[14px] font-bold text-[#c4c9ac] mt-2 uppercase tracking-wider">Access</span>
              </div>
            </div>
          </motion.section>

          {/* Features for Players Bento Grid */}
          <section className="py-24 px-6 max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16 text-center"
            >
              <h2 className="font-['Space_Grotesk'] text-[32px] font-bold text-white uppercase">Player Advantage</h2>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-12 gap-[12px] auto-rows-[240px]"
            >
              {/* Card 1 */}
              <motion.div
                variants={slideUp}
                className="md:col-span-8 bg-[#0A0A0A] border border-white/10 rounded-lg p-6 relative overflow-hidden transition-all duration-300 flex flex-col justify-between hover:shadow-[0_0_12px_rgba(195,244,0,0.5)] hover:border-[rgba(195,244,0,0.4)] group"
              >
                <div className="relative z-10">
                  <span className="font-['Space_Grotesk'] text-[14px] font-bold text-[#c4c9ac] uppercase flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#c3f400] text-sm">bolt</span>
                    Real-time Availability
                  </span>
                  <h3 className="font-['Space_Grotesk'] text-[24px] font-bold mt-4 text-white max-w-md leading-[1.2]">
                    Live court radar. Lock in your session in milliseconds.
                  </h3>
                </div>
                <div className="absolute right-0 bottom-0 opacity-20 translate-x-1/4 translate-y-1/4 group-hover:scale-110 transition-transform duration-500">
                  <span className="material-symbols-outlined text-[#c3f400]" style={{ fontSize: '200px' }}>radar</span>
                </div>
              </motion.div>

              {/* Card 2 */}
              <motion.div
                variants={slideUp}
                className="md:col-span-4 bg-[#0A0A0A] border border-white/10 rounded-lg p-6 relative overflow-hidden transition-all duration-300 flex flex-col justify-between hover:shadow-[0_0_12px_rgba(195,244,0,0.5)] hover:border-[rgba(195,244,0,0.4)]"
              >
                <div>
                  <span className="font-['Space_Grotesk'] text-[14px] font-bold text-[#c4c9ac] uppercase flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#c3f400] text-sm">qr_code_scanner</span>
                    Instant E-Tickets
                  </span>
                  <h3 className="font-['Space_Grotesk'] text-[24px] font-bold mt-4 text-white leading-[1.2]">
                    Scan and play. No queues.
                  </h3>
                </div>
              </motion.div>

              {/* Card 3 */}
              <motion.div
                variants={slideUp}
                className="md:col-span-12 bg-[#0A0A0A] border border-white/10 rounded-lg p-6 relative overflow-hidden transition-all duration-300 flex flex-col justify-center items-center text-center hover:shadow-[0_0_12px_rgba(195,244,0,0.5)] hover:border-[rgba(195,244,0,0.4)]"
              >
                <span className="font-['Space_Grotesk'] text-[14px] font-bold text-[#c4c9ac] uppercase flex items-center gap-2 mb-4">
                  <span className="material-symbols-outlined text-[#c3f400] text-sm">shield</span>
                  Secure Payments
                </span>
                <h3 className="font-['Space_Grotesk'] text-[32px] font-bold text-white leading-[1.2]">
                  Military-grade encryption for every transaction.
                </h3>
              </motion.div>
            </motion.div>
          </section>
        </main>
      </div>
    </>
  );
}