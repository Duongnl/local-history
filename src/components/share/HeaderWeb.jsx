import { motion } from 'framer-motion';
import OverlayMenu from './OverlayMenu';

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
                            ỦY BAN NHÂN DÂN PHƯỜNG TÂN SƠN NHÌ
                        </motion.p>
                        <motion.p
                            className="text-[18px] font-semibold text-blue-700 tracking-wide text-header"
                            style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.1)' }}
                        >
                           TRƯỜNG TIỂU HỌC ĐOÀN THỊ ĐIỂM
                        </motion.p>
                    </motion.div>

                    <div className='flex gap-6'>
                        <a href="#vitri" onClick={(e) => { e.preventDefault(); document.querySelector('#vitri').scrollIntoView({ behavior: 'smooth' }); }} className="text-[18px] navigation cursor-pointer">Thông tin hành chính</a>
                        <a href="#truso" onClick={(e) => { e.preventDefault(); document.querySelector('#truso').scrollIntoView({ behavior: 'smooth' }); }} className="text-[18px] navigation cursor-pointer">Di tích lịch sử</a>
                        <a href="#ditich" onClick={(e) => { e.preventDefault(); document.querySelector('#ditich').scrollIntoView({ behavior: 'smooth' }); }} className="text-[18px] navigation cursor-pointer">Công trình văn hóa</a>
                        <a href="#ditich" onClick={(e) => { e.preventDefault(); document.querySelector('#ditich').scrollIntoView({ behavior: 'smooth' }); }} className="text-[18px] navigation cursor-pointer">Phong tục, món ăn
</a>
                        <a href="#ditich" onClick={(e) => { e.preventDefault(); document.querySelector('#ditich').scrollIntoView({ behavior: 'smooth' }); }} className="text-[18px] navigation cursor-pointer">Bài hát</a>
                        <a href="https://bit.ly/LICHSUDIAPHUONG" >Tài nguyên</a>
                    </div>

                    {/* Right side - Logo with animation */}

                    <div
                        className="flex-shrink-0 img-header w-[140px] h-[93px]"
                    >
                        <img src="logohis.png" alt="" />

                    </div>
                </div>

                {/* Decorative elements */}
                <motion.div
                    className="mt-1 w-full h-1 bg-gradient-to-r from-red-400 via-yellow-400 to-blue-400 rounded-full"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                />

                {/* Floating particles effect */}

                <div className="header-mobile hidden fixed top-25 right-0 z-50">
                    <OverlayMenu />
                </div>


            </div>
        </>
    )
}
export default Header