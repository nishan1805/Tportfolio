import { cn } from "@/lib/utils";

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
};

/** Centers content and gives the same side spacing on every page (80px on desktop). */
export function Container({ children, className }: ContainerProps) {
  return (
    <div className={cn("mx-auto w-full max-w-[1440px] px-6 lg:px-20", className)}>
      {children}
    </div>
  );
}
