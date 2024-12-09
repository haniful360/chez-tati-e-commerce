// components/TestimonialSlider.js
"use client";
// components/TestimonialSlider.js
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import person1 from "@/public/images/person1.png";
import Image from "next/image";
// import person1 from '@/public/images/person2.png'

export default function TestimonialSlider() {
  const testimonials = [
    {
      name: "John Doe",
      role: "CEO, Company A",
      feedback:
        "This service is amazing! The product quality is top-notch and the support team is very responsive.",
      image: "/profile1.jpg",
    },
    {
      name: "Jane Smith",
      role: "CTO, Company B",
      feedback:
        "I have been using this service for years. It has helped my business grow significantly.",
      image: "/profile2.jpg",
    },
    {
      name: "Alice Brown",
      role: "Designer, Company C",
      feedback:
        "I love how easy it is to use this service. The user experience is seamless and intuitive.",
      image: "/profile3.jpg",
    },
  ];

  return (
    <div className="bg-gradient-to-r from-orange-400 to-[#ea5426e6] py-12" >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8" data-aos="fade-up">
        <h2 className="text-3xl font-semibold text-white text-center">
          What Our Customers Say
        </h2>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            1024: {
              slidesPerView: 2,
            },
          }}
          className="mt-8"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center">
                <Image
                  data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
                  data-aos-delay={`${index * 100}`}
                  src={person1}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover mb-4"
                />
                <h3 className="text-lg font-medium text-gray-800">
                  {testimonial.name}
                </h3>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
                <p className="mt-4 text-gray-600">{testimonial.feedback}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Pagination Dots Positioned Together */}
        <div className="mt-8 flex justify-center">
          <div className="swiper-pagination"></div>
        </div>
      </div>
    </div>
  );
}
