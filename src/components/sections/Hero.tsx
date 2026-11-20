import { siteConfig } from "@/data/site";

export function Hero() {
  return (
    <section
      id="about"
      className="flex min-h-[716px] items-center justify-center bg-[linear-gradient(180deg,#f3edff_0%,#ffffff_100%)] px-8 lg:px-6"
    >
      <div className="flex w-full max-w-[338px] flex-col items-center gap-8 text-center lg:max-w-[462px] lg:items-start lg:text-left">
        <p className="text-[1.5rem] font-semibold leading-[29px] lg:text-[2rem] lg:leading-[38px]">
          <span className="lg:hidden">I’m Tarun Dewaangan</span>
          <span className="hidden lg:inline">{siteConfig.role}</span>
        </p>

        <h1 className="text-[2.25rem] font-bold leading-[43px] lg:text-[3.5rem] lg:leading-[67px]">
          I Design Interfaces which is <span className="text-[#3058d8]">Good</span>
        </h1>

        <p className="w-full max-w-[429px] text-[1rem] font-normal leading-[29px]">
          I’m a <span className="text-[#3058d8]">senior product designer</span> having more then 6 years of
          experiece building digital products
        </p>
      </div>
    </section>
  );
}
