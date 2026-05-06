
import { motion } from 'framer-motion';

export default function SmashBookBooking() {
    // Framer Motion Animation Variants
    const staggerContainer = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    const slideUp = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } }
    };

    const slideLeft = {
        hidden: { opacity: 0, x: -30 },
        show: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" as const } }
    };

    return (
        <>
            {/* Pastikan Anda telah mengimpor font berikut di index.html (Vite) atau layout.tsx (Next.js):
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Space+Grotesk:wght@400;500;600;700;900&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      */}
            <style dangerouslySetInnerHTML={{
                __html: `
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
        .custom-scrollbar::-webkit-scrollbar {
            width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
            background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
            background: #444933; 
            border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
            background: #abd600; 
        }
      `}} />

            <div className="bg-[#131313] text-[#e5e2e1] min-h-screen antialiased selection:bg-[#abd600] selection:text-[#131313] font-['Inter']">

                {/* TopAppBar (Mobile Only) */}
                <motion.header
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    className="md:hidden bg-black fixed top-0 w-full z-50 border-b border-white/10 flex justify-between items-center px-6 h-16 shadow-none"
                >
                    <div className="flex items-center gap-4">
                        <span className="material-symbols-outlined text-[#CCFF00]">menu</span>
                        <span className="text-2xl font-black text-[#CCFF00] italic uppercase tracking-tight font-['Space_Grotesk']">SMASHBOOK</span>
                    </div>
                    <div className="flex items-center gap-4 text-white/70">
                        <span className="material-symbols-outlined hover:text-[#CCFF00] transition-colors active:scale-95 duration-200">notifications</span>
                        <span className="material-symbols-outlined hover:text-[#CCFF00] transition-colors active:scale-95 duration-200">settings</span>
                        <img
                            alt="User avatar"
                            className="w-8 h-8 rounded-full border border-white/10 object-cover"
                            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=100&q=80"
                        />
                    </div>
                </motion.header>

                {/* SideNavBar (Desktop Only) */}
                <motion.nav
                    variants={slideLeft}
                    initial="hidden"
                    animate="show"
                    className="hidden md:flex bg-[#0A0A0A] fixed left-0 top-0 h-full w-64 border-r border-white/10 flex-col py-8 gap-4 z-40 transition-all duration-300 shadow-none"
                >
                    <div className="px-6 mb-8 flex items-center gap-3">
                        <div className="w-10 h-10 rounded bg-[#CCFF00]/20 flex items-center justify-center border border-[#CCFF00]/40">
                            <span className="material-symbols-outlined text-[#CCFF00]" style={{ fontVariationSettings: "'FILL' 1" }}>sports_tennis</span>
                        </div>
                        <div>
                            <h1 className="text-[#CCFF00] font-black tracking-widest font-['Space_Grotesk'] text-lg uppercase leading-none">SMASHBOOK</h1>
                            <p className="font-['Space_Grotesk'] text-xs font-bold uppercase text-white/50 mt-1">Elite Badminton</p>
                        </div>
                    </div>

                    <div className="flex-1 flex flex-col gap-1 px-4">
                        {/* Dashboard (Inactive) */}
                        <a className="flex items-center gap-3 px-4 py-3 rounded-lg text-white/50 hover:text-white hover:bg-white/5 hover:border-[#CCFF00]/40 transition-all font-['Space_Grotesk'] text-[14px] font-bold uppercase" href="#">
                            <span className="material-symbols-outlined">grid_view</span>
                            <span>Dashboard</span>
                        </a>
                        {/* Book Court (Active) */}
                        <a className="flex items-center gap-3 px-4 py-3 text-[#CCFF00] border-r-4 border-[#CCFF00] bg-[#CCFF00]/10 hover:border-[#CCFF00]/40 transition-all font-['Space_Grotesk'] text-[14px] font-bold uppercase" href="#">
                            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>sports_tennis</span>
                            <span>Book Court</span>
                        </a>
                        {/* Tournaments (Inactive) */}
                        <a className="flex items-center gap-3 px-4 py-3 rounded-lg text-white/50 hover:text-white hover:bg-white/5 hover:border-[#CCFF00]/40 transition-all font-['Space_Grotesk'] text-[14px] font-bold uppercase" href="#">
                            <span className="material-symbols-outlined">emoji_events</span>
                            <span>Tournaments</span>
                        </a>
                        {/* Analytics (Inactive) */}
                        <a className="flex items-center gap-3 px-4 py-3 rounded-lg text-white/50 hover:text-white hover:bg-white/5 hover:border-[#CCFF00]/40 transition-all font-['Space_Grotesk'] text-[14px] font-bold uppercase" href="#">
                            <span className="material-symbols-outlined">monitoring</span>
                            <span>Analytics</span>
                        </a>
                        {/* Members (Inactive) */}
                        <a className="flex items-center gap-3 px-4 py-3 rounded-lg text-white/50 hover:text-white hover:bg-white/5 hover:border-[#CCFF00]/40 transition-all font-['Space_Grotesk'] text-[14px] font-bold uppercase" href="#">
                            <span className="material-symbols-outlined">group</span>
                            <span>Members</span>
                        </a>
                    </div>

                    <div className="px-6 mb-4">
                        <button className="w-full bg-[#CCFF00] text-black font-['Space_Grotesk'] text-[14px] font-bold uppercase py-3 rounded hover:bg-white transition-colors">
                            Book Now
                        </button>
                    </div>

                    <div className="mt-auto flex flex-col gap-1 px-4 border-t border-white/10 pt-4">
                        <a className="flex items-center gap-3 px-4 py-3 rounded-lg text-white/50 hover:text-white hover:bg-white/5 hover:border-[#CCFF00]/40 transition-all font-['Space_Grotesk'] text-[14px] font-bold uppercase" href="#">
                            <span className="material-symbols-outlined">help</span>
                            <span>Help Center</span>
                        </a>
                        <a className="flex items-center gap-3 px-4 py-3 rounded-lg text-white/50 hover:text-white hover:bg-white/5 hover:border-[#CCFF00]/40 transition-all font-['Space_Grotesk'] text-[14px] font-bold uppercase" href="#">
                            <span className="material-symbols-outlined">logout</span>
                            <span>Logout</span>
                        </a>
                    </div>
                </motion.nav>

                {/* Main Canvas */}
                <main className="pt-16 md:pt-0 md:ml-64 p-[20px] min-h-screen flex flex-col">

                    {/* Header Section */}
                    <motion.header
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                        className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-[24px] pt-6"
                    >
                        <div>
                            <h2 className="font-['Space_Grotesk'] text-[48px] leading-[1.1] tracking-[-0.02em] font-bold text-[#e5e2e1] mb-2">Secure Your Court</h2>
                            <p className="font-['Inter'] text-[16px] leading-[1.5] font-normal text-[#c4c9ac]">Real-time availability for peak performance.</p>
                        </div>

                        {/* Filters & Date */}
                        <div className="flex flex-wrap items-center gap-[8px] bg-[#353534] p-[8px] rounded-lg border border-[#444933]/30 shadow-lg">
                            <div className="flex items-center gap-2 px-3 py-2 bg-[#201f1f] rounded cursor-pointer hover:border-[#abd600] border border-transparent transition-colors">
                                <span className="material-symbols-outlined text-[#abd600] text-sm">calendar_month</span>
                                <span className="font-['Space_Grotesk'] text-[14px] leading-[1] tracking-[0.05em] font-bold text-[#e5e2e1]">TODAY, OCT 24</span>
                                <span className="material-symbols-outlined text-[#c4c9ac] text-sm">expand_more</span>
                            </div>
                            <div className="h-6 w-px bg-[#444933]/50 mx-2"></div>
                            <div className="flex gap-1 bg-[#201f1f] rounded p-1">
                                <button className="px-4 py-1.5 rounded bg-[#abd600] text-[#161e00] font-['Space_Grotesk'] text-[14px] leading-[1] tracking-[0.05em] font-bold transition-all shadow-[0_0_8px_rgba(171,214,0,0.3)]">INDOOR</button>
                                <button className="px-4 py-1.5 rounded text-[#c4c9ac] hover:text-[#e5e2e1] font-['Space_Grotesk'] text-[14px] leading-[1] tracking-[0.05em] font-bold transition-colors">OUTDOOR</button>
                            </div>
                            <div className="flex gap-1 bg-[#201f1f] rounded p-1">
                                <button className="px-4 py-1.5 rounded bg-[#353534] text-[#e5e2e1] font-['Space_Grotesk'] text-[14px] leading-[1] tracking-[0.05em] font-bold transition-all border border-[#444933]">WOOD</button>
                                <button className="px-4 py-1.5 rounded text-[#c4c9ac] hover:text-[#e5e2e1] font-['Space_Grotesk'] text-[14px] leading-[1] tracking-[0.05em] font-bold transition-colors">VINYL</button>
                            </div>
                        </div>
                    </motion.header>

                    {/* Bento Grid Layout */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-[12px] flex-1">

                        {/* Courts List & Interactive Grid (Spans 8 cols) */}
                        <motion.div
                            variants={staggerContainer}
                            initial="hidden"
                            animate="show"
                            className="lg:col-span-8 flex flex-col gap-[12px]"
                        >
                            {/* Court Card 1 */}
                            <motion.div variants={slideUp} className="bg-[#1c1b1b] rounded-xl border border-[#444933] overflow-hidden group hover:border-[#abd600]/40 transition-colors">
                                <div className="flex flex-col md:flex-row h-full">
                                    {/* Court Image/Map Area */}
                                    <div className="md:w-1/3 relative h-48 md:h-auto border-b md:border-b-0 md:border-r border-[#444933]/50 bg-[#0e0e0e]">
                                        <img
                                            alt="Badminton Court"
                                            className="w-full h-full object-cover opacity-60 mix-blend-luminosity group-hover:mix-blend-normal transition-all duration-500"
                                            src="https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?auto=format&fit=crop&w=800&q=80"
                                        />
                                        <div className="absolute top-3 left-3 bg-[#131313]/80 backdrop-blur px-2 py-1 rounded border border-[#444933]/50 flex items-center gap-1.5">
                                            <div className="w-2 h-2 rounded-full bg-[#abd600] animate-pulse shadow-[0_0_6px_#abd600]"></div>
                                            <span className="font-['Inter'] text-[12px] leading-[1] font-medium text-[#e5e2e1] tracking-wider uppercase">Court Alpha</span>
                                        </div>
                                        <div className="absolute bottom-3 left-3 flex gap-2">
                                            <span className="bg-[#201f1f]/90 px-2 py-1 rounded text-xs font-['Space_Grotesk'] font-bold text-[#c4c9ac] uppercase tracking-widest border border-[#444933]/30">Pro Wood</span>
                                        </div>
                                    </div>

                                    {/* Time Slot Grid Area */}
                                    <div className="p-[20px] flex-1 flex flex-col">
                                        <div className="flex justify-between items-center mb-4">
                                            <h3 className="font-['Space_Grotesk'] text-[24px] leading-[1.2] font-semibold text-[#e5e2e1]">Available Slots</h3>
                                            <span className="font-['Inter'] text-[12px] leading-[1] font-medium text-[#abd600] border border-[#abd600]/30 px-2 py-0.5 rounded bg-[#abd600]/10">$24 / hr</span>
                                        </div>
                                        <div className="grid grid-cols-4 sm:grid-cols-6 gap-[8px] mt-auto">
                                            {/* Slots */}
                                            <button className="py-2 text-center rounded border border-[#444933] bg-[#353534] text-[#c4c9ac] font-['Inter'] text-[12px] leading-[1] font-medium opacity-50 cursor-not-allowed">17:00</button>
                                            <button className="py-2 text-center rounded border border-[#444933] bg-[#353534] text-[#c4c9ac] font-['Inter'] text-[12px] leading-[1] font-medium opacity-50 cursor-not-allowed">17:30</button>
                                            <button className="py-2 text-center rounded border border-[#444933] bg-[#201f1f] hover:border-[#abd600]/50 text-[#e5e2e1] font-['Inter'] text-[12px] leading-[1] font-medium transition-colors">18:00</button>
                                            <button className="py-2 text-center rounded border border-[#444933] bg-[#201f1f] hover:border-[#abd600]/50 text-[#e5e2e1] font-['Inter'] text-[12px] leading-[1] font-medium transition-colors">18:30</button>
                                            <button className="py-2 text-center rounded border-2 border-[#abd600] bg-[#abd600]/10 text-[#abd600] font-['Inter'] text-[12px] leading-[1] font-medium shadow-[0_0_8px_rgba(171,214,0,0.2)] transition-all">19:00</button>
                                            <button className="py-2 text-center rounded border-2 border-[#abd600] bg-[#abd600]/10 text-[#abd600] font-['Inter'] text-[12px] leading-[1] font-medium shadow-[0_0_8px_rgba(171,214,0,0.2)] transition-all">19:30</button>
                                            <button className="py-2 text-center rounded border border-[#444933] bg-[#201f1f] hover:border-[#abd600]/50 text-[#e5e2e1] font-['Inter'] text-[12px] leading-[1] font-medium transition-colors">20:00</button>
                                            <button className="py-2 text-center rounded border border-[#444933] bg-[#201f1f] hover:border-[#abd600]/50 text-[#e5e2e1] font-['Inter'] text-[12px] leading-[1] font-medium transition-colors">20:30</button>
                                            <button className="py-2 text-center rounded border border-[#444933] bg-[#201f1f] hover:border-[#abd600]/50 text-[#e5e2e1] font-['Inter'] text-[12px] leading-[1] font-medium transition-colors">21:00</button>
                                            <button className="py-2 text-center rounded border border-[#444933] bg-[#201f1f] hover:border-[#abd600]/50 text-[#e5e2e1] font-['Inter'] text-[12px] leading-[1] font-medium transition-colors">21:30</button>
                                            <button className="py-2 text-center rounded border border-[#444933] bg-[#201f1f] hover:border-[#abd600]/50 text-[#e5e2e1] font-['Inter'] text-[12px] leading-[1] font-medium transition-colors">22:00</button>
                                            <button className="py-2 text-center rounded border border-[#444933] bg-[#201f1f] hover:border-[#abd600]/50 text-[#e5e2e1] font-['Inter'] text-[12px] leading-[1] font-medium transition-colors">22:30</button>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Court Card 2 */}
                            <motion.div variants={slideUp} className="bg-[#1c1b1b] rounded-xl border border-[#444933] overflow-hidden group hover:border-[#abd600]/40 transition-colors">
                                <div className="flex flex-col md:flex-row h-full">
                                    <div className="md:w-1/3 relative h-48 md:h-auto border-b md:border-b-0 md:border-r border-[#444933]/50 bg-[#0e0e0e]">
                                        <img
                                            alt="Badminton Court"
                                            className="w-full h-full object-cover opacity-60 mix-blend-luminosity group-hover:mix-blend-normal transition-all duration-500"
                                            src="https://images.unsplash.com/photo-1599818815124-783fb796d8e0?auto=format&fit=crop&w=800&q=80"
                                        />
                                        <div className="absolute top-3 left-3 bg-[#131313]/80 backdrop-blur px-2 py-1 rounded border border-[#444933]/50 flex items-center gap-1.5">
                                            <div className="w-2 h-2 rounded-full bg-[#abd600] animate-pulse shadow-[0_0_6px_#abd600]"></div>
                                            <span className="font-['Inter'] text-[12px] leading-[1] font-medium text-[#e5e2e1] tracking-wider uppercase">Court Beta</span>
                                        </div>
                                        <div className="absolute bottom-3 left-3 flex gap-2">
                                            <span className="bg-[#201f1f]/90 px-2 py-1 rounded text-xs font-['Space_Grotesk'] font-bold text-[#c4c9ac] uppercase tracking-widest border border-[#444933]/30">Tourney Vinyl</span>
                                        </div>
                                    </div>
                                    <div className="p-[20px] flex-1 flex flex-col">
                                        <div className="flex justify-between items-center mb-4">
                                            <h3 className="font-['Space_Grotesk'] text-[24px] leading-[1.2] font-semibold text-[#e5e2e1]">Available Slots</h3>
                                            <span className="font-['Inter'] text-[12px] leading-[1] font-medium text-[#abd600] border border-[#abd600]/30 px-2 py-0.5 rounded bg-[#abd600]/10">$28 / hr</span>
                                        </div>
                                        <div className="grid grid-cols-4 sm:grid-cols-6 gap-[8px] mt-auto">
                                            <button className="py-2 text-center rounded border border-[#444933] bg-[#201f1f] hover:border-[#abd600]/50 text-[#e5e2e1] font-['Inter'] text-[12px] leading-[1] font-medium transition-colors">17:00</button>
                                            <button className="py-2 text-center rounded border border-[#444933] bg-[#201f1f] hover:border-[#abd600]/50 text-[#e5e2e1] font-['Inter'] text-[12px] leading-[1] font-medium transition-colors">17:30</button>
                                            <button className="py-2 text-center rounded border border-[#444933] bg-[#201f1f] hover:border-[#abd600]/50 text-[#e5e2e1] font-['Inter'] text-[12px] leading-[1] font-medium transition-colors">18:00</button>
                                            <button className="py-2 text-center rounded border border-[#444933] bg-[#201f1f] hover:border-[#abd600]/50 text-[#e5e2e1] font-['Inter'] text-[12px] leading-[1] font-medium transition-colors">18:30</button>
                                            <button className="py-2 text-center rounded border border-[#444933] bg-[#201f1f] hover:border-[#abd600]/50 text-[#e5e2e1] font-['Inter'] text-[12px] leading-[1] font-medium transition-colors">19:00</button>
                                            <button className="py-2 text-center rounded border border-[#444933] bg-[#201f1f] hover:border-[#abd600]/50 text-[#e5e2e1] font-['Inter'] text-[12px] leading-[1] font-medium transition-colors">19:30</button>
                                            <button className="py-2 text-center rounded border border-[#444933] bg-[#201f1f] hover:border-[#abd600]/50 text-[#e5e2e1] font-['Inter'] text-[12px] leading-[1] font-medium transition-colors">20:00</button>
                                            <button className="py-2 text-center rounded border border-[#444933] bg-[#201f1f] hover:border-[#abd600]/50 text-[#e5e2e1] font-['Inter'] text-[12px] leading-[1] font-medium transition-colors">20:30</button>
                                            <button className="py-2 text-center rounded border border-[#444933] bg-[#353534] text-[#c4c9ac] font-['Inter'] text-[12px] leading-[1] font-medium opacity-50 cursor-not-allowed">21:00</button>
                                            <button className="py-2 text-center rounded border border-[#444933] bg-[#353534] text-[#c4c9ac] font-['Inter'] text-[12px] leading-[1] font-medium opacity-50 cursor-not-allowed">21:30</button>
                                            <button className="py-2 text-center rounded border border-[#444933] bg-[#201f1f] hover:border-[#abd600]/50 text-[#e5e2e1] font-['Inter'] text-[12px] leading-[1] font-medium transition-colors">22:00</button>
                                            <button className="py-2 text-center rounded border border-[#444933] bg-[#201f1f] hover:border-[#abd600]/50 text-[#e5e2e1] font-['Inter'] text-[12px] leading-[1] font-medium transition-colors">22:30</button>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>

                        {/* Booking Sidebar (Spans 4 cols) */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="lg:col-span-4"
                        >
                            <div className="bg-[#0e0e0e] border border-[#444933] rounded-xl p-[24px] sticky top-24 flex flex-col h-[calc(100vh-8rem)]">
                                <h3 className="font-['Space_Grotesk'] text-[32px] leading-[1.2] tracking-[-0.01em] font-bold text-[#e5e2e1] mb-6 uppercase flex items-center justify-between">
                                    Tactical View
                                    <span className="material-symbols-outlined text-[#abd600]">radar</span>
                                </h3>

                                {/* Map Preview Box */}
                                <div className="w-full h-32 rounded-lg bg-[#201f1f] border border-[#444933]/50 mb-6 overflow-hidden relative group cursor-pointer">
                                    <img
                                        alt="Facility Map"
                                        className="w-full h-full object-cover opacity-40 group-hover:opacity-60 transition-opacity mix-blend-luminosity"
                                        src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=600&q=80"
                                    />
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <button className="bg-[#131313]/80 backdrop-blur border border-[#abd600]/50 text-[#abd600] font-['Space_Grotesk'] text-[14px] leading-[1] tracking-[0.05em] font-bold px-3 py-1.5 rounded uppercase flex items-center gap-2 group-hover:bg-[#abd600]/10 transition-colors">
                                            <span className="material-symbols-outlined text-sm">map</span>
                                            Expand Map
                                        </button>
                                    </div>
                                </div>

                                {/* Selected Items */}
                                <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar">
                                    <h4 className="font-['Space_Grotesk'] text-[14px] leading-[1] tracking-[0.05em] font-bold text-[#c4c9ac] uppercase mb-4 border-b border-[#444933]/30 pb-2">Active Targets</h4>

                                    <div className="flex items-start justify-between bg-[#1c1b1b] border-l-2 border-[#abd600] p-3 rounded mb-3">
                                        <div>
                                            <p className="font-['Space_Grotesk'] text-[14px] leading-[1] tracking-[0.05em] font-bold text-[#e5e2e1] uppercase mb-1">Court Alpha</p>
                                            <p className="font-['Inter'] text-[14px] leading-[1.5] font-normal text-[#c4c9ac]">19:00 - 19:30</p>
                                        </div>
                                        <div className="text-right">
                                            <p className="font-['Space_Grotesk'] text-[14px] leading-[1] tracking-[0.05em] font-bold text-[#e5e2e1]">$12.00</p>
                                            <button className="material-symbols-outlined text-[#c4c9ac] hover:text-[#ffb4ab] text-sm mt-1 transition-colors">close</button>
                                        </div>
                                    </div>

                                    <div className="flex items-start justify-between bg-[#1c1b1b] border-l-2 border-[#abd600] p-3 rounded mb-3">
                                        <div>
                                            <p className="font-['Space_Grotesk'] text-[14px] leading-[1] tracking-[0.05em] font-bold text-[#e5e2e1] uppercase mb-1">Court Alpha</p>
                                            <p className="font-['Inter'] text-[14px] leading-[1.5] font-normal text-[#c4c9ac]">19:30 - 20:00</p>
                                        </div>
                                        <div className="text-right">
                                            <p className="font-['Space_Grotesk'] text-[14px] leading-[1] tracking-[0.05em] font-bold text-[#e5e2e1]">$12.00</p>
                                            <button className="material-symbols-outlined text-[#c4c9ac] hover:text-[#ffb4ab] text-sm mt-1 transition-colors">close</button>
                                        </div>
                                    </div>
                                </div>

                                {/* Calculation Footer */}
                                <div className="mt-auto pt-6 border-t border-[#444933]/50">
                                    <div className="flex justify-between items-center mb-2">
                                        <span className="font-['Inter'] text-[16px] leading-[1.5] font-normal text-[#c4c9ac]">Subtotal</span>
                                        <span className="font-['Space_Grotesk'] text-[14px] leading-[1] tracking-[0.05em] font-bold text-[#e5e2e1]">$24.00</span>
                                    </div>
                                    <div className="flex justify-between items-center mb-6">
                                        <span className="font-['Inter'] text-[16px] leading-[1.5] font-normal text-[#c4c9ac]">Service Fee</span>
                                        <span className="font-['Space_Grotesk'] text-[14px] leading-[1] tracking-[0.05em] font-bold text-[#e5e2e1]">$2.50</span>
                                    </div>
                                    <div className="flex justify-between items-end mb-6">
                                        <span className="font-['Space_Grotesk'] text-[24px] leading-[1.2] font-semibold text-[#e5e2e1] uppercase tracking-tight">Total</span>
                                        <span className="font-['Space_Grotesk'] text-[32px] leading-[1.2] tracking-[-0.01em] font-bold text-[#abd600]">$26.50</span>
                                    </div>
                                    <button className="w-full bg-[#abd600] text-[#131313] font-['Space_Grotesk'] text-[24px] leading-[1.2] font-semibold uppercase py-4 rounded-lg shadow-[0_0_15px_rgba(171,214,0,0.4)] hover:bg-white hover:shadow-[0_0_20px_rgba(255,255,255,0.4)] transition-all duration-300">
                                        Lock In Time
                                    </button>
                                </div>
                            </div>
                        </motion.div>

                    </div>
                </main>
            </div>
        </>
    );
}