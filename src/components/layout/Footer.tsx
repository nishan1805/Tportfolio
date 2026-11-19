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

      <div className="flex h-[98px] flex-col border-b border-[#d8e6e6] lg:hidden">
        <div className="flex h-[49px] items-center justify-between">
          <span className={rule} aria-hidden />
          <ContactItem type="email" value={siteConfig.email} compact />
          <span className={rule} aria-hidden />
          <ContactItem type="phone" value={siteConfig.phone} compact />
          <span className={rule} aria-hidden />
        </div>
        <div className="flex h-[49px] items-center gap-4 border-t border-[#d8e6e6]">
          <span className={rule} aria-hidden />
          <p className="flex-1 text-center text-[0.75rem] font-normal leading-normal">{siteConfig.copyright}</p>
          <span className={rule} aria-hidden />
        </div>
      </div>
    </footer>
  );
}
