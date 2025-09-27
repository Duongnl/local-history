import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const ContentPage4 = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [videoInView, setVideoInView] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth < 768);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  // Intersection Observer to control video animation and fix flicker
  useEffect(() => {
    const videoEl = videoRef.current;
    if (!videoEl) return;
    let ticking = false;
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (!ticking) {
          window.requestAnimationFrame(() => {
            setVideoInView(entry.isIntersecting);
            ticking = false;
          });
          ticking = true;
        }
      },
      {
        threshold: 0.5,
      }
    );
    observer.observe(videoEl);
    return () => observer.disconnect();
  }, []);

  const offices = [
    {
      img: "page4_1.webp",
      title: "ĐẢNG ỦY - ỦY BAN MTTQ VN PHƯỜNG TÂN SƠN NHÌ",
      address: "Số 6 Nguyễn Thế Truyện",
    },
    {
      img: "page4_2.jpg",
      title: "HỘI ĐỒNG NHÂN DÂN - UBND PHƯỜNG TÂN SƠN NHÌ",
      address: "Số 48 Tân Quý",
    },
      {
      img: "img_dtd.jpg",
      title: "TRƯỜNG TIỂU HỌC ĐOÀN THỊ ĐIỂM",
      address: "14-16 Trần Văn Ơn",
    },
    {
      img: "img_dangtrancon.jpg",
      title: "TRƯỜNG TRUNG HỌC CƠ SỞ ĐẶNG TRẦN CÔN",
      address: "15/29 Cầu Xéo",
    },
     {
      img: "img_tranquangkhai.jpg",
      title: "TRƯỜNG TRUNG HỌC CƠ SỞ TRẦN QUANG KHẢI",
      address: "94/3 Nguyễn Thế Truyện",
    },
    {
      img: "img_ttt.jpg",
      title: "TRƯỜNG TRUNG HỌC CƠ SỞ TÔN THẤT TÙNG",
      address: "3 Đường D2",
    },
   
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 text-center space-y-20">
      {/* Khung video */}
      <motion.div
        className="rounded-2xl border overflow-hidden relative"
        style={{ boxShadow: isMobile ? "10px 10px 0 #000" : "20px 20px 0 #000" }}
        initial={{ opacity: 0, scale: isMobile ? 1 : 0.8, y: isMobile ? 30 : 100 }}
        animate={videoInView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0.7, scale: 0.98, y: 40 }}
        transition={{ duration: 1, ease: "easeOut" }}
        whileHover={!isMobile ? { scale: 1.02 } : {}} // bỏ hover trên mobile
        whileTap={{ scale: 0.95 }}
      >
        {/* Thanh trên giả lập trình duyệt */}
        <div className="flex items-center justify-between px-4 py-2 border-b bg-gray-50">
          <div className="flex items-center gap-2">
            {["←", "→"].map((icon, idx) => (
              <motion.button
                key={idx}
                whileHover={!isMobile ? { scale: 1.2 } : {}}
                whileTap={{ scale: 0.9 }}
                className="w-6 h-6 flex items-center justify-center rounded-full border"
              >
                {icon}
              </motion.button>
            ))}
          </div>
          <div className="flex-1 mx-4">
            <motion.div
              className="bg-white border px-3 py-1 h-10 rounded-full text-sm text-gray-500 truncate shadow-inner"
              whileHover={!isMobile ? { scale: 1.05 } : {}}
            />
          </div>
          <div className="flex items-center gap-2">
            {["bg-yellow-400", "bg-green-500", "bg-red-500"].map((c, idx) => (
              <motion.span
                key={idx}
                className={`w-3.5 h-3.5 ${c} rounded-full shadow-sm`}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: idx * 0.2 }}
                whileHover={!isMobile ? { scale: 1.4 } : {}}
              />
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
          animate={videoInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : { opacity: 0.5, y: 40, filter: "blur(8px)" }}
          transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
        >
          <div className="relative">
            <video
              ref={videoRef}
              src="page4.mp4"
              controls
              className="w-full"
              style={{ zIndex: 1, position: "relative" }}
            />
            {/* Overlay effect for fade-in/fade-out */}
            <motion.div
              className="absolute inset-0 pointer-events-none"
              initial={{ opacity: 1 }}
              animate={videoInView ? { opacity: 0 } : { opacity: 0.5 }}
              transition={{ duration: 0.7, ease: "easeInOut" }}
              style={{ background: "linear-gradient(180deg, #fff 0%, transparent 60%, #fff 100%)", zIndex: 2 }}
            />
            {/* Subtle animated overlay for extra effect */}
            <motion.div
              className="absolute inset-0 pointer-events-none"
              style={{ zIndex: 3 }}
              animate={videoInView ? { opacity: 0.08 } : { opacity: 0.18 }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
            >
              <svg width="100%" height="100%" viewBox="0 0 400 225" fill="none" xmlns="http://www.w3.org/2000/svg">
                <motion.ellipse
                  cx="200" cy="112" rx="180" ry="60"
                  fill="#fff" fillOpacity="0.15"
                  animate={{ rx: videoInView ? 180 : 120, opacity: videoInView ? 0.15 : 0.08 }}
                  transition={{ duration: 1.2, ease: "easeInOut" }}
                />
              </svg>
            </motion.div>
          </div>
        </motion.div>

        {/* Thanh footer giả */}
        <motion.div
          className="h-12 flex items-center px-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <motion.div
            className="h-8 w-20 border-2 rounded-xl"
            whileHover={!isMobile ? { scale: 1.2 } : {}}
          />
        </motion.div>
      </motion.div>

      {/* Section title */}
      <motion.h2
        className="inline-block bg-red-500 text-white text-2xl md:text-3xl font-bold px-8 py-3 rounded-l-full rounded-r-full shadow-lg scroll-mt-[160px] mt-[30px]" id='truso' 
        initial={{ scale: 0.5, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 0.7, type: "spring", stiffness: 150 }}
        whileHover={!isMobile ? { scale: 1.1, textShadow: "0 0 20px #fff" } : {}}
      >
        CÔNG TRÌNH VĂN HÓA
      </motion.h2>

      {/* Offices grid */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.2 }}
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.25 } },
        }}
      >
        {offices.map((o, i) => (
          <motion.div
            key={i}
            className="bg-white p-5 rounded-xl shadow-md hover:shadow-2xl"
            variants={{
              hidden: { opacity: 0, y: isMobile ? 50 : 100, scale: 0.95 },
              show: { opacity: 1, y: 0, scale: 1 },
            }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            whileHover={!isMobile ? {
              scale: 1.05,
              rotate: -2,
              boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
            } : {}}
            whileTap={{ scale: 0.95 }}
          >
            <motion.img
              src={o.img}
              alt={o.title}
              className="rounded-lg mb-4 w-full h-56 object-cover shadow"
              whileHover={!isMobile ? { scale: 1.05 } : {}}
            />
            <motion.h3
              className="font-semibold text-red-600 mb-2"
              initial={{ opacity: 0, x: isMobile ? 0 : -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              {o.title}
            </motion.h3>
            <motion.p
              className="text-black"
              initial={{ opacity: 0, x: isMobile ? 0 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              Địa chỉ: {o.address}
            </motion.p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default ContentPage4;
