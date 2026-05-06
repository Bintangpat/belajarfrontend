// Rewritten using TypeScript, TailwindCSS, Vite framework rules, and Framer Motion without changing the structure and layout[cite: 5].


import { motion } from 'framer-motion';

export default function PaymentSuccessPage() {
    const staggerContainer = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.15 },
        },
    };

    const itemFadeUp = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } as const },
    };

    const checkAnimation = {
        hidden: { scale: 0, opacity: 0 },
        show: {
            scale: 1,
            opacity: 1,
            transition: { type: 'spring', stiffness: 200, damping: 15, delay: 0.2 } as const
        },
    };

    return (
        <>
            {/* Ensure you have imported the following fonts in your index.html or global CSS:
        <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;600;700;900&family=Inter:wght@400;500;600&display=swap" rel="stylesheet"/>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet"/>
      */}
            <style dangerouslySetInnerHTML={{
                __html: `
        .ticket-cutout-both {
             mask-image: radial-gradient(circle at 0 50%, transparent 12px, black 13px), radial-gradient(circle at 100% 50%, transparent 12px, black 13px);
             mask-composite: intersect;
             -webkit-mask-image: radial-gradient(circle at 0 50%, transparent 12px, black 13px), radial-gradient(circle at 100% 50%, transparent 12px, black 13px);
             -webkit-mask-composite: source-in;
        }
      `}} />

            <div className="bg-[#131313] text-[#e5e2e1] antialiased min-h-screen flex flex-col items-center justify-center p-[16px] md:p-[24px] font-['Inter']">
                <motion.main
                    variants={staggerContainer}
                    initial="hidden"
                    animate="show"
                    className="w-full max-w-4xl mx-auto flex flex-col gap-[24px]"
                >
                    {/* Success Header */}
                    <motion.header variants={itemFadeUp} className="text-center flex flex-col items-center gap-[8px]">
                        <motion.div
                            variants={checkAnimation}
                            className="w-16 h-16 rounded-full bg-[#c3f400]/10 flex items-center justify-center border border-[#c3f400]/30 mb-4 shadow-[0_0_8px_#c3f400]"
                        >
                            <span
                                className="material-symbols-outlined text-[#c3f400] text-3xl"
                                style={{ fontVariationSettings: "'FILL' 1" }}
                            >
                                check_circle
                            </span>
                        </motion.div>
                        <h1 className="font-['Space_Grotesk'] text-[48px] leading-[1.1] tracking-[-0.02em] font-bold text-[#ffffff] drop-shadow-[0_0_4px_rgba(195,244,0,0.5)] uppercase">
                            PAYMENT SUCCESSFUL
                        </h1>
                        <p className="font-['Inter'] text-[18px] leading-[1.6] font-normal text-[#c4c9ac]">
                            Your court has been secured. Game on.
                        </p>
                    </motion.header>

                    {/* Bento Grid for Ticket & Actions */}
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-[12px]">

                        {/* E-Ticket Main Module */}
                        <motion.div variants={itemFadeUp} className="col-span-1 md:col-span-8 flex flex-col">
                            {/* Ticket Top Half */}
                            <div className="bg-[#0A0A0A] border border-[#2a2a2a] rounded-t-xl p-6 relative border-b-0 border-dashed ticket-cutout-both">
                                <div className="flex justify-between items-start mb-8">
                                    <div>
                                        <span className="font-['Space_Grotesk'] text-[14px] leading-[1] tracking-[0.05em] font-bold text-[#c3f400] uppercase tracking-widest block mb-2">
                                            E-TICKET
                                        </span>
                                        <h2 className="font-['Space_Grotesk'] text-[32px] leading-[1.2] tracking-[-0.01em] font-bold text-[#ffffff] uppercase">
                                            Alpha Arena #4
                                        </h2>
                                    </div>
                                    <div className="text-right">
                                        <span className="font-['Inter'] text-[12px] leading-[1] font-medium text-[#c4c9ac] block mb-1 uppercase">
                                            Booking ID
                                        </span>
                                        <span className="font-['Space_Grotesk'] text-[24px] leading-[1.2] font-semibold text-[#ffffff] font-mono tracking-tighter">
                                            SB-9824-XT
                                        </span>
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div className="p-4 bg-[#201f1f]/50 rounded-lg border border-[#2a2a2a]/50">
                                        <span className="font-['Inter'] text-[12px] leading-[1] font-medium text-[#c4c9ac] block mb-1 uppercase flex items-center gap-2">
                                            <span className="material-symbols-outlined text-sm">calendar_today</span> Date
                                        </span>
                                        <span className="font-['Inter'] text-[18px] leading-[1.6] text-[#ffffff] font-semibold">
                                            Oct 24, 2023
                                        </span>
                                    </div>
                                    <div className="p-4 bg-[#201f1f]/50 rounded-lg border border-[#2a2a2a]/50">
                                        <span className="font-['Inter'] text-[12px] leading-[1] font-medium text-[#c4c9ac] block mb-1 uppercase flex items-center gap-2">
                                            <span className="material-symbols-outlined text-sm">schedule</span> Time
                                        </span>
                                        <span className="font-['Inter'] text-[18px] leading-[1.6] text-[#ffffff] font-semibold">
                                            19:00 - 21:00
                                        </span>
                                    </div>
                                    <div className="p-4 bg-[#201f1f]/50 rounded-lg border border-[#2a2a2a]/50">
                                        <span className="font-['Inter'] text-[12px] leading-[1] font-medium text-[#c4c9ac] block mb-1 uppercase flex items-center gap-2">
                                            <span className="material-symbols-outlined text-sm">group</span> Players
                                        </span>
                                        <span className="font-['Inter'] text-[18px] leading-[1.6] text-[#ffffff] font-semibold">
                                            4 Max
                                        </span>
                                    </div>
                                    <div className="p-4 bg-[#201f1f]/50 rounded-lg border border-[#2a2a2a]/50">
                                        <span className="font-['Inter'] text-[12px] leading-[1] font-medium text-[#c4c9ac] block mb-1 uppercase flex items-center gap-2">
                                            <span className="material-symbols-outlined text-sm">sports_tennis</span> Court Type
                                        </span>
                                        <span className="font-['Inter'] text-[18px] leading-[1.6] text-[#ffffff] font-semibold">
                                            Premium Wood
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Ticket Divider Line */}
                            <div className="h-[2px] w-full bg-[#0A0A0A] relative flex items-center border-x border-[#2a2a2a]">
                                <div className="w-full border-t-2 border-dashed border-[#2a2a2a] mx-4"></div>
                            </div>

                            {/* Ticket Bottom Half */}
                            <div className="bg-[#0A0A0A] border border-[#2a2a2a] rounded-b-xl p-6 border-t-0 ticket-cutout-both flex flex-col md:flex-row items-center justify-between gap-6">
                                <div className="flex-1 w-full">
                                    <div className="bg-[#ffffff] p-4 rounded-lg flex justify-center items-center w-full max-w-[200px] mx-auto md:mx-0">
                                        <img
                                            alt="QR Code"
                                            className="w-full aspect-square object-cover"
                                            src="https://images.unsplash.com/photo-1614064006180-2db47d2516fa?auto=format&fit=crop&w=400&q=80"
                                        />
                                    </div>
                                    <p className="font-['Inter'] text-[12px] leading-[1] font-medium text-center md:text-left text-[#c4c9ac] mt-3 uppercase tracking-widest">
                                        Scan at entrance
                                    </p>
                                </div>
                                <div className="flex-1 w-full flex flex-col gap-3">
                                    <button className="w-full bg-[#c3f400] text-[#556d00] font-['Space_Grotesk'] text-[14px] leading-[1] tracking-[0.05em] font-bold py-4 rounded-lg uppercase flex items-center justify-center gap-2 hover:bg-[#abd600] transition-colors shadow-[0_0_8px_#c3f400]">
                                        <span className="material-symbols-outlined text-lg">download</span>
                                        Download PDF
                                    </button>
                                    <button className="w-full bg-transparent border border-[#c3f400] text-[#c3f400] font-['Space_Grotesk'] text-[14px] leading-[1] tracking-[0.05em] font-bold py-4 rounded-lg uppercase flex items-center justify-center gap-2 hover:bg-[#c3f400]/10 transition-colors">
                                        <span className="material-symbols-outlined text-lg">share</span>
                                        Share Ticket
                                    </button>
                                </div>
                            </div>
                        </motion.div>

                        {/* Side Bento Modules */}
                        <motion.div variants={itemFadeUp} className="col-span-1 md:col-span-4 flex flex-col gap-[12px]">

                            {/* Payment Summary */}
                            <div className="bg-[#0A0A0A] border border-[#2a2a2a] rounded-xl p-6">
                                <h3 className="font-['Space_Grotesk'] text-[14px] leading-[1] tracking-[0.05em] font-bold text-[#ffffff] uppercase mb-4 tracking-widest border-b border-[#2a2a2a] pb-2">
                                    Receipt
                                </h3>
                                <div className="flex flex-col gap-3 mb-6">
                                    <div className="flex justify-between items-center">
                                        <span className="font-['Inter'] text-[16px] leading-[1.5] font-normal text-[#c4c9ac]">Court Rental (2h)</span>
                                        <span className="font-['Inter'] text-[16px] leading-[1.5] font-normal text-[#ffffff]">$40.00</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="font-['Inter'] text-[16px] leading-[1.5] font-normal text-[#c4c9ac]">Service Fee</span>
                                        <span className="font-['Inter'] text-[16px] leading-[1.5] font-normal text-[#ffffff]">$2.50</span>
                                    </div>
                                    <div className="w-full h-px bg-[#2a2a2a] my-1"></div>
                                    <div className="flex justify-between items-center">
                                        <span className="font-['Space_Grotesk'] text-[14px] leading-[1] tracking-[0.05em] font-bold text-[#ffffff] uppercase">Total Paid</span>
                                        <span className="font-['Space_Grotesk'] text-[24px] leading-[1.2] font-semibold text-[#c3f400]">$42.50</span>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3 bg-[#201f1f]/30 p-3 rounded-lg border border-[#2a2a2a]/50">
                                    <span className="material-symbols-outlined text-[#c4c9ac]">credit_card</span>
                                    <div className="flex flex-col">
                                        <span className="font-['Inter'] text-[12px] leading-[1] font-medium text-[#c4c9ac] uppercase">Paid via Card</span>
                                        <span className="font-['Inter'] text-[16px] leading-[1.5] font-normal text-[#ffffff] tracking-widest">•••• 4242</span>
                                    </div>
                                </div>
                            </div>

                            {/* Next Steps / Actions */}
                            <div className="bg-[#0A0A0A] border border-[#2a2a2a] rounded-xl p-6 flex-1 flex flex-col justify-end relative overflow-hidden group">
                                {/* Background abstract element */}
                                <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-[#c3f400]/5 rounded-full blur-2xl group-hover:bg-[#c3f400]/10 transition-all duration-500"></div>
                                <div className="relative z-10">
                                    <h3 className="font-['Space_Grotesk'] text-[14px] leading-[1] tracking-[0.05em] font-bold text-[#ffffff] uppercase mb-2 tracking-widest">
                                        Ready for action?
                                    </h3>
                                    <p className="font-['Inter'] text-[16px] leading-[1.5] font-normal text-[#c4c9ac] mb-6">
                                        Review facility rules or invite your opponents.
                                    </p>
                                    <a className="inline-flex items-center gap-2 text-[#c3f400] font-['Space_Grotesk'] text-[14px] leading-[1] tracking-[0.05em] font-bold uppercase hover:text-[#abd600] transition-colors" href="#">
                                        Return to Dashboard
                                        <span className="material-symbols-outlined text-sm">arrow_forward</span>
                                    </a>
                                </div>
                            </div>

                        </motion.div>
                    </div>
                </motion.main>
            </div>
        </>
    );
}