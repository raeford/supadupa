import { SocialLinks } from "@/sections/Footer/components/SocialLinks";

export const Footer = () => {
  return (
    <footer className="text-neutral-500 text-[14.4px] box-border caret-transparent leading-[23.04px] max-w-[648px] mx-[8%] my-[72px] md:mb-[108px] md:mx-[14%]">
      <div className="box-border caret-transparent mb-2.5 flex flex-row items-center gap-3">
        <SocialLinks />
        <a
          href="mailto:hello@supadupa.tools"
          className="inline-flex h-[30px] items-center rounded-xl border border-zinc-300 bg-zinc-100 px-3 text-[14px] leading-none text-zinc-900 shadow-[inset_0_1px_0_rgba(255,255,255,0.85)] hover:bg-white"
        >
          Get in touch &#8250;
        </a>
      </div>
      <div className="text-neutral-400 box-border caret-transparent">
        @ 2026 Supa Dupa Tools
      </div>
    </footer>
  );
};
