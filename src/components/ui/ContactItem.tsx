import { MailIcon, PhoneIcon } from "@/components/icons/ContactIcons";
import { cn } from "@/lib/utils";

type ContactItemProps = {
  type: "email" | "phone";
  value: string;
  compact?: boolean;
};

export function ContactItem({ type, value, compact }: ContactItemProps) {
  const href = type === "email" ? `mailto:${value}` : `tel:${value}`;
  const Icon = type === "email" ? MailIcon : PhoneIcon;

  return (
    <a href={href} className="flex items-center gap-3 text-black">
      <Icon className={compact ? "size-4" : "size-6"} />
      <span
        className={cn(
          "whitespace-nowrap font-semibold leading-normal",
          compact ? "text-[0.75rem]" : "text-[0.875rem]",
          type === "phone" && "font-sans",
        )}
      >
        {value}
      </span>
    </a>
  );
}
