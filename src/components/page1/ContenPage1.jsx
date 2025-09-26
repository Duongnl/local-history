import { motion } from "motion/react"
import { Typewriter } from "react-simple-typewriter"


const ContentPage1 = () => {
    return (
        <>
            <div className="w-full mt-[60px] flex ">


                <motion.div
                    initial={{ x: -100, opacity: 0 }}          // bắt đầu từ bên trái
                    whileInView={{ x: 0, opacity: 1 }}         // khi scroll đến thì hiện ra
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: false, amount: 0.2 }}    // once: false = cho phép lặp lại khi scroll lên xuống
                    className="basis-4/6 flex  justify-center items-center"
                >
                    <div className="text-center">
                        <p className="text-[50px] font-bold text-red-600">LỊCH SỬ - ĐỊA LÍ 4</p>
                        <p className="text-[35px] text-blue-600">Sau sáp nhập 01/07/2025</p>
                        <p className="mt-[20px] text-[30px] font-bold text-gray-500">
                            <Typewriter
                                words={['Chào mừng đến với Lịch Sử - Địa Lí 4', 'Giới thiệu về Phường Tân Sơn Nhì', 'Vị trí Địa Lí, trụ sở hành chính, di tích Lịch sử ']}
                                loop={0} // 0 = vô hạn
                                cursor
                                cursorStyle="|"
                                typeSpeed={80}   // tốc độ gõ
                                deleteSpeed={50} // tốc độ xóa
                                delaySpeed={1500} // delay trước khi xóa
                            />
                        </p>
                        <div className="w-full flex justify-center mt-[90px]">
                            <motion.div
                                animate={{ y: [0, -20, 0] }}             // di chuyển lên (-20px) rồi xuống (0)
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,                      // lặp vô hạn
                                    repeatType: "loop",                    // lặp kiểu vòng lặp
                                    ease: "easeInOut"
                                }}

                            >
                                <img src="student.png" alt="" className="w-[300px] h-[300px]" />
                            </motion.div>


                        </div>
                    </div>
                </motion.div>




                <motion.div
                    initial={{ x: 100, opacity: 0 }}             // bắt đầu lệch phải
                    whileInView={{ x: 0, opacity: 1 }}           // khi scroll tới thì hiện ra
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: false, amount: 0.2 }}      // cho phép hiện lại khi kéo lên xuống
                    whileHover={{ scale: 1.05 }}                 // hover phóng to nhẹ
                    whileTap={{ scale: 0.95 }}                   // tap/nhấn thu nhỏ nhẹ
                    className=" bg-white basis-2/6"
                >
                    <img
                        src="map.jpg"
                        alt="map"
                        style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    />
                </motion.div>
            </div>
        </>
    )
}

export default ContentPage1