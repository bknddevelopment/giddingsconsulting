import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-[660px] w-full overflow-x-clip overflow-y-visible">
      {/* Background Image with Overlay - starts below nav */}
      <div className="absolute top-0 left-0 right-0 bottom-0">
        <Image
          src="/images/hero-bg.jpg"
          alt=""
          fill
          className="object-cover object-top"
          priority
        />
        {/* Navy color overlay */}
        <div className="absolute inset-0 bg-[#1d1f4e] mix-blend-color" />
        {/* Additional overlay for readability */}
        <div className="absolute inset-0 bg-[rgba(29,31,78,0.2)] mix-blend-multiply" />
      </div>

      {/* Gradient overlay from left */}
      <div className="absolute top-0 left-0 w-[1024px] h-full bg-gradient-to-r from-[#1d1f4e] to-transparent" />

      {/* Decorative elements */}
      <div className="absolute bottom-[0] left-[-56px] w-[211px] h-[211px]">
        <Image
          src="/images/ellipse-orange.svg"
          alt=""
          width={211}
          height={211}
          className="w-full h-full"
        />
      </div>
      <div className="absolute top-[235px] right-[-63px] w-[127px] h-[127px]">
        <Image
          src="/images/ellipse-blue-1.svg"
          alt=""
          width={127}
          height={127}
          className="w-full h-full"
        />
      </div>
      <div className="absolute top-[151px] right-[-37px] w-[51px] h-[51px]">
        <Image
          src="/images/ellipse-blue-2.svg"
          alt=""
          width={51}
          height={51}
          className="w-full h-full"
        />
      </div>
      <div className="absolute bottom-[103px] right-[193px] w-[51px] h-[51px]">
        <Image
          src="/images/ellipse-blue-3.svg"
          alt=""
          width={51}
          height={51}
          className="w-full h-full"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-6 pt-[160px]">
        <h1 className="font-montserrat font-bold text-[36px] md:text-[36px] leading-[48px] tracking-[1.8px] text-white max-w-[726px]">
          Giddings Consulting Group strengthens organizations working for equity and community impact.
        </h1>

        {/* Decorative lines */}
        <div className="mt-8 flex items-center gap-4">
          <div className="w-[124px] h-[7px] bg-[#fcba04]" />
          <div className="w-[382px] h-[7px] bg-white" />
        </div>
      </div>

      {/* Subtext positioned below hero overlay area */}
      <div className="absolute bottom-[26px] left-0 right-0 z-10">
        <div className="max-w-[1440px] mx-auto px-6">
          <p className="font-montserrat font-normal text-[18px] leading-[26px] tracking-[-0.36px] text-[#212121] text-center max-w-[782px] mx-auto">
            You want clarity. Strong leadership. Sustainable funding.{" "}
            <br />
            We help you build the systems, partnerships, and strategy to move your mission forward.
          </p>
        </div>
      </div>
    </section>
  );
}
