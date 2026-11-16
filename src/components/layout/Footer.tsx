import { ContactItem } from "@/components/ui/ContactItem";
import { Logo } from "@/components/ui/Logo";
import { siteConfig } from "@/data/site";

const rule = "w-px shrink-0 self-stretch bg-[#d8e6e6]";

export function Footer() {
  return (
    <footer id="contact" className="border-t border-[#d8e6e6] bg-white">
      <div className="mx-auto hidden h-[98px] w-full max-w-[1440px] items-center justify-between px-20 lg:flex">
        <div className="flex h-full items-center gap-6">
          <Logo />
          <span className={rule} aria-hidden />
          <ContactItem type="email" value={siteConfig.email} />
          <span className={rule} aria-hidden />
          <ContactItem type="phone" value={siteConfig.phone} />
          <span className={rule} aria-hidden />
        </div>
        <div className="flex h-full items-center gap-4">
          <span className={rule} aria-hidden />
          <p className="text-[0.875rem] font-normal leading-normal">{siteConfig.copyright}</p>
          <span className={rule} aria-hidden />
        </div>
      </div>

      <div className="flex h-[98px] flex-col lg:hidden">
        <div className="flex h-[49px] items-center justify-center gap-3 border-b border-[#d8e6e6] px-3">
          <ContactItem type="email" value={siteConfig.email} compact />
          <span className="h-full w-px bg-[#d8e6e6]" aria-hidden />
          <ContactItem type="phone" value={siteConfig.phone} compact />
        </div>
        <p className="flex h-[49px] items-center justify-center px-4 text-center text-[0.75rem] font-normal leading-normal">
          {siteConfig.copyright}
        </p>
      </div>
    </footer>
  );
}
