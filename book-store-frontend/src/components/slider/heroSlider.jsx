import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  EffectFade,
  Mousewheel,
  Autoplay,
} from "swiper/modules";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllSliders } from "../../store/slider/sliderSlice";
import { Link } from "react-router-dom";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./herostyle.css";
import "swiper/css/effect-fade";
import Counter from "./Counter";

function heroSlider() {
  const dispatch = useDispatch();
  const { data, isLoading, error } = useSelector((state) => state.sliders);
  useEffect(() => {
    dispatch(getAllSliders());
  }, [dispatch]);

  return (
    <div className="slider-wrapper d-flex">
      <Swiper
        // install Swiper modules
        modules={[
          Navigation,
          Pagination,
          Scrollbar,
          A11y,
          EffectFade,
          Mousewheel,
          Autoplay,
        ]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        fadeEffect={{ crossFade: true }}
        pagination={{ clickable: true }}
        effect={"fade"}
        mousewheel
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={false}
      >
        {data.map((slide) => {
          const bgImg = slide.bgDark?.url;
          return (
            <SwiperSlide>
              <div
                className="hero-slide"
                style={{
                  backgroundImage: `url(https://book-store-bkc3.onrender.com${bgImg})`,
                }}
              >
                <div className="container">
                  <div className="row align-items-center">
                    {/* النص */}
                    <div className="col-lg-6 hero-text">
                      <h1>{slide.title}</h1>

                      <h5>{slide.subtitle}</h5>

                      <p>{slide.description}</p>

                      <div className="hero-btns d-flex gap-3">
                        <Link
                          to={slide.btnLink1}
                          className="btn btn-primary w-75 flex-grow-1"
                        >
                          {slide.btnText1}
                        </Link>

                        <Link
                          to={slide.btnLink2 || "/categories"}
                          className="btn btn-success w-75 flex-grow-1"
                        >
                          {slide.btnText2}
                        </Link>
                      </div>

                      <div className="statistics d-flex gap-3 mt-4">
                        <span>
                          +<Counter number={230} /> كتاب
                        </span>
                        <span>
                          +<Counter number={241} /> زائر
                        </span>
                        <span>
                          +<Counter number={313} /> كاتب
                        </span>
                        <span>
                          +<Counter number={412} /> مهتم
                        </span>
                      </div>
                    </div>

                    {/* الصورة */}
                    <div className="col-lg-6 hero-img text-center">
                      <img
                        width="100%"
                        src={`https://book-store-bkc3.onrender.com${slide.heroImg?.url}`}
                        alt={slide.title}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

export default heroSlider;
