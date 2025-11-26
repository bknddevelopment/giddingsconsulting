"use client";

import { useState } from "react";

export default function FeaturedInitiative() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 3;

  return (
    <section className="bg-white py-16 md:py-20">
      <div className="max-w-[1440px] mx-auto px-6 md:px-[112px]">
        {/* Blue Button Header */}
        <div className="flex justify-center mb-8">
          <div className="bg-[#3490f3] rounded-[116px] px-12 py-5">
            <p className="font-montserrat font-bold text-[28px] leading-[26px] tracking-[-0.56px] text-white text-center">
              Featured Initiative
            </p>
          </div>
        </div>

        {/* Carousel Container */}
        <div className="bg-[#fcba04] rounded-[32px] p-8 md:p-12 mb-8">
          {/* Placeholder for carousel images */}
          <div className="h-[300px] flex items-center justify-center">
            <p className="font-montserrat font-bold text-[24px] text-[#1d1f4e] text-center">
              [imagery showcasing apprenticeship program in action in a rotating carousel]
            </p>
          </div>

          {/* Carousel Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  currentSlide === index ? "bg-[#1d1f4e]" : "bg-[rgba(29,31,78,0.3)]"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Initiative Description */}
        <div className="text-center">
          <h3 className="font-montserrat font-bold text-[28px] leading-[32px] tracking-[-0.56px] text-[#212121] mb-4">
            GoodTrouble Social Impact Apprenticeship Program.
          </h3>
          <p className="font-montserrat font-normal text-[18px] leading-[26px] tracking-[-0.36px] text-[#212121]">
            Three emerging leaders. Real client work. Practical training in strategy, philanthropy, and community development.
          </p>
        </div>
      </div>
    </section>
  );
}
