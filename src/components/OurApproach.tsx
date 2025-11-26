import Image from "next/image";

const approachSteps = [
  {
    image: "/images/approach-listen.jpg",
    label: "Listen",
    color: "bg-[#1d1f4e]",
  },
  {
    image: "/images/approach-assess.jpg",
    label: "Assess",
    color: "bg-[#964c2d]",
  },
  {
    image: "/images/approach-build-strategy.jpg",
    label: "Build Strategy",
    color: "bg-[#3490f3]",
  },
  {
    image: "/images/approach-strengthen.jpg",
    label: "Strengthen Leadership",
    color: "bg-[#fcba04]",
  },
  {
    image: "/images/approach-support.jpg",
    label: "Support Implementation",
    color: "grayscale",
  },
  {
    image: "/images/approach-measure.jpg",
    label: "Measure Progress",
    color: "bg-[#1d1f4e]",
  },
];

export default function OurApproach() {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="max-w-[1440px] mx-auto px-6 md:px-[112px]">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-4">
          <h2 className="font-montserrat font-bold text-[28px] leading-[32px] tracking-[-0.56px] text-[#212121]">
            Our Approach
          </h2>
          <Image
            src="/icons/circle-arrow-right.svg"
            alt=""
            width={32}
            height={32}
          />
        </div>

        {/* Description */}
        <p className="font-montserrat font-bold text-[18px] leading-[26px] tracking-[-0.36px] text-[#212121] mb-12">
          You get simple steps. Straight talk. Measurable outcomes.
        </p>

        {/* Approach Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {approachSteps.map((step, index) => (
            <div key={index} className="flex flex-col">
              {/* Image Card */}
              <div className="relative h-[214px] rounded-[32px] overflow-hidden">
                <Image
                  src={step.image}
                  alt={step.label}
                  fill
                  className={`object-cover ${step.color === "grayscale" ? "grayscale" : ""}`}
                />
                {/* Color Overlay */}
                {step.color !== "grayscale" && (
                  <div
                    className={`absolute inset-0 ${step.color} mix-blend-color opacity-90`}
                  />
                )}
                {step.color === "grayscale" && (
                  <div className="absolute inset-0 bg-[#ebebeb] mix-blend-saturation" />
                )}
              </div>
              {/* Label */}
              <p className="font-montserrat font-normal text-[18px] leading-[26px] tracking-[-0.36px] text-[#212121] text-center mt-4">
                {step.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
