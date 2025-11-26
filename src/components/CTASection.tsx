import Image from "next/image";
import Link from "next/link";

const ctaItems = [
  {
    title: "Schedule a 60-minute strategy session.",
    bgColor: "bg-[#964c2d]",
    textColor: "text-white",
    href: "/contact",
  },
  {
    title: "Download our Board Governance Checklist.",
    bgColor: "bg-[#fcba04]",
    textColor: "text-black",
    href: "/resources",
  },
  {
    title: "Join our mailing list for tools and insights.",
    bgColor: "bg-[#3490f3]",
    textColor: "text-white",
    href: "/newsletter",
  },
];

export default function CTASection() {
  return (
    <section className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-3">
        {ctaItems.map((item, index) => (
          <Link
            key={index}
            href={item.href}
            className={`${item.bgColor} h-[248px] flex flex-col items-center justify-center px-8 group transition-opacity hover:opacity-90`}
          >
            <p
              className={`font-montserrat font-bold text-[26px] leading-[38px] tracking-[-0.13px] ${item.textColor} text-center mb-4`}
            >
              {item.title}
            </p>
            <div className="w-[43px] h-[43px] transition-transform group-hover:translate-x-2">
              <Image
                src={item.textColor === "text-white" ? "/icons/circle-arrow-right-white.svg" : "/icons/circle-arrow-right.svg"}
                alt=""
                width={43}
                height={43}
              />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
