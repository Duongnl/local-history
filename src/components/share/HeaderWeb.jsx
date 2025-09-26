import { motion } from 'framer-motion';

const Header = () => {
    const textVariants = {
        animate: {
            y: [0, -8, 0],
            transition: {
                duration: 2,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "loop"
            }
        }
    };


    return (
        <>
            <div className="w-full bg-white p-6 rounded-xl shadow-lg border border-gray-200 mt-[10px]">
                <div className="w-full flex justify-between items-center">
                    {/* Left side - Text with animation */}
                    <motion.div
                        className="flex flex-col space-y-2 "
                        variants={textVariants}
                        animate="animate"
                    >
                        <motion.p
                            className="text-[25px] font-bold text-blue-700 tracking-wide text-center"
                            style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.1)' }}
                        >
                            ĐOÀN PHƯỜNG TÂN SƠN NHÌ
                        </motion.p>
                        <motion.p
                            className="text-[25px] font-semibold text-blue-700 tracking-wide"
                            style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.1)' }}
                        >
                            CHI ĐOÀN TIỂU HỌC ĐOÀN THỊ ĐIỂM
                        </motion.p>
                    </motion.div>

                    {/* Right side - Logo with animation */}
                    <div
                        className="flex-shrink-0"
                    >
                        <img src="logohis.png" alt="" />

                    </div>
                </div>

                {/* Decorative elements */}
                <motion.div
                    className="mt-4 w-full h-1 bg-gradient-to-r from-red-400 via-yellow-400 to-blue-400 rounded-full"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                />

                {/* Floating particles effect */}
   
            </div>
        </>
    )
}
export default Header