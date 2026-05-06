
import { motion } from 'framer-motion';

export default function SmashBookDashboard() {
    // Framer Motion Animation Variants
    const staggerContainer = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.1 },
        },
    };

    const fadeUp = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } as const },
    };

    const slideLeft = {
        hidden: { opacity: 0, x: -40 },
        show: { opacity: 1, x: 0, transition: { duration: 0.5, ease: 'easeOut' } as const },
    };

    const slideDown = {
        hidden: { opacity: 0, y: -20 },
        show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } as const },
    };

    return (
        <>
            {/* Pastikan Anda mengimpor font berikut di index.html (Vite) atau layout.tsx (Next.js):
        <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700;800&family=Inter:wght@400;500;600&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      */}
            <style dangerouslySetInnerHTML={{
                __html: `
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
      `}} />

            <div className="bg-[#131313] text-[#e5e2e1] min-h-screen flex selection:bg-[#c3f400] selection:text-[#161e00] font-['Inter'] antialiased">

                {/* TopAppBar (Mobile Only) */}
                <motion.header
                    variants={slideDown}
                    initial="hidden"
                    animate="show"
                    className="md:hidden bg-black fixed top-0 w-full z-50 border-b border-white/10 flex justify-between items-center px-6 h-16 shadow-none"
                >
                    <div className="flex items-center gap-4">
                        <span className="material-symbols-outlined text-[#CCFF00]">menu</span>
                        <div className="text-[24px] font-black text-[#CCFF00] italic font-['Space_Grotesk'] uppercase tracking-tight">SMASHBOOK</div>
                    </div>
                    <div className="flex items-center gap-4 text-[#CCFF00]">
                        <span className="material-symbols-outlined hover:text-[#CCFF00] transition-colors active:scale-95 duration-200 cursor-pointer">notifications</span>
                        <span className="material-symbols-outlined hover:text-[#CCFF00] transition-colors active:scale-95 duration-200 cursor-pointer">settings</span>
                    </div>
                </motion.header>

                {/* SideNavBar (Desktop Only) */}
                <motion.nav
                    variants={slideLeft}
                    initial="hidden"
                    animate="show"
                    className="hidden md:flex flex-col py-8 gap-4 bg-[#0A0A0A] fixed left-0 top-0 h-full w-64 border-r border-white/10 transition-all duration-300 z-50 shadow-none"
                >
                    <div className="px-6 mb-8">
                        <h1 className="text-[#CCFF00] font-black tracking-widest font-['Space_Grotesk'] uppercase text-[24px] italic leading-[1.2]">SMASHBOOK</h1>
                        <p className="text-white/50 font-['Inter'] text-[12px] font-medium mt-1 uppercase tracking-wider">Elite Badminton</p>
                    </div>

                    <div className="flex-1 px-4 flex flex-col gap-2">
                        {/* Active Tab: Dashboard */}
                        <a className="flex items-center gap-3 px-4 py-3 text-[#CCFF00] border-r-4 border-[#CCFF00] bg-[#CCFF00]/10 font-['Space_Grotesk'] text-[14px] font-bold uppercase transition-all duration-300" href="#">
                            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>grid_view</span>
                            <span>Dashboard</span>
                        </a>

                        {/* Inactive Tabs */}
                        <a className="flex items-center gap-3 px-4 py-3 text-white/50 hover:text-white hover:bg-white/5 hover:border-[#CCFF00]/40 transition-all duration-300 font-['Space_Grotesk'] text-[14px] font-bold uppercase border-r-4 border-transparent" href="#">
                            <span className="material-symbols-outlined">sports_tennis</span>
                            <span>Book Court</span>
                        </a>
                        <a className="flex items-center gap-3 px-4 py-3 text-white/50 hover:text-white hover:bg-white/5 hover:border-[#CCFF00]/40 transition-all duration-300 font-['Space_Grotesk'] text-[14px] font-bold uppercase border-r-4 border-transparent" href="#">
                            <span className="material-symbols-outlined">emoji_events</span>
                            <span>Tournaments</span>
                        </a>
                        <a className="flex items-center gap-3 px-4 py-3 text-white/50 hover:text-white hover:bg-white/5 hover:border-[#CCFF00]/40 transition-all duration-300 font-['Space_Grotesk'] text-[14px] font-bold uppercase border-r-4 border-transparent" href="#">
                            <span className="material-symbols-outlined">monitoring</span>
                            <span>Analytics</span>
                        </a>
                        <a className="flex items-center gap-3 px-4 py-3 text-white/50 hover:text-white hover:bg-white/5 hover:border-[#CCFF00]/40 transition-all duration-300 font-['Space_Grotesk'] text-[14px] font-bold uppercase border-r-4 border-transparent" href="#">
                            <span className="material-symbols-outlined">group</span>
                            <span>Members</span>
                        </a>
                    </div>

                    <div className="px-6 mb-6">
                        <button className="w-full bg-[#c3f400] text-[#161e00] font-['Space_Grotesk'] text-[14px] font-bold py-3 uppercase tracking-wider rounded-[0.125rem] flex items-center justify-center gap-2 hover:bg-[#abd600] transition-colors">
                            <span className="material-symbols-outlined text-sm">add</span>
                            Book Now
                        </button>
                    </div>

                    <div className="px-4 flex flex-col gap-2 mt-auto pt-4 border-t border-white/10 mx-4">
                        <a className="flex items-center gap-3 px-4 py-2 text-white/50 hover:text-white hover:bg-white/5 hover:border-[#CCFF00]/40 transition-all duration-300 font-['Space_Grotesk'] text-[14px] font-bold uppercase border-r-4 border-transparent" href="#">
                            <span className="material-symbols-outlined">help</span>
                            <span>Help Center</span>
                        </a>
                        <a className="flex items-center gap-3 px-4 py-2 text-white/50 hover:text-white hover:bg-white/5 hover:border-[#CCFF00]/40 transition-all duration-300 font-['Space_Grotesk'] text-[14px] font-bold uppercase border-r-4 border-transparent" href="#">
                            <span className="material-symbols-outlined">logout</span>
                            <span>Logout</span>
                        </a>
                    </div>
                </motion.nav>

                {/* Main Content Canvas */}
                <motion.main
                    variants={staggerContainer}
                    initial="hidden"
                    animate="show"
                    className="flex-1 md:ml-64 pt-20 md:pt-0 p-[24px] md:p-8 flex flex-col gap-[24px] max-w-[1440px] mx-auto w-full"
                >
                    <motion.header variants={fadeUp} className="flex justify-between items-end mb-4 mt-6 md:mt-0">
                        <div>
                            <h2 className="font-['Space_Grotesk'] text-[48px] leading-[1.1] tracking-[-0.02em] font-bold text-[#ffffff] uppercase">Control Center</h2>
                            <p className="font-['Inter'] text-[16px] leading-[1.5] text-[#c4c9ac] mt-2">Welcome back. Secure your court.</p>
                        </div>
                        <div className="hidden md:flex items-center gap-4">
                            <div className="w-10 h-10 rounded-[0.125rem] bg-[#1A1A1A] border border-white/10 flex items-center justify-center text-[#c3f400] cursor-pointer hover:border-[#CCFF00]/40 transition-colors">
                                <span className="material-symbols-outlined">notifications</span>
                            </div>
                            <div className="w-10 h-10 rounded-[0.125rem] bg-[#1A1A1A] border border-white/10 overflow-hidden cursor-pointer">
                                <img
                                    alt="User Avatar"
                                    className="w-full h-full object-cover"
                                    src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=100&q=80"
                                />
                            </div>
                        </div>
                    </motion.header>

                    {/* Bento Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-[12px]">

                        {/* Wallet Balance Card (Col 4) */}
                        <motion.div variants={fadeUp} className="bg-[#0A0A0A] border border-[#1A1A1A] hover:border-[#c3f400]/40 transition-colors duration-300 rounded-xl p-6 md:col-span-4 flex flex-col justify-between min-h-[200px] relative overflow-hidden group">
                            <div className="absolute inset-0 bg-gradient-to-br from-[#c3f400]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <div className="relative z-10 flex justify-between items-start">
                                <h3 className="font-['Space_Grotesk'] text-[14px] leading-[1] tracking-[0.05em] font-bold text-[#c4c9ac] uppercase">Wallet Balance</h3>
                                <span className="material-symbols-outlined text-[#c3f400]">account_balance_wallet</span>
                            </div>
                            <div className="relative z-10 mt-auto">
                                <div className="font-['Space_Grotesk'] text-[48px] leading-[1.1] tracking-[-0.02em] font-bold text-[#c3f400] mb-4">Rp500.000</div>
                                <button className="w-full bg-transparent border border-[#c3f400] text-[#ffffff] font-['Space_Grotesk'] text-[14px] leading-[1] tracking-[0.05em] font-bold py-2 px-4 rounded-[0.125rem] uppercase tracking-wider hover:bg-[#c3f400] hover:text-[#161e00] transition-colors">
                                    Top Up
                                </button>
                            </div>
                        </motion.div>

                        {/* Active Bookings Card (Col 8) */}
                        <motion.div variants={fadeUp} className="bg-[#0A0A0A] border border-[#1A1A1A] hover:border-[#c3f400]/40 transition-colors duration-300 rounded-xl p-6 md:col-span-8 flex flex-col min-h-[200px]">
                            <div className="flex justify-between items-start mb-6">
                                <h3 className="font-['Space_Grotesk'] text-[14px] leading-[1] tracking-[0.05em] font-bold text-[#c4c9ac] uppercase flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-[#c3f400] shadow-[0_0_8px_#c3f400] animate-pulse"></span>
                                    Active Bookings
                                </h3>
                                <button className="text-[#c3f400] font-['Inter'] text-[12px] leading-[1] font-medium uppercase hover:underline">View All</button>
                            </div>

                            <div className="flex flex-col gap-3 flex-1 justify-center">
                                {/* Booking Item 1 */}
                                <div className="bg-[#121212] border border-[#1A1A1A] p-4 rounded-[0.125rem] flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:border-[#c3f400]/30 transition-colors cursor-pointer">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-[0.125rem] bg-[#1A1A1A] flex flex-col items-center justify-center border border-white/5">
                                            <span className="font-['Space_Grotesk'] text-[14px] leading-[1] tracking-[0.05em] font-bold text-[#ffffff]">14</span>
                                            <span className="font-['Inter'] text-[10px] text-[#c4c9ac] uppercase">OCT</span>
                                        </div>
                                        <div>
                                            <h4 className="font-['Inter'] text-[16px] leading-[1.5] text-[#ffffff] font-medium">Smash Arena Court A</h4>
                                            <p className="font-['Inter'] text-[12px] leading-[1] text-[#c4c9ac] mt-1 flex items-center gap-1 mt-2">
                                                <span className="material-symbols-outlined text-[14px]">schedule</span> 19:00 - 21:00
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3 mt-2 sm:mt-0">
                                        <span className="px-2 py-1 bg-[#c3f400]/10 text-[#c3f400] font-['Inter'] text-[10px] font-medium uppercase rounded-[0.125rem] border border-[#c3f400]/20">Confirmed</span>
                                        <span className="material-symbols-outlined text-[#c4c9ac]">chevron_right</span>
                                    </div>
                                </div>

                                {/* Booking Item 2 */}
                                <div className="bg-[#121212] border border-[#1A1A1A] p-4 rounded-[0.125rem] flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:border-[#c3f400]/30 transition-colors cursor-pointer">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-[0.125rem] bg-[#1A1A1A] flex flex-col items-center justify-center border border-white/5">
                                            <span className="font-['Space_Grotesk'] text-[14px] leading-[1] tracking-[0.05em] font-bold text-[#ffffff]">15</span>
                                            <span className="font-['Inter'] text-[10px] text-[#c4c9ac] uppercase">OCT</span>
                                        </div>
                                        <div>
                                            <h4 className="font-['Inter'] text-[16px] leading-[1.5] text-[#ffffff] font-medium">Elite Shuttle Center 3</h4>
                                            <p className="font-['Inter'] text-[12px] leading-[1] text-[#c4c9ac] mt-1 flex items-center gap-1 mt-2">
                                                <span className="material-symbols-outlined text-[14px]">schedule</span> 10:00 - 12:00
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3 mt-2 sm:mt-0">
                                        <span className="px-2 py-1 bg-white/5 text-[#ffffff] font-['Inter'] text-[10px] font-medium uppercase rounded-[0.125rem] border border-white/10">Upcoming</span>
                                        <span className="material-symbols-outlined text-[#c4c9ac]">chevron_right</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Recommended Courts (Col 12) */}
                        <motion.div variants={fadeUp} className="bg-[#0A0A0A] border border-[#1A1A1A] hover:border-[#c3f400]/40 transition-colors duration-300 rounded-xl p-6 md:col-span-12 mt-4">
                            <div className="flex justify-between items-center mb-6">
                                <h3 className="font-['Space_Grotesk'] text-[14px] leading-[1] tracking-[0.05em] font-bold text-[#c4c9ac] uppercase">Recommended Courts</h3>
                                <div className="flex gap-2">
                                    <button className="w-8 h-8 rounded-[0.125rem] border border-[#1A1A1A] flex items-center justify-center hover:border-[#c3f400]/40 text-[#c4c9ac] hover:text-[#c3f400] transition-colors">
                                        <span className="material-symbols-outlined text-sm">arrow_left</span>
                                    </button>
                                    <button className="w-8 h-8 rounded-[0.125rem] border border-[#1A1A1A] flex items-center justify-center hover:border-[#c3f400]/40 text-[#c4c9ac] hover:text-[#c3f400] transition-colors">
                                        <span className="material-symbols-outlined text-sm">arrow_right</span>
                                    </button>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                                {/* Court 1 */}
                                <div className="bg-[#121212] border border-[#1A1A1A] rounded-lg overflow-hidden group hover:border-[#c3f400]/40 transition-colors cursor-pointer">
                                    <div className="h-40 w-full relative">
                                        <div className="absolute inset-0 bg-black/40 z-10"></div>
                                        <img
                                            alt="Neon Smash Club"
                                            className="w-full h-full object-cover"
                                            src="https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?auto=format&fit=crop&w=800&q=80"
                                        />
                                        <div className="absolute top-3 right-3 z-20 px-2 py-1 bg-black/80 backdrop-blur border border-[#c3f400]/30 text-[#c3f400] font-['Inter'] text-[10px] font-medium uppercase rounded-[0.125rem]">
                                            High Demand
                                        </div>
                                    </div>
                                    <div className="p-4">
                                        <h4 className="font-['Inter'] text-[18px] leading-[1.6] text-[#ffffff] font-bold">Neon Smash Club</h4>
                                        <p className="font-['Inter'] text-[12px] leading-[1] text-[#c4c9ac] mt-2 flex items-center gap-1">
                                            <span className="material-symbols-outlined text-[14px]">location_on</span> Downtown District
                                        </p>
                                        <div className="flex justify-between items-end mt-4 pt-4 border-t border-[#1A1A1A]">
                                            <div>
                                                <span className="font-['Inter'] text-[10px] text-[#c4c9ac] uppercase block mb-1">Starting from</span>
                                                <span className="font-['Space_Grotesk'] text-[24px] leading-[1.2] font-semibold text-[#ffffff]">Rp80k<span className="font-['Inter'] text-[16px] leading-[1.5] text-[#c4c9ac] font-normal">/hr</span></span>
                                            </div>
                                            <button className="bg-transparent border border-[#c3f400] text-[#c3f400] font-['Space_Grotesk'] text-[14px] leading-[1] tracking-[0.05em] font-bold py-1.5 px-4 rounded-[0.125rem] uppercase hover:bg-[#c3f400] hover:text-[#161e00] transition-colors text-xs">
                                                Book
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                {/* Court 2 */}
                                <div className="bg-[#121212] border border-[#1A1A1A] rounded-lg overflow-hidden group hover:border-[#c3f400]/40 transition-colors cursor-pointer">
                                    <div className="h-40 w-full relative">
                                        <div className="absolute inset-0 bg-black/40 z-10"></div>
                                        <img
                                            alt="Power Play Arena"
                                            className="w-full h-full object-cover"
                                            src="https://images.unsplash.com/photo-1599818815124-783fb796d8e0?auto=format&fit=crop&w=800&q=80"
                                        />
                                        <div className="absolute top-3 right-3 z-20 px-2 py-1 bg-black/80 backdrop-blur border border-white/10 text-white font-['Inter'] text-[10px] font-medium uppercase rounded-[0.125rem]">
                                            Pro Grade
                                        </div>
                                    </div>
                                    <div className="p-4">
                                        <h4 className="font-['Inter'] text-[18px] leading-[1.6] text-[#ffffff] font-bold">Power Play Arena</h4>
                                        <p className="font-['Inter'] text-[12px] leading-[1] text-[#c4c9ac] mt-2 flex items-center gap-1">
                                            <span className="material-symbols-outlined text-[14px]">location_on</span> Northside Hub
                                        </p>
                                        <div className="flex justify-between items-end mt-4 pt-4 border-t border-[#1A1A1A]">
                                            <div>
                                                <span className="font-['Inter'] text-[10px] text-[#c4c9ac] uppercase block mb-1">Starting from</span>
                                                <span className="font-['Space_Grotesk'] text-[24px] leading-[1.2] font-semibold text-[#ffffff]">Rp120k<span className="font-['Inter'] text-[16px] leading-[1.5] text-[#c4c9ac] font-normal">/hr</span></span>
                                            </div>
                                            <button className="bg-transparent border border-[#c3f400] text-[#c3f400] font-['Space_Grotesk'] text-[14px] leading-[1] tracking-[0.05em] font-bold py-1.5 px-4 rounded-[0.125rem] uppercase hover:bg-[#c3f400] hover:text-[#161e00] transition-colors text-xs">
                                                Book
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                {/* Court 3 */}
                                <div className="bg-[#121212] border border-[#1A1A1A] rounded-lg overflow-hidden group hover:border-[#c3f400]/40 transition-colors hidden md:block cursor-pointer">
                                    <div className="h-40 w-full relative">
                                        <div className="absolute inset-0 bg-black/40 z-10"></div>
                                        <div className="w-full h-full bg-[#0A0A0A] flex items-center justify-center border-b border-[#1A1A1A]">
                                            <span className="material-symbols-outlined text-4xl text-[#c3f400]/30 group-hover:text-[#c3f400]/60 transition-colors">sports_tennis</span>
                                        </div>
                                    </div>
                                    <div className="p-4 flex flex-col h-[calc(100%-10rem)] justify-center items-center text-center">
                                        <h4 className="font-['Inter'] text-[18px] leading-[1.6] text-[#ffffff] font-bold mb-2">Explore All Venues</h4>
                                        <p className="font-['Inter'] text-[12px] leading-[1] text-[#c4c9ac] mb-4">Discover 50+ elite courts across the city.</p>
                                        <button className="bg-[#c3f400] text-[#161e00] font-['Space_Grotesk'] text-[14px] leading-[1] tracking-[0.05em] font-bold py-2 px-6 rounded-[0.125rem] uppercase hover:bg-[#abd600] transition-colors text-xs w-full">
                                            Browse Map
                                        </button>
                                    </div>
                                </div>

                            </div>
                        </motion.div>
                    </div>
                </motion.main>
            </div>
        </>
    );
}