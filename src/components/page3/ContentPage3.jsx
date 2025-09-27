import React from 'react'
import { motion } from 'framer-motion'

const ContentPage3 = () => {
  return (
    <div className='min-h-screen py-6 px-2 md:py-20 md:px-4'>
      {/* Title lớn phía trên với animation nổi bật */}
      <motion.div
        className="text-[32px]  uppercase  sm:text-[16px] md:text-[54px] font-extrabold text-blue-900 text-center mb-4 sm:mb-2 md:mb-8"
        initial={{ opacity: 0, y: -60, scale: 0.8 }}
        animate={{ opacity: 1, y: 0, scale: 1.05 }}
        transition={{
          duration: 0.8,
          type: "spring",
          stiffness: 120,
          delay: 0.2
        }}
        whileHover={{ scale: 1.12, color: "#2563eb" }}
      >
        Phường tân sân nhì 
      </motion.div>
      
      {/* Thông tin tổng quan */}
      <motion.div
        className='flex flex-col justify-center px-2 md:px-6 w-full'
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.2 }}
      >
        <motion.h2
          className="text-[18px] sm:text-[22px] md:text-[38px] font-bold text-blue-700 mb-2 md:mb-4 text-center"
          initial={{ y: -30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Vị trí sau khi xác lập
        </motion.h2>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="text-[15px] sm:text-[18px] md:text-[26px] leading-relaxed text-gray-800 mb-4 text-center"
        >
          <p>
            <span className="font-bold text-blue-800">Diện tích:</span>
            <span className="font-extrabold text-red-600 ml-2">3,46 km²</span>
          </p>
          <p className="mt-2">
            <span className="font-bold text-blue-800">Dân cư:</span>
            <span className="font-extrabold text-green-600 ml-2">~150.000 người</span>
          </p>
          <p className="mt-4">
            Vị trí thuận lợi, kết nối các phường và tuyến đường lớn của quận Tân Phú.
          </p>
        </motion.div>
      </motion.div>
      <div className="w-full flex flex-grow contentpage3 items-center justify-center">
        {/* Map Image - responsive */}
        <motion.div
          className='flex justify-center items-center px-2 md:px-6 w-full'
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.2 }}
        >
          <motion.img
            src="/mapphuthohoa.png"
            alt="Bản đồ Phường Phú Thọ Hòa"
            className="w-full max-w-xs sm:max-w-sm md:max-w-[900px] rounded-xl shadow-lg object-contain my-4"
            style={{ maxHeight: '60vh' }}
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          />
        </motion.div>
      </div>
    </div>
  )
}

export default ContentPage3