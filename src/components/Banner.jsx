import IconRatingHalf from "../assets/rating-half.png";
import IconRating from "../assets/rating.png";
import ImgMovie from "../assets/temp-1.jpeg";
import IconPlay from "../assets/play-button.png";

const Banner = () => {
  return (
    <div className="md:h-[600px] h-[1000px] w-full bg-banner bg-cover bg-center bg-no-repeat relative mt-[75px]">
      <div className="w-full h-full bg-black/40 " />
      <div className="flex flex-col md:flex-row items-center justify-between absolute md:top-1/2 top-10 -translate-x-1/2 left-1/2 md:-translate-y-1/2 w-full ">
        <div className="md:w-[50%] w-full ">
          <div className="flex flex-col space-y-6 items-start p-10">
            <p className="bg-gradient-to-r from-red-600 to-red-300 py-2 px-6">
              TV Show
            </p>
            <div className="flex flex-col space-y-4">
              <h1 className="text-[40px] font-bold text-white ">
                Lưỡi hái tử thần: Huyết thống (2025)
              </h1>
              <div className="flex items-center space-x-3">
                <img src={IconRating} alt="rating" className="w-8 h-8" />
                <img src={IconRating} alt="rating" className="w-8 h-8" />
                <img src={IconRating} alt="rating" className="w-8 h-8" />
                <img src={IconRating} alt="rating" className="w-8 h-8" />
                <img src={IconRatingHalf} alt="rating" className="w-8 h-8" />
              </div>
              <p className="text-white">
                Thương hiệu kinh dị đình đám Hollywood Final Destination sẽ trở lại với phần phim mới, hứa hẹn khuấy đảo phòng vé mùa hè 2025. Final Destination: Bloodlines là phần thứ 6 trong series, và cho đến hiện tại, các thông tin về nội dung phần phim này vẫn đang được giữ kín. Bộ đôi Zach Lipovsky và Adam Stein được chọn từ hơn 200 ứng viên để ngồi ghế đạo diễn, trong khi Guy Busick – biên kịch của Ready or Not sẽ chấp bút cho bộ phim. Tony Todd – gương mặt quen thuộc của series cũng sẽ trở lại trong phần 6 với vai diễn William Bludworth.
              </p>
            </div>

            <div className="flex items-center space-x-5">
              <button className="py-2 px-3 bg-black  text-white border border-black font-bold">
                Chi tiết
              </button>
              <button className="py-2 px-3 bg-red-600 text-white font-bold">
                Xem Phim
              </button>
            </div>
          </div>
        </div>
        <div className="md:w-[50%] w-full flex items-center justify-center">
          <div className="w-[300px] h-[400px] relative group">
            <button className="w-full h-full absolute top-0 left-0 flex items-center justify-center backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
              <img src={IconPlay} alt="play" className="w-16 h-16" />
            </button>
            <img
              src={ImgMovie}
              alt="banner"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
