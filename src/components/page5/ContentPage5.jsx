import { motion } from "motion/react"

const ContentPage5 = () => {
  return (
    <>
      <div className="w-full mt-[60px] flex flex-grow contentpage5">
        {/* Header Section */}
        <motion.div
          className='w-full flex justify-between items-center mb-8 px-6'
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.2 }}
        >
          <motion.img
            className='w-[700px] h-[120px]'
            src="./image_header_page5.png"
            alt="Header"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3 }}
          />
          <div className='flex gap-4'>
            <motion.img
              className='w-[120px] h-[120px]'
              src="./logo_truong.png"
              alt="Logo trường"
              animate={{ rotate: [0, 5, 0, -5, 0] }}

            />
            <motion.img
              className='w-[120px] h-[120px]'
              src="/huy_hieu_doan.png"
              alt="Huy hiệu đoàn"
              animate={{ rotate: [0, -5, 0, 5, 0] }}

            />
          </div>
        </motion.div>
      </div>

      {/* Content 1 - Đình thần Tân Sơn Nhì */}
      <h1 className="text-[45px] font-bold text-red-600 mb-12 text-center">ĐÌNH THẦN TÂN SƠN NHÌ</h1>
      <div className="w-full flex flex-grow mb-12 contentpage5-section1">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.2 }}
          className="basis-1/2 flex flex-col px-6"
        >
          

          {/* Video Player */}
          <motion.div
            className="mb-6"
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut"
            }}
          >
            <div className="relative bg-black rounded-lg overflow-hidden shadow-xl">
              <div className="aspect-video">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/5xIPaGSaTao?si=phOfaZ_94lMsb4r9"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  className="rounded-lg"
                ></iframe>
              </div>
              <div className="p-3 bg-white text-center">
                <p className="text-lg font-medium">Video Hội thi</p>
                <p className="text-sm text-gray-600">Công dân Thành phố với hành trình văn hóa năm 2023</p>
                <p className="text-sm text-gray-500">Chi đoàn Tiểu học Tân Điền</p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.2 }}
          className="basis-1/2 flex flex-col justify-center px-6"
        >
          <div className="text-left">
            <p className="text-[18px] leading-relaxed mb-4">
              - Đình được xây dựng năm <span className="font-semibold">1805</span>.
            </p>
            <p className="text-[18px] leading-relaxed mb-4">
              - Là một trong những địa điểm tập hợp thanh niên xa; nơi che chở, nuôi giấu cán bộ bầm trụ đánh địch.
            </p>
            <p className="text-[18px] leading-relaxed">
              - Được công nhận là di tích lịch sử cấp Thành phố (ngày <span className="font-semibold">20/10/2016</span>).
            </p>
          </div>
        </motion.div>
      </div>

      {/* Content 2 - Bia truyền thống Cầu Xéo */}
      <div className="w-full flex flex-grow contentpage5-section2">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.2 }}
          className="basis-1/2 flex flex-col px-6"
        >
          <h2 className="text-[45px] font-bold text-red-600 mb-6 text-center">BIA TRUYỀN THỐNG CẦU XÉO</h2>

          <div className="text-left">
            <p className="text-[18px] leading-relaxed mb-4">
              - Khi xưa đây là khu vực có địa thế hiểm trở, có lực lượng quân chúng yêu nước cốt cán, kiên trung với cách mạng.
            </p>
            <p className="text-[18px] leading-relaxed mb-4">
              - Là một trong những nơi có chi bộ Đảng đầu tiên ra đời vào năm <span className="font-semibold">1930</span>.
            </p>
            <p className="text-[18px] leading-relaxed">
              - Là địa điểm hội họp, đi về của đảng viên và các đồng chí Trung ương trong thời kỳ vận động cách mạng như: <span className="font-semibold">Hà Huy Tập, Nguyễn Thị Minh Khai, Võ Văn Tần</span>....
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.2 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="basis-1/2 flex justify-center items-center px-6"
        >
          <motion.div
            className="w-[350px] h-[300px]"
            animate={{ y: [0, -15, 0] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
              delay: 0.5
            }}
          >
            <div className="relative overflow-hidden rounded-lg shadow-xl w-full h-full">
              {/* Bia image background */}
              <div className="aspect-square bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 flex items-center justify-center w-full h-4/5 relative">
                {/* Monument/Bia structure */}
                <div className="relative w-full h-full flex items-center justify-center">
                  {/* Sky and buildings background */}
                  <div className="absolute inset-0 bg-gradient-to-b from-blue-300 to-blue-400"></div>

                  {/* Buildings silhouette */}
                  <div className="absolute bottom-0 left-0 right-0 h-1/3">
                    <div className="w-full h-full bg-yellow-400 relative">
                      {/* Palm trees */}
                      <div className="absolute right-4 top-2">
                        <div className="w-2 h-8 bg-green-700"></div>
                        <div className="w-6 h-3 bg-green-600 rounded-full -mt-1"></div>
                      </div>
                      <div className="absolute right-8 top-4">
                        <div className="w-2 h-6 bg-green-700"></div>
                        <div className="w-5 h-2 bg-green-600 rounded-full -mt-1"></div>
                      </div>
                    </div>
                  </div>

                  {/* Monument pillar */}
                  <div className="absolute bottom-8 left-1/3 w-12 h-24 bg-gray-600 shadow-lg"></div>
                  {/* Flag */}
                  <div className="absolute bottom-20 left-1/3 ml-12 w-8 h-4 bg-red-500"></div>
                </div>
              </div>

              {/* Caption */}
              <motion.div
                className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-90 text-white p-3 h-1/5"
                initial={{ y: 100 }}
                whileInView={{ y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: false, amount: 0.2 }}
              >
                <p className="text-sm font-medium">Bia tượng niệm Lịch sử -</p>
                <p className="text-xs">Bia Truyền thống Cầu Xéo</p>
                <p className="text-xs">(Số 327 Tân Kỳ Tân Quý)</p>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </>
  )
}

export default ContentPage5