import Link from "next/link";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import StarHalfRoundedIcon from "@mui/icons-material/StarHalfRounded";
import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ButtonGroup from "./ButtonGroup";

const Card = ({ star, title, imgSrc }) => {
  return (
    <div className="mx-2 flex flex-col gap-4 select-none cursor-pointer border border-[#4e4e4e31] p-10 rounded-lg hover:shadow-xl transition-all">
      <div className="text-rose-600">
        <StarRoundedIcon />
        <StarRoundedIcon />
        <StarRoundedIcon />
        <StarRoundedIcon />
        {star}
      </div>
      <h2 className="text-lg font-semibold mb-2">{title}</h2>
      <p className="leading-loose">
      "Outstanding analytics! Detailed reports and easy to understand. Helped streamline our operations."
      </p>
      <div className="flex items-center gap-4 mt-5">
        <Image src={imgSrc} width={50} height={50} alt="testimonials" />
        <div>
          <h3 className="font-semibold">Sahil Singh</h3>
          <Link
            href="https://github.com/Quintle"
            target="_blank"
            className="text-rose-600 font-[500]"
          >
            @sahilsingh
          </Link>
        </div>
      </div>
    </div>
  );
};

const Card1 = ({ star, title, imgSrc }) => {
  return (
    <div className="mx-2 flex flex-col gap-4 select-none cursor-pointer border border-[#4e4e4e31] p-10 rounded-lg hover:shadow-xl transition-all">
      <div className="text-rose-600">
        <StarRoundedIcon />
        <StarRoundedIcon />
        <StarRoundedIcon />
        <StarRoundedIcon />
        {star}
        </div>
<h2 className="text-lg font-semibold mb-2">{title}</h2>
<p className="leading-loose">
User-friendly and accurate. Their business analytics are a must-have for any growing business
</p>
<div className="flex items-center gap-4 mt-5">
  <Image src={imgSrc} width={50} height={50} alt="testimonials" />
  <div>
    <h3 className="font-semibold">Sana Khan</h3>
    <Link
      href="https://github.com/Quintle"
      target="_blank"
      className="text-rose-600 font-[500]"
    >
      @sanakhan
    </Link>
  </div>
</div>
</div>
);
};

const Card2 = ({ star, title, imgSrc }) => {
  return (
    <div className="mx-2 flex flex-col gap-4 select-none cursor-pointer border border-[#4e4e4e31] p-10 rounded-lg hover:shadow-xl transition-all">
      <div className="text-rose-600">
        <StarRoundedIcon />
        <StarRoundedIcon />
        <StarRoundedIcon />
        <StarRoundedIcon />
        {star}
        </div>
<h2 className="text-lg font-semibold mb-2">{title}</h2>
<p className="leading-loose">
Fantastic tool for business analysis. It's intuitive and offers deep insights. Well worth the investment
</p>
<div className="flex items-center gap-4 mt-5">
  <Image src={imgSrc} width={50} height={50} alt="testimonials" />
  <div>
    <h3 className="font-semibold">Nik Pathan</h3>
    <Link
      href="https://github.com/Quintle"
      target="_blank"
      className="text-rose-600 font-[500]"
    >
      @nikpathan
    </Link>
  </div>
</div>
</div>
);
};


const Testimonials = () => {
  return (
    <section
      className="relative container mx-auto px-5 md:px-16 flex flex-col gap-5"
      id="testimonial"
    >
      <div>
        <span className="service-name text-center ">TESTIMONIAL</span>
        <h2 className="title text-center ">Meet Client Satisfaction</h2>
      </div>
      <Carousel {...carouselParams}>
        <div>
          <Card
            star={<StarHalfRoundedIcon />}
            title="Top-notch service"
            imgSrc="/testimonials/1.png"
          />
        </div>
        <div>
          <Card1
            title="Highly effective analytics"
            imgSrc="/testimonials/2.png"
          />
        </div>
        <div>
          <Card2
            star={<StarRoundedIcon />}
            title="Reliable and efficient. "
            imgSrc="/testimonials/3.png"
          />
        </div>
       
      </Carousel>
    </section>
  );
};

export default Testimonials;

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 4,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const carouselParams = {
  additionalTransfrom: 0,
  arrows: false,
  autoPLaySpeed: 3000,
  centerMode: false,
  className: "",
  containerClass: "carousel-container",
  customButtonGroup: <ButtonGroup />,
  dotListClass: "",
  draggable: true,
  focusOnSelect: false,
  infinite: true,
  itemClass: "",
  keyBoardControl: true,
  minimumTouchDrag: 80,
  renderButtonGroupOutside: true,
  renderDotsOutside: false,
  responsive: responsive,
  showDots: false,
  sliderClass: "",
  slidesToSlide: 1,
};
