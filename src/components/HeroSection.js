import React from "react";
import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./HeroSection.module.css"; // Import CSS module for local styling

const HeroSection = () => {
  const slides = [
    {
      imageSrc: "/itcompany.jpeg",
      altText: "Hero Image 1",
      title: "Transforming Ideas into Reality",
      description: "Delivering high-quality solutions swiftly without compromising on quality.",
      buttonText: "Get Started Today",
      buttonLink: "https://github.com/Quick"
    },
    {
      imageSrc: "/dashboard.jpg",
      altText: "Hero Image 2",
      title: "Driving Innovation and Efficiency",
      description: "Specializing in cutting-edge software solutions that innovate and drive efficiency.",
      buttonText: "Learn More",
      buttonLink: "https://example.com"
    },
    {
      imageSrc: "/business img.jpg",
      altText: "Hero Image 3",
      title: "Empowering Your Digital Journey",
      description: "Empowering businesses with rapid and effective digital solutions for success.",
      buttonText: "Contact Us",
      buttonLink: "https://example.com/contact"
    },
    {
      imageSrc: "/big.jpg",
      altText: "Hero Image 4",
      title: "Empowering Your Digital Journey",
      description: "Empowering businesses with rapid and effective digital solutions for success.",
      buttonText: "Contact Us",
      buttonLink: "https://example.com/contact"
    },
    {
      imageSrc: "/Summary.png",
      altText: "Hero Image 4",
      title: "Empowering Your Digital Journey",
      description: "Empowering businesses with rapid and effective digital solutions for success.",
      buttonText: "Contact Us",
      buttonLink: "https://example.com/contact"
    },
    {
      imageSrc: "/big.jpg",
      altText: "Hero Image 4",
      title: "Empowering Your Digital Journey",
      description: "Empowering businesses with rapid and effective digital solutions for success.",
      buttonText: "Contact Us",
      buttonLink: "https://example.com/contact"
    },
    // Add more slides as needed
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 200,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    arrows: true,
    responsive: [
      {
        breakpoint: 300,
        settings: {
          arrows: false,
        },
      },
    ],
  };

  return (
    <section className={styles.heroSection} id="home">
      <div className={styles.sliderContainer}>
        <Slider {...sliderSettings}>
          {slides.map((slide, index) => (
            <div key={index} className={styles.slide}>
              <div className={styles.imageWrapper}>
                <Image
                  src={slide.imageSrc}
                  alt={slide.altText}
                  layout="fill"
                  objectFit="cover"
                  className={styles.image}
                />
              </div>
              <div className={styles.overlay}>
                <div className={styles.textContent}>
                  <h1 className={styles.title}>{slide.title}</h1>
                  <p className={styles.description}>{slide.description}</p>
                  <button className={styles.btn}>
                    <Link href={slide.buttonLink} target="_blank">
                      {slide.buttonText}
                    </Link>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default HeroSection;
