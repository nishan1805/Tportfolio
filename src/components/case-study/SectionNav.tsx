"use client";

import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

type SectionNavProps = {
  sections: { id: string; title: string }[];
};

/** Each case study lists its own sections, in page order. */
export function SectionNav({ sections }: SectionNavProps) {
  const key = sections.map((section) => section.id).join("|");
  const [activeId, setActiveId] = useState(sections[0]?.id ?? "");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting);
        if (visible[0]) setActiveId(visible[0].target.id);
      },
      { rootMargin: "-30% 0px -55% 0px" },
    );

    sections.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
    // key captures the section ids for this page
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key]);

  const list = (mobile: boolean) => (
    <ul className={cn("flex flex-col", mobile ? "gap-2" : "gap-2")}>
      {sections.map((section) => {
        const active = activeId === section.id;
        return (
          <li key={section.id} className={mobile ? undefined : "h-[21px]"}>
            <a
              href={`#${section.id}`}
              onClick={() => setOpen(false)}
              aria-current={active ? "location" : undefined}
              className={cn(
                "flex h-[21px] items-center border-l-2 px-3 text-[0.875rem] leading-none",
                active
                  ? "border-[#f2870e] font-semibold text-black"
                  : mobile
                    ? "border-transparent font-medium text-[#65999c]"
                    : "border-transparent font-medium text-[#8bb3b5]",
              )}
            >
              {section.title}
            </a>
          </li>
        );
      })}
    </ul>
  );

  return (
    <>
      <nav aria-label="Page content" className="hidden border-r border-[#d8e6e6] py-[120px] lg:sticky lg:top-[74px] lg:block">
        <p className="mb-4 flex items-center gap-2.5 text-[0.75rem] font-medium leading-normal text-[#8bb3b5]">
          <TableIcon />
          Page Content
        </p>
        {list(false)}
      </nav>

      <div className="lg:hidden">
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="fixed right-[18px] bottom-6 z-40 flex h-12 w-[165px] items-center justify-center gap-2 rounded-full bg-white text-[0.875rem] font-medium text-[#3e8083] shadow-[0_4px_10px_rgba(0,0,0,0.25)]"
        >
          <DocumentIcon />
          Page Content
        </button>

        {open && (
          <div className="fixed inset-0 z-50 bg-black/30" onClick={() => setOpen(false)}>
            <div
              role="dialog"
              aria-label="Page content"
              onClick={(event) => event.stopPropagation()}
              className="absolute right-[18px] bottom-24 w-[min(280px,calc(100vw-36px))] overflow-hidden rounded-[12px] bg-white shadow-[0_4px_10px_rgba(0,0,0,0.25)]"
            >
              <div className="flex items-center gap-2 border-b border-[#d8e6e6] p-3 text-[0.75rem] font-medium text-[#3e8083]">
                <DocumentIcon />
                Page Content
              </div>
              <div className="flex flex-col gap-2 p-3">{list(true)}</div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

function TableIcon() {
  return (
    <svg viewBox="0 0 16 16" className="size-4 shrink-0" aria-hidden>
      <rect x="1.5" y="1.5" width="13" height="13" rx="1.5" fill="none" stroke="currentColor" strokeWidth="1.2" />
      <path d="M1.5 6h13M1.5 10.5h13M6 1.5v13" fill="none" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  );
}

function DocumentIcon() {
  return (
    <svg viewBox="0 0 16 16" className="size-4 shrink-0" aria-hidden>
      <path
        d="M3.2 1.8h6.2l3.4 3.3v9.1a.8.8 0 0 1-.8.8H3.2a.8.8 0 0 1-.8-.8V2.6a.8.8 0 0 1 .8-.8Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
      />
      <path d="M9.2 1.9v3.2h3.3M4.6 8h6.2M4.6 10.4h6.2M4.6 12.6h4" fill="none" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  );
}
