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
            <div className=" fixed top-0 left-0 w-full z-50 bg-white p-4 rounded-xl shadow-lg border border-gray-200  ">
                <div className="w-full flex justify-between items-center div-header">
                    {/* Left side - Text with animation */}
                    <motion.div
                        className="flex flex-col space-y-2 "
                        variants={textVariants}
                        animate="animate"
                    >
                        <motion.p
                            className="text-[18px] font-bold text-blue-700 tracking-wide text-center text-header"
                            style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.1)' }}
                        >
                            ĐOÀN PHƯỜNG TÂN SƠN NHÌ
                        </motion.p>
                        <motion.p
                            className="text-[18px] font-semibold text-blue-700 tracking-wide text-header"
                            style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.1)' }}
                        >
                            CHI ĐOÀN TIỂU HỌC ĐOÀN THỊ ĐIỂM
                        </motion.p>
                    </motion.div>

                    <div className='flex gap-4'>
                        <p className='text-[18px]'>Vị trí địa lý</p>
                        <p className='text-[18px]'>Trụ sở hành chính</p>
                        <p className='text-[18px]'>Di tích lịch sử</p>
                    </div>

                    {/* Right side - Logo with animation */}
                    <div
                        className="flex-shrink-0 img-header w-[105px] h-[69px]"
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