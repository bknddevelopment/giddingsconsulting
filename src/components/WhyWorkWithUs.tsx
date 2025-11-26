import Image from "next/image";

const reasons = [
  "More than 20 years of experience across 100 organizations",
  "Work across the United States and the African diaspora",
  "Millions in philanthropic revenue supported",
  "Deep expertise in equity, climate resilience, economic inclusion, and community transformation",
  "A consistent track record helping leaders build stronger systems and better results",
];

export default function WhyWorkWithUs() {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="max-w-[1440px] mx-auto px-6 md:px-[112px]">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-8">
          <h2 className="font-montserrat font-bold text-[28px] leading-[32px] tracking-[-0.56px] text-[#212121]">
            Why Organizations Work With Us
          </h2>
          <Image
            src="/icons/circle-arrow-right.svg"
            alt=""
            width={32}
            height={32}
          />
        </div>

        {/* Description */}
        <div className="font-montserrat text-[18px] leading-[26px] tracking-[-0.36px] text-[#212121] max-w-[1230px] mb-12">
          <p className="font-normal mb-4">
            The social sector faces complex pressure. More demand. Limited resources. Boards needing direction.{" "}
            <br />
            Fundraising stuck in short cycles. Leaders stretched thin. You need practical solutions that increase alignment and impact.
          </p>
          <p className="font-bold">We bring:</p>
        </div>

        {/* Reasons List */}
        <div className="flex flex-col gap-4">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="bg-[rgba(235,235,235,0.5)] rounded-[116px] h-[72px] flex items-center justify-center px-8"
            >
              <p className="font-montserrat font-bold text-[18px] leading-[26px] tracking-[-0.36px] text-[#212121] text-center">
                {reason}
              </p>
            </div>
          ))}
        </div>

        {/* Decorative Divider */}
        <div className="mt-12 flex justify-end">
          <div className="w-full max-w-[1220px] h-[2px] bg-gradient-to-r from-transparent via-[#ebebeb] to-[#ebebeb]" />
        </div>
      </div>
    </section>
  );
}
