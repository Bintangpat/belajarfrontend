
import { motion } from 'framer-motion';

export default function SmashBookAdminDashboard() {
    // Framer Motion Animation Variants
    const slideLeft = {
        hidden: { opacity: 0, x: -50 },
        show: { opacity: 1, x: 0, transition: { duration: 0.5, ease: 'easeOut' } as const },
    };

    const slideDown = {
        hidden: { opacity: 0, y: -20 },
        show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } as const },
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.1 },
        },
    };

    const fadeUp = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } } as const,
    };

    return (
        <>
            {/* Pastikan Anda mengimpor font berikut di index.html atau _document.tsx:
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500&family=Space+Grotesk:wght@600;700;900&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      */}
            <style dangerouslySetInnerHTML={{
                __html: `
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
      `}} />

            <div className="bg-[#131313] text-[#e5e2e1] antialiased min-h-screen flex flex-col md:flex-row font-['Inter'] selection:bg-[#c3f400] selection:text-[#131313]">

                {/* SideNavBar */}
                <motion.nav
                    variants={slideLeft}
                    initial="hidden"
                    animate="show"
                    className="hidden md:flex flex-col h-full py-8 gap-4 bg-[#0A0A0A] fixed left-0 top-0 w-64 border-r border-white/10 z-40"
                >
                    <div className="px-6 mb-8">
                        <div className="text-[#CCFF00] font-black tracking-widest font-['Space_Grotesk'] text-2xl uppercase">SMASHBOOK</div>
                        <div className="font-['Space_Grotesk'] text-sm font-bold uppercase text-white/50 mt-1">Elite Badminton</div>
                    </div>

                    <div className="flex-1 flex flex-col gap-2 px-4">
                        {/* Active Tab: Dashboard */}
                        <a className="flex items-center gap-3 px-4 py-3 rounded-[0.125rem] text-[#CCFF00] border-r-4 border-[#CCFF00] bg-[#CCFF00]/10 transition-all duration-300 font-['Space_Grotesk'] text-sm font-bold uppercase" href="#">
                            <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>grid_view</span>
                            <span>Dashboard</span>
                        </a>
                        <a className="flex items-center gap-3 px-4 py-3 rounded-[0.125rem] text-white/50 hover:text-white hover:bg-white/5 hover:border-[#CCFF00]/40 transition-all duration-300 font-['Space_Grotesk'] text-sm font-bold uppercase border-r-4 border-transparent" href="#">
                            <span className="material-symbols-outlined text-[20px]">sports_tennis</span>
                            <span>Book Court</span>
                        </a>
                        <a className="flex items-center gap-3 px-4 py-3 rounded-[0.125rem] text-white/50 hover:text-white hover:bg-white/5 hover:border-[#CCFF00]/40 transition-all duration-300 font-['Space_Grotesk'] text-sm font-bold uppercase border-r-4 border-transparent" href="#">
                            <span className="material-symbols-outlined text-[20px]">emoji_events</span>
                            <span>Tournaments</span>
                        </a>
                        <a className="flex items-center gap-3 px-4 py-3 rounded-[0.125rem] text-white/50 hover:text-white hover:bg-white/5 hover:border-[#CCFF00]/40 transition-all duration-300 font-['Space_Grotesk'] text-sm font-bold uppercase border-r-4 border-transparent" href="#">
                            <span className="material-symbols-outlined text-[20px]">monitoring</span>
                            <span>Analytics</span>
                        </a>
                        <a className="flex items-center gap-3 px-4 py-3 rounded-[0.125rem] text-white/50 hover:text-white hover:bg-white/5 hover:border-[#CCFF00]/40 transition-all duration-300 font-['Space_Grotesk'] text-sm font-bold uppercase border-r-4 border-transparent" href="#">
                            <span className="material-symbols-outlined text-[20px]">group</span>
                            <span>Members</span>
                        </a>
                    </div>

                    <div className="px-6 mb-4">
                        <button className="w-full bg-[#c3f400] text-[#556d00] py-3 rounded-[0.125rem] font-['Space_Grotesk'] text-[14px] leading-[1] tracking-[0.05em] font-bold hover:bg-[#abd600] transition-colors uppercase">
                            Book Now
                        </button>
                    </div>

                    <div className="mt-auto flex flex-col gap-2 px-4 border-t border-white/10 pt-4">
                        <a className="flex items-center gap-3 px-4 py-2 rounded-[0.125rem] text-white/50 hover:text-white hover:bg-white/5 transition-all duration-300 font-['Space_Grotesk'] text-sm font-bold uppercase" href="#">
                            <span className="material-symbols-outlined text-[18px]">help</span>
                            <span>Help Center</span>
                        </a>
                        <a className="flex items-center gap-3 px-4 py-2 rounded-[0.125rem] text-white/50 hover:text-white hover:bg-white/5 transition-all duration-300 font-['Space_Grotesk'] text-sm font-bold uppercase" href="#">
                            <span className="material-symbols-outlined text-[18px]">logout</span>
                            <span>Logout</span>
                        </a>
                    </div>
                </motion.nav>

                {/* Main Content Area */}
                <div className="flex-1 flex flex-col min-h-screen md:ml-64 relative">

                    {/* TopAppBar */}
                    <motion.header
                        variants={slideDown}
                        initial="hidden"
                        animate="show"
                        className="fixed top-0 w-full z-50 md:w-[calc(100%-16rem)] bg-black border-b border-white/10 flex justify-between items-center px-6 h-16"
                    >
                        <div className="flex items-center gap-4">
                            {/* Mobile Menu Icon */}
                            <button className="md:hidden text-white/70 hover:text-[#CCFF00] transition-colors active:scale-95 duration-200">
                                <span className="material-symbols-outlined">menu</span>
                            </button>
                            <div className="text-2xl font-black text-[#CCFF00] italic font-['Space_Grotesk'] uppercase tracking-tight md:hidden">SMASHBOOK</div>

                            {/* Search Bar */}
                            <div className="hidden md:flex items-center bg-[#1c1b1b] rounded-full px-4 py-2 border border-[#444933]/30 focus-within:border-[#c3f400]/50 transition-colors">
                                <span className="material-symbols-outlined text-[#c4c9ac] text-[20px] mr-2">search</span>
                                <input
                                    className="bg-transparent border-none focus:ring-0 text-[#e5e2e1] text-[16px] placeholder-[#c4c9ac] w-64 p-0 outline-none"
                                    placeholder="Search courts, players..."
                                    type="text"
                                />
                            </div>
                        </div>

                        <div className="flex items-center gap-6">
                            <button className="text-white/70 hover:text-[#CCFF00] transition-colors active:scale-95 duration-200 relative">
                                <span className="material-symbols-outlined">notifications</span>
                                <span className="absolute top-0 right-0 w-2 h-2 bg-[#CCFF00] rounded-full"></span>
                            </button>
                            <button className="text-white/70 hover:text-[#CCFF00] transition-colors active:scale-95 duration-200">
                                <span className="material-symbols-outlined">settings</span>
                            </button>
                            <div className="w-8 h-8 rounded-full overflow-hidden border border-[#444933] bg-[#2a2a2a]">
                                <img
                                    alt="User avatar"
                                    className="w-full h-full object-cover"
                                    src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=100&q=80"
                                />
                            </div>
                        </div>
                    </motion.header>

                    {/* Dashboard Content Container */}
                    <motion.main
                        variants={staggerContainer}
                        initial="hidden"
                        animate="show"
                        className="flex-1 p-[24px] mt-16 overflow-y-auto"
                    >
                        {/* Page Header */}
                        <motion.div variants={fadeUp} className="flex justify-between items-end mb-8">
                            <div>
                                <h1 className="font-['Space_Grotesk'] text-[32px] font-bold leading-[1.2] tracking-[-0.01em] text-[#e5e2e1] mb-1">Command Center</h1>
                                <p className="font-['Inter'] text-[16px] font-normal leading-[1.5] text-[#c4c9ac]">Live metrics and court status.</p>
                            </div>
                            <div className="hidden md:flex gap-3">
                                <button className="px-4 py-2 rounded-[0.125rem] border border-[#444933] text-[#e5e2e1] font-['Space_Grotesk'] text-[14px] font-bold leading-[1] tracking-[0.05em] hover:bg-[#353534] transition-colors uppercase">
                                    Export Report
                                </button>
                            </div>
                        </motion.div>

                        {/* Bento Grid */}
                        <div className="grid grid-cols-4 md:grid-cols-12 gap-[12px]">

                            {/* Metric 1: Total Revenue */}
                            <motion.div variants={fadeUp} className="col-span-4 bg-[#1c1b1b] rounded-lg p-6 border border-[#444933]/30 hover:border-[#c3f400]/40 transition-colors group relative overflow-hidden flex flex-col justify-between h-[160px]">
                                <div className="absolute -right-4 -top-4 opacity-5 group-hover:opacity-10 transition-opacity">
                                    <span className="material-symbols-outlined text-[120px]">account_balance_wallet</span>
                                </div>
                                <div>
                                    <h2 className="font-['Space_Grotesk'] text-[14px] font-bold leading-[1] tracking-[0.05em] text-[#c4c9ac] uppercase">Total Revenue</h2>
                                </div>
                                <div className="flex items-end justify-between z-10">
                                    <div className="font-['Space_Grotesk'] text-[48px] font-bold leading-[1.1] tracking-[-0.02em] text-[#e5e2e1]">$24,890</div>
                                    <div className="flex items-center text-[#c3f400] font-['Inter'] text-[12px] font-medium leading-[1] bg-[#c3f400]/10 px-2 py-1 rounded">
                                        <span className="material-symbols-outlined text-[14px] mr-1">trending_up</span>
                                        +12.5%
                                    </div>
                                </div>
                            </motion.div>

                            {/* Metric 2: Court Occupancy */}
                            <motion.div variants={fadeUp} className="col-span-4 bg-[#1c1b1b] rounded-lg p-6 border border-[#444933]/30 hover:border-[#c3f400]/40 transition-colors flex flex-col justify-between h-[160px]">
                                <div>
                                    <h2 className="font-['Space_Grotesk'] text-[14px] font-bold leading-[1] tracking-[0.05em] text-[#c4c9ac] uppercase flex items-center justify-between">
                                        Court Occupancy
                                        <span className="w-2 h-2 bg-[#c3f400] rounded-full animate-pulse shadow-[0_0_8px_#c3f400]"></span>
                                    </h2>
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="font-['Space_Grotesk'] text-[48px] font-bold leading-[1.1] tracking-[-0.02em] text-[#e5e2e1]">85%</div>
                                    {/* Mini Radial Progress */}
                                    <div className="relative w-16 h-16">
                                        <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                                            <path
                                                className="text-[#353534]"
                                                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="3"
                                            />
                                            <path
                                                className="text-[#c3f400] drop-shadow-[0_0_4px_rgba(195,244,0,0.5)]"
                                                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeDasharray="85, 100"
                                                strokeLinecap="round"
                                                strokeWidth="3"
                                            />
                                        </svg>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Metric 3: Active Users */}
                            <motion.div variants={fadeUp} className="col-span-4 bg-[#1c1b1b] rounded-lg p-6 border border-[#444933]/30 hover:border-[#c3f400]/40 transition-colors flex flex-col justify-between h-[160px]">
                                <div>
                                    <h2 className="font-['Space_Grotesk'] text-[14px] font-bold leading-[1] tracking-[0.05em] text-[#c4c9ac] uppercase">Active Players</h2>
                                </div>
                                <div className="flex items-end justify-between">
                                    <div className="font-['Space_Grotesk'] text-[48px] font-bold leading-[1.1] tracking-[-0.02em] text-[#e5e2e1]">142</div>
                                    <div className="flex -space-x-2">
                                        <img alt="Player" className="w-8 h-8 rounded-full object-cover border-2 border-[#1c1b1b]" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=64&q=80" />
                                        <img alt="Player" className="w-8 h-8 rounded-full object-cover border-2 border-[#1c1b1b]" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=64&q=80" />
                                        <img alt="Player" className="w-8 h-8 rounded-full object-cover border-2 border-[#1c1b1b]" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=64&q=80" />
                                        <div className="w-8 h-8 rounded-full border-2 border-[#1c1b1b] bg-[#2a2a2a] flex items-center justify-center font-['Inter'] text-[12px] font-medium text-[#c4c9ac]">+5</div>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Line Chart: Weekly Earnings */}
                            <motion.div variants={fadeUp} className="col-span-4 md:col-span-8 bg-[#1c1b1b] rounded-lg p-6 border border-[#444933]/30 h-[300px] flex flex-col">
                                <div className="flex justify-between items-center mb-6">
                                    <h2 className="font-['Space_Grotesk'] text-[14px] font-bold leading-[1] tracking-[0.05em] text-[#e5e2e1] uppercase">Weekly Earnings Pipeline</h2>
                                    <div className="flex gap-2">
                                        <span className="px-2 py-1 rounded bg-[#353534] text-[#e5e2e1] font-['Inter'] text-[12px] font-medium cursor-pointer hover:bg-[#353534]">7D</span>
                                        <span className="px-2 py-1 rounded text-[#c4c9ac] font-['Inter'] text-[12px] font-medium cursor-pointer hover:text-[#e5e2e1]">30D</span>
                                    </div>
                                </div>

                                {/* SVG Chart Mockup */}
                                <div className="flex-1 relative w-full mt-4">
                                    {/* Grid lines */}
                                    <div className="absolute inset-0 flex flex-col justify-between">
                                        <div className="border-t border-[#444933]/20 w-full h-0"></div>
                                        <div className="border-t border-[#444933]/20 w-full h-0"></div>
                                        <div className="border-t border-[#444933]/20 w-full h-0"></div>
                                        <div className="border-t border-[#444933]/20 w-full h-0"></div>
                                    </div>
                                    {/* Line graph */}
                                    <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
                                        <defs>
                                            <linearGradient id="chartGradient" x1="0" x2="0" y1="0" y2="1">
                                                <stop offset="0%" stopColor="#c3f400" stopOpacity="0.2" />
                                                <stop offset="100%" stopColor="#c3f400" stopOpacity="0" />
                                            </linearGradient>
                                        </defs>
                                        <path d="M0,80 L10,60 L20,70 L40,30 L60,40 L80,10 L100,20 L100,100 L0,100 Z" fill="url(#chartGradient)" />
                                        {/* The line itself */}
                                        <path
                                            className="drop-shadow-[0_0_4px_rgba(195,244,0,0.5)]"
                                            d="M0,80 L10,60 L20,70 L40,30 L60,40 L80,10 L100,20"
                                            fill="none"
                                            stroke="#c3f400"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                        />
                                        {/* Data points */}
                                        <circle cx="40" cy="30" fill="#131313" r="3" stroke="#c3f400" strokeWidth="2" />
                                        <circle cx="80" cy="10" fill="#131313" r="3" stroke="#c3f400" strokeWidth="2" />
                                    </svg>
                                    {/* X-axis labels */}
                                    <div className="absolute bottom-[-24px] left-0 w-full flex justify-between text-[#c4c9ac] font-['Inter'] text-[12px] font-medium">
                                        <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Recent Activity Feed */}
                            <motion.div variants={fadeUp} className="col-span-4 md:col-span-4 bg-[#1c1b1b] rounded-lg p-6 border border-[#444933]/30 h-[300px] flex flex-col">
                                <div className="flex justify-between items-center mb-6">
                                    <h2 className="font-['Space_Grotesk'] text-[14px] font-bold leading-[1] tracking-[0.05em] text-[#e5e2e1] uppercase">Live Activity</h2>
                                    <span className="material-symbols-outlined text-[#c4c9ac] text-[18px] cursor-pointer hover:text-[#c3f400]">more_horiz</span>
                                </div>

                                <div className="flex-1 overflow-y-auto pr-2 space-y-4">
                                    {/* Activity Item */}
                                    <div className="flex gap-3 items-start group">
                                        <div className="w-8 h-8 rounded-full bg-[#353534] flex items-center justify-center shrink-0 group-hover:bg-[#c3f400]/20 transition-colors border border-[#444933]/50">
                                            <span className="material-symbols-outlined text-[16px] text-[#e5e2e1] group-hover:text-[#c3f400]">sports_tennis</span>
                                        </div>
                                        <div>
                                            <p className="font-['Inter'] text-[14px] text-[#e5e2e1] leading-snug"><span className="font-semibold">Court 4</span> booked by <span className="text-[#c3f400]">J. Doe</span></p>
                                            <p className="font-['Inter'] text-[12px] font-medium text-[#c4c9ac] mt-1">2 mins ago</p>
                                        </div>
                                    </div>

                                    {/* Activity Item */}
                                    <div className="flex gap-3 items-start group">
                                        <div className="w-8 h-8 rounded-full bg-[#353534] flex items-center justify-center shrink-0 group-hover:bg-[#c3f400]/20 transition-colors border border-[#444933]/50">
                                            <span className="material-symbols-outlined text-[16px] text-[#e5e2e1] group-hover:text-[#c3f400]">person_add</span>
                                        </div>
                                        <div>
                                            <p className="font-['Inter'] text-[14px] text-[#e5e2e1] leading-snug">New Pro Member registered.</p>
                                            <p className="font-['Inter'] text-[12px] font-medium text-[#c4c9ac] mt-1">15 mins ago</p>
                                        </div>
                                    </div>

                                    {/* Activity Item */}
                                    <div className="flex gap-3 items-start group">
                                        <div className="w-8 h-8 rounded-full bg-[#353534] flex items-center justify-center shrink-0 group-hover:bg-[#c3f400]/20 transition-colors border border-[#444933]/50">
                                            <span className="material-symbols-outlined text-[16px] text-[#e5e2e1] group-hover:text-[#c3f400]">payment</span>
                                        </div>
                                        <div>
                                            <p className="font-['Inter'] text-[14px] text-[#e5e2e1] leading-snug">Tournament entry fee received <span className="text-[#c3f400] font-semibold">+$120</span></p>
                                            <p className="font-['Inter'] text-[12px] font-medium text-[#c4c9ac] mt-1">1 hour ago</p>
                                        </div>
                                    </div>

                                    {/* Activity Item */}
                                    <div className="flex gap-3 items-start group">
                                        <div className="w-8 h-8 rounded-full bg-[#353534] flex items-center justify-center shrink-0 group-hover:bg-[#ffb4ab]/20 transition-colors border border-[#444933]/50">
                                            <span className="material-symbols-outlined text-[16px] text-[#e5e2e1] group-hover:text-[#ffb4ab]">cancel</span>
                                        </div>
                                        <div>
                                            <p className="font-['Inter'] text-[14px] text-[#e5e2e1] leading-snug">Court 2 booking cancelled.</p>
                                            <p className="font-['Inter'] text-[12px] font-medium text-[#c4c9ac] mt-1">2 hours ago</p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>

                        </div>
                    </motion.main>
                </div>
            </div>
        </>
    );
}