import { motion } from "motion/react"

const ContentPage5 = () => {
  return (
    <div className="w-full max-w-full overflow-hidden ">
      {/* Header Section */}
      <div className="w-full mt-[40px] md:mt-[60px]">
        <motion.div
          className='w-full flex flex-col md:flex-row justify-between items-center mb-6 md:mb-8 px-4 md:px-6'
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.2 }}
        >
          <motion.img
            className='w-full max-w-[560px] mx-auto md:mx-0 md:w-[700px] h-auto md:h-[120px] mb-4 md:mb-0'
            src="./image_header_page5.png"
            alt="Header"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3 }}
          />
          <div className='flex gap-2 md:gap-4 flex-shrink-0'>
            <motion.img
              className='w-[60px] h-[60px] md:w-[120px] md:h-[120px]'
              src="./logo_truong.png"
              alt="Logo trường"
              animate={{ rotate: [0, 5, 0, -5, 0] }}
            />
            <motion.img
              className='w-[60px] h-[60px] md:w-[120px] md:h-[120px]'
              src="/huy_hieu_doan.png"
              alt="Huy hiệu đoàn"
              animate={{ rotate: [0, -5, 0, 5, 0] }}
            />
          </div>
        </motion.div>
      </div>

      {/* Content 1 - Đình thần Tân Sơn Nhì */}
      <motion.h2
        className="text-2xl md:text-[45px] font-bold text-red-600 mb-6 md:mb-12 text-center px-4"
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.2 }}
      >
        ĐÌNH THẦN TÂN SƠN NHÌ
      </motion.h2>



      <div className="w-full max-w-full flex flex-col md:flex-row mb-8 md:mb-12 contentpage5-section1">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.2 }}
          className="w-full md:flex-1 flex flex-col px-4 md:px-6 mb-6 md:mb-0"
        >
          {/* Video Player */}
          <motion.div
            className="mb-6 w-full h-[250px] md:h-[250px]"
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut"
            }}
          >
            <div className="relative bg-black rounded-lg overflow-hidden shadow-xl w-full">
              <div className="aspect-video w-full">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/5xIPaGSaTao?si=DicEWidgOInm2PKt"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  className="rounded-t-lg w-full h-full"
                ></iframe>
              </div>
              <div className="p-2 md:p-3 bg-white text-center">
                <p className="text-sm md:text-lg font-medium">Video Hội thi</p>
                <p className="text-xs md:text-sm text-gray-600">Công dân Thành phố với hành trình văn hóa năm 2023</p>
                <p className="text-xs md:text-sm text-gray-500">Chi đoàn Tiểu học Tân Điền</p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.2 }}
          className="w-full md:flex-1 flex flex-col justify-center px-4 md:px-6"
        >
          <div className="text-left">
            <p className="text-base md:text-[18px] leading-relaxed mb-3 md:mb-4">
              - Đình Thần Tân Sơn Nhì, tọa lạc tại số 207 đường Tân Kỳ Tân Quý,
              phường Tân Sơn Nhì, Quận Tân Phú, TP. Hồ Chí Minh,
              là một di tích lịch sử và văn hóa quan trọng có tuổi đời hơn 200 năm.

            </p>
            <p className="text-base md:text-[18px] leading-relaxed mb-3 md:mb-4">
              - Ngôi đình cổ kính này không chỉ là nơi thờ cúng tín ngưỡng mà còn là "chứng nhân" cho quá trình khai phá và phát triển của vùng đất.
            </p>
            <p className="text-base md:text-[18px] leading-relaxed mb-3 md:mb-4">
              - Đình được công nhận là Di tích lịch sử cấp thành phố, chủ yếu thờ Thành Hoàng Bổn Cảnh,
              vị thần bảo hộ cho dân làng, cùng với các vị Tiền hiền và Hậu hiền đã có công lập làng, mở đất.
            </p>
            <p className="text-base md:text-[18px] leading-relaxed">
              - Hàng năm, Đình Tân Sơn Nhì tổ chức lễ cúng đình, đặc biệt là Lễ Kỳ Yên (cầu an) với ý nghĩa cầu mong quốc thái dân an,
              mưa thuận gió hòa, thu hút đông đảo người dân địa phương và du khách tham gia, qua đó duy trì và phát huy các giá trị văn hóa truyền thống của cộng đồng.
            </p>
          </div>
        </motion.div>
      </div>
      <motion.h2
        className="text-2xl md:text-[45px] font-bold text-red-600 mb-6 md:mb-12 text-center px-4"
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.2 }}
      >
        BIA TRUYỀN THỐNG CẦU XÉO
      </motion.h2>

      {/* Content 2 - Bia truyền thống Cầu Xéo */}
      <div className="w-full max-w-full flex flex-col md:flex-row mb-8 md:mb-12 contentpage5-section2">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.2 }}
          className="w-full md:flex-1 flex flex-col px-4 md:px-6 mb-6 md:mb-0 order-2 md:order-1"
        >
          <div className="text-left">
            <p className="text-base md:text-[18px] leading-relaxed mb-3 md:mb-4">
              - Khu vực Cầu Xéo khi xưa có địa thế hiểm trở, được bao bọc bởi kênh rạch, tạo thành căn cứ lõm an toàn với lực lượng quần chúng yêu nước cốt cán, kiên trung với cách mạng.
            </p>
            <p className="text-base md:text-[18px] leading-relaxed mb-3 md:mb-4">
              - Là một trong những nơi có <span className="font-semibold">Chi bộ Đảng Cộng sản đầu tiên</span> ra đời vào năm <span className="font-semibold">1930</span> (Chi bộ Gò Dầu - Tân Sơn Nhì), đóng vai trò là hạt nhân cách mạng sớm nhất.
            </p>
            <p className="text-base md:text-[18px] leading-relaxed">
              - Là tuyến liên lạc chiến lược, địa điểm hội họp, đi về quan trọng của đảng viên và các đồng chí Trung ương trong thời kỳ vận động cách mạng như: <span className="font-semibold">Hà Huy Tập</span> (Tổng Bí thư), <span className="font-semibold">Nguyễn Thị Minh Khai</span>, <span className="font-semibold">Võ Văn Tần</span>....
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.2 }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full md:flex-1 flex justify-center items-center px-4 md:px-6 order-1 md:order-2"
        >
          <motion.div
            className="w-full max-w-[400px] md:max-w-none h-[300px] md:h-[380px]"
            animate={{ y: [0, -15, 0] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
              delay: 0.5
            }}
          >
            <div className="relative rounded-lg shadow-xl w-full h-full">
              {/* Bia image background */}
              <img
                className='w-full h-4/5 md:h-5/6 rounded-t-lg'
                src="./bia_tuong_niem.jpg"
                alt="Bia tượng niệm"
              />

              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 bg-white bg-opacity-90 text-center text-black p-2 md:p-3 h-1/5 md:h-1/6 rounded-b-lg flex flex-col justify-center">
                <p className="text-xs md:text-sm font-medium">Bia tượng niệm Lịch sử -</p>
                <p className="text-xs">Bia Truyền thống Cầu Xéo</p>
                <p className="text-xs">(Số 327 Tân Kỳ Tân Quý)</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>


      <motion.h2
        className="text-2xl md:text-[45px] font-bold text-red-600 mb-6 md:mb-12 text-center px-4"
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.2 }}
      >
        Liệt sĩ Trần Văn Ơn
      </motion.h2>

      <div className="w-full px-4 md:px-8 py-6 md:py-5">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">

          {/* Right Image */}
          <motion.div
            className="w-full md:w-1/2 flex justify-center"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.2 }}
          >
            {/* <motion.img
              src="tran-van-on.jpg"
              alt="Bia tưởng niệm"
              className="w-auto h-auto  rounded-lg shadow-xl object-contain"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            /> */}


            <div className="relative rounded-lg shadow-xl w-full h-full">
              {/* Bia image background */}
              <img
                className='w-full h-4/5 md:h-5/6 rounded-t-lg'
                src="tran-van-on.jpg"
                alt="Bia tượng niệm"
              />

              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 bg-white bg-opacity-90 text-center text-black p-2 md:p-3 h-1/5 md:h-1/6 rounded-b-lg flex flex-col justify-center">
                <p className="text-xs md:text-sm font-medium">Tượng Liệt sĩ Trần Văn Ơn (1931-1950)</p>

              </div>
            </div>

          </motion.div>

          {/* Left Content */}
          <motion.div
            className="w-full md:w-1/2"
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.2 }}
          >

            <p className="text-base md:text-lg text-gray-700 mb-4">
              Liệt sĩ Trần Văn Ơn (1931-1950) là học sinh trường Pétrus Ký (nay là Trường Trung học phổ thông chuyên Lê Hồng Phong, Quận 5) bị chính quyền Pháp nổ súng bắn chết trong khi lãnh đạo phong trào biểu tình của học sinh – sinh viên Sài Gòn vào ngày 09-01-1950.
              Cái chết của liệt sĩ Trần Văn Ơn đã gây tiếng vang lớn, tác động rộng khắp trong phong trào đấu tranh của nhân dân Sài Gòn. Hơn 300 000 người dân Sài Gòn đã xuống đường tham gia và ủng hộ lễ tang của Trần Văn Ơn. Từ đó, ngày 09-01 hằng năm được chọn làm Ngày truyền thống Học sinh - Sinh viên Việt Nam.
            </p>

          </motion.div>


        </div>
      </div>

      <motion.h2
        className="text-2xl md:text-[45px] font-bold text-red-600 mb-6 md:mb-12 text-center px-4 mt-6"
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.2 }}
      >
        Đài tưởng niệm
      </motion.h2>

      {/* Content 3 - Đài tưởng niệm */}
      <div className="w-full max-w-full flex flex-col md:flex-row mb-8 md:mb-12 contentpage5-section2">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.2 }}
          className="w-full md:flex-1 flex flex-col px-4 md:px-6 mb-6 md:mb-0 order-2 md:order-1"
        >
          <div className="text-left">
            <p className="text-base md:text-[18px] leading-relaxed mb-3 md:mb-4">
                    - Đài tưởng niệm 82 liệt sĩ hy sinh Mậu Thân 1968            </p>
            <p className="text-base md:text-[18px] leading-relaxed mb-3 md:mb-4">
                    - Nằm trong khuôn viên Đài liệt sĩ quận Tân Phú thuộc phường Tân Phú, thành phố Hồ Chí Minh            </p>
            <p className="text-base md:text-[18px] leading-relaxed mb-3 md:mb-4">
              - Với giá trị lịch sử và ý nghĩa nhân văn sâu sắc, Đài tưởng niệm Liệt sĩ Quận Tân Phú đã trở thành một địa chỉ đỏ, góp phần bồi đắp lòng yêu nước, niềm tự hào dân tộc và ý thức trách nhiệm xây dựng, bảo vệ Tổ quốc trong giai đoạn mới.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.2 }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full md:flex-1 flex justify-center items-center px-4 md:px-6 order-1 md:order-2"
        >
          <motion.div
            className="w-full max-w-[400px] md:max-w-none h-[300px] md:h-[380px]"
            animate={{ y: [0, -15, 0] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
              delay: 0.5
            }}
          >
            <div className="relative rounded-lg shadow-xl w-full h-full">
              {/* Bia image background */}
              <img
                className='w-full h-4/5 md:h-5/6 rounded-t-lg'
                src="./img_daituongniem.jpg"
                alt="Bia tượng niệm"
              />

              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 bg-white bg-opacity-90 text-center text-black p-2 md:p-3 h-1/5 md:h-1/6 rounded-b-lg flex flex-col justify-center">
                <p className="text-xs md:text-sm font-medium">Đài tưởng niệm -</p>
                <p className="text-xs">(Số 1/3 Trường Chinh)</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
              {/* Địa đạo phú thọ hòa */}
         <motion.h2
        className="text-2xl md:text-[45px] font-bold text-red-600 mb-6 md:mb-12 text-center px-4"
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.2 }}
      >
        Địa đạo Phú Thọ Hòa
      </motion.h2>


      {/* Bottom Image Section with Motion */}
      <div className="w-full px-4 md:px-8 py-8 md:py-2">
        <motion.div
          className="w-full max-w-[800px] mx-auto"
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.2 }}
        >
          <motion.div
            className="relative rounded-2xl overflow-hidden shadow-2xl"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <img
              src="/phuthohoa.jpg"
              alt="Hình ảnh lịch sử"
              className="w-full h-auto"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
              <h3 className="text-white text-xl md:text-2xl font-bold mb-2">Di tích lịch sử</h3>
              <p className="text-white/90 text-sm md:text-base">
                Nhà trưng bày di tích lịch sử Địa Đạo Phú Thọ Hòa
              </p>
              <p className="text-white/90 text-sm md:text-base">
                Địa đạo Phú Thọ Hòa (quận Tân Phú, TP.HCM) là một trong những địa đạo nổi tiếng, được xây dựng từ thời kháng chiến chống Pháp và phát huy vai trò quan trọng trong kháng chiến chống Mỹ. Công trình là minh chứng cho tinh thần kiên cường, sáng tạo của quân và dân Sài Gòn – Gia Định, đồng thời là di tích lịch sử – văn hóa, giáo dục truyền thống yêu nước cho các thế hệ hôm nay.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>


    </div>


  )
}

export default ContentPage5