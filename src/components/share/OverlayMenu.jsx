import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function OverlayMenu() {
    const [open, setOpen] = useState(false);

    return (
        <div className="relative">
            {/* Button mở menu */}
         
                <button
                    onClick={() => setOpen(!open)}
                    className="w-12 h-12 !bg-gray-200 !text-gray-600 !rounded-2xl !shadow-md hover:shadow-lg border border-gray-100 hover:bg-gray-50 transition-all duration-200 flex items-center justify-center text-xl"
                >
                    ≡
                </button>
            
            {/* Overlay + menu */}
            <AnimatePresence>
                {open && (
                    <>
                        {/* Overlay tối */}
                        <motion.div
                            className="fixed inset-0  bg-opacity-20 z-40"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setOpen(false)} // click overlay để đóng
                        />

                        {/* Menu sổ xuống */}
                        <motion.div
                            className="fixed top-0 left-0 right-0 bg-white shadow-lg z-50 p-6 flex flex-col gap-4"
                            initial={{ y: "-100%" }}
                            animate={{ y: 0 }}
                            exit={{ y: "-100%" }}
                            transition={{ duration: 0.5, ease: "easeInOut" }}
                        >
                            <a
                                href="#vitri"
                                className="text-[18px] cursor-pointer"
                                onClick={() => setOpen(false)}
                            >
                                Vị trí địa lý
                            </a>
                            <a
                                href="#truso"
                                className="text-[18px] cursor-pointer"
                                onClick={() => setOpen(false)}
                            >
                                Trụ sở hành chính
                            </a>
                            <a
                                href="#ditich"
                                className="text-[18px] cursor-pointer"
                                onClick={() => setOpen(false)}
                            >
                                Di tích lịch sử
                            </a>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </div>
    );
}
