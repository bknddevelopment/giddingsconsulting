import Image from "next/image";

const services = [
  {
    icon: "/icons/document.svg",
    title: "Strategic and\nOrganizational Planning",
  },
  {
    icon: "/icons/flag.svg",
    title: "Board Development\nand Governance",
  },
  {
    icon: "/icons/crown.svg",
    title: "Leadership and\nExecutive Development",
  },
  {
    icon: "/icons/receipt.svg",
    title: "Fund Development and Philanthropic Strategy",
  },
  {
    icon: "/icons/favorite.svg",
    title: "Social Impact Strategy and Partnership Building",
  },
];

export default function WhatWeDo() {
  return (
    <section className="bg-[rgba(235,235,235,0.5)] py-16 md:py-20">
      <div className="max-w-[1440px] mx-auto px-6 md:px-[112px]">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-8">
          <h2 className="font-montserrat font-bold text-[28px] leading-[32px] tracking-[-0.56px] text-[#212121]">
            What We Do
          </h2>
          <Image
            src="/icons/circle-arrow-right.svg"
            alt=""
            width={32}
            height={32}
          />
        </div>

        {/* Description */}
        <p className="font-montserrat font-normal text-[18px] leading-[26px] tracking-[-0.36px] text-[#212121] max-w-[885px] mb-12">
          You get support across strategy, leadership, governance, and fundraising.
          <br />
          You leave with aligned teams. Better decisions. Clear priorities. A stronger organization.
        </p>

        {/* Services Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {services.map((service, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              {/* Icon Circle */}
              <div className="relative w-[112px] h-[112px] mb-4">
                <Image
                  src="/images/service-ellipse.svg"
                  alt=""
                  width={112}
                  height={112}
                  className="absolute inset-0"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Image
                    src={service.icon}
                    alt=""
                    width={62}
                    height={62}
                  />
                </div>
              </div>
              {/* Title */}
              <p className="font-montserrat font-normal text-[18px] leading-[26px] tracking-[-0.36px] text-[#212121] whitespace-pre-line">
                {service.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
