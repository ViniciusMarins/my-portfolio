import { Swiper, SwiperProps } from "swiper/react";
import { A11y, Navigation, Pagination, EffectCards } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Slider.css";
import "swiper/css/effect-cards";
import { memo } from "react";

interface SliderProps {
  settings: SwiperProps;
  children: React.ReactNode;
}

function Slider({ children, settings }: SliderProps) {
  return (
    <Swiper modules={[Navigation, Pagination, A11y, EffectCards]} {...settings}>
      {children}
    </Swiper>
  );
}
export default memo(Slider);
