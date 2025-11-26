import Image from "next/image";

const servedOrganizations = [
  {
    icon: "/icons/educational.svg",
    title: "Schools and\nEducational Institutions",
  },
  {
    icon: "/icons/home.svg",
    title: "Foundations and Philanthropic Entities",
  },
  {
    icon: "/icons/heart-rate.svg",
    title: "Faith-based Organizations",
  },
  {
    icon: "/icons/group.svg",
    title: "Community-based Nonprofits",
  },
  {
    icon: "/icons/megaphone.svg",
    title: "Social Movements\nand Coalitions",
  },
  {
    icon: "/icons/scales.svg",
    title: "Government Agencies",
  },
  {
    icon: "/icons/earth.svg",
    title: "Networks working in climate, equity, economic justice, and community resilience",
  },
];

export default function WhoWeServe() {
  return (
    <section className="relative">
      {/* Navy Header Bar */}
      <div className="bg-[#1d1f4e] py-8 md:py-12">
        <div className="max-w-[1440px] mx-auto px-6 md:px-[112px]">
          <div className="flex items-center gap-4">
            <h2 className="font-montserrat font-bold text-[28px] leading-[32px] tracking-[-0.56px] text-white">
              Who We Serve
            </h2>
            <Image
              src="/icons/circle-arrow-right-white.svg"
              alt=""
              width={32}
              height={32}
            />
          </div>
        </div>
      </div>

      {/* Blue Background Section */}
      <div className="bg-[#3490f3] py-16 md:py-20">
        <div className="max-w-[1440px] mx-auto px-6 md:px-[112px]">
          {/* Top Row - 4 items */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            {servedOrganizations.slice(0, 4).map((org, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                {/* Icon */}
                <div className="w-[112px] h-[112px] flex items-center justify-center mb-4">
                  <Image
                    src={org.icon}
                    alt=""
                    width={112}
                    height={112}
                    className="w-full h-full"
                  />
                </div>
                {/* Title */}
                <p className="font-montserrat font-bold text-[18px] leading-[26px] text-white whitespace-pre-line">
                  {org.title}
                </p>
              </div>
            ))}
          </div>

          {/* Bottom Row - 3 items */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-[900px] mx-auto">
            {servedOrganizations.slice(4).map((org, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                {/* Icon */}
                <div className="w-[102px] h-[102px] flex items-center justify-center mb-4">
                  <Image
                    src={org.icon}
                    alt=""
                    width={102}
                    height={102}
                    className="w-full h-full"
                  />
                </div>
                {/* Title */}
                <p className="font-montserrat font-bold text-[18px] leading-[26px] text-white whitespace-pre-line">
                  {org.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
