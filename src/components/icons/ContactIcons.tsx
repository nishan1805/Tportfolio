type IconProps = { className?: string };

/** Figma `send-email--mail-send-email-paper-airplane` (node 1:22093). */
export function MailIcon({ className = "size-6" }: IconProps) {
  return (
    <span className={`relative inline-block shrink-0 overflow-hidden ${className}`} aria-hidden>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/icons/footer-email.svg"
        alt=""
        className="absolute top-0 h-full"
        style={{ left: "0.03%", width: "99.94%", maxWidth: "none" }}
      />
    </span>
  );
}

/** Figma `phone--android-phone-mobile-device-smartphone-iphone` (node 1:22097). */
export function PhoneIcon({ className = "size-6" }: IconProps) {
  return (
    <span className={`relative inline-block shrink-0 ${className}`} aria-hidden>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/icons/footer-phone.svg"
        alt=""
        className="absolute"
        style={{
          top: "1.72%",
          right: "1.64%",
          bottom: "1.64%",
          left: "1.58%",
          width: "96.78%",
          height: "96.64%",
          maxWidth: "none",
        }}
      />
    </span>
  );
}
