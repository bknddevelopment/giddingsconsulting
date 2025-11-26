import Image from "next/image";

const stats = [
  {
    value: "100+",
    label: "Organizations Served",
  },
  {
    value: "Millions",
    label: "Leveraged to strengthen programs and communities",
  },
  {
    value: "Dozens",
    label: "of boards received training",
  },
  {
    value: "Strategic",
    label: "Strategic fundraising frameworks built for local, national,\nand global organizations",
  },
];

export default function ImpactSnapshot() {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="max-w-[1440px] mx-auto px-6 md:px-[112px]">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-8">
          <h2 className="font-montserrat font-bold text-[28px] leading-[32px] tracking-[-0.56px] text-[#212121]">
            Impact Snapshot
          </h2>
          <Image
            src="/icons/circle-arrow-right.svg"
            alt=""
            width={32}
            height={32}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Text and Stats */}
          <div>
            {/* Description */}
            <p className="font-montserrat font-normal text-[18px] leading-[26px] tracking-[-0.36px] text-[#212121] mb-12">
              Having worked on the forefront of creating social change through community outreach and engagement – we know social change is hard. We don&apos;t believe in emphasizing the latest buzzwords, providing quick answers or taking short cuts, because they don&apos;t foster social change. Instead, we provide individualized solutions based on the needs of the client and their constituency.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="border-t-[1.5px] border-[rgba(92,92,92,0.2)] pt-6 pb-12"
                >
                  <p className="font-montserrat font-bold text-[48px] leading-[52px] tracking-[-0.96px] text-[#212121] mb-2">
                    {stat.value}
                  </p>
                  <p className="font-inter font-normal text-[18px] leading-[24px] text-[#212121] whitespace-pre-line">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative h-[400px] lg:h-[573px] rounded-[32px] overflow-hidden">
            <Image
              src="/images/impact-snapshot.jpg"
              alt="Community impact"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Decorative Lines */}
        <div className="mt-12 relative">
          <div className="absolute left-0 right-[300px] h-[16px] border-b-4 border-[#3490f3]" />
          <div className="absolute left-[200px] right-[100px] h-[66px] border-b-4 border-[#3490f3]" />
          {/* Arrow indicators */}
          <div className="absolute right-[280px] top-[0px]">
            <svg width="50" height="56" viewBox="0 0 50 56" fill="none">
              <polygon points="25,56 0,0 50,0" fill="#3490f3" />
            </svg>
          </div>
          <div className="absolute right-[80px] top-[50px]">
            <svg width="50" height="56" viewBox="0 0 50 56" fill="none">
              <polygon points="25,56 0,0 50,0" fill="#3490f3" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
